import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ0QyPFdSrazIueJeroCBBcB8RkY3GWYg",
  authDomain: "crwn-clothing-1e4c8.firebaseapp.com",
  projectId: "crwn-clothing-1e4c8",
  storageBucket: "crwn-clothing-1e4c8.appspot.com",
  messagingSenderId: "89284392525",
  appId: "1:89284392525:web:60646e945da5625b5fce04",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
