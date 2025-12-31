'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../theme';

export type ButtonProps = React.ComponentProps<'button'> & {
  tokens?: any;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  platform?: 'web' | 'native';
  asChild?: boolean;
  tone?: 'brand' | 'neutral' | 'destructive';
};

const buttonBase =
  'inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-[color,background-color,box-shadow] outline-none disabled:pointer-events-none font-[550] leading-[1.3] tracking-[-0.04em]';

const buttonBaseClasses = cva(buttonBase, {
  variants: {
    variant: {
      primary:
        'border border-transparent rounded-[var(--button-radius)] disabled:bg-[#E2E5E9] disabled:text-[#A3AAB8]',
      secondary:
        'bg-white border border-current rounded-[var(--button-radius)] disabled:bg-[#FFFFFF] disabled:text-[#A3AAB8] disabled:border-[#E2E5E9]',
      tertiary:
        'bg-transparent border-none underline-offset-4 hover:underline disabled:bg-[#FFFFFF] disabled:text-[#A3AAB8] disabled:underline',
      neutral: 'bg-transparent border-none underline-offset-4 hover:underline',
    },
    tone: {
      brand: '',
      neutral: '',
      destructive: '',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
      icon: 'p-2 h-10 w-10',
      'icon-sm': 'p-1.5 h-8 w-8',
      'icon-lg': 'p-2.5 h-12 w-12',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      tone: 'brand',
      className: 'bg-[#652BDF] text-white hover:bg-[#3C168E]',
    },
    {
      variant: 'primary',
      tone: 'neutral',
      className: 'bg-[#020303] text-white hover:bg-[#0D0F12]',
    },
    {
      variant: 'primary',
      tone: 'destructive',
      className: 'bg-[#FB3131] text-white hover:bg-[#C2040C]',
    },

    // secondary = outline
    {
      variant: 'secondary',
      tone: 'brand',
      className: 'text-[#652BDF] border-[#E6DCFA] hover:bg-[#652BDF]/10',
    },
    {
      variant: 'secondary',
      tone: 'neutral',
      className: 'text-[#020303] border-[#C3C7D1] hover:bg-[#F9F9FA]/10',
    },
    {
      variant: 'secondary',
      tone: 'destructive',
      className: 'text-[#FB3131] border-[#FECFCD] hover:bg-[#FB3131]/10',
    },

    // tertiary = ghost
    {
      variant: 'tertiary',
      tone: 'brand',
      className: 'text-[#652BDF] hover:text-[#3C168E]',
    },

    {
      variant: 'tertiary',
      tone: 'neutral',
      className: 'text-[#020303] hover:text-[#020303]',
    },

    {
      variant: 'tertiary',
      tone: 'destructive',
      className: 'text-[#FB3131] hover:text-[#C2040C]',
    },
  ],

  defaultVariants: {
    variant: 'primary',
    tone: 'brand',
    size: 'md',
  },
});

function Button({
  className,
  variant,
  tone,
  size,
  asChild = false,
  tokens,
  style,
  platform = 'web',
  children,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  // Resolvemos tokens y estilos según la plataforma
  const mergedTokens = resolveTokens(
    { componentName: 'button', variant, tone, size, tokens },
    theme
  );

  const styles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  // Componente raíz (puede ser Slot para asChild)
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonBaseClasses({ variant, tone, size }), className)}
      style={
        {
          '--button-bg': styles?.backgroundColor,
          '--button-bg-hover': mergedTokens?.backgroundColorHover,
          '--button-bg-disabled': mergedTokens?.backgroundColorDisabled,
          '--button-color': styles?.color,
          '--button-color-disabled': mergedTokens?.colorDisabled,
          '--button-focus': mergedTokens?.focusRing,
          '--button-border': styles?.borderColor,
          '--button-radius': styles?.borderRadius,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonBaseClasses };
