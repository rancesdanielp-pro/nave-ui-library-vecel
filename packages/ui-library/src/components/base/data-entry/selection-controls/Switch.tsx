'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';
import { cva } from 'class-variance-authority';

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  tokens?: any;
  platform?: 'web' | 'native';
  size?: 'regular' | 'small';
  tone?: 'brand' | 'neutral' | 'destructive';
  label?: string;
  description?: string;
  state?: 'checked' | 'indeterminate';
  disabled?: boolean;
}

const switchBase =
  'inline-flex items-center rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#F67E07] focus-visible:ring-offset-2 disabled:cursor-not-allowed';

const thumbBase = 'block rounded-full bg-white transition-transform';

const switchVariants = cva(switchBase, {
  variants: {
    size: {
      regular: 'h-5 w-9',
      small: 'h-4 w-7',
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
      className: 'bg-[#C3C7D1]',
    },

    // CHECKED
    {
      tone: 'brand',
      className: 'data-[state=checked]:bg-[#652BDF]',
    },

    // CHECKED + DISABLED
    {
      tone: 'brand',
      className: 'data-[state=checked]:data-[disabled]:bg-[#E2E5E9]',
    },

    // UNCHECKED + DISABLED
    {
      tone: 'brand',
      className: 'data-[disabled]:bg-[#E2E5E9]',
    },
  ],
  defaultVariants: {
    size: 'regular',
    tone: 'brand',
  },
});

const Switch = ({
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
}: SwitchProps) => {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'switch', tokens },
    theme
  );

  const styles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  const stylesReafactoring = {
    ...styles,
    trackWidth: mergedTokens?.trackWidth ?? 36,
    trackHeight: mergedTokens?.trackHeight ?? 20,
    backgroundColor: mergedTokens?.backgroundColor ?? '#CCCCCC',
    activeBackgroundColor: mergedTokens?.activeBackgroundColor ?? '#652BDF',
    thumbSize: mergedTokens?.thumbSize ?? 16,
    thumbColor: mergedTokens?.thumbColor ?? '#FFFFFF',
    transitionDuration: mergedTokens?.transitionDuration ?? '150ms',
  };

  return (
    <label
      className={cn(
        'flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <SwitchPrimitive.Root
        disabled={disabled}
        data-slot="switch"
        className={cn(switchBase, switchVariants({ size, tone }), className)}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            thumbBase,
            size === 'regular' ? 'h-4 w-4' : 'h-3 w-3',
            'data-[state=checked]:translate-x-4 data-[state=checked]:data-[disabled]:bg-[#A3AAB8]',
            'data-[state=unchecked]:translate-x-0 data-[state=unchecked]:data-[disabled]:bg-[#A3AAB8]'
          )}
        />
      </SwitchPrimitive.Root>

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
};

export { Switch };
