// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Altres serveis de Firebase
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIDRODw6cuneEul6iEl9ZW0EN2s4biflk",
    authDomain: "ranquing-acl.firebaseapp.com",
    projectId: "ranquing-acl",
    storageBucket: "ranquing-acl.firebasestorage.app",
    messagingSenderId: "964663157120",
    appId: "1:964663157120:web:37a3dbdcaaeebc62ebe165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);