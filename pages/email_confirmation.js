import * as Realm from "realm-web";
import { useEffect } from "react";

const EmailConfirmationScreen = () => {
  useEffect(() => {
    const app = new Realm.App({ id: process.env.REACT_APP_ID });
    //Grab Tokens
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const tokenId = params.get("tokenId");
    //Confirm client
    app.emailPasswordAuth
      .confirmUser({ token, tokenId })
      .then(() => displayResult("success"))
      .catch((err) => displayResult("error", err));
    //Display Message depending on result
    function displayResult(result, err) {
      const message = document.getElementById("message");
      if (result === "success") {
        message.innerText =
          "Your E-mail address has been verified.\n\n You may close this page. Thank you.";
      } else if (result === "error") {
        message.innerText =
          "Unable to register this user. Please try again to register." + err;
      }
    }
  }, []);

  return (
    <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1 style={{ textAlign: "center" }}>eBooth</h1>
          <h3 style={{ textAlign: "center" }}>Email Verification</h3>
          <p
            id="message"
            style={{ textAlign: "center", }}
          ></p>
        </div>
    </>
  );
};

export default EmailConfirmationScreen;
