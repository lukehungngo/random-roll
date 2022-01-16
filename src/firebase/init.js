// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfTCvRdsdpf9dloIVL_zHOTVD0qSfi9Ic",
  authDomain: "skymavis-de9bc.firebaseapp.com",
  projectId: "skymavis-de9bc",
  storageBucket: "skymavis-de9bc.appspot.com",
  messagingSenderId: "781640154610",
  appId: "1:781640154610:web:cbd9634da91571c060bf6b",
  measurementId: "G-3XPRCBLCJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app, "https://skymavis-de9bc-default-rtdb.asia-southeast1.firebasedatabase.app");
export default database