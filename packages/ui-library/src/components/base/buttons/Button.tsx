'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { resolveTokens, useTheme } from '../../../theme';

export type ButtonProps = React.ComponentProps<'button'> & {
  tokens?: any;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  platform?: 'web' | 'native';
  asChild?: boolean;
  tone?: 'brand' | 'neutral' | 'destructive';
};

const buttonBase =
  'inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-[color,background-color,box-shadow] outline-none font-[550] leading-[1.3] tracking-[-0.04em] focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg-white] disabled:pointer-events-none';

const buttonBaseClasses = cva(buttonBase, {
  variants: {
    variant: {
      primary:
        'bg-[--button-bg] text-[--button-text] rounded-[var(--button-radius)] hover:bg-[--button-bg-hover] active:bg-[--button-bg-active] disabled:bg-[--color-bg-disabled] disabled:text-[--color-text-disabled]',
      secondary:
        'bg-[--color-white] border border-current rounded-[var(--button-radius)] disabled:bg-[--color-white] disabled:text-[--color-text-disabled] disabled:border-[--color-bg-disabled]',
      tertiary:
        'bg-transparent border-none underline-offset-4 hover:underline disabled:bg-[--color-white] disabled:text-[--border-hover] disabled:underline',
      neutral: 'bg-transparent border-none underline-offset-4 hover:underline',
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
      //tone: 'brand',
      className:
        'bg-[--button-bg] text-[--button-text] hover:bg-[--button-bg-hover]',
    },
    /*
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
    */
    // secondary = outline
    {
      variant: 'secondary',
      //tone: 'brand',
      className:
        'text-[--button-bg] border-[--button-bg] hover:bg-[--button-bg-hover]  hover:text-[--button-text]',
    },
    /*
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
    */
    // tertiary = ghost
    {
      variant: 'tertiary',
      //tone: 'brand',
      className: 'text-[--button-bg] hover:text-[--button-bg-hover]',
    },
    /*
    {
      variant: 'tertiary',
      tone: 'neutral',
      className: 'text-[--button-text] hover:text-[--button-text-hover]',
    },

    {
      variant: 'tertiary',
      tone: 'destructive',
      className: 'text-[#FB3131] hover:text-[#C2040C]',
    },
    */
  ],

  defaultVariants: {
    variant: 'primary',
    //tone: 'brand',
    size: 'md',
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  tokens,
  style,
  platform = 'web',
  children,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'button', variant: 'primary', size: 'md' },
    theme
  );
  
  const styles = {
    '--button-bg': mergedTokens?.background || '--var(--color-bg-primary)',
    '--button-bg-hover': mergedTokens?.backgroundHover || '--var(--color-bg-primary-hover)',

    '--button-text': mergedTokens?.color || '--var(--color-text-primary)',
    '--button-radius': mergedTokens?.radius || '8px',

    '--button-transition-duration': mergedTokens?.transition || '150ms',

    fontSize: mergedTokens?.fontSize || '14px',
    fontWeight: mergedTokens?.fontWeight || '400',
  } as React.CSSProperties;

  // Componente raíz (puede ser Slot para asChild)
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonBaseClasses({ variant, size }), className)}
      style={styles as React.CSSProperties}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonBaseClasses };
