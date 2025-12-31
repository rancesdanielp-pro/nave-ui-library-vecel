export function resolveTokens(
  { componentName, variant, size, tokens = {} }: any,
  theme: any
) {
  const base = theme?.components?.[componentName]?.base ?? {};
  const v = theme?.components?.[componentName]?.variants?.[variant] ?? {};
  const s = theme?.components?.[componentName]?.sizes?.[size] ?? {};
  const loose = tokens?.[componentName] ?? theme?.[componentName] ?? {};

  return {
    ...base,
    ...v,
    ...s,
    ...loose,
    ...tokens, // override explícito final
  };
}

export function resolveWebStyles(tokens: any) {
  return {
    color: tokens?.color ?? '#000000',
    backgroundColor: tokens?.backgroundColor ?? 'transparent',

    borderRadius: tokens?.borderRadius ?? '8px',
    borderWidth: tokens?.borderWidth ?? '1px',
    borderColor: tokens?.borderColor ?? 'transparent',
    borderStyle: tokens?.borderStyle ?? 'solid',

    boxShadow: tokens?.boxShadow ?? 'none',
    opacity: tokens?.opacity ?? 'none',

    transition: tokens?.transition ?? 'all ease',
    transitionDuration: tokens?.transitionDuration ?? '150ms',

    fontSize: tokens?.typography?.fontSize ?? '14px',
    fontWeight: tokens?.typography?.fontWeight ?? '400',

    checkColor: tokens?.checkColor ?? 'white',
  };
}

export function resolveNativeStyles(tokens: any) {
  return {
    padding: tokens.padding ?? 12,
    gap: tokens.gap ?? 8,

    color: tokens.textColor ?? 'black',
    backgroundColor: tokens.backgroundColor ?? 'transparent',

    borderRadius: tokens.borderRadius ?? 8,
    borderWidth: tokens.borderWidth ?? 1,
    borderColor: tokens.borderColor ?? 'transparent',

    // sombras RN
    shadowColor: tokens.shadowColor ?? 'transparent',
    shadowOpacity: tokens.shadowOpacity ?? 0,
    shadowRadius: tokens.shadowRadius ?? 0,
    shadowOffset: tokens.shadowOffset ?? { width: 0, height: 0 },

    opacity: tokens.opacity ?? 1,

    fontSize: tokens.typography?.fontSize ?? 14,
    fontWeight: tokens.typography?.fontWeight ?? '600',
    checkColor: tokens.checkColor ?? 'white',
    width: tokens.width ?? '100%',
  };
}
