import React from "react";
import { FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
      <a href="/new-sessions">Create New Sessions</a>
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}> </span>
      </div>
      <div style={{ float: "right" }}> </div>
    </>
  );
}

export default LandingPage;
