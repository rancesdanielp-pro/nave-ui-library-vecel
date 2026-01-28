type ResolveTokensParams = {
  componentName: string;
  variant?: string;
  size?: string;
  tokens?: Record<string, any>;
};

type Theme = Record<string, any>;

const TOKEN_REGEX = /^\{(.+)\}$/;
const MAX_TOKEN_DEPTH = 10;

export function resolveTokens(
  { componentName, variant, size, tokens = {} }: any,
  theme: any
) {
  const component = theme?.components?.[componentName];
  if (!component) return {};

  let merged: any;

  if (isStructuredComponent(component)) {
    // Button, Input, etc.
    merged = {
      ...(component.base ?? {}),
      ...(component.sizes ? { sizes: component.sizes } : {}),
      ...(component.shapes ? { shapes: component.shapes } : {}),
      ...(component.tones ? { tones: component.tones } : {}),
      ...(variant && component.variants?.[variant]),
      ...(size && component.sizes?.[size]),
    };
  } else {
    // Checkbox, Switch, Radio (estructura libre)
    merged = component;
  }

  // Overrides
  merged = {
    ...merged,
    ...(tokens?.[componentName] ?? {}),
    ...tokens,
  };

  return resolveObject(merged, theme);
}

function resolveObject(value: any, theme: Theme): any {
  if (Array.isArray(value)) {
    return value.map((v) => resolveObject(v, theme));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [
        key,
        resolveObject(val, theme),
      ])
    );
  }

  return resolveValue(value, theme);
}

function resolveValue(value: any, theme: Theme) {
  if (typeof value !== 'string') return value;

  let current: any = value;
  let depth = 0;

  while (typeof current === 'string' && TOKEN_REGEX.test(current)) {
    const match = current.match(TOKEN_REGEX);
    if (!match) break;

    const path = match[1].split('.');
    const resolved = path.reduce<any>((acc, key) => acc?.[key], theme);

    if (resolved === undefined) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Token not resolved: ${current}`);
      }
      return current;
    }

    current = resolved;

    if (++depth > MAX_TOKEN_DEPTH) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `Possible circular reference detected while resolving: ${value}`
        );
      }
      return current;
    }
  }

  return current;
}

function isStructuredComponent(component: any) {
  return component && (component.base || component.variants || component.sizes);
}

/* deprecated */
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
/* deprecated */
