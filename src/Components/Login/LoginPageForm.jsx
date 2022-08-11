import React from "react";
import "./LoginPageForm.css"

const LoginPageForm = () => {
  return (
    <form action="" className="login-form">
      <label htmlFor="emailInput">
        Email
        <input type="email" id="emailInput" />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input type="password" id="passwordInput" />
      </label>
      <div className="form-actions">
        <button type="submit">Login</button>
      </div>
      
    </form>
  );
};

export default LoginPageForm