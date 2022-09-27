import React from "react";

import { Container, Hello, Name, Details, NameSpan } from "./styles";
import SocialMedia from "../SocialMedia";

const HeroSection = () => {
  return (
    <Container id="HeroSection">
      <Hello>
        hey there
        <span className="helloEmoji" role="img" aria-label="hello emoji">
          👋
        </span>
      </Hello>
      <Name>
        I'm <NameSpan>Saurabh Kumar Suryan</NameSpan>
      </Name>
      <Details>
        a tinkerer // perfectionist // who loves over engineering // building
        beautiful UIs // often found sipping chai over good music
      </Details>
      <SocialMedia />
    </Container>
  );
};

export default HeroSection;
