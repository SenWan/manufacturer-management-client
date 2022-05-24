// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF4HKxVJNq1Pnp6KoMxC3jsnlsYJgq3h4",
  authDomain: "manufacturer-management.firebaseapp.com",
  projectId: "manufacturer-management",
  storageBucket: "manufacturer-management.appspot.com",
  messagingSenderId: "131867873453",
  appId: "1:131867873453:web:45576d599948686081f624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;