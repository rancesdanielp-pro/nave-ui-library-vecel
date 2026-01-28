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

interface CheckboxProps extends React.ComponentProps<
  typeof CheckboxPrimitive.Root
> {
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

const checkboxDescription = 'text-xs text-[--color-text-helper] leading-[1.3]';

const checkboxFocus =
  'focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

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
      className:
        'data-[state=unchecked]:bg-[--checkbox-background-color] data-[state=unchecked]:border-[--border-default] data-[state=unchecked]:hover:border-[--border-hover]',
    },

    // CHECKED
    {
      className:
        'data-[state=checked]:bg-[--checkbox-active-background-color] data-[state=checked]:border-none data-[state=checked]:hover:bg-[--checkbox-active-background-hover]',
    },

    // INDETERMINATE
    {
      className:
        'data-[state=indeterminate]:bg-[--checkbox-active-background-color] data-[state=indeterminate]:border-none data-[state=indeterminate]:hover:bg-[--checkbox-active-background-hover]',
    },

    // DISABLED + UNCHECKED
    {
      className:
        'data-[disabled][data-state=unchecked]:bg-[--color-bg-disabled] data-[disabled][data-state=unchecked]:border-[--border-hover] data-[disabled][data-state=unchecked]:hover:bg-[--color-bg-disabled]]',
    },

    // DISABLED + CHECKED
    {
      className:
        'data-[disabled][data-state=checked]:bg-[--color-bg-disabled] data-[disabled][data-state=checked]:border-none data-[disabled][data-state=checked]:hover:bg-[--color-bg-disabled]',
    },
    //  DISABLED + INDETERMINATE 
    {
      className:
        'data-[disabled][data-state=indeterminate]:bg-[--color-bg-disabled] data-[disabled][data-state=indeterminate]:border-none data-[disabled][data-state=indeterminate]:hover:bg-[--color-bg-disabled]',
    },
  ],
  defaultVariants: {
    size: 'regular',
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

  const styles = {
    '--checkbox-width': mergedTokens?.track?.width ?? 36,
    '--checkbox-height': mergedTokens?.track?.height ?? 20,

    // TRACK Backgrounds
    '--checkbox-background-color':
      mergedTokens?.track?.background ?? 'var(--color-bg-200)',
    '--checkbox-active-background-color':
      mergedTokens.checked?.background ?? 'var(--color-accent-default)',
    '--checkbox-active-background-hover':
      mergedTokens?.checked?.backgroundHover ?? 'var(--color-accent-dark)',
    '--checkbox-background-disabled': 'var(--color-bg-200)',

    // THUMB
    '--checkbox-thumb-color':
      mergedTokens?.thumb?.color ?? 'var(--color-bg-white)',
    '--checkbox-thumb-disabled':
      mergedTokens?.disabled?.thumb ?? 'var(--color-bg-disabled)',
  } as React.CSSProperties;


  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <CheckboxPrimitive.Root
        disabled={disabled}
        style={styles}
        className={cn(
          checkboxVariants({ size, tone }),
          className,
          checkboxFocus
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white data-[state=checked]:data-[disabled]:text-[--color-text-disabled] data-[state=indeterminate]:data-[disabled]:text-[--color-text-disabled]">
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
