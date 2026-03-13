import React from 'react';
import { RotateCcw } from 'lucide-react';

export const RotateDeviceOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-sky-500 flex flex-col items-center justify-center text-white p-6 text-center">
      <RotateCcw size={64} className="animate-spin mb-6" />
      <h2 className="text-2xl font-bold mb-2">Vui lòng xoay ngang điện thoại</h2>
      <p className="text-lg opacity-90">Để có trải nghiệm chơi game tốt nhất, hãy xoay thiết bị của bạn sang chế độ ngang.</p>
    </div>
  );
};
