'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  action?: React.ReactNode;
  tokens?: any;
  variant?: 'primary' | 'secondary' | 'tertiary';
  platform?: 'web' | 'native';
  width?: number | string;
};

const cardBaseClasses = cva(
  [
    'inline-flex',
    'flex-col',
    'max-w-full',
    'place-self-start',
    'overflow-hidden',
    'min-w-0',
    'rounded-[16px]',
    'transition-all',
    'bg-[var(--card-bg)]',
    'border border-[var(--card-border)]',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        tertiary: '',
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
  platform = 'web',
  width,
  children,
  style,
  ...props
}: CardProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'card', variant, size: 'default', tokens },
    theme
  );

  const tokenStyles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  return (
    <div
      className={cn(cardBaseClasses({ variant }), !width && 'w-fit', className)}
      style={
        {
          '--card-bg': tokenStyles.backgroundColor,
          '--card-border': tokenStyles.borderColor ?? 'transparent',
          '--card-text': tokenStyles.color,
          padding: '16px',
          width: width
            ? typeof width === 'number'
              ? `${width}px`
              : width
            : undefined,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* HEADER */}
      {(title || action) && (
        <div className="flex items-center justify-between mb-4 gap-2 min-w-0">
          <div
            className="truncate"
            style={{
              color: 'var(--card-text)',
              fontFeatureSettings: `'ss03' on, 'ss06' on`,
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 550,
              lineHeight: '130%',
              letterSpacing: '-0.72px',
            }}
          >
            {title}
          </div>

          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}

      {/* CONTENT */}
      <div className="w-full min-w-0 max-w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export { Card, cardBaseClasses };
