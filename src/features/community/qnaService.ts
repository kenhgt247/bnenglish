import { db } from '../../lib/firebase';
import { collection, doc, getDoc, setDoc, query, where, getDocs, orderBy, limit, addDoc, serverTimestamp, increment } from 'firebase/firestore';

export interface QnAThread {
  id?: string;
  gradeId: string;
  unitId: string;
  lessonId: string;
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: any;
  replyCount: number;
}

export interface QnAReply {
  id?: string;
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: any;
}

export const getThreadsByLesson = async (gradeId: string, unitId: string, lessonId: string) => {
  const q = query(
    collection(db, 'qna_threads'),
    where('gradeId', '==', gradeId),
    where('unitId', '==', unitId),
    where('lessonId', '==', lessonId),
    orderBy('createdAt', 'desc'),
    limit(20)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as QnAThread));
};

export const createThread = async (thread: Omit<QnAThread, 'id' | 'createdAt' | 'replyCount'>) => {
  const threadRef = await addDoc(collection(db, 'qna_threads'), {
    ...thread,
    createdAt: serverTimestamp(),
    replyCount: 0
  });
  return threadRef.id;
};

export const getRepliesByThread = async (threadId: string) => {
  const q = query(
    collection(db, `qna_threads/${threadId}/replies`),
    orderBy('createdAt', 'asc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as QnAReply));
};

export const createReply = async (threadId: string, reply: Omit<QnAReply, 'id' | 'createdAt'>) => {
  const replyRef = await addDoc(collection(db, `qna_threads/${threadId}/replies`), {
    ...reply,
    createdAt: serverTimestamp()
  });
  
  // Increment reply count
  const threadRef = doc(db, 'qna_threads', threadId);
  await setDoc(threadRef, { replyCount: increment(1) }, { merge: true });
  
  return replyRef.id;
};
