import React, { useState } from 'react';
import { Search, BookOpen, Volume2, PenTool, Sparkles, Loader2, CheckCircle2, XCircle, PlayCircle, Mic, Headphones, Edit3 } from 'lucide-react';
import { irregularVerbs, IrregularVerb } from '../data/irregularVerbs';
import { GoogleGenAI, Type } from "@google/genai";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

interface PracticeQuestion {
  sentence: string; // e.g., "Yesterday, I ___ (go) to the store."
  answer: string; // e.g., "went"
  explanation: string;
}

export default function IrregularVerbsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  
  // Practice State
  const [activePracticeVerb, setActivePracticeVerb] = useState<string | null>(null);
  const [practiceLoading, setPracticeLoading] = useState(false);
  const [practiceData, setPracticeData] = useState<PracticeQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const levels = ['All', 'A1', 'A2', 'B1', 'B2', 'C1'];

  const filteredVerbs = irregularVerbs.filter(verb => {
    const matchesSearch = 
      verb.v1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.v2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.v3.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = selectedLevel === 'All' || verb.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  const playAudio = (text: string) => {
    // Handle cases like "abode/abided" by taking the first one
    const wordToSay = text.split('/')[0];
    const utterance = new SpeechSynthesisUtterance(wordToSay);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // slightly slower for clarity
    window.speechSynthesis.speak(utterance);
  };

  const generatePractice = async (verb: IrregularVerb) => {
    setActivePracticeVerb(verb.v1);
    setPracticeLoading(true);
    setPracticeData(null);
    setUserAnswer('');
    setShowResult(false);

    try {
      const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      const ai = new GoogleGenAI({ apiKey: apiKey! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Tạo 1 câu bài tập điền khuyết tiếng Anh để luyện tập động từ bất quy tắc "${verb.v1}" (quá khứ: ${verb.v2}, phân từ 2: ${verb.v3}). 
        Câu hỏi phải yêu cầu người dùng điền dạng V2 hoặc V3 của động từ này. 
        Trả về JSON với các trường: 
        - sentence: Câu tiếng Anh có chỗ trống, chỗ trống ký hiệu là "___ (${verb.v1})". Ví dụ: "Yesterday, I ___ (${verb.v1}) to the store."
        - answer: Đáp án đúng (chỉ ghi từ cần điền, ví dụ: "went")
        - explanation: Giải thích ngắn gọn bằng tiếng Việt tại sao dùng dạng đó.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              sentence: { type: Type.STRING },
              answer: { type: Type.STRING },
              explanation: { type: Type.STRING },
            },
            required: ["sentence", "answer", "explanation"],
          },
        },
      });

      const data = JSON.parse(response.text || "{}");
      if (data.sentence && data.answer) {
        setPracticeData(data as PracticeQuestion);
      } else {
        toast.error("Không thể tạo bài tập lúc này.");
      }
    } catch (error) {
      console.error("Error generating practice:", error);
      toast.error("Lỗi khi kết nối AI.");
    } finally {
      setPracticeLoading(false);
    }
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) return;
    setShowResult(true);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">360 Động Từ Bất Quy Tắc</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Danh sách các động từ bất quy tắc phổ biến được chia theo cấp độ. Nhấn vào từng từ để nghe phát âm và luyện tập với AI.
        </p>
      </div>

      {/* Practice Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Ôn tập cấp độ: {selectedLevel === 'All' ? 'Tất cả' : selectedLevel}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <Link to={`/learn/irregular-verbs/${selectedLevel}/all`} className="flex flex-col items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
            <BookOpen className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold text-center">Học thẻ từ</span>
          </Link>
          <Link to={`/quiz/irregular-verbs/${selectedLevel}/all`} className="flex flex-col items-center justify-center p-4 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors">
            <PlayCircle className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold text-center">Làm Quiz</span>
          </Link>
          <Link to={`/practice/speaking/irregular-verbs/${selectedLevel}/all`} className="flex flex-col items-center justify-center p-4 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-colors">
            <Mic className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold text-center">Luyện nói</span>
          </Link>
          <Link to={`/practice/listening/irregular-verbs/${selectedLevel}/all`} className="flex flex-col items-center justify-center p-4 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-colors">
            <Headphones className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold text-center">Luyện nghe</span>
          </Link>
          <Link to={`/practice/spelling/irregular-verbs/${selectedLevel}/all`} className="flex flex-col items-center justify-center p-4 bg-rose-50 text-rose-700 rounded-xl hover:bg-rose-100 transition-colors">
            <Edit3 className="w-6 h-6 mb-2" />
            <span className="text-sm font-bold text-center">Nghe & Viết</span>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm động từ (V1, V2, V3 hoặc nghĩa)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {levels.map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-colors ${
                  selectedLevel === level 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {level === 'All' ? 'Tất cả' : `Cấp độ ${level}`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {/* Header (Desktop only) */}
          <div className="hidden md:grid grid-cols-4 bg-slate-100 text-slate-700 text-sm uppercase tracking-wider font-semibold border-b border-slate-200">
            <div className="p-4">V1 (Nguyên thể)</div>
            <div className="p-4">V2 (Quá khứ)</div>
            <div className="p-4">V3 (Phân từ 2)</div>
            <div className="p-4">Nghĩa & Cấp độ</div>
          </div>
          
          {/* Body */}
          <div className="divide-y divide-slate-200">
            {filteredVerbs.length > 0 ? (
              filteredVerbs.map((verb, index) => (
                <div key={index} className="flex flex-col hover:bg-slate-50 transition-colors">
                  {/* Row/Card */}
                  <div className="p-4 md:p-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0">
                      {/* V1 */}
                      <div className="md:p-4 flex items-center justify-between">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
                          <span className="md:hidden text-xs font-semibold text-slate-500 uppercase">V1 (Nguyên thể)</span>
                          <span className="font-medium text-purple-700 text-lg md:text-base">{verb.v1}</span>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); playAudio(verb.v1); }} 
                          className="p-2 md:p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                          title="Nghe V1"
                        >
                          <Volume2 className="w-5 h-5 md:w-4 md:h-4" />
                        </button>
                      </div>
                      
                      {/* V2 */}
                      <div className="md:p-4 flex items-center justify-between">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
                          <span className="md:hidden text-xs font-semibold text-slate-500 uppercase">V2 (Quá khứ)</span>
                          <span className="text-slate-700">{verb.v2}</span>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); playAudio(verb.v2); }} 
                          className="p-2 md:p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                          title="Nghe V2"
                        >
                          <Volume2 className="w-5 h-5 md:w-4 md:h-4" />
                        </button>
                      </div>

                      {/* V3 */}
                      <div className="md:p-4 flex items-center justify-between">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
                          <span className="md:hidden text-xs font-semibold text-slate-500 uppercase">V3 (Phân từ 2)</span>
                          <span className="text-slate-700">{verb.v3}</span>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); playAudio(verb.v3); }} 
                          className="p-2 md:p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                          title="Nghe V3"
                        >
                          <Volume2 className="w-5 h-5 md:w-4 md:h-4" />
                        </button>
                      </div>

                      {/* Meaning */}
                      <div className="md:p-4 flex items-center justify-between mt-2 md:mt-0 pt-3 md:pt-0 border-t border-slate-100 md:border-0">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
                          <span className="md:hidden text-xs font-semibold text-slate-500 uppercase">Nghĩa</span>
                          <div>
                            <span className="block text-slate-600">{verb.meaning}</span>
                            <span className="inline-block mt-1 px-2 py-0.5 bg-slate-200 text-slate-600 text-xs font-bold rounded-md">
                              {verb.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Practice Section - Always Visible */}
                  <div className="px-4 pb-4 md:px-4">
                    {activePracticeVerb === verb.v1 ? (
                      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-purple-200 mt-2">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
                          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <PenTool className="w-5 h-5 text-purple-500" />
                            Luyện tập cách dùng từ
                          </h3>
                          {!practiceData && !practiceLoading && (
                            <button 
                              onClick={() => generatePractice(verb)}
                              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-xl transition-colors text-sm"
                            >
                              <Sparkles className="w-4 h-4" />
                              Tạo bài tập AI
                            </button>
                          )}
                        </div>

                        {practiceLoading && (
                          <div className="flex flex-col items-center justify-center py-8 text-purple-500">
                            <Loader2 className="w-8 h-8 animate-spin mb-2" />
                            <p className="text-sm font-medium">AI đang soạn câu hỏi cho bạn...</p>
                          </div>
                        )}

                        {practiceData && (
                          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                              <p className="text-base md:text-lg text-slate-800 font-medium leading-relaxed">
                                {practiceData.sentence.split('___').map((part, i, arr) => (
                                  <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                      <span className="inline-block mx-1 md:mx-2 align-middle">
                                        <input
                                          type="text"
                                          value={userAnswer}
                                          onChange={(e) => setUserAnswer(e.target.value)}
                                          disabled={showResult}
                                          placeholder="Nhập từ..."
                                          className={`w-24 md:w-32 text-center px-2 md:px-3 py-1 border-b-2 outline-none bg-transparent font-bold transition-colors ${
                                            showResult 
                                              ? userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase()
                                                ? 'border-emerald-500 text-emerald-600'
                                                : 'border-red-500 text-red-600'
                                              : 'border-purple-300 focus:border-purple-600 text-purple-700'
                                          }`}
                                        />
                                      </span>
                                    )}
                                  </span>
                                ))}
                              </p>
                            </div>

                            {!showResult ? (
                              <div className="flex flex-col sm:flex-row justify-end gap-3">
                                <button 
                                  onClick={() => generatePractice(verb)}
                                  className="w-full sm:w-auto px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition-colors"
                                >
                                  Đổi câu khác
                                </button>
                                <button 
                                  onClick={checkAnswer}
                                  disabled={!userAnswer.trim()}
                                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold py-2 px-6 rounded-xl transition-colors"
                                >
                                  Kiểm tra
                                </button>
                              </div>
                            ) : (
                              <div className={`p-4 rounded-xl border ${
                                userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase()
                                  ? 'bg-emerald-50 border-emerald-200'
                                  : 'bg-red-50 border-red-200'
                              }`}>
                                <div className="flex flex-col sm:flex-row items-start gap-3">
                                  <div className="flex items-center gap-2">
                                    {userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase() ? (
                                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    ) : (
                                      <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                    )}
                                    <h4 className={`font-bold sm:hidden ${
                                      userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase()
                                        ? 'text-emerald-800'
                                        : 'text-red-800'
                                    }`}>
                                      {userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase()
                                        ? 'Chính xác!'
                                        : 'Chưa đúng'
                                      }
                                    </h4>
                                  </div>
                                  <div className="w-full">
                                    <h4 className={`font-bold mb-1 hidden sm:block ${
                                      userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase()
                                        ? 'text-emerald-800'
                                        : 'text-red-800'
                                    }`}>
                                      {userAnswer.toLowerCase().trim() === practiceData.answer.toLowerCase()
                                        ? 'Chính xác! Làm rất tốt.'
                                        : `Chưa đúng. Đáp án là: ${practiceData.answer}`
                                      }
                                    </h4>
                                    {userAnswer.toLowerCase().trim() !== practiceData.answer.toLowerCase() && (
                                      <p className="font-bold text-red-800 mb-1 sm:hidden">
                                        Đáp án là: {practiceData.answer}
                                      </p>
                                    )}
                                    <p className="text-slate-700 text-sm">{practiceData.explanation}</p>
                                    
                                    <div className="mt-4">
                                      <button 
                                        onClick={() => generatePractice(verb)}
                                        className="w-full sm:w-auto bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm shadow-sm"
                                      >
                                        Làm câu khác
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-2 md:mt-0">
                        <button 
                          onClick={() => generatePractice(verb)}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-100 font-medium py-2 px-4 rounded-xl transition-colors text-sm"
                        >
                          <Sparkles className="w-4 h-4" />
                          Luyện tập cách dùng từ bằng AI
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500">
                Không tìm thấy động từ nào phù hợp.
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-slate-500">
        Hiển thị {filteredVerbs.length} / {irregularVerbs.length} động từ
      </div>
    </div>
  );
}