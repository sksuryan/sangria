import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// sections
import Landing from "../sections/Landing";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Project";

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
    <Container>
      <Head>
        <title>@sksuryan</title>
      </Head>
      <Landing />

      <Skills />
      <Experience />
      <Projects />

      <Footer />
    </Container>
  );
};

export default App;
