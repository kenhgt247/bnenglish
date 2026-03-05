import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuthStore } from '../../../store/useAuthStore';
import { Word } from '../../../types';
import { useSpeechRecognition } from './useSpeechRecognition';
import { useTTS } from '../listening/useTTS';
import { normalize, similarity, diffTokens } from './scoring';
import { saveSpeakingAttempt, updateDailyMinutes } from '../../../services/firestore/attempts';
import { ArrowLeft, Mic, Play, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

import { addXP } from '../../../features/gamification/gamificationService';
import { markTaskDone } from '../../../features/dailyPlan/dailyPlanService';

export default function SpeakingPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const { user } = useAuthStore();
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<'word' | 'sentence'>('word');
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [diff, setDiff] = useState<{ token: string; status: string }[]>([]);
  const [startTime, setStartTime] = useState<number>(0);

  const { isSupported, isListening, transcript, startListening, stopListening, resetTranscript } = useSpeechRecognition();
  const { speak } = useTTS();

  useEffect(() => {
    const fetchWords = async () => {
      if (!gradeId || !unitId || !lessonId) return;
      try {
        const q = query(collection(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Word));
        // Lấy 10 từ ngẫu nhiên
        setWords(data.sort(() => 0.5 - Math.random()).slice(0, 10));
      } catch (error) {
        console.error("Error fetching words:", error);
        toast.error("Không thể tải danh sách từ vựng");
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, [gradeId, unitId, lessonId]);

  useEffect(() => {
    setStartTime(Date.now());
    resetTranscript();
  }, [currentIndex, resetTranscript]);

  useEffect(() => {
    if (score !== null && currentIndex < words.length - 1) {
      const timer = setTimeout(() => {
        nextWord();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [score, currentIndex, words.length]);

  const currentWord = words[currentIndex];
  const targetText = mode === 'word' ? currentWord?.word : currentWord?.example_en || currentWord?.word;

  const handleSpeak = () => {
    if (targetText) speak(targetText);
  };

  const handleRecord = () => {
    if (isListening) {
      stopListening();
    } else {
      setScore(null);
      setDiff([]);
      startListening();
    }
  };

  useEffect(() => {
    if (!isListening && transcript && score === null) {
      evaluateTranscript(transcript);
    }
  }, [isListening, transcript, score]);

  const evaluateTranscript = async (finalTranscript: string) => {
    if (!targetText || !finalTranscript) return;
    
    const s = similarity(targetText, finalTranscript);
    setScore(s);
    setDiff(diffTokens(targetText, finalTranscript));

    if (user && gradeId && unitId && lessonId) {
      try {
        await saveSpeakingAttempt(user.uid, {
          gradeId,
          unitId,
          lessonId,
          mode,
          targetText,
          transcript: finalTranscript,
          scorePercent: s,
          device: { browser: navigator.userAgent, platform: navigator.platform },
          createdAt: Date.now()
        });
        
        const timeSpent = (Date.now() - startTime) / 60000; // minutes
        await updateDailyMinutes(user.uid, 'speaking', timeSpent);

        // Add XP
        const xp = Math.floor(s / 25); // Max 4 XP per word
        if (xp > 0) {
          await addXP(user.uid, xp, 'speaking');
          toast.success(`+${xp} XP`, { icon: '⭐' });
        }
        await markTaskDone(user.uid, 'speaking');

      } catch (error: any) {
        console.error("Error saving attempt:", error);
        if (error.code === 'permission-denied') {
          toast.error("Lỗi phân quyền. Vui lòng cập nhật Security Rules.");
        }
      }
    }
  };

  const nextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setScore(null);
      setDiff([]);
    }
  };

  if (loading) return <div className="p-8 text-center">Đang tải...</div>;
  if (!isSupported) return <div className="p-8 text-center text-red-500">Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Vui lòng sử dụng Chrome.</div>;
  if (words.length === 0) return <div className="p-8 text-center">Không có từ vựng nào trong bài học này.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <Link to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`} className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="text-sm font-bold text-slate-500">
          {currentIndex + 1} / {words.length}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setMode('word')} className={`px-3 py-1 rounded-full text-sm font-medium ${mode === 'word' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'}`}>Word</button>
          <button onClick={() => setMode('sentence')} className={`px-3 py-1 rounded-full text-sm font-medium ${mode === 'sentence' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'}`}>Sentence</button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{targetText}</h2>
          {mode === 'word' && <p className="text-lg text-slate-500">{currentWord.ipa}</p>}
          <p className="text-slate-600 mt-4">{mode === 'word' ? currentWord.meaning_vi : currentWord.example_vi}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={handleSpeak} className="p-4 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
            <Play className="w-8 h-8" />
          </button>
          <button 
            onClick={handleRecord} 
            className={`p-4 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}
          >
            <Mic className="w-8 h-8" />
          </button>
        </div>

        {isListening && (
          <div className="text-sm text-slate-500 animate-pulse">Đang nghe... (Nhấn lại để dừng)</div>
        )}

        {transcript && (
          <div className="p-4 bg-slate-50 rounded-xl text-left">
            <p className="text-sm text-slate-500 mb-2">Bạn đã nói:</p>
            <p className="text-lg font-medium text-slate-800">{transcript}</p>
          </div>
        )}

        {score !== null && (
          <div className="space-y-4">
            <div className={`text-2xl font-bold ${score >= 85 ? 'text-emerald-500' : score >= 65 ? 'text-amber-500' : 'text-red-500'}`}>
              {score >= 85 ? 'Excellent!' : score >= 65 ? 'Good!' : 'Try again!'} ({score}%)
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {diff.map((d, i) => (
                <span key={i} className={`px-2 py-1 rounded-md text-sm font-medium ${
                  d.status === 'ok' ? 'bg-emerald-100 text-emerald-700' :
                  d.status === 'miss' ? 'bg-red-100 text-red-700 line-through' :
                  d.status === 'wrong' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                }`}>
                  {d.token}
                </span>
              ))}
            </div>

            {currentIndex < words.length - 1 ? (
              <button onClick={nextWord} className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                Tiếp tục
              </button>
            ) : (
              <Link to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`} className="mt-6 inline-block px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">
                Hoàn thành
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
