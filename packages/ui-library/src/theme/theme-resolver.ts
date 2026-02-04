function isObject(val: unknown): val is object {
  return typeof val === 'object' && val !== null;
}
type ResolveTokensParams = {
  componentName: string;
  variant?: string;
  size?: string;
  tokens?: Partial<ThemeTokensBase>;
};

import type { ThemeTokensBase } from './theme';
type Theme = ThemeTokensBase;

const TOKEN_REGEX = /^\{(.+)\}$/;
const MAX_TOKEN_DEPTH = 10;


export function resolveTokens(
  { componentName, variant, size, tokens = {} }: ResolveTokensParams,
  theme: ThemeTokensBase
) {
  const component: any = (theme as any)?.components?.[componentName];
  if (!component) return {};

  let merged: Record<string, unknown>;

  if (isStructuredComponent(component)) {
    merged = {
      // @ts-ignore
      ...(isObject(component['base']) ? component['base'] : {}),
      // @ts-ignore
      ...(isObject(component['sizes']) ? { sizes: component['sizes'] } : {}),
      // @ts-ignore
      ...(isObject(component['shapes']) ? { shapes: component['shapes'] } : {}),
      // @ts-ignore
      ...(isObject(component['tones']) ? { tones: component['tones'] } : {}),
      // @ts-ignore
      ...(variant && isObject(component['variants']) && component['variants'][variant] && isObject(component['variants'][variant]) ? component['variants'][variant] : {}),
      // @ts-ignore
      ...(size && isObject(component['sizes']) && component['sizes'][size] && isObject(component['sizes'][size]) ? component['sizes'][size] : {}),
    };
  } else {
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

function resolveObject<T extends ThemeTokensBase>(value: unknown, theme: T): unknown {
  if (Array.isArray(value)) {
    return value.map((v) => resolveObject(v, theme));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, val]) => [
        key,
        resolveObject(val, theme),
      ])
    );
  }

  return resolveValue(value, theme);
}

function resolveValue<T extends ThemeTokensBase>(value: unknown, theme: T): unknown {
  if (typeof value !== 'string') return value;

  let current: unknown = value;
  let depth = 0;

  while (typeof current === 'string' && TOKEN_REGEX.test(current)) {
    const match = current.match(TOKEN_REGEX);
    if (!match) break;

    const path = match[1].split('.');
    const resolved = path.reduce<unknown>((acc, key) => (typeof acc === 'object' && acc !== null ? (acc as Record<string, unknown>)[key] : undefined), theme);

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

function isStructuredComponent(component: unknown) {
  return (
    typeof component === 'object' &&
    component !== null &&
    ('base' in component || 'variants' in component || 'sizes' in component)
  );
}

// Las funciones de estilos web/native quedan como legacy y no tipadas por ahora
