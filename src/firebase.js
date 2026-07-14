// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe8Y5WmCAKBZAH8COC6CzEGm4eSb3c2Kk",
  authDomain: "forjoey.firebaseapp.com",
  projectId: "forjoey",
  storageBucket: "forjoey.firebasestorage.app",
  messagingSenderId: "730660678289",
  appId: "1:730660678289:web:c773428cfbd9f70acf6d30",
  measurementId: "G-YW6J189K84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);