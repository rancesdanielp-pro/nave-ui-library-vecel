'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

function Tabs({
  className,
  tokens,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & {
  tokens?: Partial<ThemeTokensBase>;
}) {
  const theme = useTheme();

  const mergedTokens =
    resolveTokens({ componentName: 'tabs', tokens }, theme) ?? {} as any;

  const styles = {
    '--tabs-list-bg': mergedTokens?.tabsList?.backgroundr ?? '#e2e5e9',
    '--tabs-list-text': mergedTokens?.tabsList?.color ?? '#000000',

    '--tabs-trigger-color': mergedTokens?.tabsTrigger?.color ?? '#000000',
    '--tabs-trigger-active-bg':
      mergedTokens?.tabsTrigger?.active?.background ?? '#a3aab8',
    '--tabs-trigger-active-border':
      mergedTokens?.tabsTrigger?.active?.border ?? '#E5E7EB',
    '--tabs-trigger-active-text':
      mergedTokens?.tabsTrigger?.active?.color ?? '#000000',
    '--tabs-trigger-disabled-opacity':
      mergedTokens?.tabsTrigger?.disabled?.opacity ?? '0.5',

    //focus ring
    '--tabs-focus-inner':
      mergedTokens?.tabsFocusRing?.innerColor ?? 'var(--color-white)',
    '--tabs-focus-outer':
      mergedTokens?.tabsFocusRing?.outerColor ?? 'var(--color-focus-ring)',
    '--tabs-focus-inner-size': mergedTokens?.tabsFocusRing?.innerSize ?? '2px',
    '--tabs-focus-outer-size': mergedTokens?.tabsFocusRing?.outerSize ?? '4px',

    //border radius
    '--tabs-list-border-radius': mergedTokens?.tabsList?.border ?? '6px',
    '--tabs-trigger-border-radius': mergedTokens?.tabsList?.border ?? '6px',
  } as React.CSSProperties;

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      style={styles}
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

type TabsSize = 'large' | 'small';

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
        'inline-flex items-center gap-1 rounded-[var(--tabs-list-border-radius)] p-[2px]',
        'bg-[var(--tabs-list-bg)] text-[var(--tabs-list-text)]',

        size === 'large' && 'h-[42px]',
        size === 'small' && 'h-[32px]',

        'group/tabs',
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        'rounded-[var(--tabs-trigger-border-radius)] border border-transparent transition-all',
        'text-[var(--tabs-trigger-color)]',

        'data-[state=active]:bg-[var(--tabs-trigger-active-bg)]',
        'data-[state=active]:text-[var(--tabs-trigger-active-text)]',
        'data-[state=active]:border-[var(--tabs-trigger-active-border)]',

        'disabled:opacity-[var(--tabs-trigger-disabled-opacity)]',
        'disabled:pointer-events-none',

        //focus ring
        'focus-visible:outline-none',
        'focus-visible:relative',
        'focus-visible:after:absolute',
        'focus-visible:after:inset-0',
        'focus-visible:after:rounded-[var(--tabs-trigger-border-radius)]',
        'focus-visible:after:pointer-events-none',
        'focus-visible:after:shadow-[0_0_0_var(--tabs-focus-inner-size)_var(--tabs-focus-inner),0_0_0_var(--tabs-focus-outer-size)_var(--tabs-focus-outer)]',

        'group-data-[size=large]/tabs:h-[34px]',
        'group-data-[size=large]/tabs:px-[12px]',
        'group-data-[size=large]/tabs:text-sm',

        'group-data-[size=small]/tabs:h-[28px]',
        'group-data-[size=small]/tabs:px-[10px]',
        'group-data-[size=small]/tabs:text-xs',

        className
      )}
      {...props}
    />
  );
}

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

export { Tabs, TabsList, TabsTrigger, TabsContent };
