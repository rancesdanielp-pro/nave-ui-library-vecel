'use client';

import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

import { cn } from '../../../utils/cn';

/* -----------------------------------------------------------------------------
 * Pagination (layout)
 * ---------------------------------------------------------------------------*/

function Pagination({
  className,
  ...props
}: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * PaginationContent
 * ---------------------------------------------------------------------------*/

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

/* -----------------------------------------------------------------------------
 * PaginationItem
 * ---------------------------------------------------------------------------*/

function PaginationItem(props: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

/* -----------------------------------------------------------------------------
 * PaginationLink (NUMBER / ICON)
 * ---------------------------------------------------------------------------*/

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
      aria-disabled={disabled}
      className={cn(
        // Base button
        'inline-flex items-center justify-center',
        'w-9 h-9 rounded-md border text-sm font-medium',
        'transition-colors select-none',

        // Border
        'border-[#E2E5E9]',

        // Default
        !isActive && 'bg-white text-[#374151] hover:bg-[#F9FAFB]',

        // Active
        isActive &&
          'bg-[#F4F0FF] text-[#6D28D9] border-transparent',

        // Disabled
        disabled && 'pointer-events-none opacity-40',

        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Previous / Next (ICON ONLY)
 * ---------------------------------------------------------------------------*/

function PaginationPrevious({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  disabled?: boolean;
}) {
  return (
    <PaginationLink
      aria-label="Previous page"
      disabled={disabled}
      className={className}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  disabled?: boolean;
}) {
  return (
    <PaginationLink
      aria-label="Next page"
      disabled={disabled}
      className={className}
      {...props}
    >
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  );
}

/* -----------------------------------------------------------------------------
 * PaginationEllipsis
 * ---------------------------------------------------------------------------*/

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        'inline-flex items-center justify-center',
        'w-9 h-9 text-[#9CA3AF]',
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

/* -----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
