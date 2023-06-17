import "@styles/index.css";
import Head from "next/head";
import StyledComponentsRegistry from "lib/registry";

import Nav from "@components/sections/common/Nav";
import Footer from "@components/sections/common/Footer";

// font setup
import { Poppins } from "next/font/google";

const poppins = Poppins({
  preload: true,
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <main className={poppins.className}>
          <StyledComponentsRegistry>
            <Nav />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
