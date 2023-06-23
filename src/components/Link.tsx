"use client";

import Image from "@components/GracefulImage";

interface LinkProps {
  href: string;
  iconUri: string;
  alt: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <Image
        src={props.iconUri}
        alt={props.alt}
        width={32}
        height={32}
        loading="eager"
        supportDarkMode
      />
    </a>
  );
};
