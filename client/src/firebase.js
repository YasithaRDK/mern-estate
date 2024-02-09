// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-27702.firebaseapp.com",
  projectId: "mern-estate-27702",
  storageBucket: "mern-estate-27702.appspot.com",
  messagingSenderId: "643036982696",
  appId: "1:643036982696:web:628bc0f4d71b1cf48d419d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
