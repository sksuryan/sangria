import React from "react";
import { Container, DesignedBy, Icons8 } from "./styles";
import Twemoji from "../Twemoji";

const Footer = () => {
  return (
    <Container>
      <a href="#HeroSection">
        <img
          className="up"
          src="https://img.icons8.com/clouds/100/000000/up.png"
          alt="back to top"
        />
      </a>
      <DesignedBy>
        designed with <Twemoji emoji="❤️" /> by @0xSaurabh
      </DesignedBy>
      <Icons8>
        icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          icons8
        </a>
      </Icons8>
    </Container>
  );
};

export default Footer;
