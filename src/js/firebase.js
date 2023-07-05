// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore, collection, getDocs} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3jEG-LqnmRdnzjIwuC94hNzdkagNYrB0",
  authDomain: "tasknow-40634.firebaseapp.com",
  projectId: "tasknow-40634",
  storageBucket: "tasknow-40634.appspot.com",
  messagingSenderId: "912363253573",
  appId: "1:912363253573:web:28e3df5fc37430ef63182c",
  measurementId: "G-BQ96W9XQ08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app); //db means Database

//Collection
const todosCol = collection(db, "todos");
const snapshot = await getDocs(todosCol);

//Detect auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("logged in!");
    } else {
        console.log("No user");
    }
});

