import React from "react";
import "./RegisterPage.css";
import RegisterPageForm from "./RegisterPageForm";

import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter.png";
import Google from "../../images/Google.png";

const RegisterPage = () => {

  return (
    <div className="RegisterPage">
      <div className="register-form-container">
        <header>
          <h2 className="heading">Register your Account</h2>
          <p className="subheading">Show your artwork and get appreciated</p>
        </header>
        <RegisterPageForm />
        <p className="or-text">------------- Or ------------- </p>
        <div className="signup-social-icons">
          <a href="/">
            <img src={Google} alt="Login with Google" className="google-icon" />
          </a>
          <a href="/">
            <img src={Facebook} alt="Login with Facebook" />
          </a>
          <a href="/">
            <img src={Twitter} alt="Login with Twitter" />
          </a>
        </div>
        <div className="form-footer">
          <p>
            <span>Already have an account?</span> <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
