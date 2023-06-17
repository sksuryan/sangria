"use client";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  z-index: 0;

  width: 75%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;
