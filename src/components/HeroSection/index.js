import { Container, Hello, Name, Details, NameSpan } from "./styles";

function HeroSection() {
  return (
    <Container>
      <Hello>
        hello there<span>👋</span>
      </Hello>
      <Name>
        I'm <NameSpan>Saurabh Kumar Suryan</NameSpan>
      </Name>
      <Details>
        A wanna be lifelong learner, who is passionate about new technologies
        and building things that interests him, currently pursuing B. Tech in
        CSE.
      </Details>
    </Container>
  );
}

export default HeroSection;
