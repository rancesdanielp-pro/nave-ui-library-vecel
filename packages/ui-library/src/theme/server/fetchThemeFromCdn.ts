// theme/server/fetchThemeFromCdn.ts


export async function fetchThemeFromCdn(channelId: string) {
  const res = await fetch(
    `https://ranty-sdk-js.naranjax.com/tienda/ranty-checkout.js`,
    {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60,
      },
    } as RequestInit & { next: { revalidate: number } }
  );

  if (!res.ok) return null;
  return res;
}

/*
import naveTheme from './nave.json';

export async function fetchThemeFromCdn(channelId: string) {
  console.log('Mock CDN response');
  return naveTheme;
}
*/