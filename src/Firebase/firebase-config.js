
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU7pSlyd6bZ5gdL59dTfoNzKuovROIQuE",
  authDomain: "repairranger-auth.firebaseapp.com",
  projectId: "repairranger-auth",
  storageBucket: "repairranger-auth.appspot.com",
  messagingSenderId: "909994528568",
  appId: "1:909994528568:web:6f2e4d7fcd69cff801fbcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
