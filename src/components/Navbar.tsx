import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <section id="header-section">
        <div className="header--left_side">
          <img
            src="./images/header/coffee-beans.png"
            alt="Beans Logo"
            className="header--beans_logo"
          />
          <div id="header-logo">COFFEE SHOP</div>
        </div>
        <div className="header--right_side">
          <ul id="header-list">
            <li className="header--li_item">
              <a className="header-anchor" href="test">
                LINK ONE
              </a>
            </li>
            <li className="header--li_item">
              <a className="header-anchor" href="test">
                LINK TWO
              </a>
            </li>
            <li className="header--li_item">
              <a className="header-anchor" href="test">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
