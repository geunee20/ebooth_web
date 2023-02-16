import * as Realm from "realm-web";
import React, { useState } from "react";

const PasswordResetPage = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_ID });
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  const tokenId = params.get("tokenId");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const lowercasePattern = /^(?=.*[a-z])/;
  const uppercasePattern = /^(?=.*[A-Z])/;
  const numberPattern = /^(?=.*[0-9])/;
  const specialPattern = /^(?=.*[!@#%&])/;
  const numLetterPattern = /^.{6,16}$/;

  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [numLetter, setNumLetter] = useState(false);

  function handlePasswordChange(event) {
    setNewPassword(event.target.value);
    setLowercase(lowercasePattern.test(event.target.value));
    setUppercase(uppercasePattern.test(event.target.value));
    setNumber(numberPattern.test(event.target.value));
    setSpecial(specialPattern.test(event.target.value));
    setNumLetter(numLetterPattern.test(event.target.value));
  }

  const handleClick = () => {
    if (
      lowercase &&
      uppercase &&
      number &&
      special &&
      numLetter &&
      newPassword === confirmPassword
    ) {
      app.emailPasswordAuth
        .resetPassword({ password: newPassword, token, tokenId })
        .then(() => displayResult("success"))
        .catch((err) => displayResult("error", err));
    }
  };

  function displayResult(result, err) {
    if (result === "success") {
      setMessage(
        "You successfully changed your password.\n\n You may close this page. Thank you."
      );
    } else if (result === "error") {
      setMessage(
        "Unable to register this user. Please try again to register." + err
      );
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>eBooth</h1>
      <div id="newPasswordContainer">
        <p id="title">New password:</p>
        <div style={{ width: "2%" }}></div>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="validationContainer">
          {lowercase ? (
            <p class="valid">Lower case</p>
          ) : (
            <p class="invalid">Lower case</p>
          )}
          {uppercase ? (
            <p class="valid">Upper case</p>
          ) : (
            <p class="invalid">Upper case</p>
          )}
          {special ? (
            <p class="valid">Special ( !@#%& )</p>
          ) : (
            <p class="invalid">Special ( !@#%& )</p>
          )}
        </div>
        <div id="validationContainer">
          {number ? <p class="valid">Number</p> : <p class="invalid">Number</p>}
          {numLetter ? (
            <p class="valid">6 ~ 16 letters</p>
          ) : (
            <p class="invalid">6 ~ 16 letters</p>
          )}
        </div>
      </div>
      <div id="newPasswordContainer">
        <p id="title">Confirm password:</p>
        <div style={{ width: "2%" }}></div>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          marginBottom: "2%",
        }}
      >
        <div id="validationContainer">
          {newPassword === confirmPassword &&
          lowercase &&
          uppercase &&
          special &&
          number &&
          numLetter &&
          confirmPassword.length ? (
            <p class="valid">Confirmed</p>
          ) : (
            <p class="invalid">Confirmed</p>
          )}
        </div>
      </div>
      <button type="button" id="button" onClick={handleClick}>
        Reset Password
      </button>
      <p
        id="message"
        style={{ textAlign: "center", backgroundColor: "whitesmoke" }}
      >
        {message}
      </p>
    </div>
  );
};

export default PasswordResetPage;
