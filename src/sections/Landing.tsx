import React from "react";
import styled from "styled-components";

import Twemoji from "@components/Twemoji";
import SocialMedia from "@components/SocialMedia";
import { gradientAnimation } from "@styles/global-styles";

export const Container = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;

  flex-direction: column;

  justify-content: center;

  margin: 0 auto;

  @media (max-width: 450px) {
    height: 70vh;
  }
`;

export const Hello = styled.h1`
  font-size: 18px;
  font-weight: 300;
  font-style: italic;

  margin: 8px 0;
`;

export const Name = styled.h1`
  font-size: 42px;
  font-weight: 900;

  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 450px) {
    font-size: 26px;
    text-align: initial;
  }
`;

export const Details = styled.p`
  font-weight: 400;

  width: 42%;

  margin-bottom: 16px;
  padding-left: 12px;
  border-left: solid 4px #651fbf;

  @media (max-width: 1024px) {
    width: 75%;
    font-size: 16px;
  }

  @media (max-width: 450px) {
    width: 90%;
    text-align: initial;
    font-size: 14px;
  }
`;

export const NameSpan = styled.span`
  display: inline-block;
  line-break: strict;

  animation: ${gradientAnimation} 4s ease-in-out infinite alternate;
  user-select: none;

  background: linear-gradient(90deg, #4614a8, #8e2de2);
  background-size: 400%;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Landing = () => {
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

export default Landing;
