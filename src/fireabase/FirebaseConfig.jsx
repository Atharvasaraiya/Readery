// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0lR9l0mzHheTNcH8WPDtuEqgXfkTwptI",
  authDomain: "ecommerce21-7484c.firebaseapp.com",
  projectId: "ecommerce21-7484c",
  storageBucket: "ecommerce21-7484c.appspot.com",
  messagingSenderId: "552573946125",
  appId: "1:552573946125:web:05edc6fda17a7d47c18844",
  measurementId: "G-805NNZKXHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}