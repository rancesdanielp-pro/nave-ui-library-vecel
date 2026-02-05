// theme/server/fetchThemeFromCdn.ts

export async function fetchThemeFromCdn(channelId: string) {
  const res = await fetch(
    `https://e3-ranty-sdk-js.naranjax.com/theme/${channelId}.json`,
    {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60,
      },
    } as RequestInit & { next: { revalidate: number } }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data;
}

/*
import naveTheme from './nave.json';

export async function fetchThemeFromCdn(channelId: string) {
  console.log('Mock CDN response');
  return naveTheme;
}
*/
