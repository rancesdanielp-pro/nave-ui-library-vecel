'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

const inputBase =
  'w-full rounded-md border border-[#E2E5E9] outline-none transition-colors ' +
  'pl-10 pr-10 ' +
  'disabled:bg-[#E2E5E9] disabled:text-[#A3AAB8] disabled:cursor-not-allowed focus:border-[#652BDF]';


const inputVariants = cva(inputBase, {
  variants: {
    size: {
      sm: 'h-9 py-2 text-sm',
      md: 'h-11 py-3 text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
interface SearchBarProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'type'> {
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

  const mergedTokens = resolveTokens(
    { componentName: 'input', tokens },
    theme
  );

  const styles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

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
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6C7280]"
      />

      <input
        ref={inputRef}
        type="text"
        disabled={disabled}
        onInput={handleInput}
        //style={platform === 'web' ? styles : undefined}
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
        className="absolute right-3 top-1/2 -translate-y-1/2 hidden text-[#6C7280] hover:text-[#020303] disabled:text-[#A3AAB8]"
      >
        <X size={16} />
      </button>
    </div>
  );
}
