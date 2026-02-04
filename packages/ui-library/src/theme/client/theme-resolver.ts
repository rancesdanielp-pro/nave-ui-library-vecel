function isObject(val: unknown): val is object {
  return typeof val === 'object' && val !== null;
}
type ResolveTokensParams = {
  componentName: string;
  variant?: string;
  size?: string;
  tone?: string;
  tokens?: Partial<ThemeTokensBase>;
};

type StructuredComponent = {
  base?: Record<string, unknown>;
  variants?: Record<string, Record<string, unknown>>;
  sizes?: Record<string, Record<string, unknown>>;
  shapes?: Record<string, Record<string, unknown>>;
  tones?: Record<string, Record<string, unknown>>;
};

import type { ThemeTokensBase } from '../theme';
type Theme = ThemeTokensBase;

const TOKEN_REGEX = /^\{(.+)\}$/;
const MAX_TOKEN_DEPTH = 10;

export function resolveTokens(
  { componentName, variant, size, tokens = {} }: ResolveTokensParams,
  theme: ThemeTokensBase
) {
  const component: any =
    (theme as any)?.components?.[componentName] ??
    (theme as any)?.tokens?.components?.[componentName];

  if (!component) return {};

  let merged: Record<string, unknown>;

  if (isStructuredComponent(component)) {
    merged = {
      ...(isObject(component.base) ? component.base : {}),
      ...(isObject(component.sizes) ? { sizes: component.sizes } : {}),
      ...(isObject(component.shapes) ? { shapes: component.shapes } : {}),
      ...(isObject(component.tones) ? { tones: component.tones } : {}),
      ...(variant && isObject(component.variants?.[variant])
        ? component.variants![variant]
        : {}),
      ...(size && isObject(component.sizes?.[size])
        ? component.sizes![size]
        : {}),
    };
  } else {
    merged = component as Record<string, unknown>;
  }

  // Overrides
  merged = {
    ...merged,
    ...(tokens?.[componentName] ?? {}),
    ...tokens,
  };

  return resolveObject(merged, theme);
}

function resolveObject<T extends ThemeTokensBase>(
  value: unknown,
  theme: T
): unknown {
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

function resolveValue<T extends ThemeTokensBase>(
  value: unknown,
  theme: T
): unknown {
  if (typeof value !== 'string') return value;

  let current: unknown = value;
  let depth = 0;

  while (typeof current === 'string' && TOKEN_REGEX.test(current)) {
    const match = current.match(TOKEN_REGEX);
    if (!match) break;

    const path = match[1].split('.');

    const resolved = resolveFromRoots(path, theme);

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

function isStructuredComponent(
  component: unknown
): component is StructuredComponent {
  return (
    typeof component === 'object' &&
    component !== null &&
    ('base' in component ||
      'variants' in component ||
      'sizes' in component ||
      'shapes' in component ||
      'tones' in component)
  );
}

function resolveFromRoots(path: string[], theme: any) {
  const roots = [theme, theme.tokens];

  for (const root of roots) {
    const resolved = path.reduce<unknown>((acc, key) => {
      return typeof acc === 'object' && acc !== null
        ? (acc as any)[key]
        : undefined;
    }, root);

    if (resolved !== undefined) {
      return resolved;
    }
  }

  return undefined;
}
