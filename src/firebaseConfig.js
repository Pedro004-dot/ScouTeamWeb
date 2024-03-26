// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAapUAyk_daNdZkfMIz1a5x0fKkEew8g0g",
  authDomain: "scoutteam-241fc.firebaseapp.com",
  projectId: "scoutteam-241fc",
  storageBucket: "scoutteam-241fc.appspot.com",
  messagingSenderId: "784468945734",
  appId: "1:784468945734:web:252f4a2f929344bf549347",
  measurementId: "G-S5ECZSGXHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore =getFirestore(app)
const storage = getStorage(app)
// const analytics = getAnalytics(app);

export {app,auth,firestore,storage}