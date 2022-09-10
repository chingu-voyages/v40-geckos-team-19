import React from "react";
import "./LoginPage.css";
import LoginPageForm from "./LoginPageForm";
import OAuth from "../OAuth/OAuth"

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="login-form-container">
        <header>
          <h2 className="heading">Login to your Account</h2>
          <p className="subheading">Show your artwork and get appreciated</p>
        </header>
        <LoginPageForm />
        <p className="or-text">------------- Or ------------- </p>
        <OAuth />
        <div className="form-footer">
          <p>
            <span>Don't have an account?</span> <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
