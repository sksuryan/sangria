import { Container, Title } from "../globalStyles";
import {
  ProjectContainer,
  ProjectDetails,
  ProjectLinks,
  ProjectName,
  ProjectsContainer,
} from "./styles";

function Projects() {
  return (
    <Container>
      <Title>🚀 Projects</Title>
      <ProjectsContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
          <ProjectDetails>
            a CLI tool to jump to multiple projects from anywhere in the
            directory structure, start your development environments more
            easily, and set up new projects and initialize github repos with
            less commands.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">python</span>,{" "}
            <span className="highlight">click.py</span>
          </ProjectDetails>
          <ProjectLinks>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
          <ProjectDetails>
            a CLI tool to jump to multiple projects from anywhere in the
            directory structure, start your development environments more
            easily, and set up new
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">python</span>,{" "}
            <span className="highlight">click.py</span>
          </ProjectDetails>
          <ProjectLinks>
            <a href="github.com">
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
          <ProjectDetails>
            a CLI tool to jump to multiple projects from anywhere in the
            directory structure, start your development environments more
            easily, and set up new projects and initialize github repos with
            less commands.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">python</span>,{" "}
            <span className="highlight">click.py</span>
          </ProjectDetails>
          <ProjectLinks>
            <a href="github.com">
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
          <ProjectDetails>
            a CLI tool to jump to multiple projects from anywhere in the
            directory structure, start your development environments more
            easily, and set up new projects and initialize github repos with
            less commands.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">python</span>,{" "}
            <span className="highlight">click.py</span>
          </ProjectDetails>
          <ProjectLinks>
            <a href="www.github.com" target="_blank">
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>🔥 autoflow</ProjectName>
          <ProjectDetails>
            a CLI tool to jump to multiple projects from anywhere in the
            directory structure, start your development environments more
            easily, and set up new projects and initialize github repos with
            less commands.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">python</span>,{" "}
            <span className="highlight">click.py</span>
          </ProjectDetails>
          <ProjectLinks>
            <a href="github.com">
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
      </ProjectsContainer>
    </Container>
  );
}

export default Projects;
