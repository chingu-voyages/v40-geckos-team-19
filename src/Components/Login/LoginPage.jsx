import React from "react";
import "./LoginPage.css";

import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter.png";
import Google from "../../images/Google.png";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <h2>Login to your Account</h2>
      <p>Show your artworks and get appreciated</p>
      <form action="" className="loginForm">
        <label htmlFor="emailInput">
          Email
          <input type="email" id="emailInput" />
        </label>
        <label htmlFor="passwordInput">
          Password
          <input type="password" id="passwordInput" />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>------------- Or ------------- </p>
      <div className="socialIcons">
        <img src={Google} alt="Login with Google" />
        <img src={Facebook} alt="Login with Facebook" />
        <img src={Twitter} alt="Login with Twitter" />
      </div>
      <footer>
        <p>Don't have an account? Sign Up</p>
      </footer>
    </div>
  );
};

export default LoginPage;
