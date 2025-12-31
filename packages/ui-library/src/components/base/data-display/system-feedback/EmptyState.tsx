import * as React from 'react';
import { Button } from '../../buttons';
import { cn } from "../../../../utils/cn"

import { ArrowLeftRight } from 'lucide-react';

export type EmptyStateAction = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
};

export type EmptyStateProps = {
  /** Icono superior (SVG / ReactNode) */
  icon?: React.ReactNode;
  /** Título principal */
  title: string;
  /** Descripción opcional */
  description?: string;
  /** Acciones (1 o 2 botones recomendado) */
  actions?: EmptyStateAction[];
  /** Alineación del contenido */
  align?: 'center' | 'left';
  /** Clases extra */
  className?: string;
};

export function EmptyState({
  title,
  description,
  actions = [],
  align = 'center',
  className,
}: EmptyStateProps) {
  const isCenter = align === 'center';

  return (
    <section
      className={cn(
        'w-full rounded-xl bg-white p-8',
        isCenter ? 'text-center' : 'text-left',
        className
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-md flex-col gap-4',
          isCenter ? 'items-center' : 'items-start'
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-md border-none">
          <ArrowLeftRight className="text-gray-300" />
        </div>

        <div className="space-y-1">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground text-gray-500">
              {description}
            </p>
          )}
        </div>

        {actions.length > 0 && (
          <div
            className={cn(
              'flex gap-2',
              isCenter ? 'justify-center' : 'justify-start'
            )}
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant ?? 'primary'}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/*
USO:

<EmptyState
  icon={<YourIcon />}
  title="Title"
  description="Description"
  actions={[
    { label: "Primary", variant: "default", onClick: () => {} },
    { label: "Secondary", variant: "outline" },
  ]}
/>
*/
