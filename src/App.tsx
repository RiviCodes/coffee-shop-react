import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
/* import About from "./components/About"; */
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
    </>
  );
}
