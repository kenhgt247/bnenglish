import { Outlet, Link, useNavigate } from 'react-router-dom';
import { BookOpen, Home, User, Settings, LogOut, Database, Sparkles, Swords } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function Layout() {
  const { user, profile } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Đã đăng xuất');
      navigate('/');
    } catch (error) {
      toast.error('Lỗi đăng xuất');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <BookOpen className="w-6 h-6" />
            <span>BNEnglish</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1">
              <Home className="w-4 h-4" /> Trang chủ
            </Link>
            <Link to="/teacher" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> Thầy AI
            </Link>
            <Link to="/arena" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1">
              <Swords className="w-4 h-4" /> Đấu trường
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1">
                  <User className="w-4 h-4" /> Tiến độ
                </Link>
                <Link to="/profile" className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1">
                  <User className="w-4 h-4" /> Cá nhân
                </Link>
              </>
            )}
            {profile?.role === 'admin' && (
              <Link to="/admin" className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1">
                <Settings className="w-4 h-4" /> Admin
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-700 hidden sm:block">
                  {profile?.displayName || user.email}
                </span>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  title="Đăng xuất"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-full font-medium transition-colors text-sm"
              >
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 BNEnglish. Học tiếng Anh cùng Bảo Nam.</p>
          {profile?.role === 'admin' && (
            <Link to="/seed" className="flex items-center gap-1 text-slate-400 hover:text-blue-500">
              <Database className="w-4 h-4" /> Seed Data
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
