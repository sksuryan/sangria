import styled, { keyframes } from "styled-components";
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

const StyledImage = styled(Image)<{ $loaded: boolean }>`
  opacity: ${(props) => (props.$loaded ? 0 : 1)};
  animation: ${fadeInAnimation} 0.5s ease-in forwards;
  transition: 0.5s ease-in;
`;

const GracefulImage: React.FC<ImageProps> = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledImage
      {...props}
      placeholder="blur"
      blurDataURL={FALLBACK_IMAGE}
      onLoad={() => console.log("on load")}
      onLoadingComplete={() => setLoaded(true)}
      $loaded={loaded}
    />
  );
};

export default GracefulImage;
