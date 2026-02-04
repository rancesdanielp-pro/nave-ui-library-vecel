'use client';

import * as React from 'react';
import { resolveTokens, useTheme } from '../../../../theme';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';

const textareaLabel =
  'text-sm text-[--color-text-primary] font-[550] leading-[1.3] tracking-[-0.04em]';

const textareaHelper = 'text-xs leading-[1.3] text-[--color-text-helper]';

const textareaHelperError = 'text-xs leading-[1.3] text-[--color-error-main]';

const textareaBase =
  'w-full min-h-16 rounded-[var(--textarea-input-radius)] text-[--color-text-primary] border  outline-none transition-colors resize-y ' +
  'disabled:bg-[--color-bg-disabled] disabled:text-[--color-text-disabled] disabled:border-[--border-hover] disabled:cursor-not-allowed';

const inputVariants = cva(textareaBase, {
  variants: {
    size: {
      sm: 'px-[12px] pt-[10px] pb-[10px] text-sm leading-[1.4]', //14px
      md: 'px-[12px] pt-[10px] pb-[10px] text-base leading-[1.5]', //16px
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
        focus:border-[--textarea-input-border-color]
        focus:ring-2
        focus:ring-[--textarea-input-focus-ring]
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

interface TextareaProps extends Omit<React.ComponentProps<'textarea'>, 'size'> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function Textarea({
  className,
  style,
  tokens,
  platform = 'web',
  label,
  helperText,
  error = false,
  disabled,
  ...props
}: TextareaProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme) as any ?? {};
  const styles = {
    '--textarea-input-text': mergedTokens?.color ?? '#000000',
    '--textarea-input-radius': mergedTokens?.radius ?? '8px',
    '--textarea-input-border-width': mergedTokens?.borderWidth ?? '1px',
    '--textarea-input-border-color': mergedTokens?.border ?? 'transparent',
    '--textarea-input-focus-ring':
      mergedTokens?.focusBorder ?? 'transparent'
  } as React.CSSProperties;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={textareaLabel}>{label}</label>}

      <textarea
        data-slot="textarea"
        disabled={disabled}
        style={styles as React.CSSProperties}
        aria-invalid={error}
        className={cn(inputVariants({ error }), className)}
        {...props}
      />

      {helperText && (
        <span className={error ? textareaHelperError : textareaHelper}>
          {helperText}
        </span>
      )}
    </div>
  );
}
