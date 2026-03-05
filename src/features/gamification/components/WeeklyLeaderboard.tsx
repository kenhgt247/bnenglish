import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { getWeekId } from '../gamificationService';
import { Trophy, Medal, Crown } from 'lucide-react';

export default function WeeklyLeaderboard() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const weekId = getWeekId();
        const q = query(
          collection(db, `leaderboard_weekly/${weekId}/entries`),
          orderBy('xpWeek', 'desc'),
          limit(10)
        );
        const snapshot = await getDocs(q);
        setLeaders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) return <div className="animate-pulse h-48 bg-slate-100 rounded-3xl"></div>;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-amber-500" /> Bảng xếp hạng tuần
      </h2>

      {leaders.length === 0 ? (
        <p className="text-slate-500 text-center py-4">Chưa có ai tham gia tuần này.</p>
      ) : (
        <div className="space-y-4">
          {leaders.map((leader, index) => (
            <div key={leader.id} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  index === 0 ? 'bg-amber-100 text-amber-600' :
                  index === 1 ? 'bg-slate-200 text-slate-600' :
                  index === 2 ? 'bg-orange-100 text-orange-600' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {index === 0 ? <Crown className="w-4 h-4" /> : index + 1}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{leader.displayName}</p>
                  <p className="text-xs text-slate-500">Level {leader.level}</p>
                </div>
              </div>
              <div className="font-black text-blue-600">
                {leader.xpWeek} <span className="text-xs text-slate-400 font-medium">XP</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
