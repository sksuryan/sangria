import React from "react";
import styled from "styled-components";

import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import HeroSection from "./components/HeroSection";

const Container = styled.div`
  position: relative;
  z-index: 0;

  width: 75%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const App = () => {
  return (
    <Container>
      <Nav />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
};

export default App;
