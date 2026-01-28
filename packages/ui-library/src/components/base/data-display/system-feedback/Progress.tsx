'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  value: number;
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
};

function Progress({
  className,
  style,
  value,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: ProgressProps) {
  const theme = useTheme();

  const mergedTokens =
    resolveTokens(
      { componentName: 'progress', variant, tokens },
      theme
    ) ?? {};

  /* ---------------- Track styles ---------------- */
const trackStyles = {
  '--progress-height': mergedTokens?.track?.height ?? '8px',
  '--progress-radius': mergedTokens?.track?.radius ?? '9999px',
  '--progress-bg': mergedTokens?.track?.background ?? '#e2e5e9',
  ...style,
} as React.CSSProperties;

/* ---------------- Indicator styles ---------------- */
const indicatorStyles = {
  '--progress-fill':
    mergedTokens?.indicator?.background ?? '#a3aab8',
  '--progress-motion':
    mergedTokens?.motion?.duration ?? '300ms',
} as React.CSSProperties;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      style={platform === 'web' ? trackStyles : undefined}
      className={cn(
        'relative w-full overflow-hidden',
        'h-[var(--progress-height)]',
        'rounded-[var(--progress-radius)]',
        'bg-[var(--progress-bg)]',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        style={{
          ...(platform === 'web' ? indicatorStyles : undefined),
          transform: `translateX(-${100 - value}%)`,
        }}
        className={cn(
          'h-full w-full',
          'bg-[var(--progress-fill)]',
          'transition-transform',
          'duration-[var(--progress-motion)]'
        )}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };