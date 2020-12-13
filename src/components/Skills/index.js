import { Container, Title } from "../globalStyles";

import { SkillContainer, Skill, SkillType } from "./styles";

function Skills() {
  return (
    <Container>
      <Title>👨‍💻 Skills</Title>
      <>
        <SkillType>📚 Languages:</SkillType>
        <SkillContainer>
          <Skill>✨ Python</Skill>
          <Skill>✨ JavaScript</Skill>
          <Skill>✨ HTML</Skill>
          <Skill>✨ CSS3</Skill>
          <Skill>✨ C/C++</Skill>
          <Skill>✨ Java</Skill>
        </SkillContainer>
      </>
      <>
        <SkillType>🐧 Libraries / Tools:</SkillType>
        <SkillContainer>
          <Skill>✨ React</Skill>
          <Skill>✨ Node</Skill>
          <Skill>✨ Flask</Skill>
          <Skill>✨ Git</Skill>
          <Skill>✨ Docker</Skill>
          <Skill>✨ CI/CD</Skill>
          <Skill>✨ MongoDB</Skill>
          <Skill>✨ Firebase</Skill>
        </SkillContainer>
      </>
    </Container>
  );
}

export default Skills;
