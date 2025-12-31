'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

type ThemedProps = {
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
  value: number;
};

function Progress({
  className,
  style,
  value = 0,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & ThemedProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'progress', variant, tokens },
    theme
  );

  const trackStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens.track), ...style }
      : resolveNativeStyles(mergedTokens.track);

  const indicatorStyles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens.indicator)
      : resolveNativeStyles(mergedTokens.indicator);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      style={platform === 'web' ? trackStyles : undefined}
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        style={{
          ...(platform === 'web' ? indicatorStyles : undefined),
          transform: `translateX(-${100 - value}%)`,
        }}
        className="h-full transition-all"
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
