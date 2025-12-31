'use client';

import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
  Card,
  Button,
  Badge,
} from '../../base';
import { EmptyState, ListItem } from '../../base/data-display';
import { cn } from '../../../utils/cn';
import { ChevronRight, ChevronsUpDown } from 'lucide-react';

export type MovementStatus =
  | 'success'
  | 'pending'
  | 'failed'
  | 'created'
  | 'refunded';

export type Movement = {
  id: string;
  date: string; // "19 Dic, 08:21"
  title: string; // "QR", "Tienda online"
  subtitle?: string; // "Link de pago"
  amount: string; // "$32.850,10"
  status?: MovementStatus;
};

export type LastMovementsProps = {
  title: string;
  period: string;
  items?: Movement[];
  state?: 'loading' | 'empty' | 'default';

  date?: Date;
  expanded?: boolean;

  onDateChange?: (date?: Date) => void;
  onExpandedChange?: (expanded: boolean) => void;
  onItemClick?: (id: string) => void;
};
const statusMap: Record<MovementStatus, { label: string; variant: any }> = {
  success: { label: 'Acreditado', variant: 'success' },
  pending: { label: 'Por acreditar', variant: 'warning' },
  failed: { label: 'Rechazado', variant: 'destructive' },
  created: { label: 'Creado', variant: 'secondary' },
  refunded: { label: 'Devuelto', variant: 'info' },
};

export function LastMovements({
  title,
  items = [],
  state = 'default',
  date,
  expanded = true,
  onDateChange,
  onExpandedChange,
  onItemClick,
}: LastMovementsProps) {
  return (
    <Card
      variant="primary"
      title={title}
      className="w-full"
      action={
        <Popover>
          <div className="flex items-center gap-1">
            <PopoverTrigger asChild>
              <Button
                variant="secondary"
                id="date"
                className="text-gray-950 border-gray-300 hover:bg-transparent hover:text-gray-950 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none"
                style={{
                  fontFamily: 'var(--font-text)',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '130%',
                  letterSpacing: '-0.04em',
                }}
              >
                {date ? date.toLocaleDateString() : 'Este mes'}
                <ChevronsUpDown className="ml-2 h-4 w-4 text-gray-300" />
              </Button>
            </PopoverTrigger>

            <button
              type="button"
              onClick={() => onExpandedChange?.(!expanded)}
              className="flex items-center justify-center"
            >
              <ChevronRight
                className={cn(
                  'h-5 w-5 text-gray-300 transition-transform duration-200',
                  expanded && 'rotate-90'
                )}
              />
            </button>
          </div>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => onDateChange?.(d)}
            />
          </PopoverContent>
        </Popover>
      }
    >
      {expanded && (
        <div className="divide-y">
          {state === 'loading' && (
            <div className="space-y-2 p-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-full rounded-md bg-muted animate-pulse"
                />
              ))}
            </div>
          )}

          {state === 'empty' && (
            <EmptyState
              title="Todavía no tenés movimientos"
              description="Acá vas a poder seguir los pagos con QR, link de pago y Tienda online"
            />
          )}

          {state === 'default' &&
            items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                overline={item.date}
                title={item.title}
                subtitle={item.subtitle}
                amount={item.amount}
                status={
                  item.status
                    ? {
                        label: statusMap[item.status].label,
                        variant: statusMap[item.status].variant,
                      }
                    : undefined
                }
                onItemClick={onItemClick}
              />
            ))}
        </div>
      )}
    </Card>
  );
}
