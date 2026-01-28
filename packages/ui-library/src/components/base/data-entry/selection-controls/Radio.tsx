'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

interface RadioGroupProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Root
> {}

interface RadioItemProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> {
  size?: 'medium' | 'small';
  label?: string;
  description?: string;
}

const radioBase =
  'shrink-0 rounded-full border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 disabled:cursor-not-allowed';

const radioVariants = cva(radioBase, {
  variants: {
    size: {
      regular: 'h-5 w-5',
      small: 'h-4 w-4',
    },
  },
  compoundVariants: [
    // UNCHECKED DEFAULT
    {
      className:
        'data-[state=unchecked]:bg-[--radio-background-color] border-[--border-default]',
    },
    // UNCHECKED HOVER
    {
      className: 'data-[state=unchecked]:hover:bg-[--border-hover]',
    },
    // UNCHECKED HOVER DISABLED
    {
      className:
        'data-[state=unchecked]:data-[disabled]:bg-[--color-bg-disabled]',
    },
    // CHECKED DEFAULT
    {
      className:
        'data-[state=checked]:border-[--radio-active-background-color]',
    },
    // CHECKED HOVER
    {
      className:
        'data-[state=checked]:hover:border-[--radio-active-background-hover]',
    },
    // CHECKED DISABLED
    {
      className:
        'data-[state=checked]:data-[disabled]:border-[--border-hover] ' +
        'data-[state=checked]:data-[disabled]:hover:border-[--border-hover]',
    },
    // UNCHECKED DISABLED
    {
      className:
        'data-[state=unchecked]:data-[disabled]:hover:bg-[--color-bg-disabled]',
    },
  ],

  defaultVariants: {
    size: 'regular',
  },
});

const radioDotVariants = cva(
  'rounded-full transition-colors bg-[--radio-active-background-color] group-hover:bg-[--radio-active-background-hover] group-data-[disabled]:bg-[--color-text-disabled]',
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
  style,
  platform = 'web',
  value,
  ...props
}: any) {
  const theme = useTheme();

  const mergedTokens = resolveTokens({ componentName: 'radio', tokens }, theme);

  const styles = {
    '--radio-width': mergedTokens?.trackWidth ?? 36,
    '--radio-height': mergedTokens?.trackHeight ?? 20,

    // TRACK Backgrounds
    '--radio-background-color':
      mergedTokens?.outer?.background ?? 'var(--color-bg-200)',
    '--radio-active-background-color':
      mergedTokens?.checked?.background ?? 'var(--color-accent-default)',
    '--radio-active-background-hover':
      mergedTokens?.checked?.backgroundHover ?? 'var(--color-accent-dark)',
    '--radio-background-disabled': mergedTokens?.disabled?.background ?? 'var(--color-bg-200)',

    // THUMB
    '--radio-thumb-size': size === 'medium' ? '12px' : '16px',
    '--radio-thumb-color': mergedTokens?.dot?.color ?? 'var(--color-bg-white)',
    '--radio-thumb-disabled':
      mergedTokens?.disabled?.dot ?? 'var(--color-bg-disabled)',

    // MISC
    '--radio-transition-duration': mergedTokens?.motion?.duration ?? '150ms',
    '--radio-thumb-translate': size === 'medium' ? '8px' : '6px',
  } as React.CSSProperties;


  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <RadioGroupPrimitive.Item
        style={styles}
        disabled={disabled}
        className={cn('group', radioVariants({ size }), className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          className="flex items-center justify-center"
          style={styles}
        >
          <span className={radioDotVariants({ size })} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span
              className={`${size === 'regular' ? 'text-base' : 'text-sm'} text-[var(--color-text-primary)]  font-[550] leading-[1.3] tracking-[-0.04em]`}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={`${size === 'regular' ? 'text-base' : 'text-sm'} text-[var(--color-text-tertiary)] leading-[1.3]`}
            >
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
