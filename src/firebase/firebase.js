import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgPyMtkh55jOqRg5oQbFuqBQ-uhhdtxvQ",
  authDomain: "clone-ffc5a.firebaseapp.com",
  projectId: "clone-ffc5a",
  storageBucket: "clone-ffc5a.appspot.com",
  messagingSenderId: "255023384944",
  appId: "1:255023384944:web:35e05507a33901af2867b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
