'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

interface RadioGroupProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Root
> {}

interface RadioItemProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> {
  size?: 'regular' | 'small';
  label?: string;
  description?: string;
  disabled?: boolean;
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
}

const radioBase =
  'shrink-0 rounded-full border transition-colors outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] ' +
  'focus-visible:ring-offset-2 disabled:cursor-not-allowed';

const radioVariants = cva(radioBase, {
  variants: {
    size: {
      regular: 'h-5 w-5',
      small: 'h-4 w-4',
    },
  },
  defaultVariants: {
    size: 'regular',
  },
  compoundVariants: [
    {
      className:
        'data-[state=unchecked]:bg-[--radio-background-color] border-[--border-default]',
    },
    {
      className: 'data-[state=unchecked]:hover:bg-[--border-hover]',
    },
    {
      className:
        'data-[state=unchecked]:data-[disabled]:bg-[--color-bg-disabled]',
    },
    {
      className:
        'data-[state=checked]:border-[--radio-active-background-color]',
    },
    {
      className:
        'data-[state=checked]:hover:border-[--radio-active-background-hover]',
    },
    {
      className: 'data-[state=checked]:data-[disabled]:border-[--border-hover]',
    },
  ],
});

const radioDotVariants = cva(
  'rounded-full transition-colors bg-[--radio-active-background-color] ' +
    'group-hover:bg-[--radio-active-background-hover] ' +
    'group-data-[disabled]:bg-[--color-text-disabled]',
  {
    variants: {
      size: {
        regular: 'h-3 w-3',
        small: 'h-2 w-2',
      },
    },
    defaultVariants: {
      size: 'regular',
    },
  }
);

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

export function RadioItem({
  className,
  size = 'regular',
  label,
  description,
  disabled,
  tokens,
  platform = 'web',
  value,
  ...props
}: RadioItemProps) {
  const theme = useTheme();
  const mergedTokens = resolveTokens({ componentName: 'radio', tokens }, theme) as any ?? {};

  const styles = {
    '--radio-background-color':
      mergedTokens?.outer?.background ?? 'var(--color-bg-200)',
    '--radio-active-background-color':
      mergedTokens?.checked?.background ?? 'var(--color-accent-default)',
    '--radio-active-background-hover':
      mergedTokens?.checked?.backgroundHover ?? 'var(--color-accent-dark)',
  };

  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <RadioGroupPrimitive.Item
        value={value}
        disabled={disabled}
        style={styles as React.CSSProperties}
        className={cn('group', radioVariants({ size }), className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className={radioDotVariants({ size })} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span className="text-base font-medium text-[var(--color-text-primary)]">
              {label}
            </span>
          )}
          {description && (
            <span className="text-sm text-[var(--color-text-tertiary)]">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
