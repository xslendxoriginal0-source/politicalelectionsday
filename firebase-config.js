// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcN84a3sKwSpNVRsX8Pw8-a3he0-uKZoY",
  authDomain: "political-elections-simulator.firebaseapp.com",
  databaseURL: "https://political-elections-simulator-default-rtdb.firebaseio.com",
  projectId: "political-elections-simulator",
  storageBucket: "political-elections-simulator.firebasestorage.app",
  messagingSenderId: "311380343128",
  appId: "1:311380343128:web:e3801675655c1f13b80d2d",
  measurementId: "G-L3ELLXV0JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
