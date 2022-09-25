// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdVV8o23-_F4b50DfxZ7ys4WpYNnkhMn0",
  authDomain: "manage-pg.firebaseapp.com",
  projectId: "manage-pg",
  storageBucket: "manage-pg.appspot.com",
  messagingSenderId: "1056776876642",
  appId: "1:1056776876642:web:cedb1d09a8f7bf1fda573b",
  measurementId: "G-1DWRG3E23P"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseApp);


export { auth, db  , storage};