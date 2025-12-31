'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

type ThemedProps = {
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
};

/* ---------------------------------- Table --------------------------------- */

function Table({
  className,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<'table'> & ThemedProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'table', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <div
      data-slot="table-container"
      className="
            w-full
            rounded-[16px]
            bg-white
            border
            border-[#E2E5E9]
            shadow-[var(--shadow-table)]
            overflow-hidden
            "
    >
      <table
        data-slot="table"
        className={cn('w-full text-sm text-foreground', className)}
        {...props}
      />
    </div>
  );
}

/* -------------------------------- Subparts -------------------------------- */

function TableHeader(props: React.ComponentProps<'thead'>) {
  return (
    <thead
      className=" 
        bg-[#F9F9FA]
        text-[#6E7991]
        text-xs
        h-12
        border-b
        border-[#E2E5E9]
        font-medium
        [&>tr]:last:border-b-0
      "
      {...props}
    />
  );
}

function TableBody(props: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', props.className)}
      {...props}
    />
  );
}

function TableFooter({
  children,
  className,
  ...props
}: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-white border-t border-[#E2E5E9]', className)}
      {...props}
    >
      <tr>
        <td colSpan={100} className="p-0">
          <div className="flex w-full items-center justify-between px-4 py-3">
            {children}
          </div>
        </td>
      </tr>
    </tfoot>
  )
}


function TableRow(props: React.ComponentProps<'tr'>) {
  return (
    <tr
      className="
        bg-white/30
        border-b border-[#E2E5E9]
        hover:bg-muted/30
        transition-colors
        text-sm
        text-[#3A3F4B]
      "
      {...props}
    />
  );
}

function TableHead(props: React.ComponentProps<'th'>) {
  return (
    <th
      className="
        h-12
        px-4
        py-3
        text-xs
        font-medium
        text-[#6E7991]
        whitespace-nowrap
        text-left
        align-middle
      "
      {...props}
    />
  );
}

function TableCell(props: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'px-4 py-3 align-middle whitespace-nowrap text-sm text-[#3A3F4B]',
        props.className
      )}
      {...props}
    />
  );
}

function TableCaption(props: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('mt-4 text-sm text-muted-foreground', props.className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
