import StyledComponentsRegistry from "lib/registry";

import Nav from "@components/sections/common/Nav";
import Footer from "@components/sections/common/Footer";

// font setup
import { Source_Sans_Pro } from "next/font/google";
import { ThemeProvider } from "@components/ThemeProvider";

const poppins = Source_Sans_Pro({
  preload: true,
  weight: ["200", "300", "400", "600", "700", "900"],
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className={poppins.className}>
          <StyledComponentsRegistry>
            <ThemeProvider>
              <Nav />
              {children}
              <Footer />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
