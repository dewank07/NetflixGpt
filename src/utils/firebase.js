// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_arVfU3T9Lj6A3cDzxfjGsMf3nGrnlec",
  authDomain: "animegpt-79bcb.firebaseapp.com",
  projectId: "animegpt-79bcb",
  storageBucket: "animegpt-79bcb.appspot.com",
  messagingSenderId: "643921940560",
  appId: "1:643921940560:web:ec2ff2ea3fc164cd784155",
  measurementId: "G-3QJYYMF6M2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
