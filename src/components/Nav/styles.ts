import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  display: flex;
  height: 8vh;
  width: 100%;

  background-color: white;

  top: 0;

  border-bottom: 1px solid #d8e3e7;

  justify-content: space-between;
  align-items: center;

  z-index: 1;
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
