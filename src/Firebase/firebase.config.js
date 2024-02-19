// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH8NyPZwigSVDsb2fDi58GDjr4xLZVYJM",
  authDomain: "peshwari-bites.firebaseapp.com",
  projectId: "peshwari-bites",
  storageBucket: "peshwari-bites.appspot.com",
  messagingSenderId: "613563803443",
  appId: "1:613563803443:web:c81f0e8ac67ad11bdb4046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app