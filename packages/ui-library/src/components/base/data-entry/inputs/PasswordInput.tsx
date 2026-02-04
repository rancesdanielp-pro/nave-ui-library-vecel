'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';
import { resolveTokens, useTheme } from '../../../../theme';

const inputBase =
  'w-full rounded-[var(--input-password-radius)] text-[--color-text-primary] border outline-none ' +
  'transition-[border-color,box-shadow] ' +
  'disabled:bg-[--color-bg-disabled] disabled:text-[--color-text-disabled] disabled:border-[--border-hover] disabled:cursor-not-allowed';

const inputLabel =
  'text-sm text-[--color-text-primary] font-[550] leading-[1.3] tracking-[-0.04em]';

const inputHelper = 'text-xs leading-[1.3] text-[--color-text-helper]';

const inputHelperError = 'text-xs leading-[1.3] text-[--color-error-main]';

const inputVariants = cva(inputBase, {
  variants: {
    size: {
      sm: 'h-9 px-2 pr-10 text-sm',
      md: 'h-11 px-3 pr-12 text-base',
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
      focus:border-[--input-password-border-color]
      focus:ring-2
      focus:ring-[--input-password-focus-ring]
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

interface PasswordInputProps extends Omit<
  React.ComponentProps<'input'>,
  'size' | 'type'
> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'mobile';
  size?: 'sm' | 'md';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function PasswordInput({
  className,
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
}: PasswordInputProps) {
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme) as any ?? {};

  const styles = {

    '--input-password-text': mergedTokens?.color ?? '#000000',
    '--input-password-radius': mergedTokens?.radius ?? '8px',
    '--input-password-border-width': mergedTokens?.borderWidth ?? '1px',
    '--input-password-border-color': mergedTokens?.border ?? 'transparent',
    '--input-password-focus-ring': mergedTokens?.focusBorder ?? 'transparent',
    
    //'--input-bg': mergedTokens?.background ?? 'transparent',
    //'--input-bg-hover': mergedTokens?.backgroundHover ?? 'transparent',
    //'--input-password-transition-duration': mergedTokens?.transitionDuration ?? '150ms', 
    //'--button-transition-duration': mergedTokens?.transition || '150ms',
    //fontSize: mergedTokens?.fontSize || '14px',
    //fontWeight: mergedTokens?.fontWeight || '400',
  } as React.CSSProperties;

  const toggleVisibility = () => {
    if (!inputRef.current) return;
    inputRef.current.type =
      inputRef.current.type === 'password' ? 'text' : 'password';
  };

  const isVisible = inputRef.current?.type === 'text';

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={inputLabel}>{label}</label>}

      <div className="relative">
        <input
          ref={inputRef}
          style={styles as React.CSSProperties}
          type="password"
          disabled={disabled}
          className={cn(inputVariants({ size, error }), className)}
          {...props}
        />
        <button
          type="button"
          tabIndex={-1}
          disabled={disabled}
          onClick={toggleVisibility}
          className="
            absolute right-2 inset-y-0
            flex items-center justify-center
            w-8
            text-[--color-text-helper]
            hover:text-[--color-text-primary]
            disabled:text-[--color-text-disabled]
          "
        >
          {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      {helperText && (
        <span className={error ? inputHelperError : inputHelper}>
          {helperText}
        </span>
      )}
    </div>
  );
}
