import { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { basicWords } from '../data/basicWords';
import { grade6Data } from '../data/grade6Data';
import { grade7Data } from '../data/grade7Data';
import { grade8Data } from '../data/grade8Data';
import { grade9Data } from '../data/grade9Data';

const extractWords = (data: any) => {
  const words: any[] = [];
  if (data.units) {
    data.units.forEach((unit: any) => {
      unit.lessons.forEach((lesson: any) => {
        if (lesson.words) {
          words.push(...lesson.words);
        }
      });
    });
  }
  return words;
};

// Combine all word sources
const allWords = [
  ...basicWords,
  ...extractWords(grade6Data),
  ...extractWords(grade7Data),
  ...extractWords(grade8Data),
  ...extractWords(grade9Data)
];

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = useMemo(() => {
    if (!searchTerm) return [];
    const lowerTerm = searchTerm.toLowerCase();
    return allWords.filter(w => 
      w.word.toLowerCase().includes(lowerTerm) || 
      (w.meaning_vi && w.meaning_vi.toLowerCase().includes(lowerTerm))
    ).slice(0, 50); // Limit results
  }, [searchTerm]);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-600" /> Từ điển
      </h1>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-slate-400" />
        <input 
          type="text"
          placeholder="Tìm kiếm từ vựng..."
          className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredWords.map((word, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-blue-600">{word.word}</h3>
              {word.ipa && <span className="text-sm text-slate-500 font-mono">{word.ipa}</span>}
            </div>
            {word.meaning_vi && <p className="text-slate-700 mt-1 font-medium">{word.meaning_vi}</p>}
            {word.example_en && (
              <div className="mt-2 text-sm text-slate-500 italic">
                <p>{word.example_en}</p>
                {word.example_vi && <p className="text-slate-400">{word.example_vi}</p>}
              </div>
            )}
          </div>
        ))}
        {searchTerm && filteredWords.length === 0 && (
          <p className="text-center text-slate-500">Không tìm thấy từ nào.</p>
        )}
      </div>
    </div>
  );
}
