"use client";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: max-content;
  width: 100%;

  margin: 0 auto;
  padding-bottom: 96px;

  display: flex;
  flex-direction: column;
`;

export const gradientAnimation = keyframes`
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

export const Title = styled.div`
  display: flex;
  align-items: center;

  font-size: 36px;
  font-weight: 900;

  border-left: solid 4px #651fbf;
  padding-left: 12px;

  margin-bottom: 16px;

  animation: ${gradientAnimation} 4s ease-in-out infinite alternate;
  user-select: none;

  background: ${(props) => props.theme.isDark ? 'linear-gradient(to right, #FFC371, #FF5F6D)' : 'linear-gradient(45deg, #8a2387, #e94057, #f27121)'}  ;
  background-size: 400%;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  & img {
    width: 50px;
    height: auto;
    margin: 0 8px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
