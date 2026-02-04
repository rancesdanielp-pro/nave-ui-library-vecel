// Basado en React 
// (Next.js, CRA, Expo-Web, React Native Web, etc.), 
// Siempre y cuando estés en un entorno React., 
"use client";

import { createContext, useContext, ReactNode } from "react";
import type { ThemeTokensBase } from "../theme";

export const ThemeContext = createContext<ThemeTokensBase | null>(null);

export function ThemeProvider<T extends ThemeTokensBase>({ theme, children }: { theme: T; children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme<T extends ThemeTokensBase = ThemeTokensBase>() {
  return useContext(ThemeContext) as T;
}
