// استيراد خدمات Firebase المكتملة
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    push, 
    set, 
    onValue 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// بيانات مشروعك (Gridsooq)
const firebaseConfig = {
  apiKey: "AIzaSyAC6VZeR3-ivGRpqWzcjk_GuMa3i25sSpM",
  authDomain: "gridsooq.firebaseapp.com",
  databaseURL: "https://gridsooq-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gridsooq",
  storageBucket: "gridsooq.firebasestorage.app",
  messagingSenderId: "851345685912",
  appId: "1:851345685912:web:131eb5804289d30dafffed",
  measurementId: "G-XDXNP5J9PP"
};

// تهيئة الخدمة
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

export { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    ref, 
    push, 
    set, 
    onValue 
};
