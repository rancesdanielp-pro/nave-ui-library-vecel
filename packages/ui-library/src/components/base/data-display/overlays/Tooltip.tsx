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

/* --------------------- */
/* ROOT (Tooltip) */
/* --------------------- */

export function Tooltip({
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  tokens?: any;
  platform?: 'web' | 'native';
}) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

/* --------------------- */
/* TRIGGER */
/* --------------------- */

export function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

/* --------------------- */
/* CONTENT */
/* --------------------- */

export function TooltipContent({
  className,
  sideOffset = 4,
  tokens,
  platform = 'web',
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  tokens?: any;
  platform?: 'web' | 'native';
}) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'tooltip', tokens },
    theme
  );

  const styles = {
    '--tooltip-text': mergedTokens?.color ?? '#000000',
    '--tooltip-bg': mergedTokens?.background ?? '#a3aab8',
    '--tooltip-radius': mergedTokens?.radius ?? '8px',
    '--tooltip-border-width': mergedTokens?.borderWidth ?? '1px',
    '--tooltip-border-color': mergedTokens?.border ?? 'transparent',
  } as React.CSSProperties;


  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        style={styles}
        sideOffset={sideOffset}
        className={cn(
          'text-[--tooltip-text] bg-[--tooltip-bg] border-[--tooltip-border-width] border-[--tooltip-border-color] ' +
            'animate-in fade-in-0 zoom-in-95 ' +
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 ' +
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 ' +
            'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ' +
            'z-50 w-fit rounded-md px-3 py-1.5 text-xs',
          className
        )}
        {...props}
      >
        {children}

        <TooltipPrimitive.Arrow className="fill-[var(--tooltip-bg)]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
