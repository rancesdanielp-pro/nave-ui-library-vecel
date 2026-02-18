'use client';

import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
  Card,
  Button,
} from '../../base';
import type { ThemeTokensBase } from '../../../theme/theme';
import { cn } from '../../../utils/cn';
import { ChevronDownIcon, ChevronsUpDown } from 'lucide-react';

export type MovementStatus =
  | 'success'
  | 'pending'
  | 'failed'
  | 'created'
  | 'refunded';

export type Movement = {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  amount: string;
  status?: MovementStatus;
};

export type LastMovementsState = 'loading' | 'empty' | 'error' | 'default';

export interface LastMovementsProps {
  title: string;
  period?: string;

  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;

  date?: Date;
  onDateChange?: (date?: Date) => void;

  /** Estados */
  state?: LastMovementsState;

  /** Slots */
  headerExtra?: React.ReactNode;
  loadingContent?: React.ReactNode;
  emptyContent?: React.ReactNode;
  errorContent?: React.ReactNode;
  children?: React.ReactNode;

  tokens?: Partial<ThemeTokensBase>;
}

export function LastMovements({
  title,
  period,
  expanded = true,
  onExpandedChange,
  date,
  onDateChange,
  state = 'default',
  headerExtra,
  loadingContent,
  emptyContent,
  errorContent,
  children,
}: LastMovementsProps) {
  return (
    <Card
      variant="primary"
      title={title}
      className="w-full"
      action={
        <Popover>
          <div className="flex items-center gap-1">
            {onDateChange && (
              <PopoverTrigger asChild>
                <Button variant="primary" size="small">
                  {date ? date.toLocaleDateString() : period}
                  <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
            )}

            <button type="button" onClick={() => onExpandedChange?.(!expanded)}>
              <ChevronDownIcon
                className={cn(
                  'h-5 w-5 transition-transform',
                  expanded && 'rotate-90'
                )}
              />
            </button>

            {headerExtra}
          </div>

          {onDateChange && (
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={onDateChange} />
            </PopoverContent>
          )}
        </Popover>
      }
    >
      {expanded && (
        <div className="divide-y">
          {state === 'loading' && loadingContent}
          {state === 'empty' && emptyContent}
          {state === 'error' && errorContent}
          {state === 'default' && children}
        </div>
      )}
    </Card>
  );
}
