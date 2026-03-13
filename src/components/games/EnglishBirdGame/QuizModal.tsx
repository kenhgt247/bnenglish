import React from 'react';

interface QuizModalProps {
  question: string;
  options: string[];
  onAnswer: (index: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ question, options, onAnswer }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded-lg font-medium transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
