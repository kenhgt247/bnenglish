import { useState } from 'react';

interface FillInTheBlanksGameProps {
  data: { sentence: string; blank: string; options: string[] };
  difficulty: number;
  onComplete: (score: number) => void;
}

export function FillInTheBlanksGame({ data, difficulty, onComplete }: FillInTheBlanksGameProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleSelect = (option: string) => {
    if (status !== 'idle') return;

    setSelected(option);
    if (option === data.blank) {
      setStatus('correct');
      const finalScore = score + 100;
      setScore(finalScore);
      setTimeout(() => onComplete(finalScore), 1000);
    } else {
      setStatus('incorrect');
      setScore(prev => Math.max(0, prev - 20)); // Penalty
      setTimeout(() => {
        setStatus('idle');
        setSelected(null);
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-xl font-bold">Điểm: {score}</div>
      <p className="text-xl text-slate-800">{data.sentence.replace('___', '_____')}</p>
      <div className="grid grid-cols-2 gap-4">
        {data.options.map(option => {
          let bgColor = 'bg-white';
          let borderColor = 'border-slate-200';
          
          if (selected === option) {
            if (status === 'correct') {
              bgColor = 'bg-green-100';
              borderColor = 'border-green-500';
            } else if (status === 'incorrect') {
              bgColor = 'bg-red-100';
              borderColor = 'border-red-500';
            } else {
              bgColor = 'bg-blue-100';
              borderColor = 'border-blue-500';
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-4 rounded-xl border-2 ${bgColor} ${borderColor}`}
              disabled={status !== 'idle'}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
