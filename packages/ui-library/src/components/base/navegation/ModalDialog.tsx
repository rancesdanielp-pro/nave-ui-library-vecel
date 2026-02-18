'use client';

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '../../../utils/cn';
import { Button } from '../buttons/Button';
import { resolveTokens } from '../../../theme/client/theme-resolver';
import { useTheme } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

const AlertDialogStylesContext =
  React.createContext<React.CSSProperties | null>(null);

const AlertDialogLayoutContext = React.createContext<'left' | 'center'>('left');

function useAlertDialogLayout() {
  return React.useContext(AlertDialogLayoutContext);
}

type AlertDialogAlignment = 'left' | 'center';
interface AlertDialogProps extends React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> {
  tokens?: Partial<ThemeTokensBase>;
  alignment?: AlertDialogAlignment;
  size?: 'regular'; // futuro-proof
}

const alignmentVariants = {
  left: {
    content: 'text-left',
    header: 'items-start text-left',
    footer: 'flex-row justify-end',
  },
  center: {
    content: 'text-center',
    header: 'items-center text-center',
    footer: 'flex-col',
  },
};

function AlertDialog({
  tokens,
  alignment = 'center',
  size = 'regular',
  ...props
}: AlertDialogProps) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens({ componentName: 'alertDialog', tokens }, theme) as any) ??
    {};

  const styles = {
    '--alert-bg-overlay': mergedTokens?.overlay?.background ?? 'rgba(0,0,0,.5)',
    '--alert-bg': mergedTokens?.content?.background ?? '#ffffff',
    '--alert-radius': mergedTokens?.content?.radius ?? '12px',
    '--alert-border-color': mergedTokens?.content?.borderColor ?? '#E5E7EB',

    '--alert-title-color': mergedTokens?.title?.color ?? '#020303',
    '--alert-title-font-size': mergedTokens?.title?.fontSize ?? '18px',
    '--alert-title-font-weight': mergedTokens?.title?.fontWeight ?? 550,

    '--alert-description-color': mergedTokens?.description?.color ?? '#6B7280',
    '--alert-description-font-size':
      mergedTokens?.description?.fontSize ?? '16px',
    '--alert-description-font-weight':
      mergedTokens?.description?.fontWeight ?? 400,
  } as React.CSSProperties;

  return (
    <AlertDialogStylesContext.Provider value={styles}>
      <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
    </AlertDialogStylesContext.Provider>
  );
}

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

function AlertDialogOverlay(
  props: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>
) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-[--alert-bg-overlay]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  alignment = 'left',
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  alignment?: AlertDialogAlignment;
}) {
  const styles = React.useContext(AlertDialogStylesContext);
  const align = alignmentVariants[alignment];

  return (
    <AlertDialogLayoutContext.Provider value={alignment}>
      <AlertDialogPortal>
        <div style={styles ?? undefined}>
          <AlertDialogOverlay />

          <AlertDialogPrimitive.Content
            data-slot="alert-dialog-content"
            data-alignment={alignment}
            className={cn(
              'fixed top-1/2 left-1/2 z-50',
              'w-full max-w-[512px] translate-x-[-50%] translate-y-[-50%]',
              'rounded-[--alert-radius] bg-[--alert-bg]',
              'p-6 grid gap-4 border border-[--alert-border-color]',
              align.content,
              className
            )}
            {...props}
          />
        </div>
      </AlertDialogPortal>
    </AlertDialogLayoutContext.Provider>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const alignment = useAlertDialogLayout();
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        'flex flex-col gap-2',
        alignment === 'center' && 'items-center text-center',
        alignment === 'left' && 'items-start text-left',
        className
      )}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const alignment = useAlertDialogLayout();
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex gap-2',
        alignment === 'left' && 'flex-row justify-end',
        alignment === 'center' && 'flex-col',
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle(
  props: React.ComponentProps<typeof AlertDialogPrimitive.Title>
) {
  const alignment = useAlertDialogLayout();

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        'font-semibold text-[color:var(--alert-title-color)] text-[length:var(--alert-title-font-size)]',
        alignment === 'center' && 'text-center',
        alignment === 'left' && 'text-left'
      )}
      {...props}
    />
  );
}

function AlertDialogDescription(
  props: React.ComponentProps<typeof AlertDialogPrimitive.Description>
) {
  const alignment = useAlertDialogLayout();

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        'text-[color:var(--alert-description-color)]  text-[length:var(--alert-description-font-size)]',
        alignment === 'center' && 'text-center',
        alignment === 'left' && 'text-left'
      )}
      {...props}
    />
  );
}

function AlertDialogAction({
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action asChild {...props}>
      <Button variant="primary">{children}</Button>
    </AlertDialogPrimitive.Action>
  );
}

function AlertDialogCancel({
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel asChild {...props}>
      <Button variant="secondary">{children}</Button>
    </AlertDialogPrimitive.Cancel>
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
