import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import "./LoginPageForm.css";

const LoginPageForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1EGDiPu7e-EX2I22M-d60JwUpeumzEZo",
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
            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
            //converted from seconds to millseconds by *1000 - autologout after 1 hour
            authCtx.login(data.idToken, expirationTime.toISOString());
            window.location = "/voting";
          });
        } else {
          return response.json().then((data) => {
            let errorMsg = "Sorry - something went wrong!";
            if (
              data.error.message === "INVALID_PASSWORD" ||
              data.error.message === "EMAIL_NOT_FOUND"
            ) {
              errorMsg =
                "Email and/or password are incorrect. Please check and try again";
            }
            throw new Error(errorMsg);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });

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
        <div className="login-help">
          {/* <div className="remember-me">
            <input type="checkbox" id="remember-me" />{" "}
            <label htmlFor="remember-me">Remember Me</label>
          </div> */}
          {/* <a href="/">Forgot Password?</a> */}
        </div>
      </label>
      <div className="form-actions">
        <button className="login-btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPageForm;
