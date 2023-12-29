import React from "react";
import "./App.css";
import { Reset } from "styled-reset";
import Header from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
