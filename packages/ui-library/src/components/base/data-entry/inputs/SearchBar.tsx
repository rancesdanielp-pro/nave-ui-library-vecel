'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';
import { resolveTokens, useTheme } from '../../../../theme';

const inputBase = 'ui-input w-full outline-none pl-[44px] pr-[44px]';

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

interface SearchBarProps extends Omit<
  React.ComponentProps<'input'>,
  'size' | 'type'
> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'mobile';
  size?: 'small' | 'medium';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function SearchBar({
  className,
  size,
  disabled,
  tokens,
  error = false,
  platform = 'web',
  style,
  ...props
}: SearchBarProps) {
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);

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

    /* Icon */
    '--input-icon-size': sizeTokens?.iconSize,
  } as React.CSSProperties;

  const clearSearch = () => {
    if (!inputRef.current) return;
    inputRef.current.value = '';
    inputRef.current.focus();
    clearRef.current?.classList.add('hidden');
  };

  const handleInput = () => {
    if (!inputRef.current || !clearRef.current) return;
    clearRef.current.classList.toggle(
      'hidden',
      inputRef.current.value.length === 0
    );
  };

  return (
    <div className="relative w-full" style={styles as React.CSSProperties}>
      {/* Search icon */}
      <div
        className={cn(
          'absolute inset-y-0 left-[12px] flex items-center pointer-events-none',
          disabled && 'text-[--color-text-disabled] '
        )}
      >
        <Search className="ui-input-icon" />
      </div>
      <input
        ref={inputRef}
        data-filled={isFilled ? 'true' : 'false'}
        type="text"
        disabled={disabled}
        data-error={error ? 'true' : 'false'}
        onInput={handleInput}
        style={styles as React.CSSProperties}
        className={cn(inputVariants(), className)}
        {...props}
      />

      {/* Clear button */}
      <button
        ref={clearRef}
        type="button"
        tabIndex={-1}
        disabled={disabled}
        onClick={clearSearch}
        className="absolute right-2 inset-y-0 flex items-center justify-center"
      >
        <X className="ui-input-icon" />
      </button>
    </div>
  );
}
