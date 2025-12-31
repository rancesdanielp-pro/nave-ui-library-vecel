'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';
import { cva } from 'class-variance-authority';

interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {}

interface RadioItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  size?: 'regular' | 'small';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  description?: string;
}

const radioBase =
  'shrink-0 rounded-full border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#F67E07] focus-visible:ring-offset-2 disabled:cursor-not-allowed';

const radioVariants = cva(radioBase, {
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
      className: 'border-[#D1D5DB] bg-white',
    },

    // CHECKED
    {
      tone: 'brand',
      className: 'data-[state=checked]:border-[#652BDF]',
    },

    {
      tone: 'brand',
      className: 'data-[state=checked]:data-[disabled]:bg-[#E2E5E9]',
    },

    // DISABLED
    {
      tone: 'brand',
      className:
        'data-[disabled]:border-none data-[disabled]:bg-[#E2E5E9]',
    },
  ],
  defaultVariants: {
    size: 'regular',
    tone: 'brand',
  },
});

const indicatorVariants = cva(
  'rounded-full transition-colors',
  {
    variants: {
      size: {
        regular: 'h-2.5 w-2.5',
        small: 'h-2 w-2',
      },
      tone: {
        brand: `
          bg-[#652BDF]
          group-data-[disabled]:bg-[#A3AAB8]
        `,
        neutral: `
          bg-[#020303]
          group-data-[disabled]:bg-[#A3AAB8]
        `,
        destructive: `
          bg-[#FB3131]
          group-data-[disabled]:bg-[#A3AAB8]
        `,
      },
    },
    defaultVariants: {
      size: 'regular',
      tone: 'brand',
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
  size,
  tone,
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

  const styles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  const stylesReafactoring = {
    ...styles,
    width: '28px',
    height: '28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  };

  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <RadioGroupPrimitive.Item
        disabled={disabled}
        className={cn('group', radioVariants({ size, tone }), className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className={indicatorVariants({ size, tone })} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span className="text-sm font-[550] leading-[1.3] tracking-[-0.04em]">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-[#6C7280] leading-[1.3]">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
