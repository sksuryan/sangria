import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  & img {
    height: 32px;
    width: 32px;
    margin: 8px;
  }

  @media (max-width: 550px) {
    & img {
      height: 24px;
      width: 24px;
    }
  }
`;
