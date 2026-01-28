'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../../utils/cn';
import { useTheme, resolveTokens } from '../../../../theme';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconVariant =
  | 'default'
  | 'primary'
  | 'muted'
  | 'danger'
  | 'success';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
  size?: IconSize;
  color?: IconVariant;
  tokens?: any;
  asChild?: boolean;
};

function Icon({
  className,
  size = 'md',
  color = 'default',
  tokens: customTokens,
  asChild = false,
  style,
  children,
  ...props
}: IconProps) {
  const theme = useTheme();

  const mergedTokens =
    resolveTokens(
      {
        componentName: 'icon',
        variant: color,
        tokens: customTokens,
      },
      theme
    ) ?? {};
    
  const finalSize = mergedTokens?.sizes?.[size] ?? 20;
  const finalColor = mergedTokens?.color ?? 'currentColor';

  const styles = {
    '--icon-size': `${finalSize}px`,
    '--icon-color': finalColor,
    ...style,
  } as React.CSSProperties;

  console.log('Icon styles:', styles);

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="icon"
      style={styles}
      className={cn(
        'inline-flex items-center justify-center shrink-0 leading-none',
        'w-[var(--icon-size)] h-[var(--icon-size)] text-[var(--icon-color)]',
        className
      )}
      {...props}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, {
            width: finalSize,
            height: finalSize,
            stroke: 'currentColor',
            color: 'currentColor',
          })
        : children}
    </Comp>
  );
}

export { Icon };
