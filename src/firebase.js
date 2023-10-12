// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKsIVZBKMyY19Hfpc9yz46VKAoCwNJCjo",
  authDomain: "clone-2ff40.firebaseapp.com",
  projectId: "clone-2ff40",
  storageBucket: "clone-2ff40.appspot.com",
  messagingSenderId: "108966439829",
  appId: "1:108966439829:web:ac4cf5c963a05bb5d3649c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });