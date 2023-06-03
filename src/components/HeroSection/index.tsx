import React from "react";

import { Container, Hello, Name, Details, NameSpan } from "./styles";
import SocialMedia from "../SocialMedia";
import Twemoji from "../Twemoji";

const HeroSection = () => {
  return (
    <Container id="HeroSection">
      <Hello>
        hey there
        <Twemoji className="helloEmoji" emoji="👋" />
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
