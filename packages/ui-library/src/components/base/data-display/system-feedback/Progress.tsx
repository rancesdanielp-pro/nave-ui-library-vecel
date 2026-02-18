'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  value: number;
  label?: string;
  showValue?: boolean;
  description?: string;
  icon?: React.ReactNode; // Nueva prop para el icono
  variant?: string;
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
};

function Progress({
  className,
  style,
  value,
  label,
  showValue,
  description,
  icon,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: ProgressProps) {
  const theme = useTheme();
  const mergedTokens = resolveTokens({ componentName: 'progress', variant, tokens }, theme) as any ?? {};

  const customStyles = {
    '--progress-track-height': mergedTokens?.track?.height ?? '6px',
    '--progress-track-radius': mergedTokens?.track?.radius ?? '9999px',
    '--progress-track-bg': mergedTokens?.track?.background ?? '#e2e5e9',
    '--progress-filled-bg': mergedTokens?.indicator?.background ?? '#652BDF',
    '--progress-motion-duration': mergedTokens?.motion?.duration ?? '300ms',
    '--progress-motion-easing': mergedTokens?.motion?.easing ?? 'ease-in-out',
    '--progress-label-color': mergedTokens?.base?.labelColor ?? 'inherit',
    '--progress-label-size': mergedTokens?.base?.labelFontSize ?? '14px',
    '--progress-label-weight': mergedTokens?.base?.labelFontWeight ?? '550',
    '--progress-desc-color': mergedTokens?.base?.descriptionColor ?? 'inherit',
    '--progress-desc-size': mergedTokens?.base?.descriptionFontSize ?? '12px',
    '--progress-gap': mergedTokens?.base?.gap ?? '6px',
    ...style,
  } as React.CSSProperties;

  return (
    <div 
      className={cn("flex flex-col w-full", className)} 
      style={platform === 'web' ? customStyles : undefined}
    >
      {/* Header */}
      {(label || showValue) && (
        <div className="flex justify-between items-end mb-[var(--progress-gap)]">
          {label && (
            <span className="text-[var(--progress-label-color)] text-[var(--progress-label-size)] font-[var(--progress-label-weight)] leading-none truncate">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-[var(--progress-label-color)] text-[var(--progress-label-size)] font-[var(--progress-label-weight)] leading-none">
              {Math.round(value)}%
            </span>
          )}
        </div>
      )}

      {/* Bar */}
      <ProgressPrimitive.Root
        data-slot="progress-track"
        className={cn('relative w-full overflow-hidden h-[var(--progress-track-height)] rounded-[var(--progress-track-radius)] bg-[var(--progress-track-bg)]')}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-filled-track"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
          className={cn('h-full w-full flex-1 bg-[var(--progress-filled-bg)] transition-transform duration-[var(--progress-motion-duration)] ease-[var(--progress-motion-easing)]')}
        />
      </ProgressPrimitive.Root>

      {/* Footer con Icono y Descripción */}
      {(description || icon) && (
        <div className="mt-[var(--progress-gap)] flex items-center gap-1.5">
          {icon && <span className="flex-shrink-0 text-[var(--progress-desc-color)] opacity-80">{icon}</span>}
          {description && (
            <p className="text-[var(--progress-desc-color)] text-[var(--progress-desc-size)] leading-normal">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export { Progress };