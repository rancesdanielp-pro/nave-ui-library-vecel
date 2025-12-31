export async function getRemoteTheme(publicKey: string) {
  if (!publicKey) throw new Error('publicKey required');
  const res = await fetch(`https://api.nave.io/themes/${publicKey}`);
  if (!res.ok) throw new Error('Failed to fetch theme');
  return await res.json();
}

export async function getRemoteThemeMock() {
  const response = {
    Item: {
      themeJson: {
        S: '{"colors":{"primary":"#6366F1","secondary":"#a9aae4ff","text":"#000000"},"radius":{"sm":"4px","md":"8px","xl":"16px"},"spacing":{"xs":4,"sm":8,"md":16}}',
      },
    },
  };
  return JSON.parse(response.Item.themeJson.S);
}
