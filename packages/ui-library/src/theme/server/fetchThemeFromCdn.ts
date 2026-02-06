// theme/server/fetchThemeFromCdn.ts

import { THEME_CDN_BASE_URL } from '../config';
import { SUPPORTED_SCHEMAS } from '../schema';
import { themeDefault } from '../themeDefault';

async function getManifest() {
  const res = await fetch(`${THEME_CDN_BASE_URL}/manifest.json?v=${Date.now()}`, {
    cache: 'no-store',
  } as RequestInit & { next: { revalidate: number } });

  if (!res.ok) {
    throw new Error('Theme manifest not available');
  }
 return res.json();
}

export async function fetchThemeFromCdn(channelId: string) {
  const manifest = await getManifest();
  const entry = manifest[channelId];

  if (!entry) return null;

  const { version, schema } = entry;

  if (!SUPPORTED_SCHEMAS.includes(schema)) {
    console.warn('[Theme] Unsupported schema:', schema);
    return themeDefault;
  }

  const res = await fetch(
    `${THEME_CDN_BASE_URL}/${channelId}@${version}.json`,
    {
      cache: 'force-cache',
      next: { revalidate: 60 * 60 },
    } as RequestInit & { next: { revalidate: number } }
  );

  console.log(`[Theme] Fetched theme for`, res);

  if (!res.ok) return themeDefault;

  const data = await res.json();
  return data;
}

/*
import naveTheme from './nave.json';
export async function fetchThemeFromCdn(channelId: string) {
  console.log('Mock CDN response');
  return naveTheme;
}

export async function fetchThemeFromCdn(channelId: string) {
  try {
    const res = await fetch(
      `${THEME_CDN_BASE_URL}/${channelId}.json?v=${THEME_VERSION}`,
      {
        cache: 'force-cache',
        next: { revalidate: 60 * 60 },
      } as RequestInit & { next: { revalidate: number } }
    );

    if (!res.ok) {
      console.warn('[Theme] fetch failed', res.status);
      return themeDefault;
    }

    const data = await res.json();

    // validación mínima
    if (data?.schema !== SUPPORTED_SCHEMA || !data?.tokens) {
      console.warn('[Theme] invalid schema', data?.schema);
      return themeDefault;
    }

    return data.tokens;
  } catch (err) {
    console.warn('[Theme] cdn error, fallback default', err);
    return themeDefault;
  }
}
*/
