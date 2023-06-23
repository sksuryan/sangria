"use client";

import styled, { keyframes, css } from "styled-components";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const animation = () => css`
  animation: ${fadeInAnimation} 0.1s ease-in forwards;
`;

const invert = () => css`
  filter: invert(1) grayscale(1);
`;

const StyledImage = styled(Image)<{
  $loaded: boolean;
  supportDarkMode?: boolean;
}>`
  opacity: 0;
  ${(props) => props.$loaded && animation};
  ${(props) => props.supportDarkMode && props.theme.isDark && invert}
`;

const GracefulImage: React.FC<ImageProps & { supportDarkMode?: boolean }> = ({
  supportDarkMode = false,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledImage
      {...props}
      onLoadingComplete={() => setLoaded(true)}
      $loaded={loaded}
      supportDarkMode={supportDarkMode}
    />
  );
};

export default GracefulImage;
