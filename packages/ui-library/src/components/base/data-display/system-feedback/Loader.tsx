'use client';

import * as React from 'react';
import { Loader2Icon } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderVariant = 'default' | 'primary' | 'secondary';

export type LoaderProps = React.ComponentProps<'svg'> & {
  size?: LoaderSize;
  variant?: LoaderVariant;
  tokens?: any;
  platform?: 'web' | 'native';
};

function Loader({
  className,
  style,
  size = 'md',
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: LoaderProps) {
  const theme = useTheme();

  const mergedTokens =
    resolveTokens(
      {
        componentName: 'loader',
        variant,
        tokens,
      },
      theme
    ) ?? {};

  const finalSize = mergedTokens?.sizes?.[size] ?? 24;
  const finalColor = mergedTokens?.color ?? 'currentColor';

  const styles = {
    '--loader-size': `${finalSize}px`,
    '--loader-color': finalColor,
    ...style,
  } as React.CSSProperties;

  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      data-slot="loader"
      style={styles}
      className={cn(
        'animate-spin',
        'w-[var(--loader-size)] h-[var(--loader-size)]',
        'text-[var(--loader-color)]',
        className
      )}
      {...props}
    />
  );
}

export { Loader };