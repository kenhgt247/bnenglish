import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuthStore } from '../store/useAuthStore';
import { Navigate } from 'react-router-dom';
import { Flame, BookOpen, BrainCircuit, Calendar, Mic, Volume2, Star, Coins } from 'lucide-react';
import toast from 'react-hot-toast';
import DailyPlanWidget from '../features/dailyPlan/components/DailyPlanWidget';
import WeeklyLeaderboard from '../features/gamification/components/WeeklyLeaderboard';
import { checkAndUpdateStreak } from '../features/gamification/gamificationService';

export default function Dashboard() {
  const { user, profile } = useAuthStore();
  const [stats, setStats] = useState({ learned: 0, toReview: 0, streak: 0 });
  const [practiceStats, setPracticeStats] = useState({ speakingAcc: 0, listeningAcc: 0, totalMinutes: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;
      try {
        // Update streak
        const currentStreak = await checkAndUpdateStreak(user.uid);

        const progressRef = collection(db, `users/${user.uid}/progress_words`);
        const snapshot = await getDocs(progressRef);
        
        let learned = 0;
        let toReview = 0;
        const now = Date.now();

        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.reps > 0) learned++;
          if (data.nextReviewAt <= now) toReview++;
        });

        setStats({ learned, toReview, streak: currentStreak || 0 });

        // Fetch daily stats for the last 7 days
        const statsRef = collection(db, `users/${user.uid}/daily_stats`);
        const statsSnapshot = await getDocs(statsRef);
        
        let spkTotal = 0;
        let spkCorrect = 0;
        let lstTotal = 0;
        let lstCorrect = 0;
        let totalMins = 0;

        statsSnapshot.forEach(doc => {
          const data = doc.data();
          spkTotal += data.speakingTotal || 0;
          spkCorrect += data.speakingCorrect || 0;
          lstTotal += data.listeningTotal || 0;
          lstCorrect += data.listeningCorrect || 0;
          totalMins += (data.minutesSpeaking || 0) + (data.minutesListening || 0);
        });

        setPracticeStats({
          speakingAcc: spkTotal > 0 ? Math.round((spkCorrect / spkTotal) * 100) : 0,
          listeningAcc: lstTotal > 0 ? Math.round((lstCorrect / lstTotal) * 100) : 0,
          totalMinutes: totalMins
        });

      } catch (error: any) {
        console.error("Error fetching stats:", error);
        if (error.code === 'permission-denied') {
          toast.error('Lỗi phân quyền Firestore. Vui lòng cập nhật Security Rules.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [user]);

  if (!user) return <Navigate to="/login" />;
  if (loading) return <div className="animate-pulse space-y-4"><div className="h-32 bg-slate-100 rounded-2xl"></div></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Tiến độ học tập</h1>
          <p className="text-slate-500 mt-1">Chào mừng trở lại, {profile?.displayName || user.email}</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-100 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-current" />
            <span className="font-bold text-amber-700">Lvl {profile?.level || 1}</span>
          </div>
          <div className="bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-100 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-bold text-yellow-700">{profile?.coins || 0}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DailyPlanWidget />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-orange-500">
                <Flame className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-1">Streak</p>
                <p className="text-3xl font-extrabold text-slate-800">{stats.streak} <span className="text-lg font-medium text-slate-500">ngày</span></p>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-emerald-500">
                <Mic className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">Độ chính xác nói</p>
                <p className="text-3xl font-extrabold text-slate-800">{practiceStats.speakingAcc}%</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-500">
                <Volume2 className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">Độ chính xác nghe</p>
                <p className="text-3xl font-extrabold text-slate-800">{practiceStats.listeningAcc}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <WeeklyLeaderboard />
        </div>
      </div>
    </div>
  );
}
