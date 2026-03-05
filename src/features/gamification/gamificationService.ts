import { db } from '../../lib/firebase';
import { doc, getDoc, setDoc, increment, updateDoc } from 'firebase/firestore';

export const LEVEL_THRESHOLDS = [
  0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500, // Levels 1-11
];

export const calculateLevel = (xp: number) => {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
    } else {
      break;
    }
  }
  return level;
};

export const getWeekId = () => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
};

export const addXP = async (uid: string, amount: number, source: string) => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) return;
  
  const userData = userSnap.data();
  const currentXP = userData.xp || 0;
  const newXP = currentXP + amount;
  const newLevel = calculateLevel(newXP);
  
  const updates: any = {
    xp: increment(amount),
    level: newLevel,
  };

  // Add coins (1 coin per 5 XP)
  const coinsEarned = Math.floor(amount / 5);
  if (coinsEarned > 0) {
    updates.coins = increment(coinsEarned);
  }

  await updateDoc(userRef, updates);

  // Update weekly leaderboard if not opted out
  if (!userData.leaderboardOptOut) {
    const weekId = getWeekId();
    const leaderboardRef = doc(db, `leaderboard_weekly/${weekId}/entries`, uid);
    await setDoc(leaderboardRef, {
      displayName: userData.displayName || 'Anonymous Player',
      xpWeek: increment(amount),
      level: newLevel,
      updatedAt: Date.now()
    }, { merge: true });
  }

  return { newXP, newLevel, coinsEarned };
};

export const checkAndUpdateStreak = async (uid: string) => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) return 0;
  
  const userData = userSnap.data();
  const today = new Date().toISOString().split('T')[0];
  const lastActive = userData.lastActiveDate;
  
  let newStreak = userData.streakCount || 0;
  
  if (lastActive !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (lastActive === yesterdayStr) {
      newStreak += 1; // Continued streak
    } else {
      newStreak = 1; // Reset streak
    }
    
    await updateDoc(userRef, {
      streakCount: newStreak,
      lastActiveDate: today
    });
  }
  
  return newStreak;
};
