'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';

export type IconLabelProps = {
  icon: React.ReactNode;
  label: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
};

export function IconLabel({
  icon,
  label,
  iconPosition = 'left',
  className,
}: IconLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-sm font-medium',
        className
      )}
    >
      {iconPosition === 'left' && icon}

      <span className="leading-none">{label}</span>

      {iconPosition === 'right' && icon}
    </div>
  );
}
