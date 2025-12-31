'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../theme';

/* -----------------------------------------------------------------------------
 * Root / Wrappers (sin theme)
 * ---------------------------------------------------------------------------*/

const shadowClassName =
  '0px 2px 4px 0px #1212170A, 0px 5px 8px 0px #1212170A, 0px 10px 18px 0px #12121708, 0px 24px 48px 0px #12121708, 0px 0px 0px 1px #1212171A';

function Drawer(props: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
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
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'drawer.overlay', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      style={platform === 'web' ? resolvedStyles : undefined}
      className={cn(
        'fixed inset-0 z-50',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
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
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'drawer.container', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <DrawerPortal>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        data-slot="drawer-content"
        //style={platform === "web" ? resolvedStyles : undefined} max-h-[80vh]
        className={cn(
          'group/drawer-content fixed z-50 flex flex-col bg-white shadow-md',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 bottom-0 rounded-t-lg',
          'data-[vaul-drawer-direction=top]:inset-x-0 top-0 rounded-b-lg',
          'data-[vaul-drawer-direction=right]:inset-y-0 right-0 w-3/4 sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 left-0 w-3/4 sm:max-w-sm',
          shadowClassName,
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
      data-slot="drawer-header"
      className={cn(
        'relative',
        'px-6 pt-14 pb-4', // ⬅ espacio para la X arriba
        'flex flex-col gap-2',
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
        'flex-1 overflow-auto',
        'px-6 py-4', // padding-widget-desktop
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
        'mt-auto flex flex-col gap-2 p-4 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * Close button
 * ---------------------------------------------------------------------------*/

function DrawerCloseButton({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return (
    <DrawerPrimitive.Close
      data-slot="drawer-close-button"
      className={cn(
        'absolute right-4 top-4',
        'flex h-9 w-9 items-center justify-center', // 36x36
        'rounded-lg p-2', // radius 8 + padding 8
        'text-[#6E7991]',
        'hover:bg-black/5',
        'focus:outline-none focus:ring-2 focus:ring-black/20',
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
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'drawer.title', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      //style={platform === "web" ? resolvedStyles : undefined}
      className={cn('text-2xl font-semibold', className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description> & ThemedProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'drawer.description', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      //style={platform === "web" ? resolvedStyles : undefined}
      className={cn(
        'text-sm text-muted-foreground  text-[#6E7991] space-y-2',
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
