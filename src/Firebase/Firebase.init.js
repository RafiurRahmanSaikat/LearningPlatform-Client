// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMcsr0_Ivnop-Njoa-inekYqZm9aJUA_4",

  authDomain: "my-learning-platform-28121.firebaseapp.com",

  projectId: "my-learning-platform-28121",

  storageBucket: "my-learning-platform-28121.appspot.com",

  messagingSenderId: "389823664457",

  appId: "1:389823664457:web:52ded51d33fb6a2446ca98"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;