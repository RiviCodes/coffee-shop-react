import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <section id="header-section">
        <div id="header-logo">HEADER LOGO</div>
        <div className="header-links">
          <ul id="header-list">
            <li>
              <a href="test">LINK ONE</a>
            </li>
            <li>
              <a href="test">LINK TWO</a>
            </li>
            <li>
              <a href="test">ABOUT US</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
