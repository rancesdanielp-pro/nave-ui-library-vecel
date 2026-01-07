'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '../../../utils/cn';

/* ---------------------------------------------
 * TYPES
 * --------------------------------------------*/

export type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  href?: string;
};

export type SidebarSection = {
  id: string;
  title?: string;
  items: SidebarItem[];
};

export type SidebarProps = {
  title?: string;
  sections?: SidebarSection[];
  items?: SidebarItem[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
};

/* ---------------------------------------------
 * ICONS (SVG encapsulados para limpieza)
 * --------------------------------------------*/

const CollapseIconExpanded = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2664 7.6831C12.5105 7.43903 12.9061 7.43903 13.1502 7.6831C13.3943 7.92718 13.3943 8.32282 13.1502 8.56689L11.7171 10L13.1502 11.4331C13.3943 11.6772 13.3943 12.0728 13.1502 12.3169C12.9061 12.561 12.5105 12.561 12.2664 12.3169L10.3914 10.4419C10.1474 10.1978 10.1474 9.80218 10.3914 9.55811L12.2664 7.6831Z" fill="#A3AAB8"/>
    <path d="M16.25 4.79167C16.25 4.21637 15.7836 3.75 15.2083 3.75H4.79167C4.21637 3.75 3.75 4.21637 3.75 4.79167V15.2083C3.75 15.7836 4.21637 16.25 4.79167 16.25H15.2083C15.7836 16.25 16.25 15.7836 16.25 15.2083V4.79167ZM17.5 15.2083C17.5 16.474 16.474 17.5 15.2083 17.5H4.79167C3.52601 17.5 2.5 16.474 2.5 15.2083V4.79167C2.5 3.52601 3.52601 2.5 4.79167 2.5H15.2083C16.474 2.5 17.5 3.52601 17.5 4.79167V15.2083Z" fill="#A3AAB8"/>
    <path d="M7.5 3.125V16.875H6.25V3.125H7.5Z" fill="#A3AAB8" />
  </svg>
);

const CollapseIconCollapsed = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4583 7.73217C11.2143 7.48809 10.8186 7.48809 10.5745 7.73217C10.3305 7.97625 10.3305 8.37188 10.5745 8.61596L12.0076 10.0491L10.5745 11.4822C10.3305 11.7262 10.3305 12.1219 10.5745 12.366C10.8186 12.61 11.2143 12.61 11.4583 12.366L13.3333 10.491C13.5774 10.2469 13.5774 9.85125 13.3333 9.60717L11.4583 7.73217Z" fill="#A3AAB8"/>
    <path d="M16.25 4.79167C16.25 4.21637 15.7836 3.75 15.2083 3.75H4.79167C4.21637 3.75 3.75 4.21637 3.75 4.79167V15.2083C3.75 15.7836 4.21637 16.25 4.79167 16.25H15.2083C15.7836 16.25 16.25 15.7836 16.25 15.2083V4.79167ZM17.5 15.2083C17.5 16.474 16.474 17.5 15.2083 17.5H4.79167C3.52601 17.5 2.5 16.474 2.5 15.2083V4.79167C2.5 3.52601 3.52601 2.5 4.79167 2.5H15.2083C16.474 2.5 17.5 3.52601 17.5 4.79167V15.2083Z" fill="#A3AAB8"/>
    <path d="M7.5 3.125V16.875H6.25V3.125H7.5Z" fill="#A3AAB8" />
  </svg>
);

/* ---------------------------------------------
 * COMPONENT
 * --------------------------------------------*/

export function Sidebar({
  title = 'Tu Nave',
  sections,
  items,
  collapsed = false,
  onToggleCollapse,
  className,
}: SidebarProps) {
  
  // Normalización directa en el render. 
  // Es eficiente porque es una asignación de referencia o un array pequeño.
  const resolvedSections = sections ?? (items ? [{ id: 'default', items }] : []);

  return (
    <aside
      className={cn(
        'flex h-full flex-col border-r border-[#E5E7EB] bg-white transition-[width] duration-300',
        collapsed ? 'w-[64px]' : 'w-[240px]',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 min-h-[56px]">
        {!collapsed && (
          <span className="text-sm font-medium text-[#6B7280] truncate">
            {title}
          </span>
        )}

        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className={cn(
              "text-[#9CA3AF] hover:text-[#6B7280] transition-colors",
              collapsed && "mx-auto"
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <CollapseIconCollapsed /> : <CollapseIconExpanded />}
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 px-2 overflow-y-auto overflow-x-hidden">
        {resolvedSections.map((section) => (
          <div key={section.id} className="flex flex-col gap-1">
            {!collapsed && section.title && (
              <span className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                {section.title}
              </span>
            )}

            {section.items.map((item) => {
              const isActive = item.active;
              
              const linkClasses = cn(
                'flex items-center gap-3 h-[36px] w-full rounded-md px-2 text-sm font-medium transition-all',
                !isActive && 'text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]',
                isActive && 'bg-[#F4F0FF] text-[#6D28D9]',
                collapsed && 'justify-center px-0'
              );

              const content = (
                <>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {item.icon}
                  </span>
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </>
              );

              return item.href ? (
                <Link key={item.id} href={item.href} className={linkClasses}>
                  {content}
                </Link>
              ) : (
                <div key={item.id} className={linkClasses}>
                  {content}
                </div>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}