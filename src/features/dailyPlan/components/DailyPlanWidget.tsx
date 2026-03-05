import { useState, useEffect } from 'react';
import { useAuthStore } from '../../../store/useAuthStore';
import { generateDailyPlan, DailyPlan } from '../dailyPlanService';
import { CheckCircle2, Circle, Play, Headphones, Mic, BrainCircuit, BookOpen, MessageSquare, Keyboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DailyPlanWidget() {
  const { user } = useAuthStore();
  const [plan, setPlan] = useState<DailyPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlan = async () => {
      if (!user) return;
      try {
        const p = await generateDailyPlan(user.uid);
        setPlan(p);
      } catch (error) {
        console.error("Error fetching daily plan:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [user]);

  if (loading) return <div className="animate-pulse h-48 bg-slate-100 rounded-3xl"></div>;
  if (!plan) return null;

  const completedTasks = plan.tasks.filter(t => t.status === 'done').length;
  const totalTasks = plan.tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'srs': return <BrainCircuit className="w-5 h-5" />;
      case 'listening': return <Headphones className="w-5 h-5" />;
      case 'speaking': return <Mic className="w-5 h-5" />;
      case 'quiz': return <CheckCircle2 className="w-5 h-5" />;
      case 'grammar': return <BookOpen className="w-5 h-5" />;
      case 'story': return <MessageSquare className="w-5 h-5" />;
      case 'spelling': return <Keyboard className="w-5 h-5" />;
      default: return <Play className="w-5 h-5" />;
    }
  };

  const getTaskName = (type: string) => {
    switch (type) {
      case 'srs': return 'Ôn tập từ vựng (SRS)';
      case 'listening': return 'Luyện nghe';
      case 'speaking': return 'Luyện nói';
      case 'quiz': return 'Làm bài tập (Quiz)';
      case 'grammar': return 'Học ngữ pháp';
      case 'story': return 'Đọc truyện';
      case 'spelling': return 'Luyện viết';
      default: return 'Nhiệm vụ';
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Kế hoạch hôm nay</h2>
          <p className="text-slate-500 text-sm mt-1">Hoàn thành để nhận thêm XP & Coin!</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-blue-600">{completedTasks}/{totalTasks}</span>
        </div>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-3 mb-6 overflow-hidden">
        <div 
          className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="space-y-3">
        {plan.tasks.map((task, idx) => (
          <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border ${task.status === 'done' ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-200 hover:border-blue-300'}`}>
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl ${task.status === 'done' ? 'bg-slate-200 text-slate-500' : 'bg-blue-50 text-blue-600'}`}>
                {getTaskIcon(task.type)}
              </div>
              <div>
                <p className={`font-bold ${task.status === 'done' ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                  {getTaskName(task.type)}
                </p>
                <p className="text-sm text-slate-400">{task.minutes} phút</p>
              </div>
            </div>
            <div>
              {task.status === 'done' ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              ) : (
                <Circle className="w-6 h-6 text-slate-300" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
