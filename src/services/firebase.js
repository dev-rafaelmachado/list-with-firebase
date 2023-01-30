import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaxRiOfr26_L7zk1-i7IF0yae5frTabV8",
  authDomain: "fir-list-react.firebaseapp.com",
  projectId: "fir-list-react",
  storageBucket: "fir-list-react.appspot.com",
  messagingSenderId: "602364559367",
  appId: "1:602364559367:web:69134e5666550c9d832aa2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
