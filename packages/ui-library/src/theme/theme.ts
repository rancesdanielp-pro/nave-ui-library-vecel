export type ThemeTokens = Record<string, any>;

let currentTheme: ThemeTokens = {};

export function setTheme(theme: ThemeTokens) {
  currentTheme = theme;
}

export function getTheme(): ThemeTokens {
  return currentTheme;
}
