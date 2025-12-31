'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';

export type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export type SidebarProps = {
  title?: string;
  items: SidebarItem[];
  collapsed?: boolean; // 🔹 controlado desde afuera
  footer?: React.ReactNode;
  className?: string;
};

export function Sidebar({
  title = 'Tu Nave',
  items,
  collapsed = false,
  footer,
  className,
}: SidebarProps) {
  return (
    <aside
      data-slot="sidebar"
      className={cn(
        'flex h-full flex-col border-r border-[#E5E7EB] bg-white',
        collapsed ? 'w-[64px]' : 'w-[240px]',
        className
      )}
    >
      {/* ───────────────── Header ───────────────── */}
      <div
        className={cn(
          'flex items-center justify-between px-4 py-3',
          collapsed && 'justify-center'
        )}
      >
        {!collapsed && (
          <span className="text-sm font-medium text-[#6B7280]">
            {title}
          </span>
        )}

        <div className="h-5 w-5 text-[#9CA3AF]">
          {/* placeholder icon (collapse trigger externo) */}
          <span className="block h-5 w-5 rounded border border-[#E5E7EB]" />
        </div>
      </div>

      {/* ───────────────── Navigation ───────────────── */}
      <nav className="flex flex-col gap-1 px-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={item.onClick}
            data-active={item.active}
            className={cn(
              // base
              'flex items-center gap-2',
              'h-[36px] w-full rounded-md px-2',
              'text-sm font-medium transition-colors',

              // inactive
              !item.active &&
                'text-[#6B7280] hover:bg-[#F3F4F6]',

              // active
              item.active &&
                'bg-[#F4F0FF] text-[#6D28D9]',

              // collapsed
              collapsed && 'justify-center px-0'
            )}
          >
            {/* Icon */}
            <span className="flex h-5 w-5 items-center justify-center">
              {item.icon}
            </span>

            {/* Label */}
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* ───────────────── Footer ───────────────── */}
      {footer && (
        <div
          className={cn(
            'mt-auto border-t border-[#E5E7EB] px-3 py-3',
            collapsed && 'flex justify-center px-0'
          )}
        >
          {footer}
        </div>
      )}
    </aside>
  );
}
