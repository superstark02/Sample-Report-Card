import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDLlgxX_qUZaaz8JEhpTC7Dqja2uPjP32E",
  authDomain: "report-13bbb.firebaseapp.com",
  databaseURL: "https://report-13bbb.firebaseio.com",
  projectId: "report-13bbb",
  storageBucket: "report-13bbb.appspot.com",
  messagingSenderId: "86911708664",
  appId: "1:86911708664:web:3a5fde0ed3ba44f4b8ba0d",
  measurementId: "G-KTQJZGEGNL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const rdb = firebase.database();

export default firebase;