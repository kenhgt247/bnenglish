import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Grade, Unit } from '../types';
import { ArrowLeft, Layers, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function GradePage() {
  const { gradeId } = useParams();
  const [grade, setGrade] = useState<Grade | null>(null);
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!gradeId) return;
      try {
        const gradeDoc = await getDoc(doc(db, 'grades', gradeId));
        if (gradeDoc.exists()) {
          setGrade({ id: gradeDoc.id, ...gradeDoc.data() } as Grade);
        }

        const q = query(collection(db, `grades/${gradeId}/units`), orderBy('order'));
        const snapshot = await getDocs(q);
        setUnits(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Unit)));
      } catch (error: any) {
        console.error("Error fetching units:", error);
        if (error.code === 'permission-denied') {
          toast.error('Lỗi phân quyền Firestore. Vui lòng cập nhật Security Rules.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [gradeId]);

  if (loading) return <div className="animate-pulse space-y-4"><div className="h-8 bg-slate-200 w-1/4 rounded"></div><div className="h-32 bg-slate-100 rounded-2xl"></div></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50 text-slate-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-slate-800">{grade?.name || 'Lớp học'}</h1>
      </div>

      {units.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">Chưa có Unit nào trong lớp này.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {units.map((unit) => (
            <Link 
              key={unit.id} 
              to={`/grade/${gradeId}/unit/${unit.id}`}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group flex items-start justify-between"
            >
              <div>
                <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">Unit {unit.order}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{unit.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">{unit.description}</p>
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
