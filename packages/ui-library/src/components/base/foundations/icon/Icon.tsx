'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import {
  resolveTokens,
  resolveWebStyles,
  resolveNativeStyles,
  useTheme,
} from '../../../../theme';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconVariant = 'default' | 'primary' | 'muted' | 'danger' | 'success';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
  size?: IconSize;

  /** Variante semántica (usa tokens) */
  color?: IconVariant;

  /** Override manual de tokens (pisa al theme) */
  tokens?: any;

  platform?: 'web' | 'native';
  asChild?: boolean;
};

const ICON_SIZES: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

const iconBaseClasses = cva(
  'inline-flex items-center justify-center shrink-0 leading-none'
);

/** Lee color desde tokens “planos” o desde base/variants */
function pickTokenColor(params: {
  iconTheme: any;
  variant: IconVariant;
}) {
  const { iconTheme, variant } = params;
  if (!iconTheme) return undefined;

  // ✅ Forma PLANA: { color, variants: { primary: { color } } }
  const flatBase = iconTheme.color;
  const flatVariant = iconTheme.variants?.[variant]?.color;

  // ✅ Forma BASE: { base: { color }, variants: { primary: { color } } }
  const baseBase = iconTheme.base?.color;
  const baseVariant = iconTheme.variants?.[variant]?.color;

  // prioridad: variant > base > undefined
  return flatVariant ?? baseVariant ?? flatBase ?? baseBase ?? undefined;
}

function Icon({
  className,
  size = 'md',
  color = 'default',
  tokens,
  platform = 'web',
  asChild = false,
  style,
  children,
  ...props
}: IconProps) {
  const theme = useTheme();

  // 1) Resolver tokens “como el resto del DS”
  const mergedTokens = resolveTokens(
    {
      componentName: 'icon',
      variant: color === 'default' ? undefined : color,
      size,
      tokens,
    },
    theme
  );

  const tokenStyles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  // 2) Fallback robusto (por si resolveWebStyles no aplana base.color)
  const iconTheme = tokens?.icon ?? theme?.icon;
  const themedColor =
    color !== 'default'
      ? pickTokenColor({ iconTheme, variant: color })
      : pickTokenColor({ iconTheme, variant: 'default' }) ??
        pickTokenColor({ iconTheme, variant: 'primary' });

  // ✅ Color final: primero lo que resolvió el sistema, si no, theme/icon tokens
  const finalColor = tokenStyles?.color ?? themedColor ?? 'currentColor';

  const Comp = asChild ? Slot : 'span';
  const pixelSize = ICON_SIZES[size];

  return (
    <Comp
      className={cn(iconBaseClasses(), className)}
      style={
        {
          width: pixelSize,
          height: pixelSize,
          color: finalColor,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children as any, {
            width: pixelSize,
            height: pixelSize,
            stroke: 'currentColor',
            fill: 'none',
          })
        : children}
    </Comp>
  );
}

export { Icon, iconBaseClasses };
