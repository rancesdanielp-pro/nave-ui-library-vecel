// theme/server/setTheme.tsx
'use client';

import { useEffect, useState } from 'react';
import { ThemeContext } from '../client/theme-context';
import { resolveTheme } from './resolveTheme';

type Props = {
  channelId?: string;
  theme?: any;
  children: React.ReactNode;
};

const themeCache = new Map<string, any>();

const EMPTY_THEME = {};

export function setTheme({ channelId, theme, children }: Props) {
  const [finalTheme, setFinalTheme] = useState<any>(theme);

  useEffect(() => {
    if (theme) {
      setFinalTheme(theme);
      return;
    }

    if (!channelId) return;

    if (themeCache.has(channelId)) {
      setFinalTheme(themeCache.get(channelId));
      return;
    }

    let cancelled = false;

    (async () => {
      const resolved = await resolveTheme(channelId);
      if (!cancelled && resolved) {
        themeCache.set(channelId, resolved);
        setFinalTheme(resolved);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [channelId, theme]);

  console.log('Rendering setTheme with channelId:', channelId, 'and finalTheme:', finalTheme);

  return (
    <ThemeContext.Provider value={finalTheme ?? EMPTY_THEME}>
      {children}
    </ThemeContext.Provider>
  );
}
