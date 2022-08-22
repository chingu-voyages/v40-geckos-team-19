import React, { useState } from "react";
import "./RegisterPageForm.css";

const RegisterPageForm = () => {
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState();
  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState();

  //email check - no empty submission
  let regex = /^\S+@\S+\.\S+$/;
  const emailCheck = regex.test(email) === true;
  const emailIsValid = email.trim() !== "" && emailCheck;
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  //password check - no empty submission
  const passwordIsValid = password.trim() !== "";
  const passwordIsInvalid = !passwordIsValid && passwordIsTouched;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEmailIsTouched(true);
    setPasswordIsTouched(true);

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    console.log(email, password);
    setEmail("");
    setPassword("");
    setEmailIsTouched(false);
    setPasswordIsTouched(false);
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
        {emailIsInvalid && <p>Email must not be empty</p>}
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
        {passwordIsInvalid && <p>Password must not be empty</p>}
      </label>
      <label htmlFor="confirm-input">
        Confirm Password
        <input
          type="password"
          id="confirm-input"
          className="password-input"
          value={password}
          required
        />
        {passwordIsInvalid && <p>Password must not be empty</p>}
      </label>
      <div className="form-actions">
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterPageForm;