'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';
import { cva } from 'class-variance-authority';

const inputBase =
  'w-full rounded-md border outline-none transition-colors disabled:bg-[#E2E5E9] disabled:bg-[#E2E5E9] disabled:text-[#A3AAB8] disabled:cursor-not-allowed';

const inputLabel = 'text-sm font-[550] leading-[1.3] tracking-[-0.04em]';

const inputHelper = 'text-xs leading-[1.3] text-[#6C7280]';

const inputHelperError = 'text-xs leading-[1.3] text-[#FB3131]';

const inputVariants = cva(inputBase, {
  variants: {
    size: {
      sm: 'h-9 px-2 text-sm',
      md: 'h-11 px-3 text-sm',
    },
    tone: {
      brand: '',
      neutral: '',
      destructive: '',
    },
    error: {
      true: 'border-[#FB3131]',
      false: '',
    },
  },
  compoundVariants: [
    {
      tone: 'brand',
      error: false,
      className:
        'border-[#D1D5DB] focus:border-[#652BDF] focus:ring-2 focus:ring-[#652BDF]/20',
    },
    {
      tone: 'destructive',
      error: true,
      className:
        'border-[#FB3131] focus:border-[#FB3131] focus:ring-2 focus:ring-[#FB3131]/20',
    },
  ],
  defaultVariants: {
    size: 'md',
    tone: 'brand',
    error: false,
  },
});


interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  tokens?: any;
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

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme);

  const styles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={inputLabel}>{label}</label>}

      <input
        disabled={disabled}
        className={cn(inputVariants({ size, tone, error }), className)}
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
