import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

interface WordMatchingGameProps {
  data: { pairs: { word: string; translation: string }[] };
  image?: string;
  onComplete: (score: number) => void;
}

export function WordMatchingGame({ data, image, onComplete }: WordMatchingGameProps) {
  const items = useMemo(() => {
    return data?.pairs?.flatMap((p, index) => [
      { id: `word-${index}`, text: p.word },
      { id: `trans-${index}`, text: p.translation }
    ]).sort(() => Math.random() - 0.5) || [];
  }, [data]);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  if (!data || !data.pairs) {
    return <div className="text-red-500">Dữ liệu trò chơi không hợp lệ.</div>;
  }

  const handleSelect = (id: string) => {
    if (status !== 'idle' || matchedIds.includes(id)) return;

    if (selectedId) {
      const selectedItem = items.find(i => i.id === selectedId);
      const currentItem = items.find(i => i.id === id);
      
      if (!selectedItem || !currentItem) return;

      // Check match
      const pair = data.pairs.find(p => (p.word === selectedItem.text && p.translation === currentItem.text) || (p.word === currentItem.text && p.translation === selectedItem.text));
      if (pair) {
        setMatchedIds([...matchedIds, selectedId, id]);
        setScore(prev => prev + 10);
        setStatus('correct');
        setTimeout(() => {
          setStatus('idle');
          setSelectedId(null);
          if (matchedIds.length + 2 === data.pairs.length * 2) {
            onComplete(score + 10);
          }
        }, 1000);
      } else {
        setStatus('incorrect');
        setScore(prev => Math.max(0, prev - 5)); // Penalty
        setTimeout(() => {
          setStatus('idle');
          setSelectedId(null);
        }, 1000);
      }
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-xl font-bold">Điểm: {score}</div>
      {image && (
        <div className="flex justify-center">
          <img src={image} alt="Game context" className="w-32 h-32 object-contain" referrerPolicy="no-referrer" />
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => {
          const isMatched = matchedIds.includes(item.id);
          const isSelected = selectedId === item.id;
          let bgColor = 'bg-white';
          let borderColor = 'border-slate-200';

          if (isMatched) {
            bgColor = 'bg-green-100';
            borderColor = 'border-green-500';
          } else if (isSelected) {
            bgColor = 'bg-blue-100';
            borderColor = 'border-blue-500';
          } else if (status === 'correct' && isSelected) {
            bgColor = 'bg-green-100';
            borderColor = 'border-green-500';
          } else if (status === 'incorrect' && isSelected) {
            bgColor = 'bg-red-100';
            borderColor = 'border-red-500';
          }

          return (
            <motion.button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`p-4 rounded-xl border-2 ${bgColor} ${borderColor}`}
              disabled={isMatched || status !== 'idle'}
            >
              {item.text}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
