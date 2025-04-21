// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLvUvbktSR3hqbf4nPKcF9-gpFJOSXEPY",
  authDomain: "maxigene-83637.firebaseapp.com",
  projectId: "maxigene-83637",
  storageBucket: "maxigene-83637.firebasestorage.app",
  messagingSenderId: "866509293202",
  appId: "1:866509293202:web:5e649ea53b15460cd0c84b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);