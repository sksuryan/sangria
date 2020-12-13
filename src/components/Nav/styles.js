import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  height: 8vh;
  width: 100vw;

  top: 0;
  left: 0;

  margin: 0 auto;
  padding: 0 5vw;

  background-color: rgba(244, 248, 251, 0.6);
  backdrop-filter: blur(40px);

  border-bottom-right-radius: 50px;

  justify-content: space-between;
  align-items: center;

  z-index: 1;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Logo = styled.a`
  position: relative;
  font-family: "lilita one";
  font-size: 24px;
  color: black;

  text-decoration: none;

  margin: 0;
  padding: 0;

  &:active {
    color: black;
  }

  &:visited {
    color: black;
  }

  @media (min-width: 1024px) {
    &::after {
      position: absolute;
      display: block;
      bottom: 0;
      content: "";

      height: 2px;
      left: 50%;
      width: 0;

      background-color: #651fbf;

      transition: width 0.5s ease, left 0.5s ease;
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
