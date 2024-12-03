// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGl9ZEs0AT2R80vGaACJ3LbBZllsMA_k0",
  authDomain: "assignment-10-client-d735b.firebaseapp.com",
  projectId: "assignment-10-client-d735b",
  storageBucket: "assignment-10-client-d735b.firebasestorage.app",
  messagingSenderId: "669898035010",
  appId: "1:669898035010:web:260a480d90a029c87d42db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
