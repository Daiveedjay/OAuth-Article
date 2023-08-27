import "../App.css";
import GoogleIcon from "../assets/icon-google.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import GithubIcon from "../assets/icon-github.svg";

import {
  googleProvider,
  twitterProvider,
  githubProvider,
} from "../firebase/config";
import { useSocialSignup } from "../hooks/useSocialSignup";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export default function Auth() {
  const google = useSocialSignup(googleProvider);
  const twitter = useSocialSignup(twitterProvider);
  const github = useSocialSignup(githubProvider);

  const { user } = useAuthContext();

  useEffect(() => console.log(user), [user]);

  return (
    <div className="utility__page">
      <h1>Welcome to my Auth Page</h1>

      <button onClick={google.signInWithSocial}>
        <img src={GoogleIcon} alt="" />
        <span>Google</span>
      </button>

      <button onClick={twitter.signInWithSocial}>
        <img src={TwitterIcon} alt="" />
        <span>Twitter</span>
      </button>

      <button onClick={github.signInWithSocial}>
        <img src={GithubIcon} alt="" />
        <span>GitHub</span>
      </button>
    </div>
  );
}
