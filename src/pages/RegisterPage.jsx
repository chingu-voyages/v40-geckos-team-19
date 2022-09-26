import React from "react";
import Header from "../Components/Header/Header";
import OAuth from "../Components/OAuth/OAuth"
import "../Components/Register/RegisterPage.css";
import RegisterPageForm from "../Components/Register/RegisterPageForm";

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <Header />
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
