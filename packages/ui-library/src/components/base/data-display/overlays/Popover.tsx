'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import {
  resolveTokens,
  resolveWebStyles,
  resolveNativeStyles,
  useTheme,
} from '../../../../theme';

import { cn } from '../../../../utils/cn';

/*
const popoverTokens = {
  backgroundColor: 'colors.surface',
  textColor: 'colors.text',
  borderColor: 'colors.border',
  shadow: 'shadows.md',
  borderRadius: 'radii.md',
};
*/
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

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  tokens,
  style,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> & { tokens?: any }) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'popover', tokens },
    theme
  );

  const styles =
    theme.platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderRadius: styles.borderRadius,
          boxShadow: mergedTokens.shadow,
          border: `1px solid ${styles.borderColor}`,
        }}
        className={cn(
          'z-50 w-72 origin-(--radix-popover-content-transform-origin)',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          'p-4 outline-hidden',
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
