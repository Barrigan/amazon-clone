import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNX2eI4E1PUzF0C_UrZnDDssaNI4I_zdI",
  authDomain: "challenge-15d22.firebaseapp.com",
  databaseURL: "https://challenge-15d22.firebaseio.com",
  projectId: "challenge-15d22",
  storageBucket: "challenge-15d22.appspot.com",
  messagingSenderId: "12455361887",
  appId: "1:12455361887:web:693065fd5994766f0b4aea",
  measurementId: "G-NLJEV8XC7V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

