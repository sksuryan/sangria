import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Container } from "./styles";

function SocialMedia() {
  return (
    <Container>
      <FontAwesomeIcon icon={faGithub} size="2x" />
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </Container>
  );
}

export default SocialMedia;
