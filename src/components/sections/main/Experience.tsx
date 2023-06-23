"use client";
import React from "react";
import styled from "styled-components";

import Twemoji from "@components/Twemoji";
import GracefulImage from "@components/GracefulImage";
import { Container, Title } from "@styles/global-styles";

const Details = [
  {
    title: "Jupiter Money",
    role: "SDE l (frontend)",
    dates: "Jun’22 – till this date // Bangalore, India",
    details: [
      "- Building custom components the Jupiter app using React & TypeScript",
      "- Writing custom hooks which create better DevX, reduce renders & load times.",
    ],
  },
  {
    title: "AfterShoot",
    role: "Full Stack Developer Intern",
    dates: "Sept’21 – May’22 // New Delhi, India",
    details: [
      "- Built multiple responsive components for the AfterShoot app using React, TypeScript & SCSS",
      "- Worked on the revamping the state management of the AfterShoot app using Redux.",
      "- Worked on improving the overall performance & reducing rerenders of AfterShoot app.",
    ],
  },
  {
    title: "Coinvise",
    role: "Frontend Developer Intern",
    dates: "May’21 – Aug’21 // New Delhi, India",
    details: [
      "- Built UI components & worked on the redesign of the Coinvise platform using NextJS, TypeScript, React, Tailwind.",
      "- Worked on integrating the frontend with the backend & GraphQL server.",
      "- Worked on integrating Ethereum Smart Contracts for the platform using Web3JS.",
    ],
  },
  {
    title: "BlueTeak Labs",
    role: "Software Development Intern",
    dates: "Jun’21 – Jul’21 // New Delhi, India",
    details: [
      "- Worked on the building components & state management of an internal tool using React, Redux, Bootstrap. ",
    ],
  },
  {
    title: "Joomla",
    role: "Open-Source Contributor",
    dates: "Mar’21",
    details: [
      "- Made open-source contributions to Joomla CMS.",
      "- 12 PRs merged. ",
    ],
  },
  {
    title: "MLH Fellowship",
    role: "MLH Fellow (Batch 1)",
    dates: "Oct’21 – Dec’20 // New Delhi, India",
    details: [
      "- Built multiple projects with various tech stacks including React Native, React, SCSS, Node. (Blog)",
    ],
  },
];

export const XPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 16px;

  @media (max-width: 550px) {
    padding: 0;
  }
`;

export const XP = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 1.5rem 0;

  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;

    color: ${(props) => props.theme.textPrimary};
  }

  .details,
  .dates,
  .role {
    font-weight: 400;
    font-size: 16px;

    margin-left: calc(24px + 0.75rem);
  }

  .role {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.textPrimary};
  }

  .dates {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.textDate};
  }

  .details {
    color: ${(props) => props.theme.textSecondary};

    margin-top: 2px;
    margin-bottom: 2px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 18px;
    }

    .details,
    .dates,
    .role {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    .title {
      font-size: 16px;
    }
  }
`;

interface XPItemProps {
  title: string;
  role: string;
  dates: string;
  details: string[];
}

const XPItem: React.FC<XPItemProps> = (props) => (
  <XP>
    <p className="title">
      <Twemoji emoji="✨" /> {props.title}
    </p>
    <p className="role">{props.role}</p>
    <p className="dates">
      <span className="emoji" />
      {props.dates}
    </p>
    {props.details.map((detail, key) => (
      <p key={key} className="details">
        <span className="emoji" />
        {detail}
      </p>
    ))}
  </XP>
);

function Experience() {
  return (
    <Container>
      <Title>
        <GracefulImage
          src="https://img.icons8.com/bubbles/100/internship.png"
          alt="Experience Icon"
          width={54}
          height={54}
          loading="lazy"
        />
        <p>Experience</p>
      </Title>
      <XPContainer>
        {Details.map((detail, key) => (
          <XPItem
            key={key}
            title={detail.title}
            role={detail.role}
            dates={detail.dates}
            details={detail.details}
          />
        ))}
      </XPContainer>
    </Container>
  );
}

export default Experience;
