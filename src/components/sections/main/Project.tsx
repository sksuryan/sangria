"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Twemoji from "@components/Twemoji";
import { Container, Title } from "@styles/global-styles";

export const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 1fr 1fr;

  padding: 32px;

  justify-content: space-around;
  gap: 28px;

  @media (max-width: 1525px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    padding: 12px;
    grid-template-columns: 1fr;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  border-bottom-right-radius: 50px;
  border: 1px solid black;

  padding: 24px;
`;

export const ProjectName = styled.p`
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 500;

  /* margin-bottom: 12px; */

  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const ProjectDetails = styled.p`
  font-size: 16px;
  font-weight: 400;

  text-align: justify;

  width: 100%;

  margin: 12px 0;

  color: #2e2e2e;

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
  margin-top: auto;
  padding: 8px 0;

  & > * {
    margin: 4px;
    margin-left: 0;
    margin-right: 12px;
  }

  & img {
    height: 36px;
    width: 36px;
  }

  @media (max-width: 768px) {
    padding: 8px 0px;
  }

  @media (max-width: 550px) {
    & img {
      height: 24px;
      width: 24px;
    }
  }
`;

function Projects() {
  return (
    <Container>
      <Title>
        <Image
          src="https://img.icons8.com/dusk/256/rocket--v1.png"
          alt="rocket icon"
          width={54}
          height={54}
          loading="lazy"
        />{" "}
        <p>Projects</p>
      </Title>
      <ProjectsContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="🔥" /> autoflow
          </ProjectName>
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
            <a
              href="https://github.com/MLH-Fellowship/autoflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://pypi.org/project/python-af/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/96/000000/link--v1.png"
                alt="link to the project"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="💕" /> good vibes only
          </ProjectName>
          <ProjectDetails>
            Good Vibes Only delivers daily positive news and wholesome content
            from around the world. People need a well-balanced media diet, so
            our daily dose of ‘News to Enthuse’ is like Vitamin G for the
            spirit.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">node (express, ejs)</span>,{" "}
            <span className="highlight">mongoDB</span>,{" "}
            <span className="highlight">python</span>
          </ProjectDetails>
          <ProjectLinks>
            <a
              href="https://github.com/MLH-Fellowship/Good-Vibes-Only"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://testsfront.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/96/000000/link--v1.png"
                alt="link to the project"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="🎶" /> flyrics
          </ProjectName>
          <ProjectDetails>
            Did you ever want to sing along to a song but don't know the lyrics?
            Flyrics uses Artifical Intelligence and Machine Learning to generate
            lyrics for a song in a matter of minutes. No need to search online
            databases just to find out the lyrics to a song.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">react native</span>,{" "}
            <span className="highlight">python (flask, spleeter)</span>,{" "}
            <span className="highlight">google speech to text api</span>
          </ProjectDetails>
          <ProjectLinks>
            <a
              href="https://github.com/AhadKhan98/Flyrics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="🥰" /> cheery
          </ProjectName>
          <ProjectDetails>
            Cheery is a wholesome bot for developers which periodically sends
            you cute messages and reminders to take care of yourself on your
            Discord Server.
          </ProjectDetails>
          <ProjectDetails>
            built using:{" "}
            <span className="highlight">python(discord.py, flask)</span>,{" "}
            <span className="highlight">mongoDB</span>,{" "}
          </ProjectDetails>
          <ProjectLinks>
            <a
              href="https://github.com/0xSaurabh/Cheery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="😈" /> evil in jaffar
          </ProjectName>
          <ProjectDetails>
            Evil King of Jaffar is the greatest known servant of evil spirits to
            exist in the world who wants to rule the world using the eternal
            fire of dark power. You are the Prince of Yemen born to defeat the
            Evil King of Jaffar and fulfill the prophecy of the heavens. For
            this, you must set off on a journey to distant lands and clear each
            Quest to defeat the EVIL IN JAFFAR!
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">unity & c#</span>
          </ProjectDetails>
          <ProjectLinks>
            <a
              href="https://github.com/MLH-Fellowship/Evil-in-Jaffar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="🤖" /> monday-api
          </ProjectName>
          <ProjectDetails>
            API for Telegram Bot that automates attendance for Amitians by
            scraping Amity's website and using Telegram to send regular updates
            to the student.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">python, flask & BS4</span>
          </ProjectDetails>
          <ProjectLinks>
            <a
              href="https://github.com/0xSaurabh/monday-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://thecodelife.science.blog/2020/08/07/automating-my-attendance-with-python/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/wired/64/000000/wordpress.png"
                alt="link to the blog"
              />
            </a>
            <a
              href="https://api-monday.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/96/000000/link--v1.png"
                alt="link to the project"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectName>
            <Twemoji emoji="😷" /> coviz
          </ProjectName>
          <ProjectDetails>
            CoViz. is a data visualization for COVID-19 data from around the
            world. The data is fetched from a REST API provided by
            about-corona.net.
          </ProjectDetails>
          <ProjectDetails>
            built using: <span className="highlight">react, d3.js</span>
          </ProjectDetails>
          <ProjectLinks>
            <a
              href="https://github.com/0xSaurabh/covid-19-viz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/64/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://thecodelife.science.blog/2020/05/01/my-first-data-visualization-project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/wired/64/000000/wordpress.png"
                alt="link to the blog"
              />
            </a>
            <a
              href="https://cviz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/96/000000/link--v1.png"
                alt="link to the project"
              />
            </a>
          </ProjectLinks>
        </ProjectContainer>
      </ProjectsContainer>
    </Container>
  );
}

export default Projects;
