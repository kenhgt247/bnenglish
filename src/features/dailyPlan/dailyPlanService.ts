import { db } from '../../lib/firebase';
import { collection, doc, getDoc, setDoc, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

export interface DailyPlanTask {
  type: 'srs' | 'listening' | 'speaking' | 'quiz' | 'grammar' | 'story' | 'spelling';
  targetId?: string;
  minutes: number;
  status: 'todo' | 'done';
}

export interface DailyPlan {
  date: string;
  tasks: DailyPlanTask[];
  createdAt: number;
}

export const generateDailyPlan = async (uid: string) => {
  const dateId = new Date().toISOString().split('T')[0];
  const planRef = doc(db, `users/${uid}/daily_plans`, dateId);
  const planSnap = await getDoc(planRef);

  if (planSnap.exists()) {
    return planSnap.data() as DailyPlan;
  }

  // Generate new plan
  const tasks: DailyPlanTask[] = [];
  
  // 1. SRS Review (10 mins)
  const now = Date.now();
  const srsQuery = query(
    collection(db, `users/${uid}/progress_words`),
    where('nextReviewAt', '<=', now),
    limit(20)
  );
  const srsSnap = await getDocs(srsQuery);
  if (!srsSnap.empty) {
    tasks.push({ type: 'srs', minutes: 10, status: 'todo' });
  }

  // 2. Listening (10 mins)
  tasks.push({ type: 'listening', minutes: 10, status: 'todo' });

  // 3. Speaking (10 mins)
  tasks.push({ type: 'speaking', minutes: 10, status: 'todo' });

  // 4. Spelling (5 mins)
  tasks.push({ type: 'spelling', minutes: 5, status: 'todo' });

  // 5. Quiz (5 mins)
  tasks.push({ type: 'quiz', minutes: 5, status: 'todo' });

  const newPlan: DailyPlan = {
    date: dateId,
    tasks,
    createdAt: Date.now()
  };

  await setDoc(planRef, newPlan);
  return newPlan;
};

export const markTaskDone = async (uid: string, type: DailyPlanTask['type']) => {
  const dateId = new Date().toISOString().split('T')[0];
  const planRef = doc(db, `users/${uid}/daily_plans`, dateId);
  const planSnap = await getDoc(planRef);

  if (planSnap.exists()) {
    const plan = planSnap.data() as DailyPlan;
    const taskIndex = plan.tasks.findIndex(t => t.type === type && t.status === 'todo');
    
    if (taskIndex !== -1) {
      plan.tasks[taskIndex].status = 'done';
      await setDoc(planRef, plan);
      return true;
    }
  }
  return false;
};
