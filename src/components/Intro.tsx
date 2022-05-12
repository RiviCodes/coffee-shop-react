import React from "react";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <>
      <section id="intro-section">
        <span className="intro-span">Welcome to</span>
        <h1 className="intro-h1">The Coffee Shop</h1>
        <p className="intro-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button id="explore-button">EXPLORE PRODUCTS</button>
      </section>
    </>
  );
}
