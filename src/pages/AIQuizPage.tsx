import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Loader2 } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export default function AIQuizPage() {
  const { level } = useParams();
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrGenerateQuestions = async () => {
      if (!level) return;
      setLoading(true);
      try {
        // Try fetching from Firestore first
        const quizCollection = `quizzes/${level}/questions`;
        const snapshot = await getDocs(collection(db, quizCollection));
        
        if (!snapshot.empty) {
          const data = snapshot.docs.map(doc => doc.data() as QuizQuestion);
          const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10);
          setQuestions(shuffled);
          setLoading(false);
          return;
        }

        // If not found, generate using AI
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Tạo 10 câu hỏi trắc nghiệm tiếng Anh cho trình độ ${level}. Trả về định dạng JSON với các trường: question, options (mảng 4 đáp án), answer, explanation.`,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  answer: { type: Type.STRING },
                  explanation: { type: Type.STRING },
                },
                required: ["question", "options", "answer", "explanation"],
              },
            },
          },
        });

        const generatedQuestions = JSON.parse(response.text || "[]");
        setQuestions(generatedQuestions);
      } catch (error) {
        console.error("Error fetching/generating quiz:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrGenerateQuestions();
  }, [level]);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (loading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-12 h-12 animate-spin text-blue-500" /></div>;
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-12 bg-white rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Không thể tạo câu đố</h2>
        <p className="text-slate-600 mb-8">Vui lòng thử lại sau.</p>
        <button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-md mx-auto text-center py-12 bg-white rounded-3xl shadow-sm border border-slate-100">
        <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Hoàn thành Quiz!</h2>
        <p className="text-xl text-slate-600 mb-8">
          Điểm của bạn: <span className="font-bold text-blue-600">{score}/{questions.length}</span>
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate('/')} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
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
            } else if (option === q.answer) {
              btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
            } else if (option === selectedAnswer) {
              btnClass += "border-red-500 bg-red-50 text-red-700";
            } else {
              btnClass += "border-slate-200 text-slate-400 opacity-50";
            }

            return (
              <button 
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={btnClass}
              >
                <span>{option}</span>
                {selectedAnswer !== null && option === q.answer && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                {selectedAnswer === option && option !== q.answer && <XCircle className="w-6 h-6 text-red-500" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
