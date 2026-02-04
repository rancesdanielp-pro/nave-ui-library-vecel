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
    resolveTokens(
      { componentName: 'pagination', tokens: customTokens },
      theme
    ) as any?? {};

  const styles = {
    '--pg-active-bg': mergedTokens?.activeBackground ?? '#f6f2fd',
    '--pg-active-text': mergedTokens?.activeText ?? '#ffffff',
    '--pg-border-color': mergedTokens?.border ?? '#d1d5db',
    '--pg-hover-bg': mergedTokens?.hoverBackground ?? '#e5e7eb',
    '--pg-border-radius': mergedTokens?.radius ?? '8px',
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
  style,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      aria-current={isActive ? 'page' : undefined}
      data-active={isActive}
      style={{
        // Forzamos el uso de las variables definidas en el padre
        backgroundColor: isActive ? 'var(--pg-active-bg)' : undefined,
        color: isActive ? 'var(--pg-active-text)' : undefined,
        borderRadius: 'var(--pg-border-radius)',
        ...style,
      }}
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 border text-sm font-medium transition-all select-none cursor-pointer',

        // Estado Inactivo (Botón blanco con borde)
        'bg-white text-slate-700 border-[var(--pg-border-color)]',
        'hover:bg-[var(--pg-hover-bg)]',

        // Estado Activo (Limpiamos borde y aplicamos sombra suave)
        'data-[active=true]:border-transparent data-[active=true]:shadow-sm',

        // Disabled
        'disabled:pointer-events-none disabled:opacity-40',
        disabled && 'pointer-events-none opacity-40',

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
      className={cn('flex items-center gap-2', className)}
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
      <ChevronLeftIcon className="h-4 w-4" />
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
      <ChevronRightIcon className="h-4 w-4" />
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
        'inline-flex items-center justify-center w-9 h-9 text-slate-400',
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="h-4 w-4" />
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
