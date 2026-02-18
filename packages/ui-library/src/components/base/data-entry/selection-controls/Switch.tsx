'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

import type { ThemeTokensBase } from '../../../../theme/theme';

interface SwitchProps extends React.ComponentProps<
  typeof SwitchPrimitive.Root
> {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
  size?: 'regular' | 'small' | 'extraSmall';
  label?: string;
  description?: string;
  disabled?: boolean;
}

const switchBase = `
  bg-[--switch-background-color]
  inline-flex items-center rounded-full
  w-[--switch-width]
  h-[--switch-height]
  transition-colors outline-none
  disabled:cursor-not-allowed
  p-[2px]
  `;

const labelStyle = 'leading-[1.3]';

const descriptionStyle = 'leading-[1.3]';

const switchVariants = cva(switchBase, {
  variants: {},
  compoundVariants: [
    // UNCHECKED
    {
      className: `
        data-[state=unchecked]:bg-[--switch-background]
        data-[state=unchecked]:hover:bg-[--switch-background-hover]
      `,
    },
    // CHECKED
    {
      className: `
        data-[state=checked]:bg-[--switch-active-background]
        data-[state=checked]:hover:bg-[--switch-active-background-hover]
      `,
    },
    // DISABLED (terminal)
    {
      className: `
        data-[disabled]:bg-[--switch-background-disabled]
        data-[disabled]:hover:bg-[--switch-background-disabled]
        data-[disabled][data-state=unchecked]:bg-[--switch-background-disabled]
        data-[disabled][data-state=unchecked]:hover:bg-[--switch-background-disabled]
        data-[disabled][data-state=checked]:bg-[--switch-background-disabled]
        data-[disabled][data-state=checked]:hover:bg-[--switch-background-disabled]
        data-[disabled]:cursor-not-allowed
      `,
    },
  ],
});

const Switch = ({
  className,
  tokens,
  size = 'regular',
  label,
  description,
  disabled,
  style,
  platform = 'web',
  ...props
}: SwitchProps) => {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens({ componentName: 'switch', tokens }, theme) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size ?? 'regular'] ?? {};

  const styles = {
    '--switch-label-font-weight': sizeTokens?.labelFontWeight ?? 400,
    '--switch-description-font-weight':
      sizeTokens?.descriptionFontWeight ?? 400,
    '--switch-label-font-size': sizeTokens?.labelFontSize ?? '14px',
    '--switch-description-font-size': sizeTokens?.descriptionFontSize ?? '12px',
    '--switch-label-color': sizeTokens?.labelColor ?? '#020303',
    '--switch-description-color': sizeTokens?.descriptionColor ?? '#6E7991',

    // TRACK
    '--switch-width': sizeTokens?.track?.width ?? '40px',
    '--switch-height': sizeTokens?.track?.height ?? '20px',

    '--switch-background': mergedTokens?.background,
    '--switch-background-hover':
      mergedTokens?.track?.offBackgroundHover ?? '#E2E5E9',
    '--switch-active-background':
      mergedTokens?.track?.onBackground ?? '#652BDF',
    '--switch-active-background-hover':
      mergedTokens?.track?.onBackgroundHover ?? '#5A23B8',
    '--switch-background-disabled':
      mergedTokens?.disabled?.background ?? '#E2E5E9',

    // THUMB
    '--switch-thumb-size': sizeTokens?.handle?.size ?? '16px',
    '--switch-thumb-translate': sizeTokens?.handle?.translate ?? '100%',
    '--switch-thumb-color': mergedTokens?.handle?.color ?? '#FFFFFF',
    '--switch-thumb-disabled': mergedTokens?.disabled?.track ?? '#A3AAB8',

    // MOTION
    '--switch-transition-duration': mergedTokens?.motion?.duration ?? '200ms',
  } as React.CSSProperties;

  return (
    <label
      style={styles}
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <SwitchPrimitive.Root
        disabled={disabled}
        data-slot="switch"
        style={styles}
        className={cn(
          switchBase,
          switchVariants(),
          className,
          'focus-visible:ring-2 focus-visible:ring-[--switch-active-background] focus-visible:ring-offset-2'
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            `
            rounded-full
            h-[--switch-thumb-size]
            w-[--switch-thumb-size]
            bg-[--switch-thumb-color]
            transition-transform
            duration-[--switch-transition-duration]
            data-[state=checked]:translate-x-[--switch-thumb-translate]
            data-[disabled]:bg-[--switch-thumb-disabled]
            `
          )}
        />
      </SwitchPrimitive.Root>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span
              className={
                labelStyle +
                ' text-[color:var(--switch-label-color)] text-[length:var(--switch-label-font-size)] font-[var(--switch-label-font-weight)]'
              }
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={
                descriptionStyle +
                ' text-[color:var(--switch-description-color)] text-[length:var(--switch-description-font-size)] font-[var(--switch-description-font-weight)]'
              }
            >
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export { Switch };
