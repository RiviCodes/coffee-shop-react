import React from "react";

export default function Header() {
  return (
    <>
      <section id="main-header">
        <div id="header-logo">HEADER LOGO</div>
        <div className="header-links">
          <ul id="main-header-list">
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
