import React, { Suspense } from "react";

import Twemoji from "@components/Twemoji";
import { Container, Title } from "@styles/global-styles";

import {
  SkillContainer,
  SkillItem,
} from "@components/sections/main/Skills.styles";
import { dataSourceInstance } from "helpers/appwrite-client";

// components
import Image from "@components/GracefulImage";

const SkillsShimmer = () => {
  return (
    <SkillContainer>
      {[...new Array(9)].map((_, i) => (
        <SkillItem key={i}>
          <Twemoji emoji="✨" />{" "}
          <span
            style={{
              height: "18px",
              width: "96px",
              margin: "7px 0px",
              backgroundColor: "#e8e8e8",
            }}
          />
        </SkillItem>
      ))}
    </SkillContainer>
  );
};

const Skills = async () => {
  try {
    const skills = await dataSourceInstance.getSkills();

    return (
      <SkillContainer>
        {skills.map((skill) => (
          <SkillItem key={skill}>
            <Twemoji emoji="✨" /> {skill}
          </SkillItem>
        ))}
      </SkillContainer>
    );
  } catch (err) {
    return null;
  }
};

const SkillsWrapper = () => {
  return (
    <Container>
      <Title>
        <Image
          src="https://img.icons8.com/external-filled-color-icons-papa-vector/156/external-Skills-Sharing-technology-transfer-filled-color-icons-papa-vector.png"
          alt="laptop icon"
          width={54}
          height={54}
          loading="eager"
        />{" "}
        <p>Skills</p>
      </Title>

      <Suspense fallback={<SkillsShimmer />}>
        <Skills />
      </Suspense>
    </Container>
  );
};

export default SkillsWrapper;
