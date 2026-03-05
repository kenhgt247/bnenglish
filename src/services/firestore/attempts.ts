import { db } from '../../lib/firebase';
import { collection, doc, setDoc, increment } from 'firebase/firestore';
import { SpeakingAttempt, ListeningAttempt, SpellingAttempt, MistakeLog } from '../../types';

export const saveSpeakingAttempt = async (uid: string, attempt: Omit<SpeakingAttempt, 'id'>) => {
  const attemptRef = doc(collection(db, `users/${uid}/speaking_attempts`));
  await setDoc(attemptRef, attempt);
  
  const dateId = new Date().toISOString().split('T')[0];
  const statsRef = doc(db, `users/${uid}/daily_stats`, dateId);
  const isCorrect = attempt.scorePercent >= 65;
  
  await setDoc(statsRef, {
    date: dateId,
    speakingTotal: increment(1),
    speakingCorrect: increment(isCorrect ? 1 : 0),
    updatedAt: Date.now()
  }, { merge: true });
};

export const saveListeningAttempt = async (uid: string, attempt: Omit<ListeningAttempt, 'id'>) => {
  const attemptRef = doc(collection(db, `users/${uid}/listening_attempts`));
  await setDoc(attemptRef, attempt);
  
  const dateId = new Date().toISOString().split('T')[0];
  const statsRef = doc(db, `users/${uid}/daily_stats`, dateId);
  
  await setDoc(statsRef, {
    date: dateId,
    listeningTotal: increment(1),
    listeningCorrect: increment(attempt.isCorrect ? 1 : 0),
    updatedAt: Date.now()
  }, { merge: true });
};

export const updateDailyMinutes = async (uid: string, type: 'speaking' | 'listening' | 'spelling', minutes: number) => {
  const dateId = new Date().toISOString().split('T')[0];
  const statsRef = doc(db, `users/${uid}/daily_stats`, dateId);
  
  let field = '';
  if (type === 'speaking') field = 'minutesSpeaking';
  else if (type === 'listening') field = 'minutesListening';
  else field = 'minutesSpelling';

  await setDoc(statsRef, {
    date: dateId,
    [field]: increment(minutes),
    updatedAt: Date.now()
  }, { merge: true });
};

export const saveSpellingAttempt = async (uid: string, attempt: Omit<SpellingAttempt, 'id'>) => {
  const attemptRef = doc(collection(db, `users/${uid}/spelling_attempts`));
  await setDoc(attemptRef, attempt);
};

export const logMistake = async (uid: string, mistake: Omit<MistakeLog, 'id' | 'mistakeCount' | 'lastMistakeAt'>) => {
  const mistakeRef = doc(db, `users/${uid}/mistakes`, mistake.wordId);
  await setDoc(mistakeRef, {
    ...mistake,
    mistakeCount: increment(1),
    lastMistakeAt: Date.now()
  }, { merge: true });
};
