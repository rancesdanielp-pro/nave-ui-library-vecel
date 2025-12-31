export function createBaseStyles(tokens: any, overrides: any = {}) {
  return {
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    outline: "none",
    border: "none",
    margin: 0,
    padding: 0,

    fontSize: tokens?.font?.size ?? 14,
    lineHeight: 1,
    fontFamily: tokens?.font?.family ?? "inherit",
    color: tokens?.colors?.text ?? "#000",

    ...overrides,
  };
}
