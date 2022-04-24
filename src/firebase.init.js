// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1N7rwUT75wc07qYGO6wQ6PsTyYrgd7k4",
    authDomain: "genius-car-services-2dc6d.firebaseapp.com",
    projectId: "genius-car-services-2dc6d",
    storageBucket: "genius-car-services-2dc6d.appspot.com",
    messagingSenderId: "881527097199",
    appId: "1:881527097199:web:3546a8742546b12f558a9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;