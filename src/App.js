import React, { useEffect, useState } from "react";
import "./App.css";
import "./assets/style/style.scss";
import { Reset } from "styled-reset";
import Loading from "./pages/Loading";
import Header from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <About />
          <Skills />
          <Project />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
