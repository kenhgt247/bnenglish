import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Word } from '../types';
import { ArrowLeft, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { addXP } from '../features/gamification/gamificationService';
import { markTaskDone } from '../features/dailyPlan/dailyPlanService';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function QuizPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [xpEarned, setXpEarned] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndGenerateQuestions = async () => {
      if (!gradeId || !unitId || !lessonId) return;
      try {
        const snapshot = await getDocs(collection(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`));
        const words = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Word));
        
        if (words.length < 4) {
          // Need at least 4 words to make good multiple choice questions
          // If fewer, we can duplicate or just use what we have, but for simplicity:
          // We'll just pad with some dummy options if needed, but let's assume we have enough.
        }

        const generatedQuestions: Question[] = [];
        
        words.forEach(word => {
          // Question type 1: English to Vietnamese
          const otherMeanings = words.filter(w => w.id !== word.id).map(w => w.meaning_vi);
          // Shuffle and pick 3
          const wrongOptions1 = otherMeanings.sort(() => 0.5 - Math.random()).slice(0, 3);
          // Pad if not enough words
          while (wrongOptions1.length < 3) {
            wrongOptions1.push(`Lựa chọn sai ${wrongOptions1.length + 1}`);
          }
          
          const options1 = [...wrongOptions1, word.meaning_vi].sort(() => 0.5 - Math.random());
          const correct1 = options1.indexOf(word.meaning_vi);
          
          generatedQuestions.push({
            question: `Nghĩa của từ '${word.word}' là gì?`,
            options: options1,
            correctAnswer: correct1
          });

          // Question type 2: Vietnamese to English
          const otherWords = words.filter(w => w.id !== word.id).map(w => w.word);
          const wrongOptions2 = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
          while (wrongOptions2.length < 3) {
            wrongOptions2.push(`WrongWord${wrongOptions2.length + 1}`);
          }
          
          const options2 = [...wrongOptions2, word.word].sort(() => 0.5 - Math.random());
          const correct2 = options2.indexOf(word.word);
          
          generatedQuestions.push({
            question: `Từ nào có nghĩa là '${word.meaning_vi}'?`,
            options: options2,
            correctAnswer: correct2
          });
        });

        // Shuffle all questions and pick up to 10
        const finalQuestions = generatedQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
        setQuestions(finalQuestions);
      } catch (error) {
        console.error("Error fetching words for quiz:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndGenerateQuestions();
  }, [gradeId, unitId, lessonId]);

  const handleAnswer = async (index: number) => {
    setSelectedAnswer(index);
    let isCorrect = false;
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      isCorrect = true;
    }
    
    setTimeout(async () => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
        if (user) {
          const finalScore = isCorrect ? score + 1 : score;
          const xp = finalScore * 3; // 3 XP per correct answer
          if (xp > 0) {
            await addXP(user.uid, xp, 'quiz');
            setXpEarned(xp);
          }
          await markTaskDone(user.uid, 'quiz');
        }
      }
    }, 1000);
  };

  if (loading) {
    return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>;
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-12 bg-white rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Không đủ từ vựng</h2>
        <p className="text-slate-600 mb-8">Bài học này chưa có đủ từ vựng để tạo bài tập.</p>
        <button onClick={() => navigate(-1)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          Quay lại bài học
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-md mx-auto text-center py-12 bg-white rounded-3xl shadow-sm border border-slate-100">
        <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Hoàn thành Quiz!</h2>
        <p className="text-xl text-slate-600 mb-4">
          Điểm của bạn: <span className="font-bold text-blue-600">{score}/{questions.length}</span>
        </p>
        {xpEarned > 0 && (
          <p className="text-lg font-bold text-amber-500 mb-8 animate-bounce">
            +{xpEarned} XP
          </p>
        )}
        <button 
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Quay lại bài học
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-sm font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
          Câu {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">{q.question}</h2>
        
        <div className="space-y-3">
          {q.options.map((option, index) => {
            let btnClass = "w-full text-left p-4 rounded-xl border-2 font-medium transition-all flex items-center justify-between ";
            
            if (selectedAnswer === null) {
              btnClass += "border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700";
            } else if (index === q.correctAnswer) {
              btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
            } else if (index === selectedAnswer) {
              btnClass += "border-red-500 bg-red-50 text-red-700";
            } else {
              btnClass += "border-slate-200 text-slate-400 opacity-50";
            }

            return (
              <button 
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={btnClass}
              >
                <span>{option}</span>
                {selectedAnswer !== null && index === q.correctAnswer && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                {selectedAnswer === index && index !== q.correctAnswer && <XCircle className="w-6 h-6 text-red-500" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
