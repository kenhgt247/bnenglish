import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Unit, Lesson } from '../types';
import { ArrowLeft, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function UnitPage() {
  const { gradeId, unitId } = useParams();
  const [unit, setUnit] = useState<Unit | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!gradeId || !unitId) return;
      try {
        const unitDoc = await getDoc(doc(db, `grades/${gradeId}/units`, unitId));
        if (unitDoc.exists()) {
          setUnit({ id: unitDoc.id, ...unitDoc.data() } as Unit);
        }

        const q = query(collection(db, `grades/${gradeId}/units/${unitId}/lessons`), orderBy('order'));
        const snapshot = await getDocs(q);
        setLessons(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Lesson)));
      } catch (error: any) {
        console.error("Error fetching lessons:", error);
        if (error.code === 'permission-denied') {
          toast.error('Lỗi phân quyền Firestore. Vui lòng cập nhật Security Rules.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [gradeId, unitId]);

  if (loading) return <div className="animate-pulse space-y-4"><div className="h-8 bg-slate-200 w-1/4 rounded"></div><div className="h-32 bg-slate-100 rounded-2xl"></div></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Link to={`/grade/${gradeId}`} className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50 text-slate-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <div className="text-sm font-bold text-blue-500 uppercase tracking-wider">Unit {unit?.order}</div>
          <h1 className="text-3xl font-bold text-slate-800">{unit?.title || 'Unit'}</h1>
        </div>
      </div>

      {lessons.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">Chưa có bài học nào trong Unit này.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Link 
              key={lesson.id} 
              to={`/grade/${gradeId}/unit/${unitId}/lesson/${lesson.id}`}
              className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">
                  {lesson.order}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{lesson.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {lesson.objectives?.slice(0, 2).map((obj, i) => (
                      <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {obj}
                      </span>
                    ))}
                    {lesson.objectives?.length > 2 && (
                      <span className="text-xs font-medium text-slate-400">+{lesson.objectives.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-2 rounded-full group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
