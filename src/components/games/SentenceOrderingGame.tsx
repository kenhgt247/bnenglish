import { useState } from 'react';
import { motion } from 'motion/react';

interface SentenceOrderingGameProps {
  data: { sentence: string[] };
  difficulty: number;
  onComplete: (score: number) => void;
}

export function SentenceOrderingGame({ data, difficulty, onComplete }: SentenceOrderingGameProps) {
  const [ordered, setOrdered] = useState<string[]>([]);
  const [words, setWords] = useState(data.sentence.sort(() => Math.random() - 0.5));
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleWordClick = (word: string, index: number) => {
    if (status !== 'idle') return;

    const newOrdered = [...ordered, word];
    setOrdered(newOrdered);
    setWords(words.filter((_, i) => i !== index));

    if (newOrdered.length === data.sentence.length) {
      if (newOrdered.join(' ') === data.sentence.join(' ')) {
        setStatus('correct');
        const finalScore = score + 100;
        setScore(finalScore);
        setTimeout(() => onComplete(finalScore), 1000);
      } else {
        setStatus('incorrect');
        setScore(prev => Math.max(0, prev - 20)); // Penalty
        setTimeout(() => {
          setStatus('idle');
          setOrdered([]);
          setWords(data.sentence.sort(() => Math.random() - 0.5));
        }, 1000);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-xl font-bold">Điểm: {score}</div>
      <div className={`p-4 rounded-xl min-h-[60px] flex gap-2 flex-wrap border-2 ${status === 'correct' ? 'bg-green-100 border-green-500' : status === 'incorrect' ? 'bg-red-100 border-red-500' : 'bg-slate-100 border-slate-200'}`}>
        {ordered.map((word, i) => (
          <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-lg">{word}</span>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {words.map((word, i) => (
          <motion.button
            key={i}
            onClick={() => handleWordClick(word, i)}
            className="bg-white border-2 border-slate-200 px-4 py-2 rounded-lg hover:border-blue-400"
            disabled={status !== 'idle'}
          >
            {word}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
