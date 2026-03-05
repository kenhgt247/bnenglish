export interface Grade {
  id: string;
  name: string;
  order: number;
}

export interface Unit {
  id: string;
  gradeId: string;
  title: string;
  order: number;
  description: string;
}

export interface Lesson {
  id: string;
  gradeId: string;
  unitId: string;
  title: string;
  order: number;
  objectives: string[];
}

export interface Word {
  id: string;
  gradeId: string;
  unitId: string;
  lessonId: string;
  word: string;
  ipa: string;
  pos: string;
  meaning_vi: string;
  example_en: string;
  example_vi: string;
  imagePath?: string;
  tags: string[];
  audio?: { provider: "tts", voice: "en-US" };
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: "user" | "admin";
  createdAt: number;
}

export interface ProgressWord {
  id: string;
  userId: string;
  gradeId: string;
  unitId: string;
  lessonId: string;
  wordId: string;
  score: number;
  reps: number;
  lapses: number;
  intervalDays: number;
  easeFactor: number;
  lastReviewedAt: number;
  nextReviewAt: number;
}

export interface DailyStat {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD
  learnedCount: number;
  reviewedCount: number;
  minutes: number;
}
