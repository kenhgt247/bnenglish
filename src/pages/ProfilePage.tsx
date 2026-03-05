import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import toast from 'react-hot-toast';
import { User as UserIcon, Save, Camera } from 'lucide-react';

export default function ProfilePage() {
  const { user, profile, fetchProfile } = useAuthStore();
  const [displayName, setDisplayName] = useState(profile?.displayName || '');
  const [photoURL, setPhotoURL] = useState(profile?.photoURL || '');
  const [age, setAge] = useState(profile?.age || '');
  const [grade, setGrade] = useState(profile?.grade || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || '');
      setPhotoURL(profile.photoURL || '');
      setAge(profile.age || '');
      setGrade(profile.grade || '');
    }
  }, [profile]);

  const handleUpdate = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        displayName,
        photoURL,
        age: Number(age),
        grade
      });
      await fetchProfile(user.uid);
      toast.success('Đã cập nhật thông tin');
    } catch (error) {
      console.error(error);
      toast.error('Lỗi cập nhật thông tin');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeAvatar = () => {
    const newUrl = prompt('Nhập URL ảnh đại diện mới:', photoURL);
    if (newUrl) {
      setPhotoURL(newUrl);
    }
  };

  if (!user) return <div className="p-8 text-center">Vui lòng đăng nhập</div>;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Trang cá nhân</h1>
      
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 overflow-hidden">
            {photoURL ? <img src={photoURL} className="w-20 h-20 object-cover" /> : <UserIcon size={40} />}
          </div>
          <button onClick={handleChangeAvatar} className="text-sm text-blue-600 flex items-center gap-1">
            <Camera size={16} /> Thay đổi ảnh
          </button>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Tên hiển thị</label>
          <input 
            type="text" 
            value={displayName} 
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 border border-slate-200 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Độ tuổi</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-slate-200 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Lớp</label>
            <input 
              type="text" 
              value={grade} 
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-2 border border-slate-200 rounded-lg"
            />
          </div>
        </div>

        <button 
          onClick={handleUpdate}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Save size={18} /> {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
        <h2 className="text-lg font-bold">Tiến độ học tập</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">{profile?.xp || 0}</div>
            <div className="text-xs text-slate-500">XP</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-emerald-600">{profile?.level || 1}</div>
            <div className="text-xs text-slate-500">Cấp độ</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-amber-600">{profile?.streakCount || 0}</div>
            <div className="text-xs text-slate-500">Ngày liên tiếp</div>
          </div>
        </div>
      </div>
    </div>
  );
}
