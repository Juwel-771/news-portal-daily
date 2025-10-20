// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHd9Z46eSwwAsRVBt-ZVX67EZM0OUV1W0",
  authDomain: "dragon-news-73edf.firebaseapp.com",
  projectId: "dragon-news-73edf",
  storageBucket: "dragon-news-73edf.firebasestorage.app",
  messagingSenderId: "649105876797",
  appId: "1:649105876797:web:6ce0cf90a93ea682bcc754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;