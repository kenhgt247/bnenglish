import React, { useState, useEffect, useRef } from 'react';
import { GameCanvas } from './GameCanvas';
import { QuizModal } from './QuizModal';
import { mockQuizData } from './gameData';

export const EnglishBirdGame: React.FC = () => {
  const [gameState, setGameState] = useState<'playing' | 'paused' | 'gameover'>('playing');
  const [score, setScore] = useState(0);
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

  return (
    <div className="relative flex flex-col items-center gap-4 w-full max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">English Bird Game</h1>
      <p className="text-lg">Score: {score}</p>
      <div className="relative w-full">
        <GameCanvas 
          onPassColumn={handlePassColumn} 
          onGameOver={handleGameOver} 
          isPaused={gameState !== 'playing'}
          setGameRef={(ref) => (gameRef.current = ref)}
          score={score}
        />
      </div>
      {gameState === 'playing' && (
        <button 
          onClick={() => gameRef.current?.jump()}
          className="bg-blue-500 text-white py-3 px-8 rounded-full font-bold text-lg w-full max-w-xs"
        >
          Jump (Space)
        </button>
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
