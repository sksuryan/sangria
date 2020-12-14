import { Container, DesignedBy, Icons8 } from "./styles";

function Footer() {
  return (
    <Container>
      <a href="#HeroSection">
        <img
          src="https://img.icons8.com/clouds/100/000000/up.png"
          alt="back to top"
        />
      </a>
      <DesignedBy>
        designed and built with <span>❤️</span> by @sksuryan
      </DesignedBy>
      <Icons8>
        icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noreferrer">
          icons8
        </a>
      </Icons8>
    </Container>
  );
}

export default Footer;
