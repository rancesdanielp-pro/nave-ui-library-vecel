'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../utils/cn';

/* -----------------------------------------------------------------------------
 * Tabs (layout)
 * ---------------------------------------------------------------------------*/

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Types
 * ---------------------------------------------------------------------------*/

type TabsSize = 'large' | 'small';

/* -----------------------------------------------------------------------------
 * TabsList (CONTAINER)
 * - Fondo: #E2E5E9
 * - Radius: 8px
 * - Padding: 2px
 * ---------------------------------------------------------------------------*/

function TabsList({
  className,
  size = 'large',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & {
  size?: TabsSize;
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-size={size}
      className={cn(
        // Base container
        'inline-flex items-center gap-1 rounded-[8px] bg-[#E2E5E9] p-[2px]',

        // Size
        size === 'large' && 'w-[268px] h-[42px]',
        size === 'small' && 'w-[228px] h-[32px]',

        // Needed so children can read size
        'group/tabs',

        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * TabsTrigger (TAB)
 * - Default: transparente, texto negro
 * - Active:
 *   bg blanco
 *   texto negro
 *   box-shadow:
 *     0px 1px 2px -1px #0000001A
 *     0px 1px 3px  0px #0000000F
 * ---------------------------------------------------------------------------*/

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Base
        'inline-flex items-center justify-center whitespace-nowrap',
        'rounded-[6px] border border-transparent',
        'text-black bg-transparent transition-all',

        // Active state
        'data-[state=active]:bg-white',
        'data-[state=active]:text-black',
        'data-[state=active]:shadow-[0_1px_2px_-1px_rgba(0,0,0,0.10),0_1px_3px_0_rgba(0,0,0,0.06)]',

        // Disabled / focus
        'disabled:pointer-events-none disabled:opacity-50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',

        // LARGE
        'group-data-[size=large]/tabs:h-[34px]',
        'group-data-[size=large]/tabs:px-[12px]',
        'group-data-[size=large]/tabs:py-[8px]',
        'group-data-[size=large]/tabs:gap-[8px]',
        'group-data-[size=large]/tabs:text-sm',

        // SMALL
        'group-data-[size=small]/tabs:h-[28px]',
        'group-data-[size=small]/tabs:px-[10px]',
        'group-data-[size=small]/tabs:py-[6px]',
        'group-data-[size=small]/tabs:gap-[8px]',
        'group-data-[size=small]/tabs:text-xs',

        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * TabsContent
 * ---------------------------------------------------------------------------*/

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('outline-none', className)}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export { Tabs, TabsList, TabsTrigger, TabsContent };
