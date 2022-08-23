import React, { useState } from "react";
import "./RegisterPageForm.css";

const RegisterPageForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const samePasswords = password === confirmPassword;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!samePasswords) {
      alert("passwords dont match");
    }

    console.log(email, password, confirmPassword);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAP16n5-hHHW2ZB_qYPvqaHQlX_kAScjIk",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return;
      } else {
        return res.json().then((data) => {
          let errorMsg = "Sorry - something went wrong!";
          if (data && data.error && data.error.message) {
            errorMsg = data.error.message;
          }
          alert(errorMsg);
        });
      }
    });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
          onChange={handlePasswordChange}
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
          onChange={handleConfirmChange}
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
