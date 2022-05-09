import React from "react";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <>
      <section id="intro-section">
        <h1 className="intro-h1">Welcome to</h1>
        <h2 className="intro-h2">The Coffee Shop</h2>
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
