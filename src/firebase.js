// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ujaoSyYtUnmWKPHZFabl9a0in2-mUo4",
  authDomain: "productlist-8f563.firebaseapp.com",
  projectId: "productlist-8f563",
  storageBucket: "productlist-8f563.appspot.com",
  messagingSenderId: "697370274972",
  appId: "1:697370274972:web:376136c0989a5c5c411159",
  measurementId: "G-MZHTD7JB48",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
