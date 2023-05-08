import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-wrapper">
      <h1 className="navbar-logo">Alchemist Shack</h1>
      <ul className="navbar-menu">
        <Link to="/">
          <li className="menu-item">Home</li>
        </Link>
        <Link to="/Categories">
          <li className="menu-item">Potions</li>
        </Link>
        <li className="menu-item">Location</li>
        <li className="menu-item">Send us a raven</li>
      </ul>
    </div>
  );
}

export default Navbar;

// The browse will have a drop down menu with all the jewelry categories such as rings, amulets, earrings etc..
