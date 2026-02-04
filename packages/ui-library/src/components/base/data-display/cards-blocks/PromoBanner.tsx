'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

type Variant = 'primary' | 'secondary' | 'tertiary';

/* -------------------------------------------------------------------------- */
/* Variants
/* -------------------------------------------------------------------------- */

const promoBannerBase =
  'flex items-center gap-4 rounded-[16px] transition-all overflow-hidden';

const promoBannerVariants = cva(promoBannerBase, {
  variants: {
    size: {
      full: 'max-w-[1184px] px-4 py-4',
      compact: 'max-w-[360px] px-4 py-3',
    },
  },
  defaultVariants: {
    size: 'full',
  },
});

const imageBoxBase =
  'shrink-0 w-[88px] h-[56px] rounded-[8px] bg-gray-200 bg-center bg-cover';

import type { ThemeTokensBase } from '../../../../theme/theme';

export type PromoBannerProps = React.ComponentProps<'div'> &
  VariantProps<typeof promoBannerVariants> & {
    asChild?: boolean;
    tokens?: Partial<ThemeTokensBase>;

    variant?: Variant;
    title: React.ReactNode;

    imageSrc?: string; // ⬅️ ahora es opcional
    imageAlt?: string;
    imagePosition?: 'left' | 'right';

    icon?: React.ReactNode;
    endSlot?: React.ReactNode;
  };

function PromoBanner({
  className,
  asChild = false,
  tokens,
  variant = 'primary',
  size,

  title,
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',

  icon,
  endSlot,

  ...props
}: PromoBannerProps) {
  const Comp = asChild ? Slot : 'div';
  const theme = useTheme();

  const mergedTokens =
    resolveTokens(
      { componentName: 'promoBanner', variant, size: size ?? undefined, tokens },
      theme
    ) as any ?? {};

  const tokenVariant = mergedTokens?.[variant] ?? {};

  const styles = {
    '--promoBanner-bg': tokenVariant?.background ?? '#F8FAFC',
    '--promoBanner-border': tokenVariant?.border ?? '#E2E8F0',
    '--promoBanner-text': tokenVariant?.text ?? '#1F2937',
    '--promoBanner-icon-bg':
      tokenVariant?.iconBg ?? 'rgba(0,0,0,0.08)',
    '--promoBanner-icon-color':
      tokenVariant?.iconColor ?? '#6B7280',
    '--promoBanner-action': tokenVariant?.action ?? '#1F2937',
  } as React.CSSProperties;

  const hasImage = Boolean(imageSrc);

  const Image = hasImage ? (
    <div
      className={imageBoxBase}
      style={{ backgroundImage: `url(${imageSrc})` }}
      aria-label={imageAlt}
    />
  ) : null;

  return (
    <Comp
      data-slot="promoBanner"
      style={styles}
      className={cn(
        promoBannerVariants({ size }),
        'bg-[var(--promoBanner-bg)] border-[var(--promoBanner-border)]',
        className
      )}
      {...props}
    >
      {/* IMAGE LEFT */}
      {hasImage && imagePosition === 'left' && Image}

      {/* Optional Icon */}
      {icon && (
        <div
          className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-[8px]"
          style={{
            backgroundColor: 'var(--promoBanner-icon-bg)',
            color: 'var(--promoBanner-icon-color)',
          }}
        >
          {icon}
        </div>
      )}

      {/* TEXT */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div
          className="text-sm font-semibold leading-[1.3] truncate"
          style={{ color: 'var(--promoBanner-text)' }}
        >
          {title}
        </div>
      </div>

      {/* IMAGE RIGHT */}
      {hasImage && imagePosition === 'right' && Image}

      {/* EndSlot */}
      {endSlot && <div className="shrink-0">{endSlot}</div>}
    </Comp>
  );
}

export { PromoBanner, promoBannerVariants };
