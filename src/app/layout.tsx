import "@styles/index.css";
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
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Nav />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
