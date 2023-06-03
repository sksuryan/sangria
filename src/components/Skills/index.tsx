import React from "react";

import { Container, Title } from "../globalStyles";
import { SkillContainer, Skill as SkillStyle } from "./styles";
import useLazyLoad from "../../hooks/useLazyLoad";
import Twemoji from "../Twemoji";

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
  <SkillStyle>
    <Twemoji emoji="✨" /> {skill}
  </SkillStyle>
);

const Skills = () => {
  return (
    <Container className="skills">
      <Title>
        <img
          src="https://img.icons8.com/external-filled-color-icons-papa-vector/156/external-Skills-Sharing-technology-transfer-filled-color-icons-papa-vector.png"
          alt="laptop icon"
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
