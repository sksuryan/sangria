import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;
  width: 100%;

  margin: 0 auto;
  padding-bottom: 96px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 900;

  border-left: solid 4px #651fbf;
  padding-left: 12px;

  margin-bottom: 16px;
  /* text-align: center; */

  & img {
    width: 50px;
    margin: 0 8px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
