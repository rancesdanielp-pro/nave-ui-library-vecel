// src/theme/client/ThemeProvider.client.tsx
'use client';

import { setTheme } from "../server";

export function ThemeProvider({
  channelId,
  theme,
  children,
}: {
  channelId?: string;
  theme?: any;
  children: React.ReactNode;
}) {
  return <>{setTheme({ channelId, theme, children })}</>;
}
