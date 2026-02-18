'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

/* --------------------- */
/* PROVIDER */
/* --------------------- */

export function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

import type { ThemeTokensBase } from '../../../../theme/theme';

export function Tooltip({
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
}) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

export function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipContent({
  className,
  sideOffset = 4,
  tokens,
  platform = 'web',
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
}) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens({ componentName: 'tooltip', tokens }, theme) as any) ?? {};

  //   textAlign: 'center',
  //  caretColor: '#020303',

  const styles = {
    '--tooltip-text': mergedTokens?.color ?? '#000000',
    '--tooltip-bg': mergedTokens?.background ?? '#a3aab8',
    '--tooltip-radius': mergedTokens?.radius ?? '8px',

    '--tooltip-font-size': mergedTokens?.fontSize ?? '14px',
    '--tooltip-font-weight': mergedTokens?.fontWeight ?? 400,
    '--tooltip-line-height': mergedTokens?.lineHeight ?? '130%',
    '--tooltip-letter-spacing': mergedTokens?.letterSpacing ?? '0',
    '--tooltip-text-align': mergedTokens?.textAlign ?? 'center',

    '--tooltip-caret-color': mergedTokens?.caretColor ?? '#000000',
  } as React.CSSProperties;

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        style={styles}
        sideOffset={sideOffset}
        className={cn(
          `
                  z-50 w-fit rounded-md px-3 py-1.5
                  bg-[var(--tooltip-bg)]
                  text-[var(--tooltip-text)]
                  text-[length:var(--tooltip-font-size)]
                  font-[var(--tooltip-font-weight)]
                  leading-[var(--tooltip-line-height)]
                  tracking-[var(--tooltip-letter-spacing)]
                  text-center
                  animate-in fade-in-0 zoom-in-95
                  data-[state=closed]:animate-out
                  data-[state=closed]:fade-out-0
                  data-[state=closed]:zoom-out-95
                  data-[side=bottom]:slide-in-from-top-2
                  data-[side=left]:slide-in-from-right-2
                  data-[side=right]:slide-in-from-left-2
                  data-[side=top]:slide-in-from-bottom-2
                  `,
          className
        )}
        {...props}
      >
        {children}

        <TooltipPrimitive.Arrow className="fill-[var(--tooltip-caret-color)]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
