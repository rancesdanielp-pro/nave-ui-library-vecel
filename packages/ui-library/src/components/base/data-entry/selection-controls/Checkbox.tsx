'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, Minus } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';
import { cva } from 'class-variance-authority';

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  tokens?: any;
  platform?: 'web' | 'mobile';
  size?: 'regular' | 'small';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  description?: string;
  state?: 'checked' | 'indeterminate';
  disabled?: boolean;
}

const checkboxLabel = 'text-sm font-[550] leading-[1.3] tracking-[-0.04em]';

const checkboxDescription = 'text-xs text-[#6C7280] leading-[1.3]';

const checkboxFocus =
  'focus-visible:ring-2 focus-visible:ring-[#F67E07] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const checkboxBase =
  'inline-flex items-center justify-center shrink-0 border rounded-md transition-colors outline-none focus-visible:ring-2 disabled:cursor-not-allowed';

const checkboxVariants = cva(checkboxBase, {
  variants: {
    size: {
      regular: 'h-5 w-5',
      small: 'h-4 w-4',
    },
    tone: {
      brand: '',
      neutral: '',
      destructive: '',
    },
  },

  compoundVariants: [
    // UNCHECKED
    {
      tone: 'brand',
      className:
        'border-[#D1D5DB] bg-white hover:border-[#652BDF] ring-[#F67E07]',
    },

    // CHECKED
    {
      tone: 'brand',
      className:
        'data-[state=checked]:bg-[#652BDF] data-[state=checked]:border-none data-[state=checked]:data-[disabled]:bg-[#E2E5E9]',
    },

    // INDETERMINATE
    {
      tone: 'brand',
      className:
        'data-[state=indeterminate]:bg-[#652BDF] data-[state=indeterminate]:border-none data-[state=indeterminate]:border-[#652BDF] data-[state=indeterminate]:data-[disabled]:bg-[#E2E5E9]',
    },

    // FOCUS
    {
      tone: 'brand',
      className: 'focus-visible:ring-[#F67E07]',
    },

    // DISABLED
    {
      tone: 'brand',
      className:
        'data-[disabled]:bg-[#E2E5E9] data-[disabled]:border-[#C3C7D1]',
    },
  ],

  defaultVariants: {
    size: 'regular',
    tone: 'brand',
  },
});
export function Checkbox({
  className,
  tokens,
  size,
  tone,
  label,
  state,
  description,
  disabled,
  style,
  platform = 'web',
  ...props
}: CheckboxProps) {
  const theme = useTheme();
  const mergedTokens = resolveTokens(
    { componentName: 'checkbox', tokens },
    theme
  );

  const styles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  const stylesReafactoring = {
    ...styles,
    width: '25px',
    height: '25px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <CheckboxPrimitive.Root
        disabled={disabled}
        className={cn(
          checkboxVariants({ size, tone }),
          className,
          checkboxFocus
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white data-[state=checked]:data-[disabled]:text-[#6C7280] data-[state=indeterminate]:data-[disabled]:text-[#6C7280]">
          {state === 'indeterminate' ? (
            <Minus className={size === 'regular' ? 'h-4 w-4' : 'h-3 w-3'} />
          ) : (
            <CheckIcon className={size === 'regular' ? 'h-4 w-4' : 'h-3 w-3'} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && <span className={checkboxLabel}>{label}</span>}
          {description && (
            <span className={checkboxDescription}>{description}</span>
          )}
        </div>
      )}
    </label>
  );
}
