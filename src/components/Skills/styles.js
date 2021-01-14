import styled from "styled-components";

export const SkillType = styled.h1`
  display: flex;
  align-items: center;

  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 900;

  border-left: solid 4px #d6d6d6;
  padding-left: 12px;

  margin-top: 36px;

  margin-bottom: 16px;
  /* text-align: center; */

  & img {
    width: 50px;
    margin: 0 8px;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    font-size: 22px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
    text-align: initial;

    & img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const SkillContainer = styled.div`
  position: relative;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 336px) {
    grid-template-columns: 1fr;
  }
`;

export const Skill = styled.p`
  display: flex;
  align-items: center;

  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 400;

  padding: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
