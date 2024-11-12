// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdQDATwZ_8ryQuqQ8fUkS2FkbkTbYCmVM",
  authDomain: "auth-shield-c6021.firebaseapp.com",
  projectId: "auth-shield-c6021",
  storageBucket: "auth-shield-c6021.firebasestorage.app",
  messagingSenderId: "1087882272927",
  appId: "1:1087882272927:web:cd95f6c0144cc0cc2482aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
