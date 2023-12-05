// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkktx3Azcaqn5MLIIFqZ1sc6gWIGcmuEs",
    authDomain: "la-guera-f04d5.firebaseapp.com",
    databaseURL: "https://la-guera-f04d5-default-rtdb.firebaseio.com",
    projectId: "la-guera-f04d5",
    storageBucket: "la-guera-f04d5.appspot.com",
    messagingSenderId: "44191144430",
    appId: "1:44191144430:web:931a552372c9d13a4416ff",
    measurementId: "G-7TDQCBSN53"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
