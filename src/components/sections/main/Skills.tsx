"use client";

import React from "react";
import styled from "styled-components";

import Twemoji from "@components/Twemoji";
import GracefulImage from "@components/GracefulImage";
import { Container, Title } from "@styles/global-styles";

const SkillContainer = styled.div`
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

const SkillItem = styled.p`
  display: flex;
  align-items: center;

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

const SkillsArr = [
  "TypeScript",
  "NextJS",
  "React",
  "Redux",
  "GraphQL",
  "SASS",
  "Webpack",
  "Node",
  "Git & GitHub",
  "Docker",
  "Firebase",
  "MongoDB",
  "SQL",
];

interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => (
  <SkillItem>
    <Twemoji emoji="✨" /> {skill}
  </SkillItem>
);

const Skills = () => {
  return (
    <Container className="skills">
      <Title>
        <GracefulImage
          src="https://img.icons8.com/external-filled-color-icons-papa-vector/156/external-Skills-Sharing-technology-transfer-filled-color-icons-papa-vector.png"
          alt="laptop icon"
          width={54}
          height={54}
          loading="eager"
        />{" "}
        <p>Skills</p>
      </Title>
      <SkillContainer>
        {SkillsArr.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </SkillContainer>
    </Container>
  );
};

export default Skills;
