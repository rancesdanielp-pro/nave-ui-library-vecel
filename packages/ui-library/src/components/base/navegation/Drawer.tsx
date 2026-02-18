'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '../../../utils/cn';
import { resolveTokens, useTheme } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

export type DrawerTokens = {
  overlay?: Partial<ThemeTokensBase>;
  container?: Partial<ThemeTokensBase>;
  close?: Partial<ThemeTokensBase>;
  title?: Partial<ThemeTokensBase>;
  description?: Partial<ThemeTokensBase>;
};

type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root> & {
  tokens?: Partial<DrawerTokens>;
};

interface ThemedProps {
  variant?: string;
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
}

const DrawerStylesContext = React.createContext<DrawerTokens | null>(null);

const shadowClassName =
  '0px 2px 4px 0px #1212170A, 0px 5px 8px 0px #1212170A, 0px 10px 18px 0px #12121708, 0px 24px 48px 0px #12121708, 0px 0px 0px 1px #1212171A';

function Drawer({ tokens, ...props }: DrawerProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'drawer', tokens },
    theme
  ) as DrawerTokens;

  return (
    <DrawerStylesContext.Provider value={mergedTokens}>
      <DrawerPrimitive.Root data-slot="drawer" {...props} />
    </DrawerStylesContext.Provider>
  );
}

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

/* -------------------------------------------------------------------------- */
/* Overlay */
/* -------------------------------------------------------------------------- */

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  const mergedTokens = React.useContext(DrawerStylesContext) as any;

  const styles = {
    '--drawer-overlay-bg': mergedTokens?.overlay?.background ?? '#000',
    '--drawer-overlay-opacity': mergedTokens?.overlay?.opacity ?? '0.4',
    '--drawer-overlay-blur': mergedTokens?.overlay?.backdropBlur ?? '0px',
  };

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      style={styles as React.CSSProperties}
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

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  const mergedTokens = React.useContext(DrawerStylesContext) as any;

  const styles = {
    '--drawer-bg': mergedTokens?.content?.background ?? '#fff',
    '--drawer-color': mergedTokens?.content?.color ?? '#0F172A',
    '--drawer-radius': mergedTokens?.content?.radius ?? '16px',
    '--drawer-border': mergedTokens?.content?.borderColor ?? '#E5E7EB',
    '--drawer-shadow': mergedTokens?.content?.shadow ?? shadowClassName,
    '--drawer-max-height': mergedTokens?.content?.maxHeight ?? '100vh',
  };

  return (
    <DrawerPortal>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        data-slot="drawer-content"
        style={styles as React.CSSProperties}
        className={cn(
          `
          fixed z-50 flex flex-col
          bg-[--drawer-bg]
          text-[color:var(--drawer-color)]
          border border-[--drawer-border]
          rounded-[--drawer-radius]
          shadow-[--drawer-shadow]
          `,
          `
          data-[vaul-drawer-direction=bottom]:inset-x-0 bottom-0
          data-[vaul-drawer-direction=bottom]:rounded-t-[--drawer-radius]
          data-[vaul-drawer-direction=bottom]:slide-in-from-bottom-4
          data-[vaul-drawer-direction=bottom]:max-h-[--drawer-max-height]
          data-[vaul-drawer-direction=bottom]:h-auto
          `,
          `
          data-[vaul-drawer-direction=right]:top-4
          data-[vaul-drawer-direction=right]:bottom-4
          data-[vaul-drawer-direction=right]:max-h-[--drawer-max-height]
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
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}
//gap-8 px-6 pt-12
const DrawerHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('flex flex-col gap-1  px-6 pt-12', className)}
    {...props}
  />
);

const DrawerBody = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('flex flex-col flex-1 overflow-y-auto px-6 py-4', className)}
    {...props}
  />
);

const DrawerFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'sticky bottom-0 flex justify-end gap-4 border-t border-slate-100 bg-[color:var(--drawer-bg)] px-6 py-4',
      '[&>button]:w-[68px]',
      className
    )}
    {...props}
  />
);

function DrawerCloseButton({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return (
    <DrawerPrimitive.Close
      aria-label="Cerrar"
      className={cn(
        'absolute right-5 top-6 flex h-9 w-9 items-center justify-center',
        className
      )}
      {...props}
    >
      ✕
    </DrawerPrimitive.Close>
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const style = {
    '--drawer-title-color': mergedTokens?.title?.color ?? '#0F172A',
    '--drawer-title-size': mergedTokens?.title?.fontSize ?? '24px',
    '--drawer-title-weight': mergedTokens?.title?.fontWeight ?? '600',
  };

  return (
    <DrawerPrimitive.Title
      style={style as React.CSSProperties}
      className={cn(
        'font-semibold font-[550] text-[color:var(--drawer-title-color)] text-[length:var(--drawer-title-size)]',
        className
      )}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  const mergedTokens = React.useContext(DrawerStylesContext);

  const styles = {
    '--drawer-desc-color': mergedTokens?.description?.color ?? '#6E7991',
    '--drawer-desc-size': mergedTokens?.description?.fontSize ?? '14px',
  };
  return (
    <DrawerPrimitive.Description
      style={styles as React.CSSProperties}
      className={cn(
        'font-normal font-[400] text-[color:var(--drawer-desc-color)] text-[length:var(--drawer-desc-size)]',
        className
      )}
      {...props}
    />
  );
}

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
