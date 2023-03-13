import React from "react";
import { useState } from "react";

const EventScreen = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <img
        className="img_event"
        src={require("../assets/eBooth_poster.jpeg")}
        alt={"loading..."}
        onLoad={(e) => {
          setLoading(false);
        }}
      />
      <div
        style={{
          display: loading ? "block" : "none",
          fontSize: "24px",
        }}
      >
        Loading
      </div>
    </div>
  );
};

export default EventScreen;
