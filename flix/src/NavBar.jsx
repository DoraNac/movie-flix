import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Meowflix</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/homepage">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
        <li>
          <Link to="/my-list">My List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
