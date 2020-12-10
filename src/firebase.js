import firebase from 'firebase';


//initialize firebase cloud server
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkGpJuU_4fHoIi-shbqVuP5QUAKEJ3fEs",
    authDomain: "blogviareact.firebaseapp.com",
    projectId: "blogviareact",
    storageBucket: "blogviareact.appspot.com",
    messagingSenderId: "675785119301",
    appId: "1:675785119301:web:4ec6f350d310034420352c",
    measurementId: "G-136TXPEQN8"
});


//initialize the backend firestore
const db = firebaseApp.firestore();

//export so we could use it globally
export default db;