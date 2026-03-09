import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuthStore } from '../../../store/useAuthStore';
import { Word } from '../../../types';
import { useTTS } from '../listening/useTTS';
import { saveSpellingAttempt, logMistake, updateDailyMinutes } from '../../../services/firestore/attempts';
import { ArrowLeft, Play, Heart, Star, AlertCircle, CheckCircle2, ArrowRight, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

import { addXP } from '../../../features/gamification/gamificationService';
import { markTaskDone } from '../../../features/dailyPlan/dailyPlanService';
import { irregularVerbs } from '../../../data/irregularVerbs';

export default function SpellingPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const { user } = useAuthStore();
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect' | 'gameover' | 'victory'>('playing');
  const [startTime, setStartTime] = useState<number>(0);

  const { speak } = useTTS();
  const inputRef = useRef<HTMLInputElement>(null);

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
        setWords(data.sort(() => 0.5 - Math.random()).slice(0, 10)); // 10 random words
        setStartTime(Date.now());
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
    if (gameState === 'playing' && words.length > 0) {
      // Auto play sound when moving to a new word
      setTimeout(() => {
        speak(words[currentIndex].word);
      }, 500);
      inputRef.current?.focus();
    }
  }, [currentIndex, gameState, words, speak]);

  const playSound = (type: 'correct' | 'incorrect' | 'gameover' | 'victory') => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'incorrect') {
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (gameState !== 'playing' || !inputValue.trim()) return;

    const currentWord = words[currentIndex];
    const isCorrect = inputValue.trim().toLowerCase() === currentWord.word.toLowerCase();

    if (isCorrect) {
      playSound('correct');
      setGameState('correct');
      const points = 10 + (combo * 2); // Combo bonus
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
    } else {
      playSound('incorrect');
      setGameState('incorrect');
      setCombo(0);
      setLives(prev => prev - 1);
      
      if (user) {
        try {
          // Log mistake
          await logMistake(user.uid, {
            wordId: currentWord.id,
            word: currentWord.word,
            meaning_vi: currentWord.meaning_vi
          });
        } catch (error: any) {
          console.error("Error logging mistake:", error);
          if (error.code === 'permission-denied') {
            toast.error("Lỗi phân quyền. Vui lòng cập nhật Security Rules.");
          }
        }
      }
    }

    if (user && gradeId && unitId && lessonId) {
      try {
        await saveSpellingAttempt(user.uid, {
          gradeId, unitId, lessonId,
          wordId: currentWord.id,
          word: currentWord.word,
          typed: inputValue.trim(),
          isCorrect,
          createdAt: Date.now()
        });

        if (isCorrect) {
          const xp = 3 + Math.floor(combo / 2); // 3 XP base + combo bonus
          await addXP(user.uid, xp, 'spelling');
          toast.success(`+${xp} XP`, { icon: '⭐' });
        }
        await markTaskDone(user.uid, 'spelling');

      } catch (error: any) {
        console.error("Error saving spelling attempt:", error);
        if (error.code === 'permission-denied') {
          toast.error("Lỗi phân quyền. Vui lòng cập nhật Security Rules.");
        }
      }
    }

    // Check game over
    if (!isCorrect && lives <= 1) {
      setTimeout(() => setGameState('gameover'), 1500);
    }
  };

  const nextWord = async () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setInputValue('');
      setGameState('playing');
    } else {
      setGameState('victory');
      if (user) {
        try {
          const timeSpent = (Date.now() - startTime) / 60000;
          await updateDailyMinutes(user.uid, 'spelling', timeSpent);
        } catch (error: any) {
          console.error("Error updating daily minutes:", error);
        }
      }
    }
  };

  if (loading) return <div className="p-8 text-center">Đang tải...</div>;
  if (words.length === 0) return <div className="p-8 text-center">Không có từ vựng nào.</div>;

  const currentWord = words[currentIndex];

  if (gameState === 'gameover') {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Game Over!</h2>
        <p className="text-slate-500 mb-6">Bạn đã hết lượt chơi. Hãy ôn tập lại các từ vựng nhé.</p>
        <div className="text-4xl font-black text-blue-500 mb-8">{score} <span className="text-lg text-slate-400">điểm</span></div>
        <Link to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`} className="block w-full py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900">
          Quay lại bài học
        </Link>
      </div>
    );
  }

  if (gameState === 'victory') {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="w-10 h-10 text-emerald-500 fill-current" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Tuyệt vời!</h2>
        <p className="text-slate-500 mb-6">Bạn đã hoàn thành xuất sắc bài luyện viết.</p>
        <div className="text-4xl font-black text-blue-500 mb-8">{score} <span className="text-lg text-slate-400">điểm</span></div>
        <Link to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`} className="block w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700">
          Hoàn thành
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Header Stats */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <Link to={`/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`} className="p-2 text-slate-400 hover:text-slate-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-current" />
            <span className="font-bold text-slate-700">{score}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} className={`w-5 h-5 ${i < lives ? 'text-red-500 fill-current' : 'text-slate-200'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center space-y-8">
        <div className="flex justify-between items-center text-sm font-bold text-slate-400">
          <span>Từ {currentIndex + 1} / {words.length}</span>
          {combo > 1 && <span className="text-orange-500 animate-bounce">Combo x{combo}!</span>}
        </div>

        <button 
          onClick={() => speak(currentWord.word)}
          className="mx-auto p-6 bg-blue-50 text-blue-500 rounded-full hover:bg-blue-100 transition-colors shadow-sm"
        >
          <Play className="w-12 h-12 ml-1" />
        </button>

        <p className="text-slate-500 font-medium">{currentWord.meaning_vi}</p>

        <form onSubmit={handleSubmit} className="max-w-xs mx-auto space-y-4">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={gameState !== 'playing'}
            placeholder="Nhập từ bạn nghe được..."
            className={`w-full text-center text-2xl font-bold p-4 rounded-2xl border-2 outline-none transition-colors ${
              gameState === 'correct' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
              gameState === 'incorrect' ? 'border-red-500 bg-red-50 text-red-700' :
              'border-slate-200 focus:border-blue-500 text-slate-800'
            }`}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />

          {gameState === 'playing' && (
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Kiểm tra
            </button>
          )}
        </form>

        {/* Feedback Area */}
        {gameState === 'correct' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-xl mb-6">
              <CheckCircle2 className="w-6 h-6" /> Chính xác!
            </div>
            <button onClick={nextWord} className="w-full max-w-xs mx-auto py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 flex items-center justify-center gap-2">
              Tiếp tục <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {gameState === 'incorrect' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <div className="text-red-500 font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <XCircle className="w-6 h-6" /> Sai rồi!
            </div>
            <div className="text-slate-600 mb-6">
              Đáp án đúng là: <span className="font-bold text-emerald-600 text-xl">{currentWord.word}</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 italic">Từ này đã được lưu vào sổ tay để bạn ôn tập lại.</p>
            <button onClick={nextWord} className="w-full max-w-xs mx-auto py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 flex items-center justify-center gap-2">
              Tiếp tục <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
