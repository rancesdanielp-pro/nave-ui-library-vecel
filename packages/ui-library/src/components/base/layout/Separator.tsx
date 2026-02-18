'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '../../../utils/cn';
import { resolveTokens, useTheme } from '../../../theme';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  style,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'separator' },
    theme
  ) as any;
  // tokens por orientación
  const orientationTokens = mergedTokens?.orientation?.[orientation] ?? {};

  const styles = {
    '--separator-width':
      orientation === 'vertical'
        ? orientationTokens?.width ?? '1px'
        : orientationTokens?.width ?? '100%',

    '--separator-height':
      orientation === 'horizontal'
        ? orientationTokens?.height ?? '1px'
        : orientationTokens?.height ?? '100%',

    '--separator-color':
      mergedTokens?.color ?? '#E5E7EB',

    '--separator-opacity':
      mergedTokens?.opacity ?? '1',
  } as React.CSSProperties;

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      style={styles}
      className={cn(
        `
        shrink-0
        bg-[--separator-color]
        opacity-[--separator-opacity]
        w-[--separator-width]
        h-[--separator-height]
        `,
        className
      )}
      {...props}
    />
  );
}

export { Separator };
