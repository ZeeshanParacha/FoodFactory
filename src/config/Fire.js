import * as firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsWDmvi5V9xdvTNOlIlW8IES4taqL0LqQ",
    authDomain: "foodapp-da2d1.firebaseapp.com",
    databaseURL: "https://foodapp-da2d1.firebaseio.com",
    projectId: "foodapp-da2d1",
    storageBucket: "",
    messagingSenderId: "1391317381",
    appId: "1:1391317381:web:a64f5c0ec79df02f"
})

// Initialize Firebase
const db = firebaseApp.firestore();

export {db};