'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

interface SwitchProps extends React.ComponentProps<
  typeof SwitchPrimitive.Root
> {
  tokens?: any;
  platform?: 'web' | 'native';
  size?: 'medium' | 'small';
  label?: string;
  description?: string;
  state?: 'checked' | 'indeterminate';
  disabled?: boolean;
}

const switchBase =
  'inline-flex items-center rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 disabled:cursor-not-allowed p-[2px]';

const thumbBase = 'block rounded-full bg-white transition-transform';

const switchVariants = cva(switchBase, {
  variants: {
    size: {
      medium: 'h-5 w-9', // 20 x 36
      small: 'h-4 w-7', // 16 x 28
    },
  },
  compoundVariants: [
    // UNCHECKED DEFAULT
    {
      className: 'data-[state=unchecked]:bg-[--switch-background-color]',
    },
    // UNCHECKED HOVER
    {
      className: 'data-[state=unchecked]:hover:bg-[--color-bg-300]',
    },
    // UNCHECKED HOVER DISABLED
    {
      className:
        'data-[state=unchecked]:data-[disabled]:bg-[--color-bg-disabled]',
    },
    // CHECKED DEFAULT
    {
      className: 'data-[state=checked]:bg-[--switch-active-background-color]',
    },
    // CHECKED HOVER
    {
      className:
        'data-[state=checked]:hover:bg-[--switch-active-background-hover]',
    },
    // CHECKED DISABLED
    {
      className:
        'data-[state=checked]:data-[disabled]:bg-[--color-bg-disabled] ' +
        'data-[state=checked]:data-[disabled]:hover:bg-[--color-bg-disabled]',
    },
    // UNCHECKED DISABLED
    {
      className:
        'data-[state=unchecked]:data-[disabled]:hover:bg-[--color-bg-disabled]',
    },
  ],
  defaultVariants: {
    size: 'medium',
  },
});

const Switch = ({
  className,
  tokens,
  size = 'medium',
  label,
  state,
  description,
  disabled,
  style,
  platform = 'web',
  ...props
}: SwitchProps) => {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'switch', tokens },
    theme
  );

  const styles = {
    '--switch-width': mergedTokens?.track?.width ?? 36,
    '--switch-height': mergedTokens?.track?.height ?? 20,

    // TRACK Backgrounds
    '--switch-background-color':
      mergedTokens?.track?.offBackground ?? 'var(--color-bg-200)',
    '--switch-active-background-color':
      mergedTokens?.track?.onBackground ?? 'var(--color-accent-default)',
    '--switch-active-background-hover':
      mergedTokens?.track?.onBackgroundHover ?? 'var(--color-accent-dark)',
    '--switch-background-disabled':
      mergedTokens?.disabled?.track ?? 'var(--color-bg-disabled)',

    // THUMB
    '--switch-thumb-size':
      size === 'medium' ? (mergedTokens?.handle?.size ?? '12px') : '16px',
    '--switch-thumb-color':
      mergedTokens?.handle?.color ?? 'var(--color-bg-white)',
    '--switch-thumb-disabled':
      mergedTokens?.disabled?.handle ?? 'var(--color-bg-disabled)',

    // MISC
    '--switch-transition-duration': mergedTokens?.motion?.duration ?? '150ms',
    '--switch-thumb-translate': size === 'medium' ? '8px' : '6px',
  } as React.CSSProperties;

  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <SwitchPrimitive.Root
        disabled={disabled}
        data-slot="switch"
        style={styles}
        className={cn(switchBase, switchVariants({ size }), className)}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            thumbBase,
            size === 'medium' ? 'h-4 w-4' : 'h-3 w-3',
            'data-[state=checked]:translate-x-[var(--switch-thumb-translate)] data-[state=checked]:data-[disabled]:bg-[var(--color-bg-300)]',
            'data-[state=unchecked]:translate-x-0 data-[state=unchecked]:data-[disabled]:bg-[--color-bg-300]'
          )}
        />
      </SwitchPrimitive.Root>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span
              className={`${size === 'medium' ? 'text-base' : 'text-sm'} text-[var(--color-text-primary)] font-[550] leading-[1.3] tracking-[-0.04em]`}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={`${size === 'medium' ? 'text-sm' : 'text-xs'} text-[var(--color-text-tertiary)] leading-[1.3]`}
            >
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export { Switch };
