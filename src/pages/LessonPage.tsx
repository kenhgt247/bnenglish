import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Lesson, Word } from '../types';
import { ArrowLeft, Play, BookOpen, CheckCircle2, Headphones, BrainCircuit, Mic, Volume2, Keyboard, FileText, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';

export default function LessonPage() {
  const { gradeId, unitId, lessonId } = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!gradeId || !unitId || !lessonId) return;
      try {
        const lessonDoc = await getDoc(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId));
        if (lessonDoc.exists()) {
          setLesson({ id: lessonDoc.id, ...lessonDoc.data() } as Lesson);
        }

        const snapshot = await getDocs(collection(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`));
        setWords(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Word)));
      } catch (error: any) {
        console.error("Error fetching words:", error);
        if (error.code === 'permission-denied') {
          toast.error('Lỗi phân quyền Firestore. Vui lòng cập nhật Security Rules.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [gradeId, unitId, lessonId]);

  const handleAnswerSelect = (questionIndex: number, option: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: option }));
  };

  const checkReadingAnswers = () => {
    setShowResults(true);
    let correctCount = 0;
    lesson?.reading?.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correctCount++;
      }
    });
    toast.success(`Bạn đã trả lời đúng ${correctCount}/${lesson?.reading?.questions.length} câu!`);
  };

  if (loading) return <div className="animate-pulse space-y-4"><div className="h-8 bg-slate-200 w-1/4 rounded"></div><div className="h-32 bg-slate-100 rounded-2xl"></div></div>;

  const isVocabulary = !lesson?.type || lesson.type === 'vocabulary';
  const isGrammar = lesson?.type === 'grammar';
  const isReading = lesson?.type === 'reading';

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link to={`/grade/${gradeId}/unit/${unitId}`} className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50 text-slate-500 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="text-sm font-bold text-blue-500 uppercase tracking-wider">Lesson {lesson?.order}</div>
            <h1 className="text-3xl font-bold text-slate-800">{lesson?.title || 'Bài học'}</h1>
          </div>
        </div>

        {isVocabulary && (
          <Link 
            to={`/learn/${gradeId}/${unitId}/${lessonId}`} 
            className="flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-2xl transition-all transform hover:-translate-y-1 items-center justify-center gap-3 shadow-xl shadow-blue-500/30 border border-blue-500/50"
          >
            <Play className="w-6 h-6 fill-current" /> 
            <span className="text-lg">Học ngay</span>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" /> Mục tiêu bài học
          </h2>
          <ul className="space-y-3">
            {lesson?.objectives?.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {isVocabulary && (
          <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
              <BrainCircuit className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{words.length} từ vựng mới</h3>
            <p className="text-slate-500 mb-6">Học và ôn tập với phương pháp lặp lại ngắt quãng (SRS)</p>
            
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4 w-full">
                <Link 
                  to={`/learn/${gradeId}/${unitId}/${lessonId}`} 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Play className="w-5 h-5 fill-current" /> Học ngay
                </Link>
                <Link 
                  to={`/quiz/${gradeId}/${unitId}/${lessonId}`} 
                  className="flex-1 bg-white hover:bg-slate-50 text-blue-600 font-bold py-3 px-6 rounded-xl border border-blue-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Headphones className="w-5 h-5" /> Làm Quiz
                </Link>
              </div>
              <div className="flex gap-4 w-full">
                <Link 
                  to={`/practice/speaking/${gradeId}/${unitId}/${lessonId}`} 
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Mic className="w-5 h-5" /> Luyện nói
                </Link>
                <Link 
                  to={`/practice/listening/${gradeId}/${unitId}/${lessonId}`} 
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Volume2 className="w-5 h-5" /> Luyện nghe
                </Link>
              </div>
              <div className="flex gap-4 w-full">
                <Link 
                  to={`/practice/spelling/${gradeId}/${unitId}/${lessonId}`} 
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Keyboard className="w-5 h-5" /> Nghe & Viết (Spelling Bee)
                </Link>
                <Link 
                  to={`/practice/dictation/${gradeId}/${unitId}/${lessonId}`} 
                  className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <FileText className="w-5 h-5" /> Chép chính tả
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {isVocabulary && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Danh sách từ vựng</h2>
          {words.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-500 font-medium">Chưa có từ vựng nào trong bài học này.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {words.map((word) => (
                <div key={word.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{word.word}</h3>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase">{word.pos}</span>
                  </div>
                  <p className="text-sm text-slate-400 font-mono mb-3">{word.ipa}</p>
                  <p className="text-slate-700 font-medium mb-4 flex-1">{word.meaning_vi}</p>
                  {word.tags && word.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {word.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">#{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {isGrammar && lesson.grammar && (
        <div className="mt-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{lesson.grammar.title}</h2>
          </div>
          <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800">
            <Markdown>{lesson.grammar.content}</Markdown>
          </div>
        </div>
      )}

      {isReading && lesson.reading && (
        <div className="mt-8 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{lesson.reading.title}</h2>
            </div>
            <div className="text-lg text-slate-700 leading-relaxed bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
              {lesson.reading.passage}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-500" /> Bài tập đọc hiểu
            </h3>
            
            <div className="space-y-8">
              {lesson.reading.questions.map((q, qIndex) => (
                <div key={qIndex} className="space-y-4">
                  <p className="font-medium text-slate-800 text-lg">
                    <span className="text-blue-500 font-bold mr-2">{qIndex + 1}.</span>
                    {q.question}
                  </p>
                  <div className="space-y-2 pl-6">
                    {q.options.map((opt, oIndex) => {
                      const isSelected = selectedAnswers[qIndex] === opt;
                      const isCorrect = showResults && opt === q.answer;
                      const isWrong = showResults && isSelected && opt !== q.answer;
                      
                      let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                      if (isCorrect) {
                        btnClass += "bg-emerald-50 border-emerald-500 text-emerald-700 font-medium";
                      } else if (isWrong) {
                        btnClass += "bg-red-50 border-red-500 text-red-700 font-medium";
                      } else if (isSelected) {
                        btnClass += "bg-blue-50 border-blue-500 text-blue-700 font-medium";
                      } else {
                        btnClass += "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50";
                      }

                      return (
                        <button
                          key={oIndex}
                          onClick={() => !showResults && handleAnswerSelect(qIndex, opt)}
                          disabled={showResults}
                          className={btnClass}
                        >
                          <div className="flex items-center justify-between">
                            <span>{opt}</span>
                            {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {!showResults ? (
              <button
                onClick={checkReadingAnswers}
                disabled={Object.keys(selectedAnswers).length < lesson.reading.questions.length}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Kiểm tra đáp án
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowResults(false);
                  setSelectedAnswers({});
                }}
                className="mt-8 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-6 rounded-xl transition-colors"
              >
                Làm lại
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
