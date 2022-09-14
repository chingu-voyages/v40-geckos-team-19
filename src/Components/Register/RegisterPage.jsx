import React from "react";
import OAuth from "../OAuth/OAuth"
import "./RegisterPage.css";
import RegisterPageForm from "./RegisterPageForm";

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
        <OAuth />
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
