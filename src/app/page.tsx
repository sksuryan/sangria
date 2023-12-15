import Head from "next/head";

// sections
import Skills from "@components/sections/main/Skills";
import Landing from "@components/sections/main/Landing";
import Projects from "@components/sections/main/Project";
import Experience from "@components/sections/main/Experience";

// styles
import { MainContainer } from "@styles/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "@sksuryan",
};

// revalidate data every 12 hours
export const revalidate = 60 * 60 * 12;

const App = () => {
  return (
    <MainContainer>
      <Head>
        <title>@sksuryan</title>
      </Head>
      <Landing />
      <Experience />
      <Projects />
    </MainContainer>
  );
};

export default App;
