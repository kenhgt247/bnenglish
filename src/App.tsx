import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useAuthStore } from './store/useAuthStore';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GradePage from './pages/GradePage';
import UnitPage from './pages/UnitPage';
import LessonPage from './pages/LessonPage';
import LearnPage from './pages/LearnPage';
import QuizPage from './pages/QuizPage';
import AIQuizPage from './pages/AIQuizPage';
import AdminPage from './pages/AdminPage';
import SeedPage from './pages/SeedPage';
import AITeacherPage from './pages/AITeacherPage';
import ArenaPage from './pages/ArenaPage';
import DictionaryPage from './pages/DictionaryPage';
import ProfilePage from './pages/ProfilePage';
import SpeakingPage from './features/practice/speaking/SpeakingPage';
import ListeningPage from './features/practice/listening/ListeningPage';
import SpellingPage from './features/practice/spelling/SpellingPage';

function App() {
  const { setUser, fetchProfile, loading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        await fetchProfile(user.uid);
      }
    });

    return () => unsubscribe();
  }, [setUser, fetchProfile]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="grade/:gradeId" element={<GradePage />} />
          <Route path="grade/:gradeId/unit/:unitId" element={<UnitPage />} />
          <Route path="grade/:gradeId/unit/:unitId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="learn/:gradeId/:unitId/:lessonId" element={<LearnPage />} />
          <Route path="quiz" element={<Navigate to="/dashboard" replace />} />
          <Route path="quiz/:gradeId/:unitId/:lessonId" element={<QuizPage />} />
          <Route path="quiz/ai/:level" element={<AIQuizPage />} />
          <Route path="practice/speaking/:gradeId/:unitId/:lessonId" element={<SpeakingPage />} />
          <Route path="practice/listening/:gradeId/:unitId/:lessonId" element={<ListeningPage />} />
          <Route path="practice/spelling/:gradeId/:unitId/:lessonId" element={<SpellingPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="seed" element={<SeedPage />} />
          <Route path="teacher" element={<AITeacherPage />} />
          <Route path="arena" element={<ArenaPage />} />
          <Route path="dictionary" element={<DictionaryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
