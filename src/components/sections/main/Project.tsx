import React from "react";

import Twemoji from "@components/Twemoji";
import { Container, Title } from "@styles/global-styles";
import GracefulImage from "@components/GracefulImage";

import {
  ProjectContainer,
  ProjectDetails,
  ProjectLinks,
  ProjectName,
  ProjectsContainer,
} from "@components/sections/main/Projects.styles";
import { ProjectType, dataSourceInstance } from "helpers/appwrite-client";

const Project: React.FC<ProjectType> = (props) => {
  return (
    <ProjectContainer>
      <ProjectName>
        <Twemoji emoji={props.emoji} />
        {" " + props.name}
      </ProjectName>
      <ProjectDetails>{props.description}</ProjectDetails>
      <ProjectDetails>
        built using:{" "}
        {props.tech.map((i, index, arr) => (
          <span className="highlight" key={index}>
            {i + (index !== arr.length - 1 ? ", " : "")}
          </span>
        ))}
      </ProjectDetails>
      <ProjectLinks>
        {props["github-url"] ? (
          <a
            href={props["github-url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios/64/000000/github.png"
              alt="github"
            />
          </a>
        ) : null}
        {props.website ? (
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios/96/000000/link--v1.png"
              alt="link to the project"
            />
          </a>
        ) : null}
        {props["blog-url"] ? (
          <a href={props["blog-url"]} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/wired/64/000000/wordpress.png"
              alt="link to the blog"
            />
          </a>
        ) : null}
      </ProjectLinks>
    </ProjectContainer>
  );
};

const Projects = async () => {
  try {
    const projects = await dataSourceInstance.getProjects();

    return (
      <ProjectsContainer>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </ProjectsContainer>
    );
  } catch (err) {
    return null;
  }
};

const ProjectsWrapper = () => {
  return (
    <Container>
      <Title>
        <GracefulImage
          src="https://img.icons8.com/dusk/256/rocket--v1.png"
          alt="rocket icon"
          width={54}
          height={54}
          loading="lazy"
        />{" "}
        <p>Projects</p>
      </Title>
      <Projects />
    </Container>
  );
};

export default ProjectsWrapper;
