// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoP2uhjP-BX-lfY5yo52lfr-46wE7LW3o",
  authDomain: "bhavgpt-4b4f3.firebaseapp.com",
  projectId: "bhavgpt-4b4f3",
  storageBucket: "bhavgpt-4b4f3.appspot.com",
  messagingSenderId: "618747758632",
  appId: "1:618747758632:web:0e9749be9cdf0ca852cd1d",
  measurementId: "G-8G05WSW71H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);