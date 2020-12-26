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

  top: 0;
  bottom: 0;
  left: -40px;
  right: -40px;

  margin: -40px;
  margin-bottom: 0;

  /* background: #fcfcfc; */
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
      <Background>
        <img src="https://source.unsplash.com/alS7ewQ41M8" alt="background" />
      </Background>
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
