import Head from "next/head";

// sections
import Skills from "@components/sections/main/Skills";
import Landing from "@components/sections/main/Landing";
import Projects from "@components/sections/main/Project";
import Experience from "@components/sections/main/Experience";

// styles
import { MainContainer } from "@styles/main";

const App = () => {
  return (
    <MainContainer>
      <Head>
        <title>@sksuryan</title>
      </Head>
      <Landing />
      <Skills />
      <Experience />
      <Projects />
    </MainContainer>
  );
};

export default App;
