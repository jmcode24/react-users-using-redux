// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiMESVO1yVjM2vP7rm_Yw2CED9DGc0hKg",
  authDomain: "react-users-app-ea5ab.firebaseapp.com",
  projectId: "react-users-app-ea5ab",
  storageBucket: "react-users-app-ea5ab.appspot.com",
  messagingSenderId: "908334425179",
  appId: "1:908334425179:web:0dd3c6074e0b200afa4b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;