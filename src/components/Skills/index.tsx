import React from "react";

import { Container, Title } from "../globalStyles";
import { SkillContainer, Skill, SkillType } from "./styles";

function Skills() {
  return (
    <Container>
      <Title>
        <img
          src="https://img.icons8.com/bubbles/100/000000/laptop.png"
          alt="laptop icon"
        />{" "}
        <p>Skills</p>
      </Title>
      <>
        <SkillType>
          <img
            src="https://img.icons8.com/bubbles/100/000000/books.png"
            alt="book icon"
          />{" "}
          <p>Languages:</p>
        </SkillType>
        <SkillContainer>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Python
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            JavaScript
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            HTML
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            CSS3
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            C/C++
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Java
          </Skill>
        </SkillContainer>
      </>
      <>
        <SkillType>
          <img
            src="https://img.icons8.com/bubbles/100/000000/linux-client.png"
            alt="linux server icon"
          />{" "}
          <p>Libraries / Tools:</p>
        </SkillType>
        <SkillContainer>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            React
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Node
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Flask
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Git
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Docker
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            CI/CD
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            MongoDB
          </Skill>
          <Skill>
            <span role="img" aria-label="sparkles emoji">
              ✨
            </span>{" "}
            Firebase
          </Skill>
        </SkillContainer>
      </>
    </Container>
  );
}

export default Skills;
