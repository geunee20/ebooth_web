import React from "react";
import styles from "./styles.css";

const HomeScreen = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <img
          src={require("../assets/logo.png")}
          style={{
            width: "150px",
            height: "150px",
          }}
        />
      </div>
      <div>
        <home_title>Welcome to eBooth</home_title>
        <home_body>@official.eBooth</home_body>
      </div>
    </div>
  );
};

export default HomeScreen;
