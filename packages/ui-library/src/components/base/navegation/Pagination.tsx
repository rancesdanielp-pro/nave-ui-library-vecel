'use client';

import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

function Pagination({
  className,
  tokens: customTokens,
  style,
  ...props
}: React.ComponentProps<'nav'> & { tokens?: Partial<ThemeTokensBase> }) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens(
      { componentName: 'pagination', tokens: customTokens },
      theme
    ) as any) ?? {};

  const styles = {
    // Layout y Contenedor
    '--pg-gap': mergedTokens?.gap ?? '8px',
    '--pg-radius': mergedTokens?.radius ?? '8px',

    // Tipografía de Números (PageNumber Required)
    '--pg-font-size': mergedTokens?.pageNumber?.fontSize ?? '14px',
    '--pg-font-weight': mergedTokens?.pageNumber?.fontWeight ?? '500',

    // Iconos (Icon Required)
    '--pg-icon-size': mergedTokens?.icon?.size ?? '16px',
    '--pg-icon-color': mergedTokens?.icon?.color ?? 'currentColor',

    // Estado Default
    '--pg-item-bg': mergedTokens?.item?.default?.background ?? '#FFFFFF',
    '--pg-item-border': mergedTokens?.item?.default?.border ?? '#D1D5DB',
    '--pg-item-text': mergedTokens?.item?.default?.color ?? '#374151',

    // Estado Hover
    '--pg-item-hover-bg': mergedTokens?.item?.hover?.background ?? '#E6DCFA',
    '--pg-item-hover-border': mergedTokens?.item?.hover?.border ?? '#D1D5DB',

    // Estado Active / Current Page (Required)
    '--pg-active-bg': mergedTokens?.item?.active?.background ?? '#F4F0FF',
    '--pg-active-text': mergedTokens?.item?.active?.text ?? '#652BDF',
    '--pg-active-border': mergedTokens?.item?.active?.border ?? 'transparent',

    // Estado Focus (Required)
    '--pg-focus-border': mergedTokens?.item?.focus?.border ?? '#652BDF',

    // Estado Disabled (Required)
    '--pg-disabled-bg': mergedTokens?.item?.disabled?.background ?? '#FFFFFF',
    '--pg-disabled-text': mergedTokens?.item?.disabled?.text ?? '#9CA3AF',
    '--pg-disabled-opacity': mergedTokens?.item?.disabled?.opacity ?? '0.5',

    ...style,
  } as React.CSSProperties;

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      style={styles}
      className={cn(
        'mx-auto flex w-full justify-center group/pagination',
        className
      )}
      {...props}
    />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & React.ComponentProps<'a'>;

function PaginationLink({
  className,
  isActive,
  disabled,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      aria-current={isActive ? 'page' : undefined}
      data-active={isActive}
      className={cn(
        // Base: Botón cuadrado con fuentes y radios de tokens
        'inline-flex items-center justify-center w-9 h-9 border text-[var(--pg-font-size)] font-[var(--pg-font-weight)] transition-all select-none cursor-pointer outline-none relative rounded-[var(--pg-radius)]',

        // Estilos Inactivos (Default)
        'bg-[var(--pg-item-bg)] border-[var(--pg-item-border)] text-[var(--pg-item-text)]',
        'hover:bg-[var(--pg-item-hover-bg)] hover:border-[var(--pg-item-hover-border)]',

        // Estilos Activos (Current Page)
        'data-[active=true]:bg-[var(--pg-active-bg)] data-[active=true]:text-[var(--pg-active-text)] data-[active=true]:border-[var(--pg-active-border)] data-[active=true]:shadow-sm',

        // Estado Focus (Borde de marca + Ring)
        'focus:z-10 focus:border-[var(--pg-focus-border)] focus:ring-1 focus:ring-[var(--pg-focus-border)]',
        'data-[active=true]:focus:border-[var(--pg-focus-border)]',

        // Estado Disabled
        'disabled:pointer-events-none disabled:bg-[var(--pg-disabled-bg)] disabled:text-[var(--pg-disabled-text)] disabled:opacity-[var(--pg-disabled-opacity)]',
        disabled && 'pointer-events-none bg-[var(--pg-disabled-bg)] text-[var(--pg-disabled-text)] opacity-[var(--pg-disabled-opacity)]',

        className
      )}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex items-center gap-[var(--pg-gap)]', className)}
      {...props}
    />
  );
}

function PaginationItem(props: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn('gap-1 px-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon style={{ width: 'var(--pg-icon-size)', height: 'var(--pg-icon-size)' }} />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn('gap-1 px-2.5', className)}
      {...props}
    >
      <ChevronRightIcon style={{ width: 'var(--pg-icon-size)', height: 'var(--pg-icon-size)' }} />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="pagination-ellipsis"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 text-[var(--pg-icon-color)]',
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon style={{ width: 'var(--pg-icon-size)', height: 'var(--pg-icon-size)' }} />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};