// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbBtMTW30nu9mQ2-I0tvO_zG4BDEHg5UA",
  authDomain: "fir-demo-193d7.firebaseapp.com",
  databaseURL: "https://fir-demo-193d7-default-rtdb.firebaseio.com",
  projectId: "fir-demo-193d7",
  storageBucket: "fir-demo-193d7.appspot.com",
  messagingSenderId: "381629734611",
  appId: "1:381629734611:web:08aecd68006f3eb200be26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

