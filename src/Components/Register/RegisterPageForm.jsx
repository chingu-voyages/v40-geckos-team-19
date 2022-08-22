import React, { useState } from "react";
import "./RegisterPageForm.css";

const RegisterPageForm = () => {
  // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  //email check - no empty submission
  let regex = /^\S+@\S+\.\S+$/;
  const emailCheck = regex.test(email) === true;
  const emailIsValid = email.trim() !== "" && emailCheck;

  //password check - no empty submission
  const passwordIsValid = password.trim() !== "";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form action="" className="register-form" onSubmit={handleFormSubmit}>
      <label htmlFor="email-input">
        Email
        <input
          type="email"
          id="email-input"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          id="password-input"
          className="password-input"
          value={password}
          required
        />
      </label>
      <label htmlFor="confirm-input">
        Confirm Password
        <input
          type="password"
          id="confirm-input"
          className="password-input"
          value={confirmPassword}
          required
        />
      </label>
      <div className="form-actions">
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterPageForm;
