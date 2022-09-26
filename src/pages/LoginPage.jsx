import React from "react";
import Header from "../Components/Header/Header";
import "../Components/Login/LoginPage.css";
import LoginPageForm from "../Components/Login/LoginPageForm";
import OAuth from "../Components/OAuth/OAuth"

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Header />
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
