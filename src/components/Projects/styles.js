import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 1fr 1fr;

  padding: 32px;

  justify-content: space-around;
  gap: 48px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    padding: 12px;
    grid-template-columns: 1fr;
  }
`;

export const ProjectContainer = styled.div`
  height: 100%;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(40px);
  border-bottom-right-radius: 50px;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.1);

  padding: 48px;

  @media (max-width: 1024px) {
    padding: 36px;
  }
`;

export const ProjectName = styled.p`
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 500;

  padding-bottom: 16px;

  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const ProjectDetails = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 300;

  text-align: justify;

  width: 100%;

  margin: 8px 0;

  padding: 8px 0px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 0px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }

  .highlight {
    font-weight: 500;
    font-style: italic;
  }
`;

export const ProjectLinks = styled.div`
  padding: 8px 0;

  & > * {
    margin: 4px;
    margin-left: 0;
  }

  & img {
    height: 32px;
    width: 32px;
  }

  @media (max-width: 768px) {
    padding: 8px 0px;
  }
`;
