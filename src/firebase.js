import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyCpS5p_Pc6NnFTbYTBuqe1e2kO-XwsWpKA",
    authDomain: "memo-43d7f.firebaseapp.com",
    databaseURL: "https://memo-43d7f.firebaseio.com",
    projectId: "memo-43d7f",
    storageBucket: "memo-43d7f.appspot.com",
    messagingSenderId: "51932439320",
    appId: "1:51932439320:web:e07e5593ac08cd4459b46d",
    measurementId: "G-5CTH5W2FE3"
  };
  firebase.initializeApp(config);
}

const db = firebase.firestore();

export { firebase, db };
