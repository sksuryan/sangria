import React from "react";
import styled from "styled-components";
import Image from "@components/GracefulImage";
import { FALLBACK_IMAGE } from "@helpers/constants";

export const Container = styled.div`
  display: flex;

  & img {
    height: 32px;
    width: 32px;
    margin: 8px;
  }

  @media (max-width: 550px) {
    & img {
      height: 24px;
      width: 24px;
    }
  }
`;

interface LinkProps {
  href: string;
  iconUri: string;
  alt: string;
}

const linkData = [
  {
    href: "https://github.com/0xSaurabh",
    iconUri: "https://img.icons8.com/ios/64/000000/github.png",
    alt: "github",
  },

  {
    href: "https://www.linkedin.com/in/saurabh-kumar-suryan-01684b194/",
    iconUri: "https://img.icons8.com/ios/50/000000/linkedin-2--v1.png",
    alt: "linked in",
  },

  {
    href: "https://twitter.com/0xSaurabh",
    iconUri: "https://img.icons8.com/ios/64/000000/twitter.png",
    alt: "twitter",
  },

  {
    href: "https://thecodelife.science.blog/",
    iconUri: "https://img.icons8.com/wired/64/000000/wordpress.png",
    alt: "wordpress blog",
  },
];

const Link: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <Image
        src={props.iconUri}
        alt={props.alt}
        width={32}
        height={32}
        loading="eager"
        placeholder="blur"
        blurDataURL={FALLBACK_IMAGE}
      />
    </a>
  );
};

function SocialMedia() {
  return (
    <Container>
      {linkData.map((item, key) => (
        <Link
          key={key}
          href={item.href}
          iconUri={item.iconUri}
          alt={item.alt}
        />
      ))}
    </Container>
  );
}

export default SocialMedia;
