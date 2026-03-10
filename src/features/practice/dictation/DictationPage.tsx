import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuthStore } from '../../../store/useAuthStore';
import { Word } from '../../../types';
import { useTTS } from '../listening/useTTS';
import { ArrowLeft, Play, CheckCircle2, XCircle, Type } from 'lucide-react';
import toast from 'react-hot-toast';

import { addXP } from '../../../features/gamification/gamificationService';
import { markTaskDone } from '../../../features/dailyPlan/dailyPlanService';
import { irregularVerbs } from '../../../data/irregularVerbs';

interface DictationQuestion {
  promptText: string;
  type: 'word' | 'sentence';
}

function generateDictationQuestions(words: Word[], count: number = 10): DictationQuestion[] {
  const questions: DictationQuestion[] = [];
  const shuffledWords = [...words].sort(() => 0.5 - Math.random()).slice(0, count);

  for (const word of shuffledWords) {
    const type = Math.random() > 0.5 && word.example_en ? 'sentence' : 'word';
    const promptText = type === 'sentence' ? word.example_en! : word.word;
    
    questions.push({
      promptText,
      type
    });
  }

  return questions;
}

export default function DictationPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const { user } = useAuthStore();
  const [questions, setQuestions] = useState<DictationQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [replayCount, setReplayCount] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const { speak } = useTTS();

  useEffect(() => {
    const fetchWords = async () => {
      if (!gradeId || !unitId || !lessonId) return;
      try {
        let data: Word[] = [];
        if (gradeId === 'irregular-verbs') {
          const filtered = unitId === 'All' 
            ? irregularVerbs 
            : irregularVerbs.filter(v => v.level === unitId);
            
          data = filtered.map(verb => ({
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
        } else {
          const q = query(collection(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`));
          const snapshot = await getDocs(q);
          data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Word));
        }
        setQuestions(generateDictationQuestions(data, 10));
      } catch (error) {
        console.error("Error fetching words:", error);
        toast.error("Không thể tải danh sách câu hỏi");
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, [gradeId, unitId, lessonId]);

  useEffect(() => {
    setStartTime(Date.now());
    setReplayCount(0);
    setUserInput('');
    setIsSubmitted(false);
    setIsCorrect(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];

  const handlePlay = () => {
    if (replayCount < 5) {
      speak(currentQuestion.promptText);
      setReplayCount(prev => prev + 1);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      toast.error("Bạn đã hết lượt nghe lại cho câu này.");
    }
  };

  const normalizeText = (text: string) => {
    return text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted || !userInput.trim()) return;
    
    setIsSubmitted(true);
    
    const normalizedInput = normalizeText(userInput);
    const normalizedPrompt = normalizeText(currentQuestion.promptText);
    
    const correct = normalizedInput === normalizedPrompt;
    setIsCorrect(correct);

    if (user && gradeId && unitId && lessonId) {
      try {
        // Add XP
        if (correct) {
          await addXP(user.uid, 3, 'dictation'); // 3 XP per correct dictation
          toast.success('+3 XP', { icon: '⭐' });
        }
        await markTaskDone(user.uid, 'dictation');
      } catch (error: any) {
        console.error("Error saving attempt:", error);
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (loading) return <div className="p-8 text-center">Đang tải...</div>;
  if (questions.length === 0) return <div className="p-8 text-center">Không đủ từ vựng để tạo bài luyện nghe chép chính tả.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <Link to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`} className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="text-sm font-bold text-slate-500">
          {currentIndex + 1} / {questions.length}
        </div>
        <div className="text-sm font-medium text-slate-400">
          Nghe lại: {replayCount}/5
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center space-y-8">
        <div className="flex justify-center">
          <button 
            onClick={handlePlay} 
            disabled={replayCount >= 5}
            className={`p-6 rounded-full transition-colors ${replayCount >= 5 ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
          >
            <Play className="w-12 h-12" />
          </button>
        </div>

        <p className="text-slate-500 font-medium">Nghe và gõ lại chính xác những gì bạn nghe được</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Type className="h-5 w-5 text-slate-400" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isSubmitted}
              placeholder="Gõ văn bản tại đây..."
              className={`block w-full pl-11 pr-4 py-4 border-2 rounded-2xl text-lg font-medium transition-colors focus:outline-none focus:ring-0 ${
                isSubmitted 
                  ? isCorrect 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                    : 'border-red-500 bg-red-50 text-red-700'
                  : 'border-slate-200 focus:border-blue-500 text-slate-800'
              }`}
            />
            {isSubmitted && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                {isCorrect ? <CheckCircle2 className="h-6 w-6 text-emerald-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
              </div>
            )}
          </div>
          
          {!isSubmitted ? (
            <button 
              type="submit" 
              disabled={!userInput.trim()}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Kiểm tra
            </button>
          ) : (
            <div className="text-left space-y-4">
              {!isCorrect && (
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-sm text-blue-600 font-bold mb-1">Đáp án đúng:</p>
                  <p className="text-lg text-slate-800 font-medium">{currentQuestion.promptText}</p>
                </div>
              )}
              {currentIndex < questions.length - 1 ? (
                <button 
                  type="button"
                  onClick={nextQuestion} 
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors"
                >
                  Câu tiếp theo
                </button>
              ) : (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">Hoàn thành bài tập!</h3>
                  <Link 
                    to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`}
                    className="inline-block mt-4 px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                  >
                    Trở về bài học
                  </Link>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
