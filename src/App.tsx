import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import coffeeData from "./coffeeData.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
      <About />
      <Products />
    </>
  );
}
