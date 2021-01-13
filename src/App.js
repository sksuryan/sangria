import styled from "styled-components";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Container = styled.div`
  height: 100vh;

  position: relative;
  z-index: 0;
`;

const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;

  /* background: url("https://source.unsplash.com/alS7ewQ41M8"); */
  background-size: cover;
  filter: blur(10px);

  z-index: -1;

  & img {
    height: 100%;
    width: 100%;

    object-fit: cover;
  }
`;

function App() {
  return (
    <>
      <Background />
      <Container>
        <Nav />
        <HeroSection />
        <Skills />
        <Projects />
        <Footer />
      </Container>
    </>
  );
}

export default App;
