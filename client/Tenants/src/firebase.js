// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tenant-56395.firebaseapp.com",
    projectId: "tenant-56395",
    storageBucket: "tenant-56395.appspot.com",
    messagingSenderId: "553480283913",
    appId: "1:553480283913:web:a92431cb33997dc4f895d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);