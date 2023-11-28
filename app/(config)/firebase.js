import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "crypto-data-viz.firebaseapp.com",
  projectId: "crypto-data-viz",
  storageBucket: "crypto-data-viz.appspot.com",
  messagingSenderId: "762009117899",
  appId: "1:762009117899:web:69c9148784663ddcfa674e",
  measurementId: "G-JWP6VT59JH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
