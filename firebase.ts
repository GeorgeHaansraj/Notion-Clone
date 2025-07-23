// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB64eAWmuOrlU_heyIKWTwzFRS_zzh1QEs",
  authDomain: "notion-clone-57ac7.firebaseapp.com",
  projectId: "notion-clone-57ac7",
  storageBucket: "notion-clone-57ac7.firebasestorage.app",
  messagingSenderId: "81940025426",
  appId: "1:81940025426:web:705cc8ea2eddb1216b0f8b"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };