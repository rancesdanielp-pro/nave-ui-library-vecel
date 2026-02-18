'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, Minus } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

import type { ThemeTokensBase } from '../../../../theme/theme';

interface CheckboxProps extends React.ComponentProps<
  typeof CheckboxPrimitive.Root
> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'mobile';
  size?: 'regular' | 'small' | 'extraSmall';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  description?: string;
  disabled?: boolean;
}

const checkboxLabel =
  'leading-[1.3]';

const checkboxDescription =
  'leading-[1.3]';

const checkboxBase =
  'inline-flex items-center justify-center shrink-0 border rounded-md transition-colors outline-none disabled:cursor-not-allowed';

const checkboxVariants = cva(checkboxBase, {
  variants: {
    size: {
      regular: 'h-5 w-5',
      small: 'h-4 w-4',
      extraSmall: 'h-3.5 w-3.5',
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
        'data-[disabled][data-state=unchecked]:bg-[--color-bg-disabled] data-[disabled][data-state=unchecked]:border-[--border-hover] data-[disabled][data-state=unchecked]:hover:bg-[--color-bg-disabled]',
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
  description,
  disabled,
  style,
  platform = 'web',
  ...props
}: CheckboxProps) {
  const theme = useTheme();
  const mergedTokens =
    (resolveTokens({ componentName: 'checkbox', tokens }, theme) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size ?? 'regular'] ?? {};
  const styles = {
    '--checkbox-font-weight': mergedTokens?.fontWeight ?? 400,

    '--checkbox-label-font-size': sizeTokens?.labelFontSize ?? '14px',
    '--checkbox-description-font-size':
      sizeTokens?.descriptionFontSize ?? '12px',
    '--checkbox-label-font-weight': sizeTokens?.labelFontWeight ?? 400,
    '--checkbox-description-font-weight': sizeTokens?.descriptionFontWeight ?? 400,
    "--checkbox-label-color": sizeTokens?.labelColor ?? '#020303',
    "--checkbox-description-color": sizeTokens?.descriptionColor ?? '#6E7991',


    '--checkbox-icon-size': sizeTokens?.icon ?? '16px',
    '--checkbox-background-color': mergedTokens?.track?.background ?? '#E2E5E9',
    '--checkbox-active-background-color':
      mergedTokens?.checked?.background ?? '#652BDF',
    '--checkbox-active-background-hover':
      mergedTokens?.checked?.backgroundHover ?? '#5A23B8',

    '--checkbox-thumb-color': mergedTokens?.thumb?.color ?? '#A3AAB8',
    '--checkbox-thumb-disabled': mergedTokens?.disabled?.thumb ?? '#A3AAB8',
  } as React.CSSProperties;

  return (
    <label
      style={styles}
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <CheckboxPrimitive.Root
        disabled={disabled}
        checked={props.checked}
        style={styles}
        className={cn(
          checkboxVariants({ size, tone }),
          'focus-visible:ring-2 focus-visible:ring-[--checkbox-active-background-color] focus-visible:ring-offset-2',
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className="
          flex items-center justify-center
          text-[color:var(--checkbox-thumb-color)]
          data-[disabled]:text-[color:var(--checkbox-thumb-disabled)]
           "
        >
          {props.checked === 'indeterminate' ? (
            <Minus className="h-[--checkbox-icon-size]   w-[--checkbox-icon-size] stroke-current" />
          ) : (
            <CheckIcon
              className="
            h-[--checkbox-icon-size]
            w-[--checkbox-icon-size]
            stroke-current
           "
            />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span
              className={
                checkboxLabel +
                ' text-[color:var(--checkbox-label-color)] text-[length:var(--checkbox-label-font-size)] font-[var(--checkbox-label-font-weight)]'
              }
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={
                checkboxDescription +
                ' text-[color:var(--checkbox-description-color)] text-[length:var(--checkbox-description-font-size)] font-[var(--checkbox-description-font-weight)]'
              }
            >
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
