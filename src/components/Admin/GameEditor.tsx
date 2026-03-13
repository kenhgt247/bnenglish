import React, { useState } from 'react';
import { GameType } from '../../types/game';

export const GameEditor = ({ gameData, onSave }: { gameData: any, onSave: (data: any) => void }) => {
  const [editedData, setEditedData] = useState({
    id: Date.now() + Math.floor(Math.random() * 1000000),
    chapterId: 1,
    type: 'word-matching' as GameType,
    title: gameData.topic || '',
    difficulty: 1,
    data: gameData,
    ...gameData
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Chỉnh sửa Game</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Tiêu đề:</label>
          <input type="text" name="title" value={editedData.title} onChange={handleInputChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Chương (ID):</label>
          <input type="number" name="chapterId" value={editedData.chapterId} onChange={handleInputChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Loại game:</label>
          <select name="type" value={editedData.type} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="word-matching">Word Matching</option>
            <option value="sentence-ordering">Sentence Ordering</option>
            <option value="fill-in-the-blanks">Fill in the Blanks</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">Độ khó (1-5):</label>
          <input type="number" name="difficulty" value={editedData.difficulty} onChange={handleInputChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Hướng dẫn:</label>
          <textarea name="instructions" value={editedData.instructions || ''} onChange={handleInputChange} className="w-full p-2 border rounded" />
        </div>
        <button
          onClick={() => onSave(editedData)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Lưu Game
        </button>
      </div>
    </div>
  );
};
