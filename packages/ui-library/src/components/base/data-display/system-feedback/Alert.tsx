'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

const alertVariants = cva(
  'relative w-full border flex items-center overflow-hidden transition-all',
  {
    variants: {
      size: {
        inline: 'max-w-[343px] h-fit items-start',
        'full-width': 'max-w-[1184px] h-fit items-start',
        stacked: 'max-w-[343px] h-fit flex-col items-start',
      },
    },
    defaultVariants: {
      size: 'inline',
    },
  }
);

type AlertTone = 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'destructive';

export interface AlertProps 
  extends Omit<React.ComponentProps<'div'>, 'title'>, 
          VariantProps<typeof alertVariants> {
  tone?: AlertTone;
  icon: React.ReactNode; 
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  label?: React.ReactNode; 
  onClose?: () => void;
  tokens?: Partial<ThemeTokensBase>;
}

function Alert({
  className,
  style,
  size = 'inline',
  tone = 'neutral',
  icon,
  title,
  subtitle,
  label,
  onClose,
  tokens,
  ...props
}: AlertProps) {
  const theme = useTheme() as any; // Usamos any aquí para evitar el error de "Property alert does not exist"
  
  // 1. Resolvemos los tokens base y de tamaño
  const mergedTokens = resolveTokens({ componentName: 'alert', size: size as string, tokens }, theme) as any ?? {};
  
  // 2. Lógica de Tones Corregida
  // Accedemos a la definición original del componente en el tema para recuperar la rama 'tones'
  const componentConfig = theme?.components?.alert;
  const toneData = mergedTokens?.tones?.[tone] || componentConfig?.tones?.[tone] || {};

  const styles = {
    // Background y Borde dinámicos basados en el tono
    '--alert-bg': toneData?.background ?? '#F8FAFC',
    '--alert-border': toneData?.border ?? '#E2E8F0',
    
    // Tokens base de estructura
    '--alert-radius': mergedTokens?.radius ?? '12px',
    '--alert-padding': mergedTokens?.paddingY && mergedTokens?.paddingX 
                        ? `${mergedTokens.paddingY} ${mergedTokens.paddingX}` 
                        : '12px 16px',
    '--alert-gap': mergedTokens?.gap ?? '12px',
    
    // Tipografía
    '--alert-label-color': mergedTokens?.labelColor ?? '#020303',
    '--alert-label-size': mergedTokens?.labelFontSize ?? '14px',
    '--alert-label-weight': mergedTokens?.labelFontWeight ?? '600',
    
    '--alert-desc-color': mergedTokens?.descriptionColor ?? '#3A3F4B',
    '--alert-desc-size': mergedTokens?.descriptionFontSize ?? '12px',
    '--alert-desc-weight': mergedTokens?.descriptionFontWeight ?? '400',
    
    // Enlace e Icono (Colores dinámicos por tono)
    '--alert-link-color': toneData?.linkColor ?? '#0070F3',
    '--alert-link-size': mergedTokens?.linkFontSize ?? '12px',
    '--alert-link-weight': mergedTokens?.linkFontWeight ?? '600',
    '--alert-icon-color': toneData?.iconColor ?? '#6B7280',
    
    // Contenedor del Icono
    '--alert-icon-container-background': toneData?.iconContainerBackground ?? 'transparent',
    '--alert-icon-container-size': mergedTokens?.iconContainerSize ?? '32px',
    '--alert-icon-container-radius': mergedTokens?.iconContainerRadius ?? '8px',
    
    ...style,
  };

  return (
    <div
      role="alert"
      style={styles as React.CSSProperties}
      className={cn(
        alertVariants({ size }),
        'bg-[var(--alert-bg)] border-[var(--alert-border)] rounded-[var(--alert-radius)]',
        'p-[var(--alert-padding)] gap-[var(--alert-gap)]',
        className
      )}
      {...props}
    >
      {/* Contenedor de Icono */}
      <div 
        className="shrink-0 flex items-center justify-center self-start overflow-hidden"
        style={{ 
          width: 'var(--alert-icon-container-size)', 
          height: 'var(--alert-icon-container-size)',
          borderRadius: 'var(--alert-icon-container-radius)',
          backgroundColor: 'var(--alert-icon-container-background)', 
          color: 'var(--alert-icon-color)' 
        }}
      >
        {React.isValidElement(icon) 
          ? React.cloneElement(icon as React.ReactElement<any>, { 
              size: 20, 
              style: { color: 'var(--alert-icon-color)' } 
            }) 
          : icon}
      </div>

      {/* Contenido de Texto */}
      <div className={cn(
        "flex-1 flex flex-col min-w-0 justify-center",
        onClose && "pr-8" 
      )}>
        <div className="text-[var(--alert-label-color)] text-[var(--alert-label-size)] font-[var(--alert-label-weight)] leading-tight">
          {title}
        </div>

        {subtitle && (
          <div className="text-[var(--alert-desc-color)] text-[var(--alert-desc-size)] font-[var(--alert-desc-weight)] leading-normal mt-1">
            {subtitle}
          </div>
        )}
        
        {label && (
          <div 
            className="mt-3 cursor-pointer underline underline-offset-4 w-fit transition-all hover:opacity-70" 
            style={{ 
              color: 'var(--alert-link-color)',
              fontSize: 'var(--alert-link-size)',
              fontWeight: 'var(--alert-link-weight)'
            }}
          >
            {label}
          </div>
        )}
      </div>

      {/* Botón de Cierre */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:opacity-50 transition-opacity cursor-pointer"
          style={{ color: 'var(--alert-icon-color)' }}
          aria-label="Close alert"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export { Alert };