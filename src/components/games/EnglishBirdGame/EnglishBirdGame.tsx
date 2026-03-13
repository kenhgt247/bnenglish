import React, { useState, useEffect, useRef } from 'react';
import { GameCanvas } from './GameCanvas';
import { QuizModal } from './QuizModal';
import { mockQuizData } from './gameData';
import { Home, RotateCcw } from 'lucide-react';
import { RotateDeviceOverlay } from './RotateDeviceOverlay';

interface EnglishBirdGameProps {
  onExit: () => void;
}

export const EnglishBirdGame: React.FC<EnglishBirdGameProps> = ({ onExit }) => {
  const [gameState, setGameState] = useState<'playing' | 'paused' | 'gameover'>('playing');
  const [score, setScore] = useState(0);
  const [stamina, setStamina] = useState(100);
  const [currentQuiz, setCurrentQuiz] = useState<any | null>(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const gameRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && gameState === 'playing') {
        gameRef.current?.jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  useEffect(() => {
    if (currentQuiz) {
      setTimeLeft(5);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setGameState('gameover');
            setCurrentQuiz(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentQuiz]);

  const handlePassColumn = () => {
    setGameState('paused');
    // Sort questions by difficulty if needed, here we just pick randomly
    const randomQuiz = mockQuizData[Math.floor(Math.random() * mockQuizData.length)];
    setCurrentQuiz(randomQuiz);
  };

  const handleAnswer = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (index === currentQuiz.answer) {
      setScore(s => s + 1);
      setGameState('playing');
      setCurrentQuiz(null);
    } else {
      setGameState('gameover');
      setCurrentQuiz(null);
    }
  };

  const handleGameOver = () => {
    setGameState('gameover');
  };

  useEffect(() => {
    if (gameState !== 'playing') return;
    const interval = setInterval(() => {
      setStamina(s => {
        if (s <= 0) {
          setGameState('gameover');
          return 0;
        }
        return s - 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [gameState]);

  const handleCollectItem = () => {
    setStamina(s => Math.min(100, s + 10));
  };

  return (
    <div className="relative flex flex-col items-center w-full h-screen bg-sky-100 overflow-hidden">
      {/* Portrait Overlay - Only visible on mobile in portrait mode */}
      <div className="hidden [@media(orientation:portrait)]:flex">
        <RotateDeviceOverlay />
      </div>

      {/* Floating Buttons */}
      <div className="absolute top-4 left-4 z-20">
        <button onClick={onExit} className="p-3 bg-white rounded-full shadow-lg text-slate-700 hover:bg-slate-100">
          <Home size={24} />
        </button>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <button onClick={() => window.location.reload()} className="p-3 bg-white rounded-full shadow-lg text-slate-700 hover:bg-slate-100">
          <RotateCcw size={24} />
        </button>
      </div>

      <div className="absolute top-4 z-20 flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Score: {score}</h1>
        <div className="w-48 h-4 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-500 transition-all duration-300" style={{ width: `${stamina}%` }} />
        </div>
      </div>
      
      <div className="relative w-full h-full flex-grow">
        <GameCanvas 
          onPassColumn={handlePassColumn} 
          onGameOver={handleGameOver} 
          onCollectItem={handleCollectItem}
          isPaused={gameState !== 'playing'}
          setGameRef={(ref) => (gameRef.current = ref)}
          score={score}
        />
      </div>
      {gameState === 'playing' && (
        <div className="w-full flex flex-col items-center gap-2">
          <button 
            onClick={() => gameRef.current?.jump()}
            className="bg-blue-500 text-white py-6 px-12 rounded-2xl font-bold text-xl w-full max-w-xs shadow-lg hover:bg-blue-600 transition-all active:scale-95"
          >
            JUMP!
          </button>
          <p className="text-slate-500 text-sm">Nhấn Space hoặc Chạm vào màn hình để nhảy</p>
        </div>
      )}
      {gameState === 'gameover' && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 z-10">
          <h2 className="text-4xl font-bold text-red-600">Game Over!</h2>
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZzR4dGZqZzR4dGZqZzR4dGZqZzR4dGZqZzR4dGZqZzR4dGZqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lTjJp8WhY4G2yQ/giphy.gif" 
            alt="Meme" 
            className="w-64 h-64 rounded-xl"
            referrerPolicy="no-referrer"
          />
          <button onClick={() => window.location.reload()} className="bg-red-500 text-white py-3 px-8 rounded-full font-bold w-full max-w-xs">
            Play Again
          </button>
        </div>
      )}
      {currentQuiz && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <p className="text-lg font-bold mb-2">Time left: {timeLeft}s</p>
            <QuizModal 
              question={currentQuiz.question} 
              options={currentQuiz.options} 
              onAnswer={handleAnswer} 
            />
          </div>
        </div>
      )}
    </div>
  );
};
