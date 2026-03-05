import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuthStore } from '../../../store/useAuthStore';
import { Word } from '../../../types';
import { useTTS } from './useTTS';
import { generateListeningQuestions, ListeningQuestion } from './questionGen';
import { saveListeningAttempt, updateDailyMinutes } from '../../../services/firestore/attempts';
import { ArrowLeft, Play, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

import { addXP } from '../../../features/gamification/gamificationService';
import { markTaskDone } from '../../../features/dailyPlan/dailyPlanService';

export default function ListeningPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const { user } = useAuthStore();
  const [questions, setQuestions] = useState<ListeningQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [replayCount, setReplayCount] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);

  const { speak } = useTTS();

  useEffect(() => {
    const fetchWords = async () => {
      if (!gradeId || !unitId || !lessonId) return;
      try {
        const q = query(collection(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Word));
        setQuestions(generateListeningQuestions(data, 10));
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
    setSelectedAnswer(null);
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];

  const handlePlay = () => {
    if (replayCount < 3) {
      speak(currentQuestion.promptText);
      setReplayCount(prev => prev + 1);
    } else {
      toast.error("Bạn đã hết lượt nghe lại cho câu này.");
    }
  };

  const handleAnswer = async (index: number) => {
    if (selectedAnswer !== null) return; // Đã trả lời
    setSelectedAnswer(index);

    const isCorrect = index === currentQuestion.correctIndex;
    
    if (user && gradeId && unitId && lessonId) {
      try {
        await saveListeningAttempt(user.uid, {
          gradeId,
          unitId,
          lessonId,
          type: currentQuestion.type,
          promptText: currentQuestion.promptText,
          choices: currentQuestion.choices,
          correctIndex: currentQuestion.correctIndex,
          selectedIndex: index,
          isCorrect,
          replayCount,
          createdAt: Date.now()
        });

        const timeSpent = (Date.now() - startTime) / 60000; // minutes
        await updateDailyMinutes(user.uid, 'listening', timeSpent);

        // Add XP
        if (isCorrect) {
          await addXP(user.uid, 2, 'listening'); // 2 XP per correct listening
          toast.success('+2 XP', { icon: '⭐' });
        }
        await markTaskDone(user.uid, 'listening');

      } catch (error: any) {
        console.error("Error saving attempt:", error);
        if (error.code === 'permission-denied') {
          toast.error("Lỗi phân quyền. Vui lòng cập nhật Security Rules.");
        }
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (loading) return <div className="p-8 text-center">Đang tải...</div>;
  if (questions.length === 0) return <div className="p-8 text-center">Không đủ từ vựng để tạo bài luyện nghe.</div>;

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
          Nghe lại: {replayCount}/3
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center space-y-8">
        <div className="flex justify-center">
          <button 
            onClick={handlePlay} 
            disabled={replayCount >= 3}
            className={`p-6 rounded-full transition-colors ${replayCount >= 3 ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
          >
            <Play className="w-12 h-12" />
          </button>
        </div>

        <p className="text-slate-500 font-medium">Nghe và chọn đáp án đúng</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.choices.map((choice, index) => {
            let btnClass = "p-4 rounded-xl border-2 text-left font-medium transition-all ";
            
            if (selectedAnswer === null) {
              btnClass += "border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700";
            } else {
              if (index === currentQuestion.correctIndex) {
                btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
              } else if (index === selectedAnswer) {
                btnClass += "border-red-500 bg-red-50 text-red-700";
              } else {
                btnClass += "border-slate-100 bg-slate-50 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={btnClass}
              >
                <div className="flex justify-between items-center">
                  <span>{choice}</span>
                  {selectedAnswer !== null && index === currentQuestion.correctIndex && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                  {selectedAnswer === index && index !== currentQuestion.correctIndex && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && currentIndex < questions.length - 1 && (
          <button onClick={nextQuestion} className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
            Câu tiếp theo
          </button>
        )}
      </div>
    </div>
  );
}
