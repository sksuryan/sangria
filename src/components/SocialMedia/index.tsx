import React from "react";

import { Container } from "./styles";

function SocialMedia() {
  return (
    <Container>
      <a
        href="https://github.com/sksuryan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/ios/64/000000/github.png"
          alt="github"
        />
      </a>
      <a
        href="https://www.instagram.com/saurabh_not_sourav/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/ios/64/000000/instagram-new--v1.png"
          alt="instagram"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/saurabh-kumar-suryan-01684b194/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/ios/50/000000/linkedin-2--v1.png"
          alt="linked in"
        />
      </a>
      <a
        href="https://twitter.com/_sksuryan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/ios/64/000000/twitter.png"
          alt="twitter"
        />
      </a>
      <a
        href="https://thecodelife.science.blog/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/wired/64/000000/wordpress.png"
          alt="link to the blog"
        />
      </a>
    </Container>
  );
}

export default SocialMedia;
