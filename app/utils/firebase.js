import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyANTMDpyRGq49RqZjyzB2fWPApQaCGifzA",
    authDomain: "tenedores-d6c6f.firebaseapp.com",
    databaseURL: "https://tenedores-d6c6f.firebaseio.com",
    projectId: "tenedores-d6c6f",
    storageBucket: "tenedores-d6c6f.appspot.com",
    messagingSenderId: "470924912031",
    appId: "1:470924912031:web:a419f0f8f6579107ff49aa"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);