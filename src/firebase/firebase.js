// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_NAME,
  authDomain: "peliculas-app-b747d.firebaseapp.com",
  projectId: "peliculas-app-b747d",
  storageBucket: "peliculas-app-b747d.appspot.com",
  messagingSenderId: "324612062808",
  appId: "1:324612062808:web:db6ae5973f44eda69f942d",
  measurementId: "G-ZDTG0GDL1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);