import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  & > * {
    height: 32px;
    width: 32px;
    margin: 8px;
  }

  @media (max-width: 550px) {
    & > * {
      height: 24px;
      width: 24px;
    }
  }
`;
