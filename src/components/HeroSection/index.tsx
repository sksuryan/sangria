import React from "react";

import { Container, Hello, Name, Details, NameSpan } from "./styles";
import SocialMedia from "../SocialMedia";

const HeroSection = () => {
  return (
    <Container id="HeroSection">
      <Hello>
        hello there
        <span role="img" aria-label="hello emoji">
          👋
        </span>
      </Hello>
      <Name>
        I'm <NameSpan>Saurabh Kumar Suryan</NameSpan>
      </Name>
      <Details>
        A wanna be lifelong learner, who is passionate about new technologies
        and building things that interests him, currently pursuing B. Tech in
        CSE.
      </Details>
      <SocialMedia />
    </Container>
  );
};

export default HeroSection;
