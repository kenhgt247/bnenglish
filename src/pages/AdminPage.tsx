import { useAuthStore } from '../store/useAuthStore';
import { ShieldAlert } from 'lucide-react';
import { AdminDashboard } from '../components/Admin/AdminDashboard';

export default function AdminPage() {
  const { profile, loading } = useAuthStore();

  if (loading) {
    return <div className="animate-pulse h-32 bg-slate-100 rounded-2xl"></div>;
  }

  if (profile?.role !== 'admin') {
    return (
      <div className="text-center py-20">
        <ShieldAlert className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-800">Không có quyền truy cập</h2>
        <p className="text-slate-500 mt-2">Trang này chỉ dành cho quản trị viên.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Quản trị hệ thống</h1>
      <AdminDashboard />
    </div>
  );
}
