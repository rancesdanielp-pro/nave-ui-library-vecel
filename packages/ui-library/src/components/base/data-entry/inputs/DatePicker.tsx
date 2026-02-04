'use client';

import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';
import { resolveTokens, useTheme } from '../../../../theme';

const inputBase =
  'w-full text-left rounded-[var(--input-datepicker-radius)] text-[--color-text-primary] border outline-none ' +
  'transition-[border-color,box-shadow] ' +
  'disabled:bg-[--color-bg-disabled] disabled:text-[--color-text-disabled] disabled:border-[--border-hover] disabled:cursor-not-allowed';

const inputLabel =
  'text-sm text-[--color-text-primary] font-[550] leading-[1.3] tracking-[-0.04em]';

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
      focus:border-[--input-datepicker-border-color]
      focus:ring-2
      focus:ring-[--input-datepicker-focus-ring]
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

interface DatePickerInputProps extends Omit<
  React.ComponentProps<'input'>,
  'size' | 'type'
> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'mobile';
  size?: 'sm' | 'md';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function DatePickerInput({
  className,
  size,
  label,
  helperText,
  disabled,
  tokens,
  platform = 'web',
  error = false,
  style,
  ...props
}: DatePickerInputProps) {
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme) as any ?? {};

  const styles = {
    '--input-datepicker-text': mergedTokens?.color ?? '#000000',
    '--input-datepicker-radius': mergedTokens?.radius ?? '8px',
    '--input-datepicker-border-width': mergedTokens?.borderWidth ?? '1px',
    '--input-datepicker-border-color':
      mergedTokens?.border ?? 'transparent',
    '--input-datepicker-focus-ring':
      mergedTokens?.focusBorder ?? 'transparent',
  } as React.CSSProperties;


  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={inputLabel}>{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          style={styles as React.CSSProperties}
          disabled={disabled}
          className={cn(inputVariants({ size, error }), className)}
          {...props}
        />

        <div
          className={cn(
            'absolute right-2 inset-y-0 flex items-center justify-center w-8',
            disabled && 'pointer-events-none'
          )}
        >
          <CalendarIcon
            size={18}
            className={cn(
              'text-[--color-text-helper] transition-colors',
              !disabled && 'hover:text-[--color-text-primary]',
              disabled && 'text-[--color-text-disabled]'
            )}
          />
        </div>
      </div>
    </div>
  );
}
