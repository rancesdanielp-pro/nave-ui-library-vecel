// Basado en React 
// (Next.js, CRA, Expo-Web, React Native Web, etc.), 
// Siempre y cuando estés en un entorno React., 
"use client";

import { createContext, useContext } from "react";

export const ThemeContext = createContext<any>(null);

export function ThemeProvider({ theme, children }: any) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
