import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
    </>
  );
}
