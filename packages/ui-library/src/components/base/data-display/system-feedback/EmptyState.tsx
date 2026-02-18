import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import type { ThemeTokensBase } from '../../../../theme/theme';

export type EmptyStateAction = {
  label: string;
  onClick?: () => void;
};

export type EmptyStateProps = {
  tokens?: Partial<ThemeTokensBase>;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  align?: 'center' | 'left';
  size?: 'small' | 'medium';
  className?: string;
};

export function EmptyState({
  icon,
  title,
  description,
  actions,
  align = 'center',
  className,
  size = 'medium',
  tokens,
}: EmptyStateProps) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens(
      {
        componentName: 'emptyState',
        tokens,
      },
      theme
    ) as any) ?? {};

  const isCenter = align === 'center';

  const iconSize = mergedTokens.icon.size[size];
  const titleSize = mergedTokens.title.size[size];
  const descriptionSize = mergedTokens.description.size[size];

  const styles: React.CSSProperties = {
    /* Container */
    '--es-bg': mergedTokens?.container?.background,
    '--es-padding': mergedTokens?.container?.padding,
    '--es-min-height': mergedTokens?.container?.minHeight ?? '300px',
    '--es-width': mergedTokens?.container?.width ?? '380px',
    '--es-gap': mergedTokens?.container?.gap ?? '24px',

    /* Icon */
    '--es-icon-size': iconSize,
    '--es-icon-color': mergedTokens?.icon?.color,
    '--es-icon-radius': mergedTokens?.icon?.containerRadius,

    /* Title */
    '--es-title-color': mergedTokens?.title?.color,
    '--es-title-weight': mergedTokens?.title?.fontWeight,
    '--es-title-size': titleSize,

    /* Description */
    '--es-desc-color': mergedTokens?.description?.color,
    '--es-desc-weight': mergedTokens?.description?.fontWeight,
    '--es-desc-size': descriptionSize,

    /* Actions */
    '--es-actions-gap': mergedTokens?.actions?.gap ?? '8px',
  } as React.CSSProperties;

  return (
    <section
      className={cn(className)}
      style={{
        ...styles,
        background: 'var(--es-bg)',
        padding: 'var(--es-padding)',
        minHeight: 'var(--es-min-height)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCenter ? 'center' : 'flex-start',
      }}
    >
      <div
        style={{
          width: 'var(--es-width)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--es-gap)',
          textAlign: isCenter ? 'center' : 'left',
          alignItems: isCenter ? 'center' : 'flex-start',
        }}
      >
        {icon && (
          <div
            style={{
              width: 'var(--es-icon-size)',
              height: 'var(--es-icon-size)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--es-icon-color)',
              borderRadius: 'var(--es-icon-radius)',
            }}
          >
            {icon}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <h3
            style={{
              color: 'var(--es-title-color)',
              fontWeight: 'var(--es-title-weight)',
              fontSize: 'var(--es-title-size)',
              margin: 0,
            }}
          >
            {title}
          </h3>

          {description && (
            <p
              style={{
                color: 'var(--es-desc-color)',
                fontWeight: 'var(--es-desc-weight)',
                fontSize: 'var(--es-desc-size)',
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div
            style={{
              display: 'flex',
              gap: 'var(--es-actions-gap)',
              justifyContent: isCenter ? 'center' : 'flex-start',
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}

/*
USO:
<EmptyState
  icon={<Inbox />}
  title="No results"
  description="Try adjusting filters"
  actions={
    <>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </>
  }
/>
*/
