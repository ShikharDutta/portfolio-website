import React from "react";
import Header from "./components/header/header";
import Nav from "./components/navbar/navbar";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./styles.css";
import Education from "./components/Education/Education";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education/>
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
