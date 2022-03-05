import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
        <Projects />
      </Suspense>
      <Footer />
    </Container>
  );
};

export default App;
