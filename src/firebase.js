// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmj9ZPU4S9v4DxyERbkohR6BbueCAfhyI",
  authDomain: "arisantsi.firebaseapp.com",
  projectId: "arisantsi",
  storageBucket: "arisantsi.appspot.com",
  messagingSenderId: "1042530940827",
  appId: "1:1042530940827:web:9ae108370b91012c25d33e",
  measurementId: "G-C6XBFYZJRD",
  
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

export {auth, provider, firestore}