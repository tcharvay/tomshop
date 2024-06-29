// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3uLFVj16iS0R5Sx1-BiwOjY2Li4vdNW4",
  authDomain: "tomshop-6f56e.firebaseapp.com",
  projectId: "tomshop-6f56e",
  storageBucket: "tomshop-6f56e.appspot.com",
  messagingSenderId: "329771677240",
  appId: "1:329771677240:web:b478414f187b8b785258cd",
  measurementId: "G-LXTW2F688Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);