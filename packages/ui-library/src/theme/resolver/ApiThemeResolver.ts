// theme/resolver/ApiThemeResolver.ts

import { themeDefault } from '../themeDefault';

const CACHE = new Map<string, any>();

export class ApiThemeResolver {
  async resolve(channelId: string) {
    if (CACHE.has(channelId)) {
      return CACHE.get(channelId);
    }

    try {
      const res = await fetch(
        `https://theme-central.free.beeceptor.com/themes/${channelId}`,
        { cache: 'force-cache' }
      );

      if (!res.ok) {
        throw new Error(`Theme fetch failed: ${res.status}`);
      }

      const contentType = res.headers.get('content-type') ?? '';

      if (!contentType.includes('application/json')) {
        console.warn(
          '[ThemeResolver] non-json content-type, attempting parse anyway:',
          contentType
        );
      }

      const theme = await res.json();

      CACHE.set(channelId, theme);
      return theme;
    } catch (err) {
      console.warn('[ThemeResolver] fallback default', err);
      return themeDefault;
    }
  }
}
