// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZtq3SLyB8IDrI3f-s0nxYWpSbMzmP7Zc",
  authDomain: "wedesign-storage.firebaseapp.com",
  projectId: "wedesign-storage",
  storageBucket: "wedesign-storage.appspot.com",
  messagingSenderId: "617225344891",
  appId: "1:617225344891:web:f241c7c1cdc1cf5b56cfde",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
