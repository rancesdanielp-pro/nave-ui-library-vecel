'use client';

import * as React from 'react';
import { Loader2Icon } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

export type LoaderSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type LoaderVariant = 'default' | 'primary' | 'secondary' | 'tertiary';

import type { ThemeTokensBase } from '../../../../theme/theme';

export type LoaderProps = React.ComponentProps<'svg'> & {
  size?: LoaderSize;
  variant?: LoaderVariant;
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
  label?: string;
  description?: string;
};

function Loader({
  className,
  style,
  size = 'medium',
  variant = 'default',
  tokens,
  platform = 'web',
  label,
  description,
  ...props
}: LoaderProps) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens(
      {
        componentName: 'loader',
        variant,
        tokens,
      },
      theme
    ) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size] ?? {};
  const finalSize = sizeTokens.size ?? 24;
  const finalColor = mergedTokens?.color ?? 'currentColor';

  const styles = {
    '--loader-size': `${finalSize}px`,
    '--loader-color': finalColor,

    '--loader-label-font-size': sizeTokens.labelFontSize,
    '--loader-description-font-size': sizeTokens.descriptionFontSize,

    '--loader-label-font-weight': sizeTokens.labelFontWeight,
    '--loader-description-font-weight': sizeTokens.descriptionFontWeight,

    '--loader-label-color': sizeTokens.labelColor,
    '--loader-description-color': sizeTokens.descriptionColor,

    ...style,
  } as React.CSSProperties;

  return (
    <div className="flex flex-col items-center text-center gap-4 px-6 py-8">
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
      <div className="flex flex-col gap-1">
        {label && (
          <div
            style={styles}
            className="text-[color:var(--loader-label-color)] text-[length:var(--loader-label-font-size)] font-[var(--loader-label-font-weight)]"
          >
            {label}
          </div>
        )}
        {description && (
          <div
            style={styles}
            className="text-[color:var(--loader-description-color)] text-[length:var(--loader-description-font-size)] font-[var(--loader-description-font-weight)]"
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

export { Loader };
