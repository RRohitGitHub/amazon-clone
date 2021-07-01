import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsoM4_c-UbWv0E-LsEjaYtviomranOWq8",
  authDomain: "clone-54469.firebaseapp.com",
  projectId: "clone-54469",
  storageBucket: "clone-54469.appspot.com",
  messagingSenderId: "131545070488",
  appId: "1:131545070488:web:e11875aa2f4838bb3689ed",
  measurementId: "G-H81KDECCWD"
};

//Initialize the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};