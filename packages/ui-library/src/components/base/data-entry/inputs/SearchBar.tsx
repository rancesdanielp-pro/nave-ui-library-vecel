'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';
import { resolveTokens, useTheme } from '../../../../theme';

const inputBase =
  'w-full rounded-[var(--input-search-radius)] text-[--color-text-primary] border outline-none ' +
  'transition-[border-color,box-shadow] ' +
  'disabled:bg-[--color-bg-disabled] disabled:text-[--color-text-disabled] disabled:border-[--border-hover] disabled:cursor-not-allowed';

const inputVariants = cva(inputBase, {
  variants: {
    size: {
      sm: `
        text-sm
        pl-[36px]   /* icon-left */
        pr-[36px]   /* icon-right */
        py-[6px]
      `,
      md: `
        text-base
        pl-[44px]
        pr-[44px]
        py-[10px]
      `,
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
      focus:border-[--input-search-border-color]
      focus:ring-2
      focus:ring-[--input-search-focus-ring]
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
interface SearchBarProps extends Omit<
  React.ComponentProps<'input'>,
  'size' | 'type'
> {
  tokens?: any;
  platform?: 'web' | 'mobile';
  size?: 'sm' | 'md';
}

export function SearchBar({
  className,
  size,
  disabled,
  tokens,
  platform = 'web',
  style,
  ...props
}: SearchBarProps) {
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme);

  const styles = {
    '--input-search-text': mergedTokens?.color ?? '#000000',
    '--input-search-radius': mergedTokens?.radius ?? '8px',
    '--input-search-border-width': mergedTokens?.borderWidth ?? '1px',
    '--input-search-border-color': mergedTokens?.border ?? 'transparent',
    '--input-search-focus-ring': mergedTokens?.focusBorder ?? 'transparent',
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
    <div className="relative w-full">
      {/* Search icon */}
      <div
        className={cn(
          'absolute inset-y-0 left-[12px] flex items-center pointer-events-none text-[--color-text-tertiary]',
          disabled && 'text-[--color-text-disabled] '
        )}
      >
        <Search size={18} />
      </div>
      <input
        ref={inputRef}
        type="text"
        disabled={disabled}
        onInput={handleInput}
        style={styles as React.CSSProperties}
        className={cn(inputVariants({ size }), className)}
        {...props}
      />

      {/* Clear button */}
      <button
        ref={clearRef}
        type="button"
        tabIndex={-1}
        disabled={disabled}
        onClick={clearSearch}
        className="absolute right-2 inset-y-0
            flex items-center justify-center
            w-8 text-[--color-text-helper] hover:text-[--color-text-primary] disabled:text-[--color-text-disabled]"
      >
        <X size={16} />
      </button>
    </div>
  );
}
