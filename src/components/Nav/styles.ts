import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: sticky;
  display: flex;
  width: 100%;

  top: 0;

  backdrop-filter: blur(12px);
  z-index: 1;
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

export const InnerContainer = styled.div`
  width: 75%;
  max-width: 1440px;
  margin: 0 auto;

  height: 6vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #d8e3e7;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Logo = styled.a`
  position: relative;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 800;
  color: black;

  text-decoration: none;

  margin: 0;
  padding: 0;

  background: linear-gradient(90deg, #4614a8, #8e2de2);
  animation: ${gradientAnimation} 4s ease-in-out infinite alternate;
  user-select: none;

  background-size: 400%;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
