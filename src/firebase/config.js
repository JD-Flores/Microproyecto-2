// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk7Q1Oy9WSTkhv_PqHzawFdI8wHRx-07o",
  authDomain: "microproyecto-2-38c37.firebaseapp.com",
  projectId: "microproyecto-2-38c37",
  storageBucket: "microproyecto-2-38c37.appspot.com",
  messagingSenderId: "229866932056",
  appId: "1:229866932056:web:fa5edf1f36f499a3bf872d",
  measurementId: "G-78BK9GVPEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const store = getStorage(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });