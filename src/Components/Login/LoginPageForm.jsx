import React from "react";
import "./LoginPageForm.css";

const LoginPageForm = () => {
  return (
    <form action="" className="login-form">
      <label htmlFor="emailInput">
        Email
        <input type="email" id="email-input" />
      </label>
      <label htmlFor="password-input">
        Password
        <input type="password" id="password-input" className="password-input" />
        <div className="login-help">
          <div className="remember-me">
            <input type="checkbox" value="lsRememberMe" id="remember-me" />{" "}
            <label for="remember-me">Remember Me</label>
          </div>
          <a href="/">Forgot Password?</a>
        </div>
      </label>
      <div className="form-actions">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginPageForm;
