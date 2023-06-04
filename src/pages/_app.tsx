import Head from "next/head";
import { AppProps } from "next/app";

// font setup
import { Poppins } from "next/font/google";

const poppins = Poppins({
  preload: true,
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
  display: "swap",
});

import "@styles/index.css";
import Nav from "@components/Nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={poppins.className}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  );
}
