'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { resolveTokens, useTheme } from '../../../../theme';

import { cn } from '../../../../utils/cn';


function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

import type { ThemeTokensBase } from '../../../../theme/theme';

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  tokens,
  style,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> & {
  tokens?: Partial<ThemeTokensBase>;
}) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens({ componentName: 'popover', tokens }, theme) as any) ?? {};

  const styles = {
    '--popover-text': mergedTokens?.color,
    '--popover-bg': mergedTokens?.background,
    '--popover-radius': mergedTokens?.radius,
    '--popover-border-color': mergedTokens?.border,
    '--popover-shadow': mergedTokens?.shadow,

    '--popover-padding': mergedTokens?.padding,

    '--popover-font-size': mergedTokens?.fontSize,
    '--popover-font-weight': mergedTokens?.fontWeight,
    '--popover-line-height': mergedTokens?.lineHeight,

    '--popover-z': mergedTokens?.zIndex,
  } as React.CSSProperties;

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        style={styles as React.CSSProperties}
        className={cn(
          'z-[var(--popover-z)] w-72 origin-[var(--radix-popover-content-transform-origin)]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          'p-4 outline-hidden',
          'padding-[var(--popover-padding)]',
          'line-height-[var(--popover-line-height)] font-[var(--popover-font-weight)]',
          'bg-[var(--popover-bg)] text-[color:var(--popover-text)] text-[length:var(--popover-font-size)] border border-[var(--popover-border-width)] border-[var(--popover-border-color)] shadow-[var(--popover-shadow)] rounded-[var(--popover-radius)]',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
