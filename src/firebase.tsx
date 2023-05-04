import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoV5vaUwb5ImOyxSQDPdaACWt0TVHMxmA",
  authDomain: "markdown-editor-7602c.firebaseapp.com",
  projectId: "markdown-editor-7602c",
  storageBucket: "markdown-editor-7602c.appspot.com",
  messagingSenderId: "702526906849",
  appId: "1:702526906849:web:494bc908a2909d7abff2a0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
