// theme/server/getTheme.ts
import { ApiThemeResolver } from '../resolver/ApiThemeResolver';

export async function fetchThemeFromApi(channelId: string) {
  return new ApiThemeResolver().resolve(channelId);
}