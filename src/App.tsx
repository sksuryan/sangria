import React from "react";
import styled from "styled-components";

import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Container = styled.div`
  position: relative;
  z-index: 0;

  width: 75%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const App = () => {
  return (
    <>
      <Nav />
      <Container>
        <HeroSection />

        <Skills />
        <Experience />
        <Projects />

        <Footer />
      </Container>
    </>
  );
};

export default App;
