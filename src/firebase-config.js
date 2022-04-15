// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
// : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHUZYL5JMPByy4A72berEuRKSsKH_3QHU",
  authDomain: "blog-f09e0.firebaseapp.com",
  projectId: "blog-f09e0",
  storageBucket: "blog-f09e0.appspot.com",
  messagingSenderId: "1061524038077",
  appId: "1:1061524038077:web:d178ed6161036a776cf2d4",
  measurementId: "G-QE6JGP18R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db =getFirestore(app);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
