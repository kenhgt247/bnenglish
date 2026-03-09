import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Word, ProgressWord } from '../types';
import { useAuthStore } from '../store/useAuthStore';
import { Volume2, ArrowLeft, Check, X, RotateCcw } from 'lucide-react';
import toast from 'react-hot-toast';
import { irregularVerbs } from '../data/irregularVerbs';

// Simple SM-2 variant
const calculateSRS = (score: number, reps: number, prevInterval: number, prevEase: number) => {
  let ease = prevEase + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
  if (ease < 1.3) ease = 1.3;
  
  let interval = 1;
  let newReps = reps;
  let lapses = 0;

  if (score < 3) {
    newReps = 0;
    interval = 1;
    lapses = 1;
  } else {
    newReps += 1;
    if (reps === 0) interval = 1;
    else if (reps === 1) interval = 6;
    else interval = Math.round(prevInterval * ease);
  }

  return { interval, ease, reps: newReps, lapses };
};

export default function LearnPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      if (!gradeId || !unitId || !lessonId) return;
      
      if (gradeId === 'irregular-verbs') {
        // unitId is the level (e.g., 'A1', 'A2', 'All')
        const filtered = unitId === 'All' 
          ? irregularVerbs 
          : irregularVerbs.filter(v => v.level === unitId);
          
        const mappedWords: Word[] = filtered.map(verb => ({
          id: `irreg_${verb.v1}`,
          word: verb.v1,
          ipa: `V2: ${verb.v2} | V3: ${verb.v3}`,
          pos: 'verb',
          meaning_vi: verb.meaning,
          example_en: `I ${verb.v2} yesterday. I have ${verb.v3} already.`,
          example_vi: `Tôi đã ${verb.meaning} hôm qua. Tôi đã ${verb.meaning} rồi.`,
          gradeId: 'irregular-verbs',
          unitId: unitId,
          lessonId: lessonId
        }));
        setWords(mappedWords);
        setLoading(false);
        return;
      }

      try {
        const snapshot = await getDocs(collection(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`));
        const fetchedWords = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Word));
        setWords(fetchedWords);
      } catch (error) {
        console.error("Error fetching words:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, [gradeId, unitId, lessonId]);

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleScore = async (score: number) => {
    if (!words[currentIndex]) return;

    const advanceToNext = () => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setIsFlipped(false);
      } else {
        toast.success('Hoàn thành bài học!');
        navigate(-1);
      }
    };

    if (!user) {
      advanceToNext();
      return;
    }

    setSaving(true);
    
    const word = words[currentIndex];
    const progressRef = doc(db, `users/${user.uid}/progress_words`, word.id);
    
    try {
      const progressSnap = await getDoc(progressRef);
      let newProgress: Partial<ProgressWord>;
      const now = Date.now();

      if (progressSnap.exists()) {
        const data = progressSnap.data() as ProgressWord;
        const { interval, ease, reps, lapses } = calculateSRS(
          score, 
          data.reps || 0, 
          data.intervalDays || 1, 
          data.easeFactor || 2.5
        );
        newProgress = {
          score, 
          reps, 
          lapses: (data.lapses || 0) + lapses, 
          intervalDays: interval, 
          easeFactor: ease,
          lastReviewedAt: now, 
          nextReviewAt: now + interval * 24 * 60 * 60 * 1000
        };
      } else {
        const { interval, ease, reps, lapses } = calculateSRS(score, 0, 1, 2.5);
        newProgress = {
          userId: user.uid, 
          gradeId: word.gradeId || gradeId || '', 
          unitId: word.unitId || unitId || '', 
          lessonId: word.lessonId || lessonId || '', 
          wordId: word.id,
          score, 
          reps, 
          lapses, 
          intervalDays: interval, 
          easeFactor: ease,
          lastReviewedAt: now, 
          nextReviewAt: now + interval * 24 * 60 * 60 * 1000
        };
      }

      await setDoc(progressRef, newProgress, { merge: true });
      advanceToNext();
    } catch (error) {
      console.error("Error saving progress:", error);
      toast.error('Lỗi lưu tiến độ');
      advanceToNext();
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>;

  if (words.length === 0) return <div className="text-center py-20">Không có từ vựng nào.</div>;

  const currentWord = words[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate(-1)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-sm font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
          {currentIndex + 1} / {words.length}
        </div>
      </div>

      <div className="relative h-96 w-full perspective-1000">
        <div 
          className={`w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-md border border-slate-100 flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-5xl font-extrabold text-slate-800 mb-4">{currentWord.word}</h2>
            <p className="text-xl text-slate-400 font-mono mb-6">{currentWord.ipa}</p>
            <button 
              onClick={(e) => { e.stopPropagation(); playAudio(currentWord.word); }}
              className="p-4 bg-blue-50 text-blue-500 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Volume2 className="w-8 h-8" />
            </button>
            <p className="absolute bottom-6 text-sm text-slate-400 font-medium">Chạm để lật thẻ</p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-md border border-slate-100 flex flex-col items-center justify-center p-8 text-center rotate-y-180">
            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md uppercase mb-4">{currentWord.pos}</span>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">{currentWord.meaning_vi}</h3>
            
            <div className="w-full bg-slate-50 p-4 rounded-2xl mb-4 text-left">
              <p className="text-slate-700 font-medium mb-1 flex items-start gap-2">
                <span className="text-blue-500 font-bold">EN:</span> {currentWord.example_en}
              </p>
              <p className="text-slate-500 text-sm flex items-start gap-2">
                <span className="text-emerald-500 font-bold">VI:</span> {currentWord.example_vi}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="mt-8 grid grid-cols-4 gap-2">
          <button onClick={() => handleScore(1)} disabled={saving} className="py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-bold transition-colors flex flex-col items-center gap-1">
            <X className="w-5 h-5" /> Lại
          </button>
          <button onClick={() => handleScore(3)} disabled={saving} className="py-3 bg-orange-50 text-orange-600 hover:bg-orange-100 rounded-xl font-bold transition-colors flex flex-col items-center gap-1">
            <RotateCcw className="w-5 h-5" /> Khó
          </button>
          <button onClick={() => handleScore(4)} disabled={saving} className="py-3 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-xl font-bold transition-colors flex flex-col items-center gap-1">
            <Check className="w-5 h-5" /> Tốt
          </button>
          <button onClick={() => handleScore(5)} disabled={saving} className="py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl font-bold transition-colors flex flex-col items-center gap-1">
            <Check className="w-5 h-5" /> Dễ
          </button>
        </div>
      )}
    </div>
  );
}
