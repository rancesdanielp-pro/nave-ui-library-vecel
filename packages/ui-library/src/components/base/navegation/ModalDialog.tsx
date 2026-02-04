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

interface AlertDialogProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  tokens?: Partial<ThemeTokensBase>;
}

function AlertDialog({ tokens, ...props }: AlertDialogProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'alertDialog', tokens },
    theme
  ) as any ?? {};

  const styles = {
    '--alert-bg': mergedTokens?.content?.background ?? '#ffffff',
    '--alert-bg-overlay':
      mergedTokens?.overlay?.background ?? 'rgba(0,0,0,.5)',
    '--alert-border-color':
      mergedTokens?.content?.borderColor ?? '#E5E7EB',
    '--alert-radius': mergedTokens?.content?.radius ?? '12px',
    '--alert-title-color': mergedTokens?.title?.color ?? '#020303',
    '--alert-description-color':
      mergedTokens?.description?.color ?? '#6B7280',
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
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  const styles = React.useContext(AlertDialogStylesContext);

  return (
    <AlertDialogPortal>
      <div style={styles ?? undefined}>
        <AlertDialogOverlay />

        <AlertDialogPrimitive.Content
          data-slot="alert-dialog-content"
          className={cn(
            'fixed top-1/2 left-1/2 z-50',
            'w-full max-w-[420px] translate-x-[-50%] translate-y-[-50%]',
            'rounded-[--alert-radius] bg-[--alert-bg] p-6 shadow-lg',
            'grid gap-4',
            'border border-[--alert-border-color]',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            className
          )}
          {...props}
        />
      </div>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('flex flex-col gap-2 text-left', className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle(
  props: React.ComponentProps<typeof AlertDialogPrimitive.Title>
) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className="text-lg font-semibold text-[--alert-title-color]"
      {...props}
    />
  );
}

function AlertDialogDescription(
  props: React.ComponentProps<typeof AlertDialogPrimitive.Description>
) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className="text-sm text-[--alert-description-color]"
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