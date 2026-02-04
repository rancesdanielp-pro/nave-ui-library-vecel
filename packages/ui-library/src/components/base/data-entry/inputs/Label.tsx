'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '../../../../utils/cn';
import { useTheme, resolveTokens } from '../../../../theme';

import type { ThemeTokensBase } from '../../../../theme/theme';

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  tokens?: Partial<ThemeTokensBase>;
}

export function Label({
  className,
  tokens,
  style,
  ...props
}: LabelProps) {
  const theme = useTheme();

  // 1) Resolvemos tokens del tema
  const mergedTokens = resolveTokens({ componentName: 'label', tokens }, theme) as any ?? {};

  // 2) Mapeamos a variables CSS
  const styles = {
    '--lbl-size': mergedTokens?.fontSize ?? '14px',
    '--lbl-color': mergedTokens?.color ?? 'inherit',
    '--lbl-weight': mergedTokens?.fontWeight ?? '500',
    '--lbl-padding': mergedTokens?.padding ?? '0px',
    ...style,
  } as React.CSSProperties;



  return (
    <LabelPrimitive.Root
      data-slot="label"
      style={styles}
      className={cn(
        // Layout base
        'display-block w-auto select-none transition-colors',
        'leading-none items-center gap-2',
        
        // Aplicación de variables
        'text-[var(--lbl-size)] text-[var(--lbl-color)] font-[var(--lbl-weight)] p-[var(--lbl-padding)]',
        
        // Estados (heredados de grupos o peers)
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        
        className
      )}
      {...props}
    />
  );
}