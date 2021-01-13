import styled from "styled-components";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Container = styled.div`
  position: relative;
  z-index: 0;
`;

function App() {
  return (
    <Container>
      <Nav />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
