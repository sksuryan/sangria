import styled, { keyframes, css } from "styled-components";
import Image, { ImageProps } from "next/image";
import { FALLBACK_IMAGE } from "@helpers/constants";
import { useState } from "react";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const animation = () => css`
  animation: ${fadeInAnimation} 0.8s ease-in forwards;
`;

const StyledImage = styled(Image)<{ $loaded: boolean }>`
  opacity: ${(props) => (props.$loaded ? 0 : 1)};
  ${(props) => props.$loaded && animation}
`;

const GracefulImage: React.FC<ImageProps> = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledImage
      {...props}
      onLoadingComplete={() => setLoaded(true)}
      $loaded={loaded}
    />
  );
};

export default GracefulImage;
