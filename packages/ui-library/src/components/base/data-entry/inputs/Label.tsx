'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  platform?: 'web' | 'mobile';
  tokens?: any;
}

export function Label({
  className,
  tokens,
  platform = 'web',
  style,
  ...props
}: LabelProps) {
  const theme = useTheme();
  const mergedTokens = resolveTokens({ componentName: 'label', tokens }, theme);
  const styles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  const stylesReafactoring = {
    ...styles,
    display: 'block',
    width: 'auto',
  };

  return (
    <LabelPrimitive.Root
      style={stylesReafactoring}
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
