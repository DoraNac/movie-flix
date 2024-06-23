import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login-form">
      <h2>LOGIN TO MEOWFLIX</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Link to="/homepage">
        {" "}
        <button>LOGIN</button>
      </Link>
      <p className="auth-switch">
        Don't have an acccount yet?{" "}
        <Link to="/registration">register here!</Link>
      </p>
    </div>
  );
};

export default LoginForm;
