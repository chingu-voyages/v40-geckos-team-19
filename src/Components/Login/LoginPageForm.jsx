import React, { useState } from "react";
import "./LoginPageForm.css";

const LoginPageForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form action="" className="login-form" onSubmit={handleFormSubmit}>
      <label htmlFor="email-input">
        Email
        <input
          type="email"
          id="email-input"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          id="password-input"
          className="password-input"
          onChange={handlePasswordChange}
          value={password}
        />
        <div className="login-help">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />{" "}
            <label htmlFor="remember-me">Remember Me</label>
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
