import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

export type BadgeTone =
  | 'neutral'
  | 'brand'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeShape = 'rounded' | 'square';

import type { ThemeTokensBase } from '../../../../theme/theme';

function Badge({
  className,
  tone = 'neutral',
  size = 'medium',
  shape = 'rounded',
  asChild = false,
  tokens,
  style,
  ...props
}: React.ComponentProps<'span'> & {
  children: React.ReactNode;
  tone?: BadgeTone;
  size?: BadgeSize;
  shape?: BadgeShape;
  asChild?: boolean;
  tokens?: Partial<ThemeTokensBase>;
}) {
  const Comp = asChild ? Slot : 'span';
  const theme = useTheme();

  const mergedTokens =
    resolveTokens({ componentName: 'badge', tokens }, theme) as any ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size] ?? {};
  const toneTokens = mergedTokens?.tones?.[tone] ?? {};
  const shapeTokens = mergedTokens?.shapes?.[shape] ?? {};

  const styles: React.CSSProperties = {
    /* base */
    fontWeight: mergedTokens?.base?.fontWeight ?? 500,
    lineHeight: mergedTokens?.base?.lineHeight ?? '1.3',

    /* size */
    fontSize: sizeTokens?.fontSize ?? '14px',
    padding: sizeTokens?.padding ?? '4px 10px',

    /* tone */
    background: toneTokens?.background ?? '#F9F9FA',
    color: toneTokens?.color ?? '#3A3F4B',
    borderColor: toneTokens?.border ?? 'transparent',

    /* shape */
    borderRadius: shapeTokens?.radius ?? '9999px',

    ...style,
  };

  return (
    <Comp
      data-slot="badge"
      style={styles}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        'box-border border',
        'leading-none tracking-[-0.01em]',
        className
      )}
      {...props}
    />
  );
}

export { Badge };