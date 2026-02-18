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
  size?: 'regular' | 'small' | 'extraSmall';
  label?: string;
  description?: string;
  disabled?: boolean;
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
}

const radioBase = `
  shrink-0
  rounded-full
  border
  flex items-center justify-center
  transition-colors
  outline-none
  w-[--radio-size]
  h-[--radio-size]
`;

const radioLabel = 'leading-[1.3]';

const radioDescription = 'leading-[1.3]';

const radioVariants = cva(radioBase, {
  variants: {},
  compoundVariants: [
    // UNCHECKED
    {
      className: `
        data-[state=unchecked]:bg-[--radio-bg]
        data-[state=unchecked]:border-[--radio-border]
        data-[state=unchecked]:hover:border-[--radio-border-hover]
      `,
    },

    // CHECKED
    {
      className: `
        data-[state=checked]:border-[--radio-dot-on]
        data-[state=checked]:hover:border-[--radio-dot-on-hover]
      `,
    },

    // DISABLED + UNCHECKED
    {
      className: `
        data-[disabled][data-state=unchecked]:bg-[--radio-disabled-bg]
        data-[disabled][data-state=unchecked]:border-[--radio-disabled-border]
      `,
    },

    // DISABLED + CHECKED
    {
      className: `
        data-[disabled][data-state=checked]:bg-[--radio-disabled-bg]
        data-[disabled][data-state=checked]:border-[--radio-disabled-border]
        data-[disabled][data-state=checked]:hover:border-[--radio-disabled-border]
      `,
    },
  ],
});

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
  const mergedTokens =
    (resolveTokens({ componentName: 'radio', tokens }, theme) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size ?? 'regular'] ?? {};

  const styles = {
    /* SIZE */
    '--radio-size': sizeTokens.outer?.size,
    '--radio-dot-size': sizeTokens.dot?.size,

    /* OUTER */
    '--radio-bg': mergedTokens.outer?.background,
    '--radio-border': mergedTokens.outer?.border,
    '--radio-border-focus': mergedTokens.outer?.focusBorder,
    '--radio-border-hover': mergedTokens.outer?.hoverBorder,

    /* DOT */
    '--radio-dot-on': mergedTokens.checked?.background,
    '--radio-dot-on-hover': mergedTokens.checked?.backgroundHover,

    /* DISABLED */
    '--radio-disabled-bg': mergedTokens.disabled?.background,
    '--radio-disabled-border': mergedTokens.disabled?.border,
    '--radio-disabled-dot': mergedTokens.disabled?.dot,

    /* TYPO */
    '--radio-label-font-size': sizeTokens.labelFontSize,
    '--radio-description-font-size': sizeTokens.descriptionFontSize,
    '--radio-label-font-weight': sizeTokens.labelFontWeight,
    '--radio-description-font-weight': sizeTokens.descriptionFontWeight,
    '--radio-label-color': sizeTokens.labelColor,
    '--radio-description-color': sizeTokens.descriptionColor,
  } as React.CSSProperties;

  return (
    <label
      style={styles}
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <RadioGroupPrimitive.Item
        value={value}
        disabled={disabled}
        style={styles}
        className={cn(
          'group',
          radioVariants(),
          'focus-visible:ring-2 focus-visible:ring-[--radio-dot-on] focus-visible:ring-offset-2'
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span
            className={cn(`
            rounded-full
            w-[--radio-dot-size]
            h-[--radio-dot-size]
            bg-[--radio-dot-on]
            transition-colors
            group-hover:bg-[--radio-dot-on-hover]
            data-[disabled]:bg-[--radio-disabled-dot]
            data-[disabled][data-state=checked]:bg-[--radio-disabled-dot]
            data-[disabled][data-state=unchecked]:hover:bg-[--radio-disabled-dot]
            group-data-[disabled]:bg-[--radio-disabled-dot]
          `)}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span
              className={
                radioLabel +
                ' text-[color:var(--radio-label-color)] text-[length:var(--radio-label-font-size)] font-[var(--radio-label-font-weight)]'
              }
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={
                radioDescription +
                ' text-[color:var(--radio-description-color)] text-[length:var(--radio-description-font-size)] font-[var(--radio-description-font-weight)]'
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
