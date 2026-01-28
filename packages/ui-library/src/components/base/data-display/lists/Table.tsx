'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import {
  resolveTokens,
  useTheme,
} from '../../../../theme';

type TableTokens = {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  header?: any;
  row?: any;
  cell?: any;
  footer?: any;
};

const TableStylesContext = React.createContext<TableTokens | null>(null);

/* ---------------------------------- Table --------------------------------- */

function Table({
  className,
  tokens,
  ...props
}: React.ComponentProps<'table'> & { tokens?: any }) {
  const theme = useTheme();

  const mergedTokens = resolveTokens({ componentName: 'table', tokens }, theme);

  const styles = {
    '--table-bg': mergedTokens?.background ?? '#FFFFFF',
    '--table-border': mergedTokens?.border ?? '#E2E5E9',
    '--table-radius': mergedTokens?.radius ?? '16px',
    '--table-shadow': mergedTokens?.shadow ?? 'var(--shadow-table)',
  } as React.CSSProperties;

  return (
    <TableStylesContext.Provider value={mergedTokens}>
      <div
        data-slot="table-container"
        style={styles}
        className="
          w-full
          rounded-[--table-radius]
          bg-[--table-bg]
          border border-[--table-border]
          shadow-[--table-shadow]
          overflow-hidden
        "
      >
        <table
          data-slot="table"
          className={cn('w-full text-sm', className)}
          {...props}
        />
      </div>
    </TableStylesContext.Provider>
  );
}

/* -------------------------------- Subparts -------------------------------- */

function TableHeader(props: React.ComponentProps<'thead'>) {
  const tokens = React.useContext(TableStylesContext);

  const styles = {
    '--th-bg': tokens?.header?.backgroundColor ?? '#F9F9FA',
    '--th-text': tokens?.header?.textColor ?? '#652BDF',
    '--th-border': tokens?.header?.borderColor ?? '#E2E5E9',
  } as React.CSSProperties;

  return (
    <thead
      style={styles}
      className="
        bg-[--th-bg]
        text-[--th-text]
        text-xs
        h-12
        border-b border-[--th-border]
        font-medium
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
      className={cn('bg-white border-t border-[--border-default]', className)}
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
  );
}

function TableRow(props: React.ComponentProps<'tr'>) {
  const tokens = React.useContext(TableStylesContext);

  const styles = {
    '--row-text': tokens?.row?.textColor ?? '#3A3F4B',
    '--row-hover': tokens?.row?.hoverBackground ?? 'rgba(0,0,0,.03)',
    '--row-border': tokens?.row?.borderColor ?? '#E2E5E9',
  } as React.CSSProperties;

  return (
    <tr
      style={styles}
      className="
        text-[--row-text]
        border-b border-[--row-border]
        hover:bg-[--row-hover]
        transition-colors
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
        text-[--color-text-tertiary]
        whitespace-nowrap
        text-left
        align-middle
      "
      {...props}
    />
  );
}

function TableCell(props: React.ComponentProps<'td'>) {
  const tokens = React.useContext(TableStylesContext);

  const styles = {
    '--cell-text': tokens?.cell?.textColor ?? '#3A3F4B',
    '--cell-size': tokens?.cell?.fontSize ?? '14px',
  } as React.CSSProperties;

  return (
    <td
      style={styles}
      className="
        px-4 py-3
        text-[--cell-size]
        text-[--cell-text]
        whitespace-nowrap
        align-middle
      "
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
