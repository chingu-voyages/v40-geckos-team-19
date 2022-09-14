// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1EGDiPu7e-EX2I22M-d60JwUpeumzEZo",
  authDomain: "wedesign-a6beb.firebaseapp.com",
  projectId: "wedesign-a6beb",
  storageBucket: "wedesign-a6beb.appspot.com",
  messagingSenderId: "1:912017824764:web:a99b37d83982d7d86a3079",
  appId: "1:912017824764:web:a99b37d83982d7d86a3079",
  measurementId: "G-3D3XTNNL2Y",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem("token", token);
      window.location = "/voting";
    })
    .catch((error) => {
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      console.log(credential);
    });
  
};

export { app, auth, db, storage, signInWithGoogle };
