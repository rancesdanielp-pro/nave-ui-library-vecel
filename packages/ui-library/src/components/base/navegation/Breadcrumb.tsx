'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

// Variantes basadas en los tokens de tamaño
const breadcrumbListVariants = cva(
  'flex flex-wrap items-center transition-colors',
  {
    variants: {
      size: {
        small: 'text-[var(--bc-font-size)] gap-[var(--bc-gap)]',
        medium: 'text-[var(--bc-font-size)] gap-[var(--bc-gap)]',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

interface BreadcrumbProps extends React.ComponentProps<'nav'> {
  tokens?: Partial<ThemeTokensBase>;
  size?: 'small' | 'medium';
}

function Breadcrumb({ 
  className, 
  tokens, 
  style, 
  size = 'medium', 
  ...props 
}: BreadcrumbProps) {
  const theme = useTheme();

  // Resolvemos los tokens pasando el tamaño actual para obtener fontSize y gap específicos
  const mergedTokens =
    (resolveTokens({ componentName: 'breadcrumb', size, tokens }, theme) as any) ?? {};

  const styles = {
    // Tipografía y Espaciado según tamaño
    '--bc-font-size': mergedTokens?.fontSize ?? '14px',
    '--bc-gap': mergedTokens?.gap ?? '8px',
    
    // Estados del Link (Default y Hover)
    '--bc-link-color': mergedTokens?.link?.default?.color ?? 'inherit',
    '--bc-link-weight': mergedTokens?.link?.default?.fontWeight ?? '600',
    '--bc-link-hover-color': mergedTokens?.link?.hover?.color ?? 'inherit',
    '--bc-link-hover-decor': mergedTokens?.link?.hover?.textDecoration ?? 'underline',
    
    // Estado Current (Page)
    '--bc-page-color': mergedTokens?.page?.color ?? '#64748b',
    '--bc-page-weight': mergedTokens?.page?.fontWeight ?? '400',
    
    // Separador
    '--bc-sep-color': mergedTokens?.separator?.color ?? '#94a3b8',
    '--bc-sep-size': mergedTokens?.separator?.size ?? '14px',
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

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(breadcrumbListVariants(), className)}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center', className)}
      {...props}
    />
  );
}

/**
 * BreadcrumbLink: Representa el ItemLink (Required)
 * Aplica los estados Default y Hover desde tokens.
 */
function BreadcrumbLink({ 
  asChild, 
  className, 
  ...props 
}: React.ComponentProps<'a'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        'transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'text-[var(--bc-link-color)] font-[var(--bc-link-weight)]',
        'underline underline-offset-[3px] decoration-1',
        'hover:text-[var(--bc-link-hover-color)] hover:decoration-[var(--bc-link-hover-color)]',
        className
      )}
      {...props}
    />
  );
}

/**
 * BreadcrumbPage: Representa el estado Current
 */
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

/**
 * BreadcrumbSeparator: Icono Separador (Required)
 */
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
        'flex items-center justify-center text-[var(--bc-sep-color)]',
        '[&>svg]:size-[var(--bc-sep-size)]',
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
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-[var(--bc-sep-size)] text-[var(--bc-sep-color)]" />
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