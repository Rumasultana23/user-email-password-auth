// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA_SQ8XvFxT6URanwjKGJ0IPGFeIClpQI",
  authDomain: "user-email-password-auth-59bf9.firebaseapp.com",
  projectId: "user-email-password-auth-59bf9",
  storageBucket: "user-email-password-auth-59bf9.appspot.com",
  messagingSenderId: "325780898543",
  appId: "1:325780898543:web:f7fd4c40dc8c090feb911a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;