import React from "react";
import styled from "styled-components";
import Image from "next/image";

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
        blurDataURL="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='54' height='54' fill='none' viewBox='0 0 54 54'%3e%3cg filter='url(%23a)'%3e%3crect width='54' height='54' fill='%23EAEAEA' fill-opacity='.5' rx='16'/%3e%3crect width='53' height='53' x='.5' y='.5' stroke='%23EBEBEB' rx='15.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='a' width='86' height='86' x='-16' y='-16' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeGaussianBlur in='BackgroundImageFix' stdDeviation='8'/%3e%3cfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1_7'/%3e%3cfeBlend in='SourceGraphic' in2='effect1_backgroundBlur_1_7' mode='normal' result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e"
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
