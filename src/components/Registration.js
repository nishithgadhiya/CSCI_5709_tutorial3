import React, { useState } from "react";
import "../App.css";

function Registration(props) {
  const [error, setError] = useState(true);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const ONLY_CHARACTERS = "Field can only contain alphabets!!";
  const INVALID_EMAIL = "Email is invalid!!";
  const PASSWORD_NOT_MATCH = "Both Passwords are not matching!!";
  const INVALID_PASSWORD =
    "Password should of minimum 8 characters with alpha-numeric and special characters.!!";
  const ALPHABET_REGEX = /^[a-zA-Z]+$/;
  const EMAIL_REGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX =
    /^(?=.*[\w])(?=.*\d)(?=.*[@$!%*#?&])[\w\d@$!%*#?&].{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (EMAIL_REGEX.test(email)) {
      setError(false);
      setEmailError("");
      if (password !== confirmPassword) {
        setConfirmPasswordError(PASSWORD_NOT_MATCH);
        setError(true);
      } else {
        props.setIsUserLogged(true);
        props.setEmail(email);
        props.setFirstName(firstName);
        props.setLastName(lastName);
      }
    } else {
      setError(true);
      setEmailError(INVALID_EMAIL);
    }

    console.log(passwordError);
  };

  const handleFNameChange = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      if (ALPHABET_REGEX.test(val)) {
        setError(false);
        setFirstNameError("");
      } else {
        setError(true);
        setFirstNameError(ONLY_CHARACTERS);
      }
    }
    setFirstName(val);
  };

  const handleLNameChange = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      if (ALPHABET_REGEX.test(val)) {
        setError(false);
        setLastNameError("");
      } else {
        setError(true);
        setLastNameError(ONLY_CHARACTERS);
      }
    }
    setLastName(val);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      setError(false);
      setEmailError("");
    }
    setEmail(val);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      if (PASSWORD_REGEX.test(val)) {
        setError(false);
        setPasswordError("");
      } else {
        setError(true);
        setPasswordError(INVALID_PASSWORD);
      }
    }
    setPassword(val);
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      if (PASSWORD_REGEX.test(val)) {
        setError(false);
        setConfirmPasswordError("");
      } else {
        setError(true);
        setPasswordError("");
        setConfirmPasswordError(INVALID_PASSWORD);
      }
    }
    setConfirmPassword(val);
  };

  const errorStyle = {
    fontSize: "0.7rem",
    color: "red",
  };

  return (
    <div class="contain">
      <div class="wrapper">
        <div class="form">
          <h3>Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="item1">
              <label>First name</label>
              <input
                required
                type="text"
                value={firstName}
                name="firstName"
                onChange={handleFNameChange}
              />
              {firstNameError && firstName ? (
                <p style={errorStyle}>{firstNameError}</p>
              ) : (
                ""
              )}
            </div>
            <div className="item2">
              <label>Last Name</label>
              <input
                required
                type="text"
                value={lastName}
                onChange={handleLNameChange}
              />
              {lastNameError && lastName ? (
                <p style={errorStyle}>{lastNameError}</p>
              ) : (
                ""
              )}
            </div>
            <div className="full-width">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && email ? (
                <p style={errorStyle}>{emailError}</p>
              ) : (
                ""
              )}
            </div>
            <div className="item4">
              <label>Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && password ? (
                <p style={errorStyle}>{passwordError}</p>
              ) : (
                ""
              )}
            </div>
            <div className="item4">
              <label>Confirm Password</label>
              <input
                required
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {confirmPasswordError && confirmPassword ? (
                <p style={errorStyle}>{confirmPasswordError}</p>
              ) : (
                ""
              )}
            </div>
            <div class="full-width">
              <button disabled={error ? true : false}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
