import { create } from 'zustand';
import { User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { User } from '../types';

interface AuthState {
  user: FirebaseUser | null;
  profile: User | null;
  loading: boolean;
  setUser: (user: FirebaseUser | null) => void;
  fetchProfile: (uid: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  profile: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  fetchProfile: async (uid) => {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        set({ profile: { uid, ...docSnap.data() } as User });
      } else {
        set({ profile: null });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      set({ profile: null });
    }
  },
  logout: () => set({ user: null, profile: null }),
}));
