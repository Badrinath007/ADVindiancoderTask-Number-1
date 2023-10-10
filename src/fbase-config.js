import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACylnLVPhTe2GeGZ6ANQP-TZQZQrKbx4I",
    authDomain: "fir-1c1de.firebaseapp.com",
    projectId: "fir-1c1de",
    storageBucket: "fir-1c1de.appspot.com",
    messagingSenderId: "444721023815",
    appId: "1:444721023815:web:44ed728943dcebbf1a9a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
