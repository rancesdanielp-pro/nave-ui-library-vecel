'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

export type AvatarSize = 'sm' | 'md' | 'lg';

import type { ThemeTokensBase } from '../../../../theme/theme';

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: AvatarSize;
  tokens?: Partial<ThemeTokensBase>;
  asChild?: boolean;
};

function Avatar({
  className,
  size = 'md',
  tokens,
  asChild = false,
  style,
  ...props
}: AvatarProps) {
  const theme = useTheme();
  const Comp = asChild ? Slot : AvatarPrimitive.Root;

  const mergedTokens =
    (resolveTokens({ componentName: 'avatar', tokens }, theme) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size] ?? {};

  const styles = {
    width: sizeTokens?.size ?? '40px',
    height: sizeTokens?.size ?? '40px',
    border: sizeTokens?.border ?? 'none',
    borderRadius: mergedTokens?.shapes?.radius ?? '9999px',
    '--avatar-font-size': sizeTokens?.fontSize ?? '14px',
    '--avatar-fallback-bg': mergedTokens?.fallback?.background ?? '#e0e0e0',
    '--avatar-fallback-color': mergedTokens?.fallback?.color ?? '#000000',
    '--avatar-fallback-weight': mergedTokens?.fallback?.fontWeight ?? 550,
    ...style,
  } as React.CSSProperties;

  return (
    <Comp
      data-slot="avatar"
      style={styles}
      className={cn('relative flex shrink-0 overflow-hidden', className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        `
        flex size-full items-center justify-center
        rounded-full
        bg-[--avatar-fallback-bg]
        text-[color:var(--avatar-fallback-color)]
        text-[length:var(--avatar-font-size)]
        font-[var(--avatar-fallback-weight)]
        `,
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
