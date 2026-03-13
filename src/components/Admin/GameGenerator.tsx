import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const GameGenerator = ({ onGenerated }: { onGenerated: (data: any) => void }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      // Assuming GEMINI_API_KEY is available in the environment
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Tạo nội dung cho một trò chơi giáo dục dựa trên yêu cầu sau: ${prompt}. Hãy trả về kết quả dưới dạng JSON với các trường: topic, instructions, questions (mảng các câu hỏi, mỗi câu có question, options, correct_answer).`,
        config: {
          responseMimeType: "application/json",
        },
      });
      
      const gameData = JSON.parse(response.text || '{}');
      onGenerated(gameData);
      alert('Đã sinh game thành công!');
    } catch (error) {
      console.error('Error generating game:', error);
      alert('Có lỗi xảy ra khi sinh game.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Tạo Game Mới với AI</h2>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={4}
        placeholder="Nhập yêu cầu tạo game (ví dụ: Tạo game trắc nghiệm từ vựng chủ đề gia đình cho người mới bắt đầu)..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
      >
        {loading ? 'Đang sinh...' : 'AI Sinh Game'}
      </button>
    </div>
  );
};
