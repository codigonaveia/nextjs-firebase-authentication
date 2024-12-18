// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDedm45nFsiX0WC5-r1rfUDzZ7uZH4tZBs",
  authDomain: "livraria-b2fc6.firebaseapp.com",
  projectId: "livraria-b2fc6",
  storageBucket: "livraria-b2fc6.appspot.com",
  messagingSenderId: "465310346294",
  appId: "1:465310346294:web:f4a5815b2671632be5fc97",
  measurementId: "G-40QVP1GRP2"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const auth = getAuth(app);
export {app, auth}