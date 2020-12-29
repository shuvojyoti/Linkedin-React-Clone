import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJi8PYsuusOWSYhfOi14f2VIwOpDHTGEA",
  authDomain: "linkedin-clone-4f993.firebaseapp.com",
  projectId: "linkedin-clone-4f993",
  storageBucket: "linkedin-clone-4f993.appspot.com",
  messagingSenderId: "915958341338",
  appId: "1:915958341338:web:6358b3696ed36c7c23cfe3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
