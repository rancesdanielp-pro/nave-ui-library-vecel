'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

const inputBase = 'ui-input w-full outline-none';

const inputLabel = 'leading-[1.3] tracking-[-0.04em]';

const inputHelper = 'leading-[1.3]';

const inputHelperError = 'leading-[1.3]';

const inputVariants = cva(inputBase, {
  variants: {},
  defaultVariants: {
    size: 'medium',
  },
});

import type { ThemeTokensBase } from '../../../../theme/theme';

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'mobile';
  size?: 'small' | 'medium';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function Input({
  className,
  type,
  size,
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

  const mergedTokens =
    (resolveTokens({ componentName: 'input', tokens }, theme) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size ?? 'medium'] ?? {};
  const isFilled = Boolean(props.value ?? props.defaultValue);

  const styles = {
    '--input-bg': mergedTokens?.background,
    '--input-text': mergedTokens?.color,
    '--input-radius': mergedTokens?.radius,
    '--input-border': mergedTokens?.border,
    '--input-shadow': mergedTokens?.boxShadow,

    // hover
    '--input-hover-bg': mergedTokens?.hover?.background,
    '--input-hover-text': mergedTokens?.hover?.color,
    '--input-hover-border': mergedTokens?.hover?.border,

    // focus
    '--input-focus-border': mergedTokens?.focus?.border,
    '--input-focus-ring': mergedTokens?.focus?.boxShadow,
    '--input-focus-text': mergedTokens?.focus?.color,

    // filled
    '--input-filled-bg': mergedTokens?.filled?.background,
    '--input-filled-text': mergedTokens?.filled?.color,
    '--input-filled-shadow': mergedTokens?.filled?.boxShadow,

    // disabled
    '--input-disabled-bg': mergedTokens?.disabled?.background,
    '--input-disabled-text': mergedTokens?.disabled?.color,
    '--input-disabled-border': mergedTokens?.disabled?.border,
    '--input-disabled-shadow': mergedTokens?.disabled?.boxShadow,

    // error
    '--input-error-bg': mergedTokens?.error?.background,
    '--input-error-border': mergedTokens?.error?.border,
    '--input-error-text': mergedTokens?.error?.color,
    '--input-error-shadow': mergedTokens?.error?.boxShadow,

    // error.filled
    '--input-error-filled-border': mergedTokens?.error?.filled?.border,
    '--input-error-filled-text': mergedTokens?.error?.filled?.color,
    '--input-error-filled-shadow': mergedTokens?.error?.filled?.boxShadow,

    // error.focus
    '--input-error-focus-border': mergedTokens?.error?.focus?.border,
    '--input-error-focus-ring': mergedTokens?.error?.focus?.boxShadow,
    '--input-error-focus-text': mergedTokens?.error?.focus?.color,

    // error.hover
    '--input-error-hover-border': mergedTokens?.error?.hover?.border,
    '--input-error-hover-ring': mergedTokens?.error?.hover?.boxShadow,
    '--input-error-hover-text': mergedTokens?.error?.hover?.color,

    /* TYPO */
    '--input-label-font-size': sizeTokens.labelFontSize,
    '--input-font-size': sizeTokens.inputFontSize,
    '--input-helper-font-size': sizeTokens.helperFontSize,
    '--input-label-font-weight': sizeTokens.labelFontWeight,
    '--input-font-weight': sizeTokens.inputFontWeight,
    '--input-helper-font-weight': sizeTokens.helperFontWeight,
    '--input-label-color': sizeTokens.labelColor,
    '--input-helper-color': sizeTokens.helperColor,
    '--input-description-color': sizeTokens.descriptionColor,

    /* Height */
    '--input-height': sizeTokens.height,

    /* Padding */
    '--input-padding': sizeTokens.padding,
  } as React.CSSProperties;


  return (
    <div
      className="flex flex-col gap-1.5 w-full"
      style={styles as React.CSSProperties}
    >
      {label && (
        <label className={inputLabel + ' ui-input-label'}>{label}</label>
      )}

      <input
        disabled={disabled}
        data-error={error ? 'true' : 'false'}
        data-filled={isFilled ? 'true' : 'false'}
        className={cn(inputVariants(), className)}
        {...props}
      />

      {helperText && (
        <span
          className={
            error
              ? inputHelperError + ' ui-input-helper-error'
              : inputHelper + ' ui-input-helper'
          }
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
