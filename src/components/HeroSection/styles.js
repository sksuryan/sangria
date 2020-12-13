import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 90%;

  flex-direction: column;

  justify-content: center;
  /* padding-top: 20vh; */

  margin: 0 auto;

  @media (max-width: 450px) {
    padding-top: 36%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Hello = styled.h1`
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
  font-family: "Montserrat";
  font-size: 17px;
  font-weight: 500;

  width: 42%;
  text-align: justify;
  /* text-align: center; */

  margin-bottom: 16px;
  padding-left: 12px;
  border-left: solid 4px #651fbf;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
    width: 90%;
    text-align: initial;
  }
`;

export const NameSpan = styled.span`
  display: inline-block;
  line-break: strict;
  color: #651fbf;
`;
