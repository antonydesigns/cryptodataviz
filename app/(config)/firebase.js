// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cryptodataviz-feed2.firebaseapp.com",
  projectId: "cryptodataviz-feed2",
  storageBucket: "cryptodataviz-feed2.appspot.com",
  messagingSenderId: "5772580861",
  appId: "1:5772580861:web:b30099340509df76ab6b94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
