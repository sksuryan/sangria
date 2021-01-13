import { Container, Title } from "../globalStyles";

import { SkillContainer, Skill, SkillType } from "./styles";

function Skills() {
  return (
    <Container>
      <Title>
        <img
          src="https://img.icons8.com/bubbles/50/000000/laptop.png"
          alt="laptop icon"
        />{" "}
        <p>Skills</p>
      </Title>
      <>
        <SkillType>
          <img
            src="https://img.icons8.com/bubbles/50/000000/books.png"
            alt="book icon"
          />{" "}
          <p>Languages:</p>
        </SkillType>
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
        <SkillType>
          <img
            src="https://img.icons8.com/bubbles/50/000000/linux-client.png"
            alt="linux server icon"
          />{" "}
          <p>Libraries / Tools:</p>
        </SkillType>
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
