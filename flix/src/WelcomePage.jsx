import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <h1 className="appTitle">Meowflix</h1>
      <div className="inputButtonContainer">
        <button
          className="welcomebutton"
          onClick={() => navigate("/registration")}
        >
          Discover
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
