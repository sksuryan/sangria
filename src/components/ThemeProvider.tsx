"use client";

import React, { PropsWithChildren, useContext, useState } from "react";
import {
  ThemeProvider as TProvider,
  createGlobalStyle,
} from "styled-components";

type Themes = "light" | "dark";

export interface ThemeType {
  isDark: boolean;

  textDate: string;
  textPrimary: string;
  textSecondary: string;

  backgroundPrimary: string;
}

interface ThemeContextType {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

// Theme context
const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

const lightTheme: ThemeType = {
  isDark: false,

  textPrimary: "#000000",
  textSecondary: "#2e2e2e",
  textDate: "#6e6e6e",

  backgroundPrimary: "#ffffff",
};

const darkTheme: ThemeType = {
  isDark: true,

  textPrimary: "#d2d2d2",
  textSecondary: "#c8c8c8",
  textDate: "#a8a8a8",

  backgroundPrimary: "#121212",
};

export const GlobalStyle = createGlobalStyle<ThemeType>`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
    background-color: ${(props) => props.backgroundPrimary};
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.backgroundPrimary};
  }

  span.helloEmoji {
    height: 24px;
    padding-left: 8px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  span.emoji {
    height: 24px;
  }

  img.emoji {
    width: 24px;
    height: 24px;

    margin-right: 0.75rem;
  }
`;

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useState<Themes>(isDark ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle {...(theme === "light" ? lightTheme : darkTheme)} />
        {children}
      </TProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
