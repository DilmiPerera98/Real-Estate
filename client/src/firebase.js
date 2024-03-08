// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ff045.firebaseapp.com",
  projectId: "real-estate-ff045",
  storageBucket: "real-estate-ff045.appspot.com",
  messagingSenderId: "1046582897230",
  appId: "1:1046582897230:web:e2c003be986be4fc37311f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
