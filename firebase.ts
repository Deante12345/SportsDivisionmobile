// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGh_sVutQXkYU35gpuU68VOKCMJ4A8iI0",
  authDomain: "sports-division.firebaseapp.com",
  projectId: "sports-division",
  storageBucket: "sports-division.appspot.com",
  messagingSenderId: "683521887586",
  appId: "1:683521887586:web:543a34d0328b16dd7a703b",
  measurementId: "G-VJZD8KKHKV",
};

// Initialize Firebase

let app: any;
if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app;
}

const database = firebase.default.database();
const auth = firebase.default.auth();

export { app, firebase, database, auth };
