import styled from "styled-components";

import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

const Container = styled.div`
  height: 100vh;

  position: relative;
  z-index: 0;
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;

  background: url('https://source.unsplash.com/7JX0-bfiuxQ');
  filter: blur(40px);

  z-index: -1;
`;

function App() {
  return (
    <>
    <Background />
    <Container>
      <Nav />
      <HeroSection />
    </Container>
    </>
  );
}

export default App;
