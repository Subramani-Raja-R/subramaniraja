import React from "react";
import Hero from "./sections/Hero";
import "./app.css";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Certificates from "./sections/Certificates";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Tech />
      <Certificates />
      <Footer />
    </>
  );
};

export default App;
