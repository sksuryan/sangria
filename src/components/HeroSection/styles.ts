import styled, { keyframes } from 'styled-components';

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
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 300;
  font-style: italic;

  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const Name = styled.h1`
  font-family: 'Poppins';
  font-size: 42px;
  font-weight: 900;

  margin-bottom: 16px;
  /* text-align: center; */
  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 450px) {
    font-size: 26px;
    text-align: initial;
  }
`;

export const Details = styled.p`
  font-family: 'Poppins';
  font-weight: 400;

  width: 42%;
  /* text-align: center; */

  margin-bottom: 16px;
  padding-left: 12px;
  border-left: solid 4px #651fbf;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 450px) {
    width: 90%;
    text-align: initial;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 50% 100%;
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
