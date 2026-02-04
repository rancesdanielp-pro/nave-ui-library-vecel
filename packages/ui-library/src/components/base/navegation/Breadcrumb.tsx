'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

function Breadcrumb({
  className,
  tokens,
  style,
  ...props
}: React.ComponentProps<'nav'> & { tokens?: Partial<ThemeTokensBase> }) {
  const theme = useTheme();

  // Resolvemos los tokens del componente 'breadcrumb'
  const mergedTokens =
    resolveTokens({ componentName: 'breadcrumb', tokens }, theme) as any ?? {};

  const styles = {
    '--bc-link-color': mergedTokens?.link?.color ?? 'inherit',
    '--bc-link-weight': mergedTokens?.link?.fontWeight ?? '600',
    '--bc-link-hover': mergedTokens?.link?.hoverDecoration ?? 'underline',
    '--bc-page-color': mergedTokens?.page?.color ?? 'gray',
    '--bc-page-weight': mergedTokens?.page?.fontWeight ?? '500',
    '--bc-sep-color': mergedTokens?.separator?.color ?? '#A3AAB8',
    ...style,
  } as React.CSSProperties;

  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      style={styles}
      className={cn('group/breadcrumb', className)}
      {...props}
    />
  );
}

const breadcrumbSizes = {
  md: 'text-sm gap-2.5',
  sm: 'text-xs gap-2',
};

function BreadcrumbList({
  className,
  size = 'md',
  ...props
}: React.ComponentProps<'ol'> & { size?: 'sm' | 'md' }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      data-size={size}
      className={cn(
        'flex flex-wrap items-center text-slate-700',
        breadcrumbSizes[size],
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

type BreadcrumbLinkProps = React.ComponentProps<'a'> & {
  asChild?: boolean;
};

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        'transition-colors',
        'text-[var(--bc-link-color)] font-[var(--bc-link-weight)]',
        'hover:underline hover:decoration-[var(--bc-link-hover)]',
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        'cursor-default transition-colors',
        'text-[var(--bc-page-color)] font-[var(--bc-page-weight)]',
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex items-center text-[var(--bc-sep-color)] [&>svg]:size-3.5',
        className
      )}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-5 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4 text-[var(--bc-page-color)]" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
