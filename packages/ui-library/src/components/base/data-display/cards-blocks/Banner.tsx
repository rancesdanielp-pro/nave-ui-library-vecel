'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

type Tone = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'brand';

/* -------------------------------------------------------------------------- */
/* Variants
/* -------------------------------------------------------------------------- */

const bannerBase = 'w-full flex items-center gap-4 border rounded-[12px]';

const bannerVariants = cva(bannerBase, {
  variants: {
    size: {
      full: 'max-w-[1184px] px-4 py-4',
      compact: 'max-w-[360px] px-4 py-4',
    },
  },
  defaultVariants: {
    size: 'full',
  },
});

const iconBoxBase =
  'shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-[8px]';

/* -------------------------------------------------------------------------- */
/* Props
/* -------------------------------------------------------------------------- */

import type { ThemeTokensBase } from '../../../../theme/theme';

export type BannerProps = React.ComponentProps<'div'> &
  VariantProps<typeof bannerVariants> & {
    asChild?: boolean;
    tokens?: Partial<ThemeTokensBase>;
    size?: 'full' | 'compact';
    tone?: Tone;

    title: React.ReactNode;
    subtitle?: React.ReactNode;

    icon?: React.ReactNode;
    endSlot?: React.ReactNode;

    showAction?: boolean;
    actionLabel?: React.ReactNode;
    actionHref?: string;
    onActionClick?: () => void;
  };

/* -------------------------------------------------------------------------- */
/* Component
/* -------------------------------------------------------------------------- */

function Banner({
  className,
  asChild = false,
  tokens,
  tone = 'neutral',
  size = 'full',

  title,
  subtitle,
  icon,
  endSlot,

  showAction,
  actionLabel = 'Ver detalle',
  actionHref,
  onActionClick,

  ...props
}: BannerProps) {
  const Comp = asChild ? Slot : 'div';
  const theme = useTheme();

  const mergedTokens =
    resolveTokens({ componentName: 'banner', tone, size, tokens }, theme) as any ?? {};

  /* ---------------------------------------------------------------------- */
  /* CSS Variables (token-first)
  /* ---------------------------------------------------------------------- */

  const styles = {
    '--banner-bg': mergedTokens?.tones?.[tone]?.background ?? '#F8FAFC',
    '--banner-border': mergedTokens?.tones?.[tone]?.border ?? '#E2E8F0',
    '--banner-text': mergedTokens?.tones?.[tone]?.text ?? '#1F2937',
    '--banner-icon-bg':
      mergedTokens?.tones?.[tone]?.iconBg ?? 'rgba(0,0,0,0.08)',
    '--banner-icon-color': mergedTokens?.tones?.[tone]?.iconColor ?? '#6B7280',
    '--banner-action':
      mergedTokens?.tones?.[tone]?.action ??
      mergedTokens?.tones?.[tone]?.text ??
      '#1F2937',
  } as React.CSSProperties;

  const shouldShowAction = showAction ?? Boolean(actionHref || onActionClick);

  const Action =
    shouldShowAction && !endSlot ? (
      actionHref ? (
        <a
          href={actionHref}
          className="shrink-0 text-xs font-semibold underline underline-offset-2"
          style={{ color: 'var(--banner-action)' }}
        >
          {actionLabel}
        </a>
      ) : (
        <button
          type="button"
          onClick={onActionClick}
          className="shrink-0 text-xs font-semibold underline underline-offset-2 bg-transparent p-0"
          style={{ color: 'var(--banner-action)' }}
        >
          {actionLabel}
        </button>
      )
    ) : null;

  return (
    <Comp
      data-slot="banner"
      style={styles}
      className={cn(
        bannerVariants({ size }),
        'flex items-center gap-3 bg-[var(--banner-bg)] border-[var(--banner-border)]',
        className
      )}
      {...props}
    >
      {/* Icon */}
      <div
        className={cn(iconBoxBase, 'shrink-0 flex items-center justify-center')}
        style={{
          backgroundColor: 'var(--banner-icon-bg)',
          color: 'var(--banner-icon-color)',
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 flex flex-col gap-1 justify-center">
        <div
          className="text-sm font-semibold leading-[1.3] tracking-[-0.04em] truncate"
          style={{ color: 'var(--banner-text)' }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            className="text-xs leading-[1.3] truncate opacity-80"
            style={{ color: 'var(--banner-text)' }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {endSlot ? <div className="shrink-0">{endSlot}</div> : Action}
    </Comp>
  );
}

export { Banner, bannerVariants };
