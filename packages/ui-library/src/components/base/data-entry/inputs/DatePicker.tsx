'use client';

import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { cva } from 'class-variance-authority';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

const inputBase =
  'w-full rounded-md border outline-none transition-colors pr-10 disabled:bg-[#E2E5E9] disabled:text-[#A3AAB8] disabled:cursor-not-allowed';

const inputLabel = 'text-sm font-[550] leading-[1.3] tracking-[-0.04em]';

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

interface DatePickerInputProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'type'> {
  tokens?: any;
  platform?: 'web' | 'mobile';
  size?: 'sm' | 'md';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function DatePickerInput({
  className,
  size,
  tone,
  label,
  helperText,
  disabled,
  tokens,
  platform = 'web',
  style,
  ...props
}: DatePickerInputProps) {
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const mergedTokens = resolveTokens({ componentName: 'input', tokens }, theme);

  const styles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={inputLabel}>{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          className={cn(inputVariants({ size, tone }), className)}
          {...props}
        />

        <CalendarIcon
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C7280] pointer-events-none"
        />
      </div>
    </div>
  );
}
