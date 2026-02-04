'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

const inputBase =
  'w-full rounded-[var(--input-radius)] text-[--color-text-primary] border outline-none ' +
  'transition-[border-color,box-shadow] ' +
  'disabled:bg-[--color-bg-disabled] disabled:text-[--color-text-disabled] disabled:border-[--border-hover] disabled:cursor-not-allowed';

const inputLabel =
  'text-sm text-[--color-text-primary] font-[550] leading-[1.3] tracking-[-0.04em]';

const inputHelper = 'text-xs leading-[1.3] text-[--color-text-helper]';

const inputHelperError = 'text-xs leading-[1.3] text-[--color-error-main]';

const inputVariants = cva(inputBase, {
  variants: {
    size: {
      sm: 'h-9 px-2 text-sm',
      md: 'h-11 px-3 text-base',
    },
    error: {
      true: 'border-[--color-error-main]',
      false: '',
    },
  },
  compoundVariants: [
    {
      error: false,
      className: `
      border-[--border-default]
      hover:border-[--border-hover]
      focus:border-[--input-border-color]
      focus:ring-2
      focus:ring-[--input-focus-ring]
      focus:ring-offset-0
    `,
    },
    {
      error: true,
      className: `
      border-[--color-error-main]
      hover:border-[--color-error-dark]
      focus:border-[--color-error-main]
      focus:ring-2
      focus:ring-[--color-error-lighter]
    `,
    },
  ],
  defaultVariants: {
    size: 'md',
    error: false,
  },
});

import type { ThemeTokensBase } from '../../../../theme/theme';

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'mobile';
  size?: 'sm' | 'md';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function Input({
  className,
  type,
  size,
  tone,
  label,
  helperText,
  error = false,
  disabled,
  tokens,
  platform = 'web',
  style,
  ...props
}: InputProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme) as any ?? {};

  const styles = {
    '--input-text': mergedTokens?.color ?? '#000000',
    '--input-radius': mergedTokens?.radius ?? '8px',
    '--input-border-width': mergedTokens?.borderWidth ?? '1px',
    '--input-border-color': mergedTokens?.border ?? 'transparent',
    '--input-focus-ring': mergedTokens?.focusBorder ?? 'transparent',
  } as React.CSSProperties;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={inputLabel}>{label}</label>}

      <input
        disabled={disabled}
        className={cn(inputVariants({ size, error }), className)}
        style={styles as React.CSSProperties}
        {...props}
      />

      {helperText && (
        <span className={error ? inputHelperError : inputHelper}>
          {helperText}
        </span>
      )}
    </div>
  );
}
