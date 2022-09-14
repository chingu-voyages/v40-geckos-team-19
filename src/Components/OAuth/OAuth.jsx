import React from "react";
import { signInWithGoogle } from "../Firebase/firebase";
import "./OAuth.css";

const OAuth = () => {
  return (
    <div className="signup-social-icon">
      <button
        type="button"
        className="login-with-google-btn"
        onClick={signInWithGoogle}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;