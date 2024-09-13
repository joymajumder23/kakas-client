// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7hDaJJ9o86bNStEgKfFAOoQHlnINx9eY",
  authDomain: "kakas-ad706.firebaseapp.com",
  projectId: "kakas-ad706",
  storageBucket: "kakas-ad706.appspot.com",
  messagingSenderId: "266131050515",
  appId: "1:266131050515:web:f0101fcb5882232d69efe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;