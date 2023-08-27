import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWXnCiyH4vgpgLwfL4-V1tWN3ZBPPlhuY",
  authDomain: "oauth-article.firebaseapp.com",
  projectId: "oauth-article",
  storageBucket: "oauth-article.appspot.com",
  messagingSenderId: "967884445206",
  appId: "1:967884445206:web:976b887313f997627b8737",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, githubProvider, twitterProvider };
