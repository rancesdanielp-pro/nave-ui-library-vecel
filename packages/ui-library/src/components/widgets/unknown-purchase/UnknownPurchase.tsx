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
import { ChevronsUpDown } from 'lucide-react';

/* ---------------------------------------------
 * TYPES
 * --------------------------------------------*/

export type UnknownPurchaseState = 'loading' | 'empty' | 'error' | 'default';

interface UnknownPurchaseProps {
  title: string;
  totalAmount: string;
  totalCount: number;
  date?: Date;
  onDateChange?: (date?: Date) => void;
  
  /** Estados */
  state?: UnknownPurchaseState;

  /** Contenido para estados (Slots) */
  loadingContent?: React.ReactNode;
  emptyContent?: React.ReactNode;
  errorContent?: React.ReactNode;

  tokens?: Partial<ThemeTokensBase>;
}

/* ---------------------------------------------
 * COMPONENT
 * --------------------------------------------*/

export function UnknownPurchase({
  title,
  totalAmount,
  totalCount,
  date,
  onDateChange,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
}: UnknownPurchaseProps) {
  return (
    <Card
      variant="primary"
      title={title}
      className="w-full"
    >
      {/* DATE PICKER */}
      <div className="mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              className="w-full justify-between text-gray-950 border-gray-300 hover:bg-transparent hover:text-gray-950"
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

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => onDateChange?.(d)}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* RENDERIZADO CONDICIONAL POR ESTADO */}
      <div className="min-h-[100px] flex flex-col justify-center">
        {state === 'loading' && loadingContent}
        {state === 'empty' && emptyContent}
        {state === 'error' && errorContent}

        {state === 'default' && (
          <>
            {/* TOTAL AMOUNT */}
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Monto total desconocido
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {totalAmount}
              </p>
            </div>

            {/* TOTAL COUNT */}
            <div>
              <p className="text-sm text-gray-500">
                Total de compras desconocidas
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {totalCount}
              </p>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}