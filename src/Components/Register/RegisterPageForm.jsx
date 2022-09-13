import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./RegisterPageForm.css";

const RegisterPageForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

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
      alert(`Passwords don't match`);
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1EGDiPu7e-EX2I22M-d60JwUpeumzEZo",
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
    )
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log("Register successful");
            console.log(email, password, confirmPassword);
            authCtx.login(data.idToken);
            // navigate("/voting", { replace: true });
            window.location = "/voting";
          });
        } else {
          return response.json().then((data) => {
            let errorMsg = "Sorry - something went wrong!";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            alert(errorMsg);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form className="register-form" onSubmit={handleFormSubmit}>
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
        <button className="register-btn" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterPageForm;
