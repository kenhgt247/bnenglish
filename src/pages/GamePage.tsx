import { useState } from 'react';
import { EnglishBirdGame } from '../components/games/EnglishBirdGame/EnglishBirdGame';
import { ArrowLeft } from 'lucide-react';

export default function GamePage() {
  const [showBirdGame, setShowBirdGame] = useState(false);

  if (showBirdGame) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <button onClick={() => setShowBirdGame(false)} className="flex items-center gap-2 text-slate-500 mb-6"><ArrowLeft /> Quay lại</button>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <EnglishBirdGame />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Trò chơi</h1>
        <p className="text-slate-500">Chọn trò chơi để bắt đầu!</p>
        <button onClick={() => setShowBirdGame(true)} className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700">Chơi English Bird Game</button>
      </div>
    </div>
  );
}
