import React, { useState } from "react";
import "./RegisterPageForm.css";

const RegisterPageForm = () => {
  // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  //email check
  let regex = /^\S+@\S+\.\S+$/;
  const emailCheck = regex.test(email) === true;
  const emailIsValid = email.trim() !== "" && emailCheck;

  //password check
  const passwordIsValid = password.trim() !== "";

  const samePasswords = password === confirmPassword;
  // const passwordInputClass = !samePasswords
  //   ? "register-form invalid"
  //   : "register-form";

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

    if (!emailIsValid || !passwordIsValid) {
      return;
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
        //
      } else {
        return res.json().then((data) => {
          //show an error modal
          console.log(data);
          //add weak password feedback to user
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
      {/* <div className={passwordInputClass}> */}
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
      {/* </div> */}
      {/* <div className={passwordInputClass}> */}
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
      {/* </div> */}

      <div className="form-actions">
        <button type="submit">Register</button>
        {!samePasswords && (
          <p className="error-text">Your passwords don't match</p>
        )}
      </div>
    </form>
  );
};

export default RegisterPageForm;
