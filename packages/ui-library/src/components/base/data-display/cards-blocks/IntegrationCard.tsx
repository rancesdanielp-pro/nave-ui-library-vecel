'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import { useTheme, resolveTokens } from '../../../../theme';
import { Badge } from '../system-feedback/Badge';

const integrationCardVariants = cva(
  'flex flex-col overflow-hidden transition-all bg-[var(--ic-bg)] border-[var(--ic-border)] rounded-[var(--ic-radius)]',
  {
    variants: {
      variant: {
        default: 'border',
        subtle: 'border',
        none: 'border-0',
      },
      logoSize: {
        small: 'w-full max-w-[380px] min-h-[210px] px-5 pt-5 pb-4 justify-between',
        large: 'w-full max-w-[380px] px-5 pt-4 pb-4 gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      logoSize: 'small',
    },
  }
);

import type { ThemeTokensBase } from '../../../../theme/theme';

export type IntegrationCardProps = React.ComponentProps<'div'> &
  VariantProps<typeof integrationCardVariants> & {
    asChild?: boolean;
    tokens?: Partial<ThemeTokensBase>;
    badgeText?: React.ReactNode;
    logoSlot?: React.ReactNode;
    logoSrc?: string;
    logoAlt?: string;
    initials?: React.ReactNode;
    bannerClassName?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    linkLabel?: React.ReactNode;
    linkHref?: string;
    onLinkClick?: () => void;
    logoClassName?: string;
    badgeClassName?: string;
    contentClassName?: string;
    linkClassName?: string;
  };

export function IntegrationCard({
  className,
  variant = 'default',
  logoSize = 'small',
  asChild = false,
  tokens,
  badgeText,
  logoSlot,
  logoSrc,
  logoAlt = '',
  initials = ' ',
  bannerClassName,
  title,
  description,
  linkLabel = 'Link',
  linkHref,
  onLinkClick,
  logoClassName,
  badgeClassName,
  contentClassName,
  linkClassName,
  style,
  ...props
}: IntegrationCardProps) {
  const theme = useTheme();
  const Comp = asChild ? Slot : 'div';

  const mergedTokens = resolveTokens({ componentName: 'integrationCard', tokens }, theme) as any ?? {};

  const styles = {
    '--ic-bg': mergedTokens?.backgroundColor ?? '#F9F9FA',
    '--ic-border': mergedTokens?.borderColor ?? '#E5E7EB',
    '--ic-radius': mergedTokens?.borderRadius ?? '16px',
    '--ic-title-color': mergedTokens?.title?.color ?? '#111827',
    '--ic-desc-color': mergedTokens?.description?.color ?? '#6B7280',
    '--ic-link-color': mergedTokens?.link?.color ?? '#652BDF',
    ...style,
  } as React.CSSProperties;

  const hasLink = Boolean(linkHref || onLinkClick);

  // Logo logic (Simplificada para el ejemplo)
  const LogoNode = logoSlot ?? (logoSrc ? (
    <div className="bg-blue-400 w-full h-full rounded flex items-center justify-center text-white text-[10px]">LOGO</div>
  ) : (
    <span className="text-xs font-semibold text-[var(--ic-title-color)]">{initials}</span>
  ));

  const LinkComp = linkHref ? 'a' : 'button';
  const commonLinkProps = {
    onClick: onLinkClick,
    href: linkHref,
    className: cn(
      'w-fit text-[14px] font-[550] leading-[1.3] tracking-[-0.04em] underline underline-offset-4 transition-opacity hover:opacity-80',
      'text-[var(--ic-link-color)]',
      logoSize === 'small' ? 'mt-3' : '',
      linkClassName
    )
  };

  return (
    <Comp
      data-slot="integration-card"
      style={styles}
      className={cn(integrationCardVariants({ variant, logoSize }), className)}
      {...props}
    >
      {logoSize === 'small' ? (
        <>
          <div className="flex items-start justify-between gap-3">
            <div className={cn('w-10 h-10 rounded-[8px] border border-[#E5E7EB] bg-white flex items-center justify-center overflow-hidden shrink-0', logoClassName)}>
              {LogoNode}
            </div>
            {badgeText && <Badge tone="success" size="small" className={badgeClassName}>{badgeText}</Badge>}
          </div>

          <div className={cn('mt-2 flex flex-col gap-2 text-left', contentClassName)}>
            <div className="text-[16px] font-[550] leading-[1.3] tracking-[-0.04em] text-[var(--ic-title-color)]">{title}</div>
            {description && <div className="text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-[var(--ic-desc-color)]">{description}</div>}
          </div>

          {hasLink ? React.createElement(LinkComp, commonLinkProps, linkLabel) : <div />}
        </>
      ) : (
        <>
          <div className={cn('relative w-full max-w-[364px] h-[140px] rounded-[5.33px] overflow-hidden bg-[#08B7F6]', bannerClassName)}>
            {badgeText && (
              <div className={cn('absolute top-3 right-3', badgeClassName)}>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0F766E]">{badgeText}</span>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={cn('w-[88px] h-[88px] flex items-center justify-center', logoClassName)}>{LogoNode}</div>
            </div>
          </div>

          <div className={cn('flex flex-col gap-2 text-left', contentClassName)}>
            <div className="text-[16px] font-[550] leading-[1.3] tracking-[-0.04em] text-[var(--ic-title-color)]">{title}</div>
            {description && <div className="text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-[var(--ic-desc-color)]">{description}</div>}
            {hasLink && React.createElement(LinkComp, commonLinkProps, linkLabel)}
          </div>
        </>
      )}
    </Comp>
  );
}