import React from "react";
import Theme_Toggler from "./ThemeButton";
import Header from "./HeroSection";
import Nav from "./Nav";
import Projects from "./Projects";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <Theme_Toggler />
      <Nav />

      <Header />
      <Projects/>
      <Footer />
    </>
  );
};

export default Home;
