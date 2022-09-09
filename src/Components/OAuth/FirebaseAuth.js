import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1EGDiPu7e-EX2I22M-d60JwUpeumzEZo",
  authDomain: "wedesign-a6beb.firebaseapp.com",
  projectId: "wedesign-a6beb",
  storageBucket: "wedesign-a6beb.appspot.com",
  messagingSenderId: "912017824764",
  appId: "1:912017824764:web:a99b37d83982d7d86a3079",
  measurementId: "G-3D3XTNNL2Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};