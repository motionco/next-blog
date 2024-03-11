// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-f96be.firebaseapp.com",
  projectId: "blog-f96be",
  storageBucket: "blog-f96be.appspot.com",
  messagingSenderId: "413353423905",
  appId: "1:413353423905:web:331c8b7f82221fd0abdf60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);