// theme/server/resolveTheme.ts
import { fetchThemeFromCdn } from './fetchThemeFromCdn';
import { fetchThemeFromApi } from './fetchThemeFromApi';
//import nave from './nave.json';

export async function resolveTheme(channelId: string) {
  const cdnTheme = await fetchThemeFromCdn(channelId); // fetchThemeFromApi
  //const cdnTheme = nave;
  console.log('CDN Theme:', cdnTheme);
  if (cdnTheme) return cdnTheme;
  return fetchThemeFromApi(channelId);
}
