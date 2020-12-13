import styled from "styled-components";

export const SkillType = styled.h1`
  font-family: "Montserrat";
  font-size: 28px;
  font-weight: 900;

  border-left: solid 4px #651fbf;
  padding-left: 12px;

  margin-top: 36px;

  margin-bottom: 16px;
  /* text-align: center; */
  @media (max-width: 768px) {
    margin-top: 24px;
    font-size: 24px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    text-align: initial;
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
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 500;

  padding: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
