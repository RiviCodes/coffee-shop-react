import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <section id="navbar-section">
      <div className="navbar--left_side">
        <img
          src="./images/header/coffee-beans.png"
          alt="Beans Logo"
          className="navbar--beans_logo"
        />
        <div id="navbar-logo">COFFEE SHOP</div>
      </div>
      <div className="navbar--right_side">
        <ul id="navbar-list">
          <li className="navbar--li_item">
            <a className="navbar-anchor" href="test">
              LINK ONE
            </a>
          </li>
          <li className="navbar--li_item">
            <a className="navbar-anchor" href="test">
              LINK TWO
            </a>
          </li>
          <li className="navbar--li_item">
            <a className="navbar-anchor" href="test">
              ABOUT US
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
