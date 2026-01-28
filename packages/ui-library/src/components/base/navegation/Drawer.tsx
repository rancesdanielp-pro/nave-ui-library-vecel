'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../utils/cn';
import { resolveTokens, useTheme } from '../../../theme';

/* -----------------------------------------------------------------------------
 * Root / Wrappers (sin theme)
 * ---------------------------------------------------------------------------*/
type DrawerTokens = {
  overlay?: any;
  container?: any;
  close?: any;
  description?: any;
  [key: string]: any;
};

const DrawerStylesContext = React.createContext<DrawerTokens | null>(null);

const shadowClassName =
  '0px 2px 4px 0px #1212170A, 0px 5px 8px 0px #1212170A, 0px 10px 18px 0px #12121708, 0px 24px 48px 0px #12121708, 0px 0px 0px 1px #1212171A';

type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root> & {
  tokens?: Record<string, any>;
};

function Drawer(props: DrawerProps) {
  const { tokens, params: _params, ...rest } = props as any;

  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'drawer', tokens },
    theme
  );

  return (
    <DrawerStylesContext.Provider value={mergedTokens}>
      <DrawerPrimitive.Root data-slot="drawer" {...rest} />
    </DrawerStylesContext.Provider>
  );
}

function DrawerTrigger(
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger>
) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal(
  props: React.ComponentProps<typeof DrawerPrimitive.Portal>
) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose(
  props: React.ComponentProps<typeof DrawerPrimitive.Close>
) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

/* -----------------------------------------------------------------------------
 * Overlay (themed)
 * ---------------------------------------------------------------------------*/

type ThemedProps = {
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
};

function DrawerOverlay({
  className,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay> & ThemedProps) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const styles = {
    '--drawer-overlay-bg':
      (mergedTokens?.overlay as any)?.backgroundColor ?? '#000000',
    '--drawer-overlay-opacity':
      (mergedTokens?.overlay as any)?.opacity ?? '0.4',
    '--drawer-overlay-blur':
      (mergedTokens?.overlay as any)?.backdropBlur ?? '0px',
  } as React.CSSProperties;

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      style={styles}
      className={cn(
        `
        fixed inset-0 z-50
        bg-[--drawer-overlay-bg]/[--drawer-overlay-opacity]
        backdrop-blur-[--drawer-overlay-blur]
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0
        `,
        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Content (themed)
 * ---------------------------------------------------------------------------*/

function DrawerContent({
  className,
  children,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & ThemedProps) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const styles = {
    '--drawer-bg':
      (mergedTokens?.container as any)?.background ?? '#ffffff',
    '--drawer-color': (mergedTokens?.container as any)?.color ?? '#0F172A',
    '--drawer-radius': (mergedTokens?.container as any)?.radius ?? '16px',
    '--drawer-border':
      (mergedTokens?.container as any)?.borderColor ?? '#E5E7EB',
    '--drawer-shadow':
      (mergedTokens?.container as any)?.shadow ?? shadowClassName,
    '--drawer-max-h': (mergedTokens?.container as any)?.maxHeight ?? '80vh',
  } as React.CSSProperties;

  return (
    <DrawerPortal>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        data-slot="drawer-content"
        style={styles}
        className={cn(
          `
          fixed z-50 flex flex-col h-full
          bg-[--drawer-bg]
          text-[--drawer-color]
          border-[--drawer-border]
          rounded-[--drawer-radius]
          shadow-[--drawer-shadow]
          `,
          `
          data-[vaul-drawer-direction=bottom]:inset-x-0 bottom-0
          data-[vaul-drawer-direction=bottom]:rounded-t-[--drawer-radius]
          data-[vaul-drawer-direction=bottom]:slide-in-from-bottom-4
          `,
          `
          data-[vaul-drawer-direction=right]:inset-y-0 right-0
          data-[vaul-drawer-direction=right]:w-3/4 sm:max-w-sm
          data-[vaul-drawer-direction=right]:slide-in-from-right-6
          `,
          `
          data-[vaul-drawer-direction=left]:inset-y-0 left-0
          data-[vaul-drawer-direction=left]:w-3/4 sm:max-w-sm
          data-[vaul-drawer-direction=left]:slide-in-from-left-6
          `,
          className
        )}
        {...props}
      >
        {/* Handle (mobile) */}
        <div className="mx-auto mt-2 hidden h-1.5 w-24 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />

        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

/* -----------------------------------------------------------------------------
 * Layout helpers
 * ---------------------------------------------------------------------------*/

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        `
        flex flex-col gap-2
        px-6 pt-14 pb-4
        border-[--drawer-border]
        `,
        className
      )}
      {...props}
    />
  );
}

function DrawerBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-body"
      className={cn(
        `
        flex-1
        overflow-y-auto
        px-6 py-4
        `,
        className
      )}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        `
        sticky bottom-0
        bg-[--drawer-bg]
        border-t border-[--drawer-border]
        px-6 py-4
        flex gap-2
        justify-end
        `,
        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Close button
 * ---------------------------------------------------------------------------*/

function DrawerCloseButton({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const styles = {
    '--close-color': (mergedTokens?.close as any)?.color ?? '#6E7991',
    '--close-hover': (mergedTokens?.close as any)?.hoverBackground ?? 'rgba(0,0,0,0.05)',
  } as React.CSSProperties;

  return (
    <DrawerPrimitive.Close
      aria-label="Cerrar"
      style={styles}
      className={cn(
        `
        absolute right-4 top-4
        flex h-9 w-9 items-center justify-center
        rounded-none
        text-[--color-text-primary]
        transition-colors
        hover:text-[--color-text-primary]
        `,
        className
      )}
      {...props}
    >
      ✕
    </DrawerPrimitive.Close>
  );
}

/* -----------------------------------------------------------------------------
 * Typography (themed)
 * ---------------------------------------------------------------------------*/

function DrawerTitle({
  className,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title> & ThemedProps) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const styles = {
    '--drawer-title-color': (mergedTokens?.title as any)?.color ?? '#0F172A',
    '--drawer-title-size': (mergedTokens?.title as any)?.fontSize ?? '24px',
    '--drawer-title-weight': (mergedTokens?.title as any)?.fontWeight ?? '600',
  } as React.CSSProperties;

  console.log('DrawerTitle styles:', styles);

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      style={styles}
      className={cn(
        'text-[--drawer-title-size] font-[--drawer-title-weight] text-[--drawer-title-color]',
        className
      )}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description> & ThemedProps) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const styles = {
    '--drawer-desc-color':
      (mergedTokens?.description as any)?.color ?? '#6E7991',
    '--drawer-desc-size':
      (mergedTokens?.description as any)?.fontSize ?? '14px',
  } as React.CSSProperties;

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      style={styles}
      className={cn(
        'text-[--drawer-desc-size] text-[--drawer-desc-color] space-y-2',
        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerCloseButton,
};
