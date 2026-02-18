'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { resolveTokens, useTheme } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

export type ButtonProps = React.ComponentProps<'button'> & {
  tokens?: Partial<ThemeTokensBase>;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
  size?: 'small' | 'medium' | 'large' | 'icon' | 'icon-small' | 'icon-large';
  platform?: 'web' | 'native';
  asChild?: boolean;
  tone?: 'brand' | 'neutral' | 'destructive';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const buttonBase =
  'ui-button inline-flex items-center justify-center gap-[var(--button-gap)] whitespace-nowrap shrink-0 outline-none leading-[1.3] tracking-[-0.04em] disabled:pointer-events-none';

const buttonBaseClasses = cva(buttonBase, {
  variants: {
    variant: {
      primary: 'rounded-[var(--button-radius)]',
      secondary: 'border rounded-[var(--button-radius)]',
      tertiary: 'bg-transparent underline underline-offset-4 hover:underline',
      neutral: 'rounded-[var(--button-radius)]',
    },
    size: {
      sm: 'h-9 px-2.5',
      md: 'h-10 px-3',
      lg: 'h-11 px-4',
      'icon-sm': 'h-9 w-9',
      icon: 'h-10 w-10',
      'icon-lg': 'h-11 w-11',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

function Button({
  className,
  variant = 'primary',
  size = 'medium',
  asChild = false,
  tokens,
  startIcon,
  endIcon,
  style,
  platform = 'web',
  children,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  // Map size prop to CVA size keys
  const sizeMap = {
    'small': 'sm',
    'medium': 'md',
    'large': 'lg',
    'icon-small': 'icon-sm',
    'icon': 'icon',
    'icon-large': 'icon-lg',
  } as const;
  
  const cvaSize = sizeMap[size];

  const mergedTokens = resolveTokens(
    { componentName: 'button', variant, size },
    theme
  ) as any;

  const sizeTokens = mergedTokens?.sizes?.[size ?? 'medium'] ?? {};

  const styles = {
    '--button-bg': mergedTokens?.background ?? '#4B5563',
    '--button-text': mergedTokens?.color ?? '#000000',

    '--button-bg-hover': mergedTokens?.hover?.background ?? '#374151',
    '--button-text-hover': mergedTokens?.hover?.color ?? '#FFFFFF',

    '--button-bg-disabled': mergedTokens?.disabled?.background ?? '#9CA3AF',
    '--button-text-disabled': mergedTokens?.disabled?.color ?? '#6B7280',
    '--button-focus-ring': mergedTokens?.focus?.boxShadow ?? '0px 0px 0px 4px #2563EB',

    '--button-radius': mergedTokens?.radius ?? '6px',
    '--button-transition-duration': mergedTokens?.transition ?? '200ms',
    '--button-border-color': mergedTokens?.border ?? 'transparent',
    '--button-border-color-disabled': mergedTokens?.disabled?.border ?? 'transparent',
    '--button-gap': mergedTokens?.gap ?? '6px',
    '--button-font-size': sizeTokens?.fontSize ?? '14px',
    '--button-font-weight': sizeTokens?.fontWeight ?? 550,
  } as React.CSSProperties;

  // Componente raíz (puede ser Slot para asChild)
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonBaseClasses({ variant, size: cvaSize }), className, "focus-visible:ring-2 focus-visible:ring-[--button-bg-hover] focus-visible:ring-offset-2")}
      style={styles as React.CSSProperties}
      {...props}
    >
      {startIcon && (
        <span className="inline-flex shrink-0" aria-hidden>
          {startIcon}
        </span>
      )}

      {children && <span>{children}</span>}

      {endIcon && (
        <span className="inline-flex shrink-0" aria-hidden>
          {endIcon}
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonBaseClasses };
