import React from "react";

import { Container, Title } from "../globalStyles";
import { XPContainer, XP } from "./styles";

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

interface XPItemProps {
  title: string;
  role: string;
  dates: string;
  details: string[];
}

const XPItem: React.FC<XPItemProps> = (props) => (
  <XP>
    <p className="title">
      <span role="img" className="emoji" aria-label="sparkles emoji">
        ✨
      </span>{" "}
      {props.title}
    </p>
    <p className="role">{props.role}</p>
    <p className="dates">
      <span className="emoji" />
      {props.dates}
    </p>
    {props.details.map((detail) => (
      <p className="details">
        <span className="emoji" />
        {detail}
      </p>
    ))}
  </XP>
);

const Experience = () => {
  return (
    <Container>
      <Title>
        <img
          src="https://img.icons8.com/external-flat-geotatah/64/000000/external-experience-sales-incentive-compensation-flat-flat-geotatah.png"
          alt="Experience Icon"
        />
        <p>Experience</p>
      </Title>
      <XPContainer>
        {Details.map((detail) => (
          <XPItem
            title={detail.title}
            role={detail.role}
            dates={detail.dates}
            details={detail.details}
          />
        ))}
      </XPContainer>
    </Container>
  );
};

export default Experience;
