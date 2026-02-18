'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

function Tabs({
  className,
  size,
  tokens,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & {
  size?: 'medium' | 'small';
  tokens?: Partial<ThemeTokensBase>;
}) {
  const theme = useTheme();

  const mergedTokens =
    resolveTokens({ componentName: 'tabs', tokens }, theme) ?? ({} as any);

  const sizeTokens = mergedTokens?.sizes?.[size || 'medium'] ?? {};
  
  const styles = {
    '--tabs-list-bg': mergedTokens?.tabsList?.background ?? '#e2e5e9', //
    '--tabs-list-text': mergedTokens?.tabsList?.color ?? '#000000', //

    '--tabs-trigger-color': mergedTokens?.tabsTrigger?.color ?? '#000000',
    '--tabs-trigger-active-bg':
      mergedTokens?.tabsTrigger?.active?.background ?? '#a3aab8', //
    '--tabs-trigger-active-text':
      mergedTokens?.tabsTrigger?.active?.color ?? '#000000', //

      //disabled
    '--tabs-trigger-disabled-opacity':
      mergedTokens?.tabsTrigger?.disabled?.opacity ?? '0.5',

    '--tabs-trigger-disabled-bg':
      mergedTokens?.tabsTrigger?.disabled?.background ?? '#FFFFFF',

    '--tabs-trigger-active-box-shadow':
      mergedTokens?.tabsTrigger?.active?.boxShadow ??
      '0px 1px 2px rgba(0, 0, 0, 0.05)', //

    '--tabs-font-size': sizeTokens.fontSize, //
    '--tabs-font-weight': sizeTokens.fontWeight, //
    '--tabs-hover-bg':
      mergedTokens?.tabsTrigger?.hover?.background ?? '#a3aab8', //

    '--tabs-trigger-disabled-color':
      mergedTokens?.tabsTrigger?.disabled?.color ?? '#000000', //

    //focus ring
    '--tabs-focus-inner':
      mergedTokens?.tabsFocusRing?.innerColor ?? 'var(--color-white)',
    '--tabs-focus-outer':
      mergedTokens?.tabsFocusRing?.outerColor ?? 'var(--color-focus-ring)',
    '--tabs-focus-inner-size': mergedTokens?.tabsFocusRing?.innerSize ?? '2px',
    '--tabs-focus-outer-size': mergedTokens?.tabsFocusRing?.outerSize ?? '4px',

    //border radius
    '--tabs-list-border-radius': mergedTokens?.tabsList?.radius ?? '6px',
    '--tabs-trigger-border-radius': mergedTokens?.tabsList?.radius ?? '6px',
  } as React.CSSProperties;


  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-size={size || 'medium'}
      style={styles}
      className={cn('group/tabs flex flex-col gap-2', className)}
      {...props}
    />
  );
}

type TabsSize = 'medium' | 'small';

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & {
  size?: TabsSize;
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex items-center gap-1 rounded-[var(--tabs-list-border-radius)]',

        // background
        'bg-[var(--tabs-list-bg)] text-[color:var(--tabs-list-text)]',

        // typography
        'text-[length:var(--tabs-font-size)] font-[var(--tabs-font-weight)]',

        // size from root
        'group-data-[size=medium]/tabs:h-[42px]',
        'group-data-[size=small]/tabs:h-[32px]',

        // padding responsive
        'group-data-[size=medium]/tabs:p-[4px]',
        'group-data-[size=small]/tabs:p-[3px]',

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

        // text
        'text-[var(--tabs-trigger-color)]',
        'text-[length:var(--tabs-font-size)] font-[var(--tabs-font-weight)]',

        // active
        'data-[state=active]:bg-[var(--tabs-trigger-active-bg)]',
        'data-[state=active]:text-[var(--tabs-trigger-active-text)]',
        'data-[state=active]:shadow-[0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A]',
        'data-[state=active]:disabled:bg-[var(--tabs-trigger-active-bg)]',
        
       // disabled
        'disabled:bg-[var(--tabs-trigger-disabled-bg)]',
        'disabled:text-[var(--tabs-trigger-disabled-color)]',
        'disabled:pointer-events-none',


         // inactive state (optional, can be customized via tokens)
         //'data-[state=inactive]:disabled:bg-[var(--tabs-list-bg)]',
         //'data-[state=inactive]:text-[var(--tabs-trigger-disabled-color)]',
         

        // hover
        'hover:bg-[var(--tabs-hover-bg)]',

 

        // focus ring
        'focus-visible:outline-none',
        'focus-visible:relative',
        'focus-visible:after:absolute',
        'focus-visible:after:inset-0',
        'focus-visible:after:rounded-[var(--tabs-trigger-border-radius)]',
        'focus-visible:after:pointer-events-none',
        'focus-visible:after:shadow-[0_0_0_var(--tabs-focus-inner-size)_var(--tabs-focus-inner),0_0_0_var(--tabs-focus-outer-size)_var(--tabs-focus-outer)]',

        // sizes from root
        'group-data-[size=medium]/tabs:h-[34px]',
        'group-data-[size=medium]/tabs:px-[12px]',

        'group-data-[size=small]/tabs:h-[28px]',
        'group-data-[size=small]/tabs:px-[10px]',

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
