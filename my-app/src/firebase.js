// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWgQLgvV8mfMnHGAYFh6QZ1eHK31m6Zc0",
    authDomain: "gymrat-v2.firebaseapp.com",
    projectId: "gymrat-v2",
    storageBucket: "gymrat-v2.appspot.com",
    messagingSenderId: "389293713208",
    appId: "1:389293713208:web:0d5233be6c5555229c83cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);