// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIc6dWlzzj6bQa71ze4Y9mVnbIDpgk-do",
  authDomain: "portfolio-vinu.firebaseapp.com",
  projectId: "portfolio-vinu",
  storageBucket: "portfolio-vinu.appspot.com",
  messagingSenderId: "7711930072",
  appId: "1:7711930072:web:2785c560b74d31df0b89ad",
  measurementId: "G-3E12E5PELZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// console.log(analytics)