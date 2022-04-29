// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDncBnmyPRL7Hudp408bZd46nsDxJnJY9k",
  authDomain: "inventory-management-642d1.firebaseapp.com",
  projectId: "inventory-management-642d1",
  storageBucket: "inventory-management-642d1.appspot.com",
  messagingSenderId: "166044069764",
  appId: "1:166044069764:web:c82f314994aee1b44337d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
