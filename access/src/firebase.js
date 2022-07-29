import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDByUloibHKBN7UyxURdo8Gq5E5V3ogY-c",
    authDomain: "access-a626e.firebaseapp.com",
    projectId: "access-a626e",
    storageBucket: "access-a626e.appspot.com",
    messagingSenderId: "151221442210",
    appId: "1:151221442210:web:ab1b945a08d39cbba169fb",
    measurementId: "G-0MB5D1BMFX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;