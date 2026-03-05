import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Grade } from '../types';
import { GraduationCap, BookOpen, Star } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Home() {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const q = query(collection(db, 'grades'), orderBy('order'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Grade));
        setGrades(data);
      } catch (error: any) {
        console.error("Error fetching grades:", error);
        if (error.code === 'permission-denied') {
          toast.error('Lỗi phân quyền Firestore. Vui lòng cập nhật Security Rules.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchGrades();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white rounded-2xl h-40 shadow-sm border border-slate-100"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto py-8">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Học Tiếng Anh <span className="text-blue-500">Dễ Dàng Cùng Bảo Nam </span>
        </h1>
        <p className="text-lg text-slate-500">
          Chọn lớp học của bạn để bắt đầu hành trình chinh phục từ vựng với phương pháp lặp lại ngắt quãng (SRS).
        </p>
      </div>

      {grades.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">Chưa có dữ liệu lớp học.</p>
          <Link to="/seed" className="text-blue-500 hover:underline mt-2 inline-block">Chạy Seed Data</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {grades.map((grade, idx) => {
            const colors = ['bg-blue-50 text-blue-600 border-blue-200', 'bg-emerald-50 text-emerald-600 border-emerald-200', 'bg-amber-50 text-amber-600 border-amber-200', 'bg-purple-50 text-purple-600 border-purple-200'];
            const colorClass = colors[idx % colors.length];
            
            return (
              <Link 
                key={grade.id} 
                to={`/grade/${grade.id}`}
                className={`group relative overflow-hidden rounded-3xl p-6 border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${colorClass}`}
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
                <h2 className="text-2xl font-bold mb-1">{grade.name}</h2>
                <p className="text-sm font-medium opacity-80 flex items-center gap-1">
                  Khám phá ngay <Star className="w-3 h-3" />
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
