// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-97ecd.firebaseapp.com",
  projectId: "auth-mern-97ecd",
  storageBucket: "auth-mern-97ecd.appspot.com",
  messagingSenderId: "776812648912",
  appId: "1:776812648912:web:f9a57a8ae90d4026cf81d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);