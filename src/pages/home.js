import React from "react";
import "./styles.css";

const HomeScreen = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={require("../assets/logo.png")} alt={""} />
      <div>
        <home_title>Welcome to eBooth</home_title>
        <home_body>@official.eBooth</home_body>
      </div>
    </div>
  );
};

export default HomeScreen;
