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

function parseTokenPath(path: string): string[] {
  const parts: string[] = [];
  const regex = /([^.[]+)|\["([^"]+)"\]|\['([^']+)'\]/g;

  let match;
  while ((match = regex.exec(path))) {
    if (match[1]) parts.push(match[1]);       // dot notation
    if (match[2]) parts.push(match[2]);       // ["key"]
    if (match[3]) parts.push(match[3]);       // ['key']
  }

  return parts;
}

export function resolveTokens(
  { componentName, variant, size, tone, tokens = {} }: ResolveTokensParams,
  theme: ThemeTokensBase
) {
  //console.log(`Resolving tokens for component "${componentName}"`, theme)
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
      ...(tone && isObject(component.tones?.[tone])
        ? component.tones![tone]
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

const TOKEN_GLOBAL_REGEX = /\{([^}]+)\}/g;

function resolveValue<T extends ThemeTokensBase>(
  value: unknown,
  theme: T
): unknown {
  if (typeof value !== 'string') return value;

  let result = value;
  let depth = 0;

  while (depth < MAX_TOKEN_DEPTH) {
    let replaced = false;

    result = result.replace(TOKEN_GLOBAL_REGEX, (_, tokenPath) => {
      const path = parseTokenPath(tokenPath);
      const resolved = resolveFromRoots(path, theme);

      if (resolved === undefined) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Token not resolved: {${tokenPath}}`);
        }
        return `{${tokenPath}}`; // deja el token
      }

      replaced = true;
      return String(resolved);
    });

    if (!replaced) break;
    depth++;
  }

  if (depth >= MAX_TOKEN_DEPTH) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Possible circular reference in token: ${value}`);
    }
  }

  return result;
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
