import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;

    textPrimary: string;
    textSecondary: string;
    textDate: string;

    backgroundPrimary: string;
  }
}
