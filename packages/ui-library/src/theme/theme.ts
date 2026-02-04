
// Base para los tokens, puede ser extendido
export interface ThemeTokensBase {
  [key: string]: unknown;
}

let currentTheme: ThemeTokensBase = {};

export function setTheme<T extends ThemeTokensBase>(theme: T) {
  currentTheme = theme;
}

export function getTheme<T extends ThemeTokensBase = ThemeTokensBase>(): T {
  return currentTheme as T;
}
