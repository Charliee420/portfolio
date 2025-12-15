// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// PASTE YOUR CONFIG KEYS HERE FROM FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "REPLACE_WITH_YOUR_API_KEY",
    authDomain: "REPLACE_WITH_YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
    storageBucket: "REPLACE_WITH_YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
    appId: "REPLACE_WITH_YOUR_APP_ID"
};

// Initialize Firebase
let app;
let db;
let storage;

try {
    // Simple check to see if the user hasn't replaced the placeholders yet
    if (firebaseConfig.apiKey.includes("REPLACE_WITH")) {
        console.warn("Firebase keys are missing. The app will run, but database features won't work.");
    } else {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        storage = getStorage(app);
    }
} catch (error) {
    console.error("Firebase initialization failed:", error);
}

export { db, storage };
