// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBPksWVz4iOxiSgGTa706Fp_F17LlkQus",
  authDomain: "ruchika-shriram-artworks.firebaseapp.com",
  projectId: "ruchika-shriram-artworks",
  storageBucket: "ruchika-shriram-artworks.appspot.com",
  messagingSenderId: "540319279043",
  appId: "1:540319279043:web:1d8c6d8dbeb48c75f2ff76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);