// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSCW3mf6SyCLET7cZixP-V8OFnDYfqwEg",
  authDomain: "insta-clone-823a3.firebaseapp.com",
  projectId: "insta-clone-823a3",
  storageBucket: "insta-clone-823a3.appspot.com",
  messagingSenderId: "690818879787",
  appId: "1:690818879787:web:e967e1e052ff061c2ab56e",
};

// Initialize Firebase
// if (firebase.apps.length === 0) {
//   // this check ensures that we are not running any other firebse instance in our app..
//   // otherwise, our app will crash.
//   firebase.initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
// authstate Listener.
