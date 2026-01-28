'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

/* -------------------------------------------------------------------------- */
/* CVA */
/* -------------------------------------------------------------------------- */
const alertVariants = cva(
  'w-full rounded-lg border text-sm flex items-start gap-3',
  {
    variants: {
      variant: {
        default: '',
        destructive: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type Tone =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'
  | 'destructive';

type ThemedProps = {
  tokens?: any;
  platform?: 'web' | 'native';
  tone?: Tone;
  icon?: React.ReactNode;
};

/* -------------------------------------------------------------------------- */
/* Alert Component */
/* -------------------------------------------------------------------------- */
function Alert({
  children,
  className,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  tone = 'neutral',
  icon,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof alertVariants> &
  ThemedProps & { children?: React.ReactNode }) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'alert', variant, tone, tokens },
    theme
  );

  const tokenTone = mergedTokens?.tones?.[tone] ?? {};

  const styles =
    platform === 'web'
      ? {
          '--alert-bg': tokenTone?.background ?? '#F8FAFC',
          '--alert-border': tokenTone?.border ?? '#E2E8F0',
          '--alert-text': tokenTone?.text ?? '#1F2937',
          '--alert-icon-color': tokenTone?.iconColor ?? '#6B7280',
          ...style,
        }
      : undefined;

  return (
    <div
      role="alert"
      data-slot="alert"
      style={styles as React.CSSProperties}
      className={cn(
        alertVariants({ variant }),
        'bg-[var(--alert-bg)] border-[var(--alert-border)] text-[var(--alert-text)] p-3',
        className
      )}
      {...props}
    >
      {icon && (
        <div
          className="shrink-0 flex items-center justify-center leading-none"
          style={{ color: 'var(--alert-icon-color)' }}
        >
          {icon}
        </div>
      )}

      {/* Contenedor layout interno más prolijo */}
      <div className="flex flex-col gap-1 min-w-0">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* AlertTitle */
/* -------------------------------------------------------------------------- */
function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'font-medium text-[var(--alert-text)] leading-tight',
        className
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* AlertDescription */
/* -------------------------------------------------------------------------- */
function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-sm text-[var(--alert-text)] leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, alertVariants };
