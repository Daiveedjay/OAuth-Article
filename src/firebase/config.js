import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "Your-api-key",
  authDomain: "Your domain",
  projectId: "Your-ID",
  storageBucket: "Your-bucket",
  messagingSenderId: "Your-ID",
  appId: "Your-ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, githubProvider, twitterProvider };
