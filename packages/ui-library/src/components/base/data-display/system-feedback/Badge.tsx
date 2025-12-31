import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

const badgeBase =
  'inline-flex items-center justify-center whitespace-nowrap shrink-0 w-fit transition-[color,box-shadow] overflow-hidden font-[550] leading-[1.3] tracking-[-0.04em]';

const badgeVariants = cva(badgeBase, {
  variants: {
    tone: {
      success: 'text-[#16A34A] bg-[#16A34A]/10',
      warning: 'text-[#D97706] bg-[#D97706]/10',
      error: 'text-[#DC2626] bg-[#DC2626]/10',
      info: 'text-[#2563EB] bg-[#2563EB]/10',
      neutral: 'text-[#6C7280] bg-[#6C7280]/10',
      brand: 'text-[#7C3AED] bg-[#7C3AED]/10',
    },
    size: {
      small: 'text-xs px-2 py-0.5',
      medium: 'text-sm px-2.5 py-1',
      large: 'text-base px-3 py-1.5',
    },
    shape: {
      rounded: 'rounded-full',
      square: 'rounded-md',
    },
  },
  defaultVariants: {
    tone: 'neutral',
    size: 'medium',
    shape: 'rounded',
  },
});

function Badge({
  className,
  tone,
  size,
  shape,
  asChild = false,
  tokens,
  style,
  platform = 'web',
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    tokens?: any;
    platform?: 'web' | 'native';
  }) {
  const Comp = asChild ? Slot : 'span';
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'badge', tone, size, shape, tokens },
    theme
  );

  const styles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ tone, size, shape }), className)}
      // style={styles}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
