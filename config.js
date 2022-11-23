
/* import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrFT7lnDFhnnMon7k7mDAENOCWllMIgPM",
    authDomain: "fir-canarahsbc.firebaseapp.com",
    projectId: "fir-canarahsbc",
    storageBucket: "fir-canarahsbc.appspot.com",
    messagingSenderId: "769998815602",
    appId: "1:769998815602:web:b98f8b06b2488c42355deb",
    measurementId: "G-42RV81D0YR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const User = db.collection("Users");
module.exports = User; */


const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCrFT7lnDFhnnMon7k7mDAENOCWllMIgPM",
    authDomain: "fir-canarahsbc.firebaseapp.com",
    projectId: "fir-canarahsbc",
    storageBucket: "fir-canarahsbc.appspot.com",
    messagingSenderId: "769998815602",
    appId: "1:769998815602:web:b98f8b06b2488c42355deb",
    measurementId: "G-42RV81D0YR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;