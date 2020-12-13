import styled from "styled-components";

export const Container = styled.div`
  height: max-content;
  width: 90%;

  margin: 0 auto;
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    height: max-content;
  }
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: 900;

  border-left: solid 4px #651fbf;
  padding-left: 12px;

  margin-bottom: 16px;
  /* text-align: center; */
  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
    text-align: initial;
  }
`;
