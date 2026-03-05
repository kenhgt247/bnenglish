export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: 'user' | 'admin';
  createdAt: number;
  xp?: number;
  level?: number;
  coins?: number;
  streakCount?: number;
  lastActiveDate?: string;
  leaderboardOptOut?: boolean;
}

export interface Grade {
  id: string;
  name: string;
  order: number;
}

export interface Unit {
  id: string;
  title: string;
  order: number;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  order: number;
  objectives: string[];
  type?: 'vocabulary' | 'grammar' | 'reading';
  grammar?: {
    title: string;
    content: string;
  };
  reading?: {
    title: string;
    passage: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
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
  example_en?: string;
  example_vi?: string;
  tags?: string[];
}

export interface ProgressWord {
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

export interface SpeakingAttempt {
  id?: string;
  gradeId: string;
  unitId: string;
  lessonId: string;
  mode: 'word' | 'sentence';
  targetText: string;
  transcript: string;
  scorePercent: number;
  device: {
    browser: string;
    platform: string;
  };
  createdAt: number;
}

export interface ListeningAttempt {
  id?: string;
  gradeId: string;
  unitId: string;
  lessonId: string;
  type: 'word' | 'sentence';
  promptText: string;
  choices: string[];
  correctIndex: number;
  selectedIndex: number;
  isCorrect: boolean;
  replayCount: number;
  createdAt: number;
}

export interface SpellingAttempt {
  id?: string;
  gradeId: string;
  unitId: string;
  lessonId: string;
  wordId: string;
  word: string;
  typed: string;
  isCorrect: boolean;
  createdAt: number;
}

export interface MistakeLog {
  id?: string;
  wordId: string;
  word: string;
  meaning_vi: string;
  mistakeCount: number;
  lastMistakeAt: number;
}

export interface GrammarLesson {
  id: string;
  gradeId: string;
  unitId: string;
  title: string;
  level: string;
  contentBlocks: { type: 'text' | 'example' | 'rule'; content: string }[];
  quiz: any[];
}

export interface Story {
  id: string;
  gradeId: string;
  unitId: string;
  title: string;
  level: string;
  paragraphs: { text: string; translation: string }[];
  audioTts: boolean;
  questions: any[];
}

export interface DailyStats {
  id?: string;
  date: string; // YYYY-MM-DD
  minutesSpeaking?: number;
  minutesListening?: number;
  speakingCorrect?: number;
  speakingTotal?: number;
  listeningCorrect?: number;
  listeningTotal?: number;
  createdAt?: number;
  updatedAt?: number;
}
