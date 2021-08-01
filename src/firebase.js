import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCS5EKCz5AesT06kV96T5QLxN9MZSxcIjY",
    authDomain: "blog-chethan.firebaseapp.com",
    projectId: "blog-chethan",
    storageBucket: "blog-chethan.appspot.com",
    messagingSenderId: "54238589277",
    appId: "1:54238589277:web:b2ec07cba4fffb174d38b4"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore()

  export const auth = firebase.auth()

  let provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase