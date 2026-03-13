import React, { useState } from 'react';
import { GameGenerator } from './GameGenerator';
import { GameEditor } from './GameEditor';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import toast from 'react-hot-toast';

export const AdminDashboard = () => {
  const [gameData, setGameData] = useState<any>(null);

  const handleGenerated = (data: any) => {
    setGameData(data);
  };

  const handleSave = async (data: any) => {
    try {
      await addDoc(collection(db, 'gameLevels'), {
        ...data,
        createdAt: new Date(),
      });
      toast.success('Đã lưu game thành công!');
    } catch (error) {
      console.error('Error saving game:', error);
      toast.error('Có lỗi xảy ra khi lưu game.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GameGenerator onGenerated={handleGenerated} />
        {gameData && <GameEditor gameData={gameData} onSave={handleSave} />}
      </div>
    </div>
  );
};
