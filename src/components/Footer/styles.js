import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(244, 248, 251, 0.2);
  backdrop-filter: blur(40px);

  border-top-left-radius: 50px;

  padding: 0 5vw;

  @media (min-width: 768px) {
    & > a {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin-right: 32px;
    }
  }

  @media (max-width: 550px) {
    height: 15%;
  }

  & img {
    height: 48px;
    width: 48px;
  }
`;

export const DesignedBy = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  font-style: italic;

  padding: 24px 16px;
  padding-bottom: 8px;

  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 8px;
  }

  & span {
    font-style: normal;
  }
`;

export const Icons8 = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 300;
  font-style: italic;

  padding-bottom: 16px;

  & > a {
    color: black;
    text-decoration: underline;
  }

  & > a:active {
    color: black;
  }

  & > a:visited {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
