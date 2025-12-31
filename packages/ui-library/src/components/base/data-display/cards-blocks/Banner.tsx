'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

type Tone = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'brand';

const bannerBase =
  'w-full max-w-[1184px] min-h-[77px] ' +
  'flex items-center gap-4 ' +
  'rounded-[12px] border ' +
  'px-4 py-4 sm:pr-6 ' +
  'opacity-100';

const bannerVariants = cva(bannerBase, {
  variants: {
    size: {
      full: '',
      compact: 'max-w-[360px]',
    },
  },
  defaultVariants: {
    size: 'full',
  },
});

const iconBoxBase =
  'shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-[8px]';

function DefaultIcon({ tone }: { tone: Tone }) {
  if (tone === 'success') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.4746 8.91992C15.154 8.65763 14.6822 8.70481 14.4199 9.02539L10.4443 13.8838L9.03027 12.4697C8.73738 12.1768 8.26262 12.1768 7.96973 12.4697C7.67683 12.7626 7.67683 13.2374 7.96973 13.5303L9.96973 15.5303C10.1195 15.68 10.3256 15.7595 10.5371 15.749C10.7487 15.7385 10.9459 15.6386 11.0801 15.4746L15.5801 9.97461C15.8424 9.65403 15.7952 9.18222 15.4746 8.91992Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (tone === 'warning') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9.636 3.25806C10.7019 1.46533 13.2976 1.46533 14.3635 3.25806L21.8479 15.845C22.9374 17.678 21.6162 20.0002 19.4837 20.0002H4.51588C2.38335 20.0001 1.06285 17.678 2.1526 15.845L9.636 3.25806ZM11.2503 8.75024V12.7502C11.2504 13.1644 11.5861 13.5002 12.0003 13.5002C12.4143 13.5001 12.7501 13.1643 12.7503 12.7502V8.75024C12.7503 8.33612 12.4143 8.00039 12.0003 8.00024C11.586 8.00024 11.2503 8.33603 11.2503 8.75024ZM12.0003 16.5002C12.5523 16.5001 13.0001 16.0523 13.0003 15.5002C13.0003 14.9823 12.6063 14.5561 12.1018 14.5051L12.0003 14.5002C11.4825 14.5002 11.0564 14.8935 11.0051 15.3977L11.0003 15.5002L11.0051 15.6018C11.0561 16.1063 11.4823 16.5002 12.0003 16.5002Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (tone === 'error') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5303 8.46973C15.2374 8.17683 14.7626 8.17683 14.4697 8.46973L12 10.9395L9.53027 8.46973C9.23738 8.17683 8.76262 8.17683 8.46973 8.46973C8.17683 8.76262 8.17683 9.23738 8.46973 9.53027L10.9395 12L8.46973 14.4697C8.17683 14.7626 8.17683 15.2374 8.46973 15.5303C8.76262 15.8232 9.23738 15.8232 9.53027 15.5303L12 13.0605L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L13.0605 12L15.5303 9.53027C15.8232 9.23738 15.8232 8.76262 15.5303 8.46973Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.25 11.75V16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25V11C12.75 10.5858 12.4142 10.25 12 10.25H10.75C10.3358 10.25 10 10.5858 10 11C10 11.4142 10.3358 11.75 10.75 11.75H11.25ZM12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function getToneFallbackStyles(tone: Tone, brandColor: string) {
  switch (tone) {
    case 'brand':
      return {
        bg: brandColor,
        border: 'transparent',
        text: '#FFFFFF',
        iconBg: 'rgba(255,255,255,0.16)',
        iconColor: '#FFFFFF',
        subtitleOpacity: 0.85,
        actionColor: '#FFFFFF',
      };

    case 'neutral':
      return {
        bg: '#F8FAFC',
        border: '#E2E8F0',
        text: '#111827',
        iconBg: 'rgba(108,114,128,0.14)',
        iconColor: '#6C7280',
        subtitleOpacity: 1,
        actionColor: '#111827',
      };

    case 'success':
      return {
        bg: '#f2fdf8',
        border: '#1AC776',
        text: '#111827',
        iconBg: 'rgba(26, 199, 118, 0.18)',
        iconColor: '#1AC776',
        subtitleOpacity: 1,
        actionColor: '#1AC776',
      };

    case 'info':
      return {
        bg: '#f0f5fe',
        border: '#2563EB',
        text: '#111827',
        iconBg: 'rgba(37, 99, 235, 0.18)',
        iconColor: '#2563EB',
        subtitleOpacity: 1,
        actionColor: '#2563EB',
      };

    case 'warning':
      return {
        bg: '#FEFAF0',
        border: '#FBAA31',
        text: '#111827',
        iconBg: 'rgba(251, 170, 49, 0.20)',
        iconColor: '#FBAA31',
        subtitleOpacity: 1,
        actionColor: '#C26E04', 
      };

    case 'error':
      return {
        bg: '#feeeeb',
        border: '#DC2626',
        text: '#111827',
        iconBg: 'rgba(220, 38, 38, 0.18)',
        iconColor: '#DC2626',
        subtitleOpacity: 1,
        actionColor: '#DC2626',
      };
  }
}

function normalizeCssColor(value?: unknown) {
  if (typeof value !== 'string') return undefined;
  const v = value.trim().toLowerCase();
  if (!v) return undefined;
  if (v === 'transparent') return undefined;
  return value as string;
}

export type BannerProps = React.ComponentProps<'div'> &
  VariantProps<typeof bannerVariants> & {
    asChild?: boolean;
    tokens?: any;
    platform?: 'web' | 'native';

    tone?: Tone;

    title: React.ReactNode;
    subtitle?: React.ReactNode;

    icon?: React.ReactNode;

    endSlot?: React.ReactNode;

    showAction?: boolean;
    actionLabel?: React.ReactNode;
    actionHref?: string;
    onActionClick?: () => void;

    iconContainerClassName?: string;
    contentClassName?: string;
    actionClassName?: string;
  };

function Banner({
  className,
  tone = 'neutral',
  size,
  asChild = false,
  tokens,
  platform = 'web',
  title,
  subtitle,
  icon,

  endSlot,

  showAction,
  actionLabel = 'Ver detalle',
  actionHref,
  onActionClick,

  iconContainerClassName,
  contentClassName,
  actionClassName,

  style,
  ...props
}: BannerProps) {
  const Comp: any = asChild ? Slot : 'div';
  const theme = useTheme();

  const brandColor =
    theme?.colors?.primary ?? theme?.tokens?.colors?.primary ?? '#652BDF';

  const fallback = getToneFallbackStyles(tone, brandColor);

  const mergedTokens = resolveTokens(
    { componentName: 'banner', tone, size, tokens },
    theme
  );

  const resolved =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens) }
      : resolveNativeStyles(mergedTokens);

  const {
    backgroundColor: rBg,
    borderColor: rBorder,
    color: rColor,
    ...restResolved
  } = (resolved ?? {}) as any;

  const bg = normalizeCssColor(rBg) ?? fallback.bg;
  const border = normalizeCssColor(rBorder) ?? fallback.border;
  const text = normalizeCssColor(rColor) ?? fallback.text;

  const rootStyle: React.CSSProperties = {
    backgroundColor: bg,
    borderColor: border,
    ...(restResolved as React.CSSProperties),
    ...(style as React.CSSProperties),
  };

  const shouldShowAction =
    showAction ?? Boolean(actionHref || onActionClick);

  const Action = shouldShowAction && !endSlot ? (
    actionHref ? (
      <a
        href={actionHref}
        className={cn(
          'shrink-0 text-xs font-semibold underline underline-offset-2 cursor-pointer',
          actionClassName
        )}
        style={{ color: fallback.actionColor }}
        onClick={(e) => {
          onActionClick?.();
        }}
      >
        {actionLabel}
      </a>
    ) : onActionClick ? (
      <button
        type="button"
        className={cn(
          'shrink-0 text-xs font-semibold underline underline-offset-2 cursor-pointer bg-transparent p-0',
          actionClassName
        )}
        style={{ color: fallback.actionColor }}
        onClick={onActionClick}
      >
        {actionLabel}
      </button>
    ) : null
  ) : null;

  return (
    <Comp
      data-slot="banner"
      className={cn(bannerVariants({ size }), className)}
      style={rootStyle}
      {...props}
    >
      <div
        className={cn(iconBoxBase, iconContainerClassName)}
        style={
          {
            backgroundColor: fallback.iconBg,
            color: fallback.iconColor,
          } as React.CSSProperties
        }
      >
        {icon ?? <DefaultIcon tone={tone} />}
      </div>

      <div className={cn('min-w-0 flex-1 flex flex-col gap-1', contentClassName)}>
        <div
          className="text-sm font-semibold leading-[1.3] tracking-[-0.04em] truncate"
          style={{ color: text }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            className="text-xs leading-[1.3] truncate"
            style={{
              color: text,
              opacity: fallback.subtitleOpacity,
            }}
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
