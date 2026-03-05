import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrm5Wg2msXQ0plwRW2Lb7wVaTcjSd5-yg",
  authDomain: "venglish-d9ddb.firebaseapp.com",
  projectId: "venglish-d9ddb",
  storageBucket: "venglish-d9ddb.firebasestorage.app",
  messagingSenderId: "97222139316",
  appId: "1:97222139316:web:1c1e4dd7ee5641fb42e6e1",
  measurementId: "G-BLYPZ5HE7R"
};

export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
