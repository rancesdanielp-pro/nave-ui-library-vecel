'use client';

import * as React from 'react';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';
import { cn } from '../../../../utils/cn';

const textareaLabel = 'text-sm font-[550] leading-[1.3] tracking-[-0.04em]';

const textareaHelper = 'text-xs leading-[1.3] text-[#6C7280]';

const textareaHelperError = 'text-xs leading-[1.3] text-[#FB3131]';

const textareaBase =
  'w-full min-h-16 rounded-md border px-3 py-2 outline-none transition-colors resize-y ' +
  'disabled:bg-[#E2E5E9] disabled:text-[#A3AAB8] disabled:cursor-not-allowed';

interface TextareaProps extends Omit<React.ComponentProps<'textarea'>, 'size'> {
  tokens?: any;
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

  const mergedTokens = resolveTokens(
    { componentName: 'textarea', tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className={textareaLabel}>{label}</label>}

      <textarea
        data-slot="textarea"
        disabled={disabled}
        // style={platform === "web" ? resolvedStyles : undefined}
        aria-invalid={error}
        className={cn(
          textareaBase,
          !error &&
            'border-[#D1D5DB] focus:border-[#652BDF] focus:ring-2 focus:ring-[#652BDF]/20',
          error &&
            'border-[#FB3131] focus:border-[#FB3131] focus:ring-2 focus:ring-[#FB3131]/20',
          className
        )}
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
