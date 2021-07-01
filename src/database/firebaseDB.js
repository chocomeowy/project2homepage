import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyArPyf3YVWWNcahkX_TTY3DTW7T0SGY95k",
  authDomain: "gatodo-ed53a.firebaseapp.com",
  projectId: "gatodo-ed53a",
  storageBucket: "gatodo-ed53a.appspot.com",
  messagingSenderId: "422326067127",
  appId: "1:422326067127:web:b9e27ab3e8fd69f869d232",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
