// استيراد مكتبات Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// مفاتيح الربط الخاصة بمشروعك (Gridsooq)
const firebaseConfig = {
  apiKey: "AIzaSyAC6VZeR3-ivGRpqWzcjk_GuMa3i25sSpM",
  authDomain: "gridsooq.firebaseapp.com",
  projectId: "gridsooq",
  storageBucket: "gridsooq.firebasestorage.app",
  messagingSenderId: "851345685912",
  appId: "1:851345685912:web:131eb5804289d30dafffed",
  measurementId: "G-XDXNP5J9PP"
};

// تشغيل وتجهيز Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

