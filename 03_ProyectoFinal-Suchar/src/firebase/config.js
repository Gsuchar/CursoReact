// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Kx49Y7_enwVuMK9sJrGKO15dR5cUw1Q",
  authDomain: "cursoreact-coderhouse-eb5fc.firebaseapp.com",
  projectId: "cursoreact-coderhouse-eb5fc",
  storageBucket: "cursoreact-coderhouse-eb5fc.firebasestorage.app",
  messagingSenderId: "335369505086",
  appId: "1:335369505086:web:5dfb0ba8427d5d689d446f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
