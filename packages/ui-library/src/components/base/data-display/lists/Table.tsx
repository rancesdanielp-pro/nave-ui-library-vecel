'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

const TableStylesContext = React.createContext<any | null>(null);

function Table({
  className,
  tokens,
  ...props
}: React.ComponentProps<'table'> & { tokens?: Partial<ThemeTokensBase> }) {
  const theme = useTheme();
  
  // resolveTokens aplana la estructura 'base' del componente definido en el JSON
  const mergedTokens = resolveTokens({ componentName: 'table', tokens }, theme) as any;

  // Mapeo corregido: Se eliminan fallbacks violetas y se ajusta a la estructura del token
  const styles = {
    // Contenedor principal
    '--table-bg': mergedTokens?.background ?? '#FFFFFF',
    '--table-border': mergedTokens?.border ?? '#E2E5E9',
    '--table-radius': mergedTokens?.radius ?? '16px',
    '--table-shadow': mergedTokens?.shadow ?? 'none',
    
    // Header (thead / th) - Corregido para usar el gris del token por defecto
    '--th-bg': mergedTokens?.headerBackground ?? '#F9F9FA',
    '--th-text': mergedTokens?.headerTextColor ?? '#6E7991', 
    '--th-size': mergedTokens?.headerFontSize ?? '12px',
    '--th-weight': mergedTokens?.headerFontWeight ?? '600',
    
    // Filas y Celdas (tr / td)
    '--row-hover': mergedTokens?.rowHoverBackground ?? 'rgba(0,0,0,.03)',
    '--row-selected': mergedTokens?.rowSelectedBackground ?? '#F4F0FF',
    '--cell-text': mergedTokens?.cellTextColor ?? '#3A3F4B',
    '--cell-size': mergedTokens?.cellFontSize ?? '14px',
    
    // Descripción de Celda (TableCellDescription)
    '--cell-desc-text': mergedTokens?.descriptionColor ?? '#6E7991',
    '--cell-desc-size': mergedTokens?.descriptionFontSize ?? '12px',
    '--cell-desc-weight': mergedTokens?.descriptionFontWeight ?? '400',
  } as React.CSSProperties;

  return (
    <TableStylesContext.Provider value={mergedTokens}>
      <div
        data-slot="table-container"
        style={styles}
        className="w-full rounded-[var(--table-radius)] bg-[var(--table-bg)] border border-[var(--table-border)] shadow-[var(--table-shadow)] overflow-hidden"
      >
        <table
          data-slot="table"
          className={cn('w-full text-sm border-collapse', className)}
          {...props}
        />
      </div>
    </TableStylesContext.Provider>
  );
}

function TableHeader(props: React.ComponentProps<'thead'>) {
  return (
    <thead
      className="bg-[var(--th-bg)] text-[var(--th-text)] border-b border-[var(--table-border)]"
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

function TableRow(props: React.ComponentProps<'tr'>) {
  return (
    <tr
      className="border-b border-[var(--table-border)] hover:bg-[var(--row-hover)] data-[state=selected]:bg-[var(--row-selected)] transition-colors"
      {...props}
    />
  );
}

function TableHead(props: React.ComponentProps<'th'>) {
  return (
    <th
      className="h-12 px-4 py-3 text-[var(--th-size)] font-[var(--th-weight)] text-left align-middle whitespace-nowrap uppercase tracking-wider"
      {...props}
    />
  );
}

function TableCell(props: React.ComponentProps<'td'>) {
  return (
    <td
      className="px-4 py-3 text-[var(--cell-size)] text-[var(--cell-text)] align-middle"
      {...props}
    />
  );
}

function TableCellDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        "text-[var(--cell-desc-size)] text-[var(--cell-desc-text)] font-[var(--cell-desc-weight)] leading-tight mt-0.5",
        className
      )}
      {...props}
    />
  );
}

function TableFooter({ children, className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-[var(--table-bg)] border-t border-[var(--table-border)]', className)}
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

function TableCaption(props: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('mt-4 text-sm text-slate-500', props.className)}
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
  TableCellDescription,
  TableCaption,
};