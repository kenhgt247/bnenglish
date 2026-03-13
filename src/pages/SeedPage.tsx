import { useState } from 'react';
import { db } from '../lib/firebase';
import { doc, setDoc, writeBatch } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Database, BookOpen, Sparkles, Loader2, Brain } from 'lucide-react';
import { a1a2Words } from '../data/a1a2Words';
import { basicWords } from '../data/basicWords';
import { grade6Data } from '../data/grade6Data';
import { grade7Data } from '../data/grade7Data';
import { grade8Data } from '../data/grade8Data';
import { grade9Data } from '../data/grade9Data';
import { b1Words } from '../data/b1Words';
import { b2Words } from '../data/b2Words';
import { c1c2Words } from '../data/c1c2Words';
import { generateB1Words, generateB2Words, generateC1C2Words, generateA1A2Words, generateQuizQuestions } from '../services/gemini';
import { generateGameLevels } from '../services/gameGenerator';
import { GameType } from '../types/game';

export default function SeedPage() {
  const [loading, setLoading] = useState(false);
  const [loadingGrades, setLoadingGrades] = useState<Record<string, boolean>>({});

  const setGradeLoading = (gradeId: string, state: boolean) => {
    setLoadingGrades(prev => ({ ...prev, [gradeId]: state }));
  };

  const handleSeed = async () => {
    setLoading(true);
    try {
      const batch = writeBatch(db);
      const gradeId = 'grade1000';
      const unitId = 'unit1';

      // Seed Grade
      batch.set(doc(db, 'grades', gradeId), {
        name: '1000 Từ Vựng Cơ Bản',
        order: 5
      });

      // Seed Unit
      batch.set(doc(db, `grades/${gradeId}/units`, unitId), {
        title: 'Từ vựng thông dụng',
        order: 1,
        description: 'Bộ từ vựng tiếng Anh cơ bản nhất'
      });

      // Chia từ vựng thành các bài học (mỗi bài 20 từ)
      const wordsPerLesson = 20;
      const totalLessons = Math.ceil(basicWords.length / wordsPerLesson);

      for (let i = 0; i < totalLessons; i++) {
        const lessonId = `lesson${i + 1}`;
        const lessonWords = basicWords.slice(i * wordsPerLesson, (i + 1) * wordsPerLesson);

        // Seed Lesson
        batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId), {
          title: `Bài ${i + 1} (Từ ${i * wordsPerLesson + 1} - ${Math.min((i + 1) * wordsPerLesson, basicWords.length)})`,
          order: i + 1,
          objectives: ['Nắm vững nghĩa của từ', 'Phát âm chuẩn xác'],
          type: 'vocabulary'
        });

        // Seed Words for this lesson
        lessonWords.forEach((w, index) => {
          const wordId = `word${i * wordsPerLesson + index + 1}`;
          batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`, wordId), {
            word: w.word,
            ipa: w.ipa,
            pos: w.pos,
            meaning_vi: w.meaning_vi,
            example_en: w.example_en,
            example_vi: w.example_vi,
            tags: ['basic', 'top1000'],
            gradeId: gradeId,
            unitId: unitId,
            lessonId: lessonId
          });
        });
      }

      await batch.commit();

      toast.success('Seed data 1000 từ vựng thành công!');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'permission-denied') {
        toast.error('Lỗi phân quyền. Bạn cần là admin hoặc cập nhật Security Rules.');
      } else {
        toast.error('Lỗi seed data');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAIQuiz = async (level: string) => {
    setGeneratingAIQuiz(true);
    try {
      const questions = await generateQuizQuestions(level);
      const batch = writeBatch(db);
      questions.forEach((q, index) => {
        const quizId = `quiz_${level}_${Date.now()}_${index}`;
        batch.set(doc(db, 'ai_quizzes', quizId), {
          ...q,
          level,
          createdAt: Date.now()
        });
      });
      await batch.commit();
      toast.success(`Tạo ${questions.length} câu hỏi quiz thành công!`);
    } catch (error: any) {
      console.error(error);
      toast.error('Lỗi tạo quiz');
    } finally {
      setGeneratingAIQuiz(false);
    }
  };

  const handleSeedGrade = async (gradeData: any) => {
    const gradeId = gradeData.grade.id;
    setGradeLoading(gradeId, true);
    try {
      const batch = writeBatch(db);
      // Seed Grade
      batch.set(doc(db, 'grades', gradeId), {
        name: gradeData.grade.name,
        order: gradeData.grade.order
      });

      // Seed Units
      gradeData.units.forEach((unit: any) => {
        batch.set(doc(db, `grades/${gradeId}/units`, unit.id), {
          title: unit.title,
          order: unit.order,
          description: unit.description
        });

        // Seed Lessons
        unit.lessons.forEach((lesson: any) => {
          const lessonData: any = {
            title: lesson.title,
            order: lesson.order,
            objectives: lesson.objectives,
            type: lesson.type
          };
          
          if (lesson.grammar) lessonData.grammar = lesson.grammar;
          if (lesson.reading) lessonData.reading = lesson.reading;

          batch.set(doc(db, `grades/${gradeId}/units/${unit.id}/lessons`, lesson.id), lessonData);

          // Seed Words if it's a vocabulary lesson
          if (lesson.type === 'vocabulary' && lesson.words) {
            lesson.words.forEach((w: any, index: number) => {
              const wordId = `word${index + 1}`;
              batch.set(doc(db, `grades/${gradeId}/units/${unit.id}/lessons/${lesson.id}/words`, wordId), {
                word: w.word,
                ipa: w.ipa,
                pos: w.pos,
                meaning_vi: w.meaning_vi,
                example_en: w.example_en,
                example_vi: w.example_vi,
                tags: [gradeId, unit.id],
                gradeId: gradeId,
                unitId: unit.id,
                lessonId: lesson.id
              });
            });
          }
        });
      });

      await batch.commit();
      toast.success(`Seed data ${gradeData.grade.name} thành công!`);
    } catch (error: any) {
      console.error(error);
      if (error.code === 'permission-denied') {
        toast.error('Lỗi phân quyền. Bạn cần là admin hoặc cập nhật Security Rules.');
      } else {
        toast.error(`Lỗi seed data ${gradeData.grade.name}`);
      }
    } finally {
      setGradeLoading(gradeId, false);
    }
  };

  const [loadingB1, setLoadingB1] = useState(false);
  const [loadingB2, setLoadingB2] = useState(false);
  const [loadingC1C2, setLoadingC1C2] = useState(false);
  const [loadingA1A2, setLoadingA1A2] = useState(false);
  const [generatingAI, setGeneratingAI] = useState(false);
  const [generatingAIB2, setGeneratingAIB2] = useState(false);
  const [generatingAIC1C2, setGeneratingAIC1C2] = useState(false);
  const [generatingAIA1A2, setGeneratingAIA1A2] = useState(false);
  const [generatingAIQuiz, setGeneratingAIQuiz] = useState(false);
  const [aiProgress, setAiProgress] = useState({ current: 0, total: 0 });
  const [aiProgressB2, setAiProgressB2] = useState({ current: 0, total: 0 });
  const [aiProgressC1C2, setAiProgressC1C2] = useState({ current: 0, total: 0 });
  const [aiProgressA1A2, setAiProgressA1A2] = useState({ current: 0, total: 0 });
  const [aiQuizProgress, setAiQuizProgress] = useState({ current: 0, total: 0 });

  const handleGenerateAIB1 = async () => {
    const totalWords = 1500;
    const batchSize = 50;
    const totalBatches = Math.ceil(totalWords / batchSize);
    
    setGeneratingAI(true);
    setAiProgress({ current: 0, total: totalWords });

    try {
      const gradeId = 'gradeB1_AI';
      const gradeName = 'B1: Từ Vựng Trung Cấp (AI Expanded)';
      const unitId = 'unitB1_AI';
      const unitTitle = 'Từ vựng B1 (1500+ từ)';

      // Seed Grade & Unit first
      const initialBatch = writeBatch(db);
      initialBatch.set(doc(db, 'grades', gradeId), {
        name: gradeName,
        order: 7
      });
      initialBatch.set(doc(db, `grades/${gradeId}/units`, unitId), {
        title: unitTitle,
        order: 1,
        description: `Bộ từ vựng B1 mở rộng với 1500 từ vựng quan trọng nhất.`
      });
      await initialBatch.commit();

      for (let b = 0; b < totalBatches; b++) {
        const offset = b * batchSize;
        // Add a small delay between batches to avoid hitting rate limits
        if (b > 0) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
        const words = await generateB1Words(batchSize, offset);
        
        if (words.length === 0) continue;

        const batch = writeBatch(db);
        const lessonId = `lesson_ai_${b + 1}`;
        
        // Seed Lesson
        batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId), {
          title: `Bài ${b + 1} (Từ ${offset + 1} - ${offset + words.length})`,
          order: b + 1,
          objectives: ['Nắm vững nghĩa của từ', 'Phát âm chuẩn xác'],
          type: 'vocabulary'
        });

        // Seed Words
        words.forEach((w, index) => {
          const wordId = `word_ai_${offset + index + 1}`;
          batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`, wordId), {
            ...w,
            tags: ['b1', 'ai-generated'],
            gradeId: gradeId,
            unitId: unitId,
            lessonId: lessonId
          });
        });

        await batch.commit();
        setAiProgress(prev => ({ ...prev, current: offset + words.length }));
        toast.success(`Đã tạo ${offset + words.length} từ...`, { id: 'ai-progress' });
      }

      toast.success(`Hoàn thành tạo ${totalWords} từ vựng B1!`);
    } catch (error: any) {
      console.error(error);
      toast.error('Lỗi khi tạo từ vựng bằng AI');
    } finally {
      setGeneratingAI(false);
    }
  };

  const handleGenerateAIB2 = async () => {
    const totalWords = 1500;
    const batchSize = 50;
    const totalBatches = Math.ceil(totalWords / batchSize);
    
    setGeneratingAIB2(true);
    setAiProgressB2({ current: 0, total: totalWords });

    try {
      const gradeId = 'gradeB2_AI';
      const gradeName = 'B2: Từ Vựng Trên Trung Cấp (AI Expanded)';
      const unitId = 'unitB2_AI';
      const unitTitle = 'Từ vựng B2 (1500+ từ)';

      // Seed Grade & Unit first
      const initialBatch = writeBatch(db);
      initialBatch.set(doc(db, 'grades', gradeId), {
        name: gradeName,
        order: 8
      });
      initialBatch.set(doc(db, `grades/${gradeId}/units`, unitId), {
        title: unitTitle,
        order: 1,
        description: `Bộ từ vựng B2 mở rộng với 1500 từ vựng quan trọng nhất cho trình độ Upper Intermediate.`
      });
      await initialBatch.commit();

      for (let b = 0; b < totalBatches; b++) {
        const offset = b * batchSize;
        // Add a small delay between batches to avoid hitting rate limits
        if (b > 0) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
        const words = await generateB2Words(batchSize, offset);
        
        if (words.length === 0) continue;

        const batch = writeBatch(db);
        const lessonId = `lesson_ai_b2_${b + 1}`;
        
        // Seed Lesson
        batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId), {
          title: `Bài ${b + 1} (Từ ${offset + 1} - ${offset + words.length})`,
          order: b + 1,
          objectives: ['Nắm vững nghĩa của từ', 'Phát âm chuẩn xác'],
          type: 'vocabulary'
        });

        // Seed Words
        words.forEach((w, index) => {
          const wordId = `word_ai_b2_${offset + index + 1}`;
          batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`, wordId), {
            ...w,
            tags: ['b2', 'ai-generated'],
            gradeId: gradeId,
            unitId: unitId,
            lessonId: lessonId
          });
        });

        await batch.commit();
        setAiProgressB2(prev => ({ ...prev, current: offset + words.length }));
        toast.success(`Đã tạo ${offset + words.length} từ B2...`, { id: 'ai-progress-b2' });
      }

      toast.success(`Hoàn thành tạo ${totalWords} từ vựng B2!`);
    } catch (error: any) {
      console.error(error);
      toast.error('Lỗi khi tạo từ vựng B2 bằng AI');
    } finally {
      setGeneratingAIB2(false);
    }
  };

  const handleGenerateAIC1C2 = async () => {
    const totalWords = 1500;
    const batchSize = 50;
    const totalBatches = Math.ceil(totalWords / batchSize);
    
    setGeneratingAIC1C2(true);
    setAiProgressC1C2({ current: 0, total: totalWords });

    try {
      const gradeId = 'gradeC1C2_AI';
      const gradeName = 'C1-C2: Từ Vựng Nâng Cao (AI Expanded)';
      const unitId = 'unitC1C2_AI';
      const unitTitle = 'Từ vựng C1-C2 (1500+ từ)';

      // Seed Grade & Unit first
      const initialBatch = writeBatch(db);
      initialBatch.set(doc(db, 'grades', gradeId), {
        name: gradeName,
        order: 9
      });
      initialBatch.set(doc(db, `grades/${gradeId}/units`, unitId), {
        title: unitTitle,
        order: 1,
        description: `Bộ từ vựng C1-C2 mở rộng với 1500 từ vựng quan trọng nhất cho trình độ Advanced & Proficiency.`
      });
      await initialBatch.commit();

      for (let b = 0; b < totalBatches; b++) {
        const offset = b * batchSize;
        // Add a small delay between batches to avoid hitting rate limits
        if (b > 0) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
        const words = await generateC1C2Words(batchSize, offset);
        
        if (words.length === 0) continue;

        const batch = writeBatch(db);
        const lessonId = `lesson_ai_c1c2_${b + 1}`;
        
        // Seed Lesson
        batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId), {
          title: `Bài ${b + 1} (Từ ${offset + 1} - ${offset + words.length})`,
          order: b + 1,
          objectives: ['Nắm vững nghĩa của từ', 'Phát âm chuẩn xác'],
          type: 'vocabulary'
        });

        // Seed Words
        words.forEach((w, index) => {
          const wordId = `word_ai_c1c2_${offset + index + 1}`;
          batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`, wordId), {
            ...w,
            tags: ['c1c2', 'ai-generated'],
            gradeId: gradeId,
            unitId: unitId,
            lessonId: lessonId
          });
        });

        await batch.commit();
        setAiProgressC1C2(prev => ({ ...prev, current: offset + words.length }));
        toast.success(`Đã tạo ${offset + words.length} từ C1-C2...`, { id: 'ai-progress-c1c2' });
      }

      toast.success(`Hoàn thành tạo ${totalWords} từ vựng C1-C2!`);
    } catch (error: any) {
      console.error(error);
      toast.error('Lỗi khi tạo từ vựng C1-C2 bằng AI');
    } finally {
      setGeneratingAIC1C2(false);
    }
  };

  const handleGenerateAIA1A2 = async () => {
    const totalWords = 1500;
    const batchSize = 50;
    const totalBatches = Math.ceil(totalWords / batchSize);
    
    setGeneratingAIA1A2(true);
    setAiProgressA1A2({ current: 0, total: totalWords });

    try {
      const gradeId = 'gradeA1A2_AI';
      const gradeName = 'A1-A2: Từ Vựng Cơ Bản (AI Expanded)';
      const unitId = 'unitA1A2_AI';
      const unitTitle = 'Từ vựng A1-A2 (1500+ từ)';

      // Seed Grade & Unit first
      const initialBatch = writeBatch(db);
      initialBatch.set(doc(db, 'grades', gradeId), {
        name: gradeName,
        order: 6
      });
      initialBatch.set(doc(db, `grades/${gradeId}/units`, unitId), {
        title: unitTitle,
        order: 1,
        description: `Bộ từ vựng A1-A2 mở rộng với 1500 từ vựng quan trọng nhất.`
      });
      await initialBatch.commit();

      for (let b = 0; b < totalBatches; b++) {
        const offset = b * batchSize;
        if (b > 0) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
        const words = await generateA1A2Words(batchSize, offset);
        
        if (words.length === 0) continue;

        const batch = writeBatch(db);
        const lessonId = `lesson_ai_a1a2_${b + 1}`;
        
        batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId), {
          title: `Bài ${b + 1} (Từ ${offset + 1} - ${offset + words.length})`,
          order: b + 1,
          objectives: ['Nắm vững nghĩa của từ', 'Phát âm chuẩn xác'],
          type: 'vocabulary'
        });

        words.forEach((w, index) => {
          const wordId = `word_ai_a1a2_${offset + index + 1}`;
          batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`, wordId), {
            ...w,
            tags: ['a1a2', 'ai-generated'],
            gradeId: gradeId,
            unitId: unitId,
            lessonId: lessonId
          });
        });

        await batch.commit();
        setAiProgressA1A2(prev => ({ ...prev, current: offset + words.length }));
        toast.success(`Đã tạo ${offset + words.length} từ A1-A2...`, { id: 'ai-progress-a1a2' });
      }

      toast.success(`Hoàn thành tạo ${totalWords} từ vựng A1-A2!`);
    } catch (error: any) {
      console.error(error);
      toast.error('Lỗi khi tạo từ vựng A1-A2 bằng AI');
    } finally {
      setGeneratingAIA1A2(false);
    }
  };

  const [generatingGameLevels, setGeneratingGameLevels] = useState(false);
  const [gameTopic, setGameTopic] = useState('');

  const handleGenerateGameLevels = async (gameType: GameType) => {
    if (!gameTopic) {
      toast.error('Vui lòng nhập chủ đề');
      return;
    }
    setGeneratingGameLevels(true);
    try {
      const levels = await generateGameLevels(gameTopic, 20, gameType);
      
      // Save to Firestore
      const batch = writeBatch(db);
      levels.forEach((level) => {
        const levelRef = doc(db, 'gameLevels', `${gameType}_${level.id}`);
        batch.set(levelRef, level);
      });
      await batch.commit();

      toast.success(`Đã tạo và lưu ${levels.length} cấp độ game ${gameType} thành công!`);
    } catch (error) {
      console.error(error);
      toast.error('Lỗi khi tạo hoặc lưu cấp độ game');
    } finally {
      setGeneratingGameLevels(false);
    }
  };

  const seedLevel = async (
    gradeId: string,
    gradeName: string,
    unitId: string,
    unitTitle: string,
    words: any[],
    tag: string,
    setLoadingState: (state: boolean) => void
  ) => {
    setLoadingState(true);
    try {
      let batch = writeBatch(db);
      let operationCount = 0;
      const MAX_BATCH_SIZE = 450; // Safe limit below 500
      
      const commitBatch = async () => {
        if (operationCount > 0) {
          await batch.commit();
          batch = writeBatch(db);
          operationCount = 0;
        }
      };

      // Seed Grade
      let order = 0;
      if (gradeId === 'gradeA1A2') order = 6;
      else if (gradeId === 'gradeB1') order = 7;
      else if (gradeId === 'gradeB2') order = 8;
      else if (gradeId === 'gradeC1C2') order = 9;

      batch.set(doc(db, 'grades', gradeId), {
        name: gradeName,
        order: order
      });
      operationCount++;

      // Seed Unit
      batch.set(doc(db, `grades/${gradeId}/units`, unitId), {
        title: unitTitle,
        order: 1,
        description: `Bộ từ vựng ${gradeName}`
      });
      operationCount++;

      const wordsPerLesson = 20;
      const totalLessons = Math.ceil(words.length / wordsPerLesson);

      for (let i = 0; i < totalLessons; i++) {
        const lessonId = `lesson${i + 1}`;
        const lessonWords = words.slice(i * wordsPerLesson, (i + 1) * wordsPerLesson);

        // Seed Lesson
        if (operationCount >= MAX_BATCH_SIZE) await commitBatch();
        batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons`, lessonId), {
          title: `Bài ${i + 1} (Từ ${i * wordsPerLesson + 1} - ${Math.min((i + 1) * wordsPerLesson, words.length)})`,
          order: i + 1,
          objectives: ['Nắm vững nghĩa của từ', 'Phát âm chuẩn xác'],
          type: 'vocabulary'
        });
        operationCount++;

        // Seed Words
        for (const [index, w] of lessonWords.entries()) {
          if (operationCount >= MAX_BATCH_SIZE) await commitBatch();
          const wordId = `word${i * wordsPerLesson + index + 1}`;
          batch.set(doc(db, `grades/${gradeId}/units/${unitId}/lessons/${lessonId}/words`, wordId), {
            word: w.word,
            ipa: w.ipa,
            pos: w.pos,
            meaning_vi: w.meaning_vi,
            example_en: w.example_en,
            example_vi: w.example_vi,
            tags: [tag],
            gradeId: gradeId,
            unitId: unitId,
            lessonId: lessonId
          });
          operationCount++;
        }
      }

      await commitBatch();
      toast.success(`Seed data ${gradeName} thành công! (${words.length} từ)`);
    } catch (error: any) {
      console.error(error);
      if (error.code === 'permission-denied') {
        toast.error('Lỗi phân quyền. Bạn cần là admin hoặc cập nhật Security Rules.');
      } else {
        toast.error(`Lỗi seed data ${gradeName}`);
      }
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Game Level Generator */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 col-span-1 md:col-span-2">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-indigo-600" />
          AI Game Level Generator
        </h2>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={gameTopic}
            onChange={(e) => setGameTopic(e.target.value)}
            placeholder="Nhập chủ đề (ví dụ: Động vật, Gia đình)..."
            className="flex-1 p-3 border border-slate-200 rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['word-matching', 'sentence-ordering', 'fill-in-the-blanks'] as GameType[]).map((type) => (
            <button
              key={type}
              onClick={() => handleGenerateGameLevels(type)}
              disabled={generatingGameLevels || !gameTopic}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {generatingGameLevels ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Tạo game {type}
            </button>
          ))}
        </div>
      </div>

      {/* A1-A2 Words Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">A1-A2: Từ Vựng Cơ Bản (Expanded)</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu từ vựng A1-A2 mở rộng ({a1a2Words.length} từ).
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => seedLevel('gradeA1A2', 'A1-A2: Từ Vựng Cơ Bản', 'unitA1A2', 'Từ vựng A1-A2', a1a2Words, 'a1a2', setLoadingA1A2)}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || loadingA1A2 || generatingAIA1A2}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
          >
            {loadingA1A2 ? 'Đang xử lý...' : 'Chạy Seed A1-A2 (Mẫu)'}
          </button>

          <button 
            onClick={handleGenerateAIA1A2}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || loadingA1A2 || generatingAIA1A2}
            className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {generatingAIA1A2 ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Đang tạo {aiProgressA1A2.current}/{aiProgressA1A2.total}...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Tạo 1500 từ A1-A2 bằng AI
              </>
            )}
          </button>
        </div>
      </div>

      {/* 1000 Words Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">A1-A2: 1000 Từ Vựng Cơ Bản</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu mẫu với {basicWords.length} từ vựng tiếng Anh thông dụng nhất, chia thành các bài học nhỏ.
        </p>
        <button 
          onClick={handleSeed}
          disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
        >
          {loading ? 'Đang xử lý...' : 'Chạy Seed Script'}
        </button>
      </div>

      {/* Grade 6 Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Tiếng Anh Lớp 6</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu chương trình Lớp 6 (Global Success) bao gồm Từ vựng, Ngữ pháp và Đọc hiểu.
        </p>
        <button 
          onClick={() => handleSeedGrade(grade6Data)}
          disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
        >
          {loadingGrades['grade6'] ? 'Đang xử lý...' : 'Chạy Seed Lớp 6'}
        </button>
      </div>

      {/* Grade 7 Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Tiếng Anh Lớp 7</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu chương trình Lớp 7 (Global Success) bao gồm Từ vựng, Ngữ pháp và Đọc hiểu.
        </p>
        <button 
          onClick={() => handleSeedGrade(grade7Data)}
          disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
        >
          {loadingGrades['grade7'] ? 'Đang xử lý...' : 'Chạy Seed Lớp 7'}
        </button>
      </div>

      {/* Grade 8 Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Tiếng Anh Lớp 8</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu chương trình Lớp 8 (Global Success) bao gồm Từ vựng, Ngữ pháp và Đọc hiểu.
        </p>
        <button 
          onClick={() => handleSeedGrade(grade8Data)}
          disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
        >
          {loadingGrades['grade8'] ? 'Đang xử lý...' : 'Chạy Seed Lớp 8'}
        </button>
      </div>

      {/* Grade 9 Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Tiếng Anh Lớp 9</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu chương trình Lớp 9 (Global Success) bao gồm Từ vựng, Ngữ pháp và Đọc hiểu.
        </p>
        <button 
          onClick={() => handleSeedGrade(grade9Data)}
          disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
        >
          {loadingGrades['grade9'] ? 'Đang xử lý...' : 'Chạy Seed Lớp 9'}
        </button>
      </div>

      {/* B1 Words Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database className="w-8 h-8 text-indigo-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">B1: Từ Vựng Trung Cấp</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu mẫu với {b1Words.length} từ vựng B1 (Intermediate) dùng trong giao tiếp hàng ngày và công việc.
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => seedLevel('gradeB1', 'B1: Từ Vựng Trung Cấp', 'unitB1', 'Từ vựng B1', b1Words, 'b1', setLoadingB1)}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || generatingAI}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
          >
            {loadingB1 ? 'Đang xử lý...' : 'Chạy Seed B1 (Mẫu)'}
          </button>
          
          <button 
            onClick={handleGenerateAIB1}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || generatingAI}
            className="w-full bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {generatingAI ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Đang tạo {aiProgress.current}/{aiProgress.total}...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Tạo 1500 từ B1 bằng AI
              </>
            )}
          </button>
        </div>
      </div>

      {/* B2 Words Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database className="w-8 h-8 text-purple-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">B2: Từ Vựng Trung Cấp Trên</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu mẫu với {b2Words.length} từ vựng B2 (Upper-Intermediate) dùng trong môi trường học thuật, công sở.
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => seedLevel('gradeB2', 'B2: Từ Vựng Trung Cấp Trên', 'unitB2', 'Từ vựng B2', b2Words, 'b2', setLoadingB2)}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || generatingAI || generatingAIB2}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
          >
            {loadingB2 ? 'Đang xử lý...' : 'Chạy Seed B2 (Mẫu)'}
          </button>

          <button 
            onClick={handleGenerateAIB2}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || generatingAI || generatingAIB2}
            className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {generatingAIB2 ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Đang tạo {aiProgressB2.current}/{aiProgressB2.total}...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Tạo 1500 từ B2 bằng AI
              </>
            )}
          </button>
        </div>
      </div>

      {/* C1-C2 Words Seed */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database className="w-8 h-8 text-pink-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">C1-C2: Từ Vựng Nâng Cao</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo dữ liệu mẫu với {c1c2Words.length} từ vựng C1-C2 (Advanced & Proficiency) chuyên sâu, sắc thái nghĩa.
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => seedLevel('gradeC1C2', 'C1-C2: Từ Vựng Nâng Cao', 'unitC1C2', 'Từ vựng C1-C2', c1c2Words, 'c1c2', setLoadingC1C2)}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || generatingAI || generatingAIB2 || generatingAIC1C2}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-70"
          >
            {loadingC1C2 ? 'Đang xử lý...' : 'Chạy Seed C1-C2 (Mẫu)'}
          </button>

          <button 
            onClick={handleGenerateAIC1C2}
            disabled={loading || Object.values(loadingGrades).some(Boolean) || loadingB1 || loadingB2 || loadingC1C2 || generatingAI || generatingAIB2 || generatingAIC1C2}
            className="w-full bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {generatingAIC1C2 ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Đang tạo {aiProgressC1C2.current}/{aiProgressC1C2.total}...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Tạo 1500 từ C1-C2 bằng AI
              </>
            )}
          </button>
        </div>
      </div>

      {/* AI Quiz Generation */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center md:col-span-2">
        <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Brain className="w-8 h-8 text-amber-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">AI Quiz Generation</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Tạo hàng ngàn câu đố theo từng cấp độ lớp (6, 7, 8, 9) và các trình độ khác nhau bằng AI.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['grade6', 'grade7', 'grade8', 'grade9', 'A1-A2', 'B1', 'B2', 'C1-C2'].map((level) => (
            <button
              key={level}
              onClick={() => handleGenerateAIQuiz(level)}
              disabled={generatingAIQuiz}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl transition-colors disabled:opacity-70"
            >
              {generatingAIQuiz ? '...' : `Tạo Quiz ${level}`}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
