import React from "react";
import { NavLink } from "react-router-dom";
// import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <h2>Writeit</h2>
        </NavLink>
      </div>
      <nav className="navigation">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
