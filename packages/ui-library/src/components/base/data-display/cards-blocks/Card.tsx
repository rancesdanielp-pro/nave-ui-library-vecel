'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import { useTheme, resolveTokens } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  action?: React.ReactNode;
  tokens?: Partial<ThemeTokensBase>;
  variant?: 'primary' | 'secondary' | 'tertiary';
  width?: number | string;
};

const cardBaseClasses = cva(
  'inline-flex flex-col max-w-full place-self-start overflow-hidden min-w-0 transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--card-radius)]',
        secondary: 'bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--card-radius)]',
        tertiary: 'bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--card-radius)]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

function Card({
  className,
  title,
  action,
  tokens,
  variant = 'primary',
  width,
  children,
  style,
  ...props
}: CardProps) {
  const theme = useTheme();

  // 1) Resolución de tokens
  const mergedTokens = resolveTokens(
    { componentName: 'card', variant, tokens },
    theme
  ) as any ?? {};

  // 2) Mapeo a variables CSS inyectadas
  const styles = {
    '--card-bg': mergedTokens?.backgroundColor ?? '#ffffff',
    '--card-border': mergedTokens?.borderColor ?? 'transparent',
    '--card-text': mergedTokens?.color ?? 'inherit',
    '--card-radius': mergedTokens?.borderRadius ?? '16px',
    '--card-padding': mergedTokens?.padding ?? '16px',
    
    // Tokens de Título
    '--card-title-size': mergedTokens?.title?.fontSize ?? '18px',
    '--card-title-weight': mergedTokens?.title?.fontWeight ?? '550',
    '--card-title-ls': mergedTokens?.title?.letterSpacing ?? '-0.04em',
    '--card-title-lh': mergedTokens?.title?.lineHeight ?? '130%',

    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    ...style,
  } as React.CSSProperties;

  return (
    <div
      data-slot="card"
      style={styles}
      className={cn(
        cardBaseClasses({ variant }),
        'p-[var(--card-padding)]',
        !width && 'w-fit',
        className
      )}
      {...props}
    >
      {/* HEADER */}
      {(title || action) && (
        <div className="flex items-center justify-between mb-4 gap-2 min-w-0">
          {title && (
            <div
              className="truncate"
              style={{
                color: 'var(--card-text)',
                fontSize: 'var(--card-title-size)',
                fontWeight: 'var(--card-title-weight)',
                letterSpacing: 'var(--card-title-ls)',
                lineHeight: 'var(--card-title-lh)',
                fontFeatureSettings: `'ss03' on, 'ss06' on`,
              }}
            >
              {title}
            </div>
          )}

          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}

      {/* CONTENT BODY */}
      <div className="w-full min-w-0 max-w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export { Card };