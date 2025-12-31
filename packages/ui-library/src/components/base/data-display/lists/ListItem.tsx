import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { Badge } from '../system-feedback';

export type ListItemStatus = {
  label: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
};

export type ListItemProps = {
  id: string;
  /** Texto superior (ej: fecha) */
  overline?: string;
  /** Título principal */
  title: string;
  /** Subtítulo opcional */
  subtitle?: string;
  /** Valor alineado a la derecha */
  amount?: string;
  /** Estado opcional (badge) */
  status?: ListItemStatus;
  /** Click del item completo */
  onItemClick?: (id: string) => void;
  /** Clases extra */
  className?: string;
};

export function ListItem({
  id,
  overline,
  title,
  subtitle,
  amount,
  status,
  onItemClick,
  className,
}: ListItemProps) {
  return (
    <div
      role={onItemClick ? 'button' : undefined}
      onClick={() => onItemClick?.(id)}
      className={cn(
        'flex cursor-pointer items-center justify-between gap-3 py-3 text-sm',
        'border-b border-gray-100 last:border-b-0 hover:bg-muted/50',
        className
      )}
    >
      {/* Left content */}
      <div className="flex w-full items-start">
        <div className="flex flex-col">
          {overline && (
            <span className="text-xs text-muted-foreground">{overline}</span>
          )}
          <span className="font-medium leading-tight">{title}</span>
          {subtitle && (
            <span className="text-xs text-muted-foreground">{subtitle}</span>
          )}
        </div>
      </div>

      {/* Right content */}
      {(amount || status) && (
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            {amount && <span className="font-medium">{amount}</span>}
            {status && (
              <Badge tone="success" size="small">
                {status.label}
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/*
USO:

<ListItem
  id="1"
  overline="12/09/2025"
  title="Pago con tarjeta"
  subtitle="Visa Débito"
  amount="$ 10.000"
  status={{ label: "Aprobado", variant: "secondary" }}
  onItemClick={(id) => console.log(id)}
/>
*/
