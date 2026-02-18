'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';
import type { ThemeTokensBase } from '../../../theme/theme';

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
  onItemClick?: (href: string) => void;
  className?: string;
  tokens?: Partial<ThemeTokensBase>;
};

const CollapseIconExpanded = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2664 7.6831C12.5105 7.43903 12.9061 7.43903 13.1502 7.6831C13.3943 7.92718 13.3943 8.32282 13.1502 8.56689L11.7171 10L13.1502 11.4331C13.3943 11.6772 13.3943 12.0728 13.1502 12.3169C12.9061 12.561 12.5105 12.561 12.2664 12.3169L10.3914 10.4419C10.1474 10.1978 10.1474 9.80218 10.3914 9.55811L12.2664 7.6831Z"
      fill="currentColor"
    />
    <path
      d="M16.25 4.79167C16.25 4.21637 15.7836 3.75 15.2083 3.75H4.79167C4.21637 3.75 3.75 4.21637 3.75 4.79167V15.2083C3.75 15.7836 4.21637 16.25 4.79167 16.25H15.2083C15.7836 16.25 16.25 15.7836 16.25 15.2083V4.79167ZM17.5 15.2083C17.5 16.474 16.474 17.5 15.2083 17.5H4.79167C3.52601 17.5 2.5 16.474 2.5 15.2083V4.79167C2.5 3.52601 3.52601 2.5 4.79167 2.5H15.2083C16.474 2.5 17.5 3.52601 17.5 4.79167V15.2083Z"
      fill="currentColor"
    />
    <path d="M7.5 3.125V16.875H6.25V3.125H7.5Z" fill="currentColor" />
  </svg>
);

const CollapseIconCollapsed = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4583 7.73217C11.2143 7.48809 10.8186 7.48809 10.5745 7.73217C10.3305 7.97625 10.3305 8.37188 10.5745 8.61596L12.0076 10.0491L10.5745 11.4822C10.3305 11.7262 10.3305 12.1219 10.5745 12.366C10.8186 12.61 11.2143 12.61 11.4583 12.366L13.3333 10.491C13.5774 10.2469 13.5774 9.85125 13.3333 9.60717L11.4583 7.73217Z"
      fill="currentColor"
    />
    <path
      d="M16.25 4.79167C16.25 4.21637 15.7836 3.75 15.2083 3.75H4.79167C4.21637 3.75 3.75 4.21637 3.75 4.79167V15.2083C3.75 15.7836 4.21637 16.25 4.79167 16.25H15.2083C15.7836 16.25 16.25 15.7836 16.25 15.2083V4.79167ZM17.5 15.2083C17.5 16.474 16.474 17.5 15.2083 17.5H4.79167C3.52601 17.5 2.5 16.474 2.5 15.2083V4.79167C2.5 3.52601 3.52601 2.5 4.79167 2.5H15.2083C16.474 2.5 17.5 3.52601 17.5 4.79167V15.2083Z"
      fill="currentColor"
    />
    <path d="M7.5 3.125V16.875H6.25V3.125H7.5Z" fill="currentColor" />
  </svg>
);

export function Sidebar({
  title = 'Tu Nave',
  sections,
  items,
  collapsed = false,
  onToggleCollapse,
  onItemClick,
  className,
  tokens,
}: SidebarProps) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens({ componentName: 'sidebar', tokens }, theme) as any) ?? {};

  const styles = {
    // Container
    '--sb-bg': mergedTokens?.container?.background ?? '#ffffff',
    '--sb-border': mergedTokens?.container?.border ?? '#E5E7EB',
    '--sb-width': mergedTokens?.container?.width ?? '240px',
    '--sb-width-collapsed': mergedTokens?.container?.collapsedWidth ?? '64px',
    '--sb-padding': mergedTokens?.container?.padding ?? '8px',

    // Header
    '--sb-header-h': mergedTokens?.header?.minHeight ?? '56px',
    '--sb-title-color': mergedTokens?.header?.titleColor ?? '#6B7280',
    '--sb-title-size': mergedTokens?.header?.titleFontSize ?? '14px',
    '--sb-title-weight': mergedTokens?.header?.titleFontWeight ?? '500',

    // Item Base
    '--sb-item-radius': mergedTokens?.item?.radius ?? '8px',
    '--sb-item-h': mergedTokens?.item?.height ?? '36px',
    '--sb-item-px': mergedTokens?.item?.paddingX ?? '8px',
    '--sb-item-gap': mergedTokens?.item?.gap ?? '12px',
    '--sb-item-size': mergedTokens?.item?.fontSize ?? '14px',
    '--sb-item-weight': mergedTokens?.item?.fontWeight ?? '500',
    '--sb-item-color': mergedTokens?.item?.color ?? '#6B7280',

    // Item Hover
    '--sb-item-hover-bg': mergedTokens?.item?.hover?.background ?? '#F3F4F6',
    '--sb-item-hover-color': mergedTokens?.item?.hover?.color ?? '#111827',

    // Item Active
    '--sb-item-active-bg': mergedTokens?.item?.active?.background ?? '#F4F0FF',
    '--sb-item-active-color': mergedTokens?.item?.active?.color ?? '#6D28D9',

    // Section Labels
    '--sb-section-color': mergedTokens?.section?.titleColor ?? '#9CA3AF',
    '--sb-section-size': mergedTokens?.section?.titleFontSize ?? '10px',
    '--sb-section-gap': mergedTokens?.section?.gap ?? '16px',

    // Toggle
    '--sb-toggle-color': mergedTokens?.toggle?.color ?? '#9CA3AF',
    '--sb-toggle-hover': mergedTokens?.toggle?.hoverColor ?? '#6B7280',

    // Motion
    '--sb-motion': mergedTokens?.motion?.duration ?? '250ms',
  } as React.CSSProperties;

  const resolvedSections =
    sections ?? (items ? [{ id: 'default', items }] : []);

  return (
    <aside
      style={styles}
      className={cn(
        'flex h-full flex-col border-r',
        'bg-[var(--sb-bg)] border-[var(--sb-border)]',
        'transition-[width] duration-[var(--sb-motion)] ease-in-out',
        collapsed ? 'w-[var(--sb-width-collapsed)]' : 'w-[var(--sb-width)]',
        className
      )}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-4 py-3"
        style={{ minHeight: 'var(--sb-header-h)' }}
      >
        {!collapsed && (
          <span 
            className="truncate"
            style={{ 
                color: 'var(--sb-title-color)',
                fontSize: 'var(--sb-title-size)',
                fontWeight: 'var(--sb-title-weight)'
            }}
          >
            {title}
          </span>
        )}

        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className={cn(
              'transition-colors outline-none cursor-pointer',
              'text-[var(--sb-toggle-color)] hover:text-[var(--sb-toggle-hover)]',
              collapsed && 'mx-auto'
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <CollapseIconCollapsed /> : <CollapseIconExpanded />}
          </button>
        )}
      </div>

      {/* Navigation Content */}
      <nav 
        className="flex flex-col overflow-y-auto overflow-x-hidden"
        style={{ 
            gap: 'var(--sb-section-gap)',
            paddingLeft: 'var(--sb-padding)',
            paddingRight: 'var(--sb-padding)'
        }}
      >
        {resolvedSections.map((section) => (
          <div key={section.id} className="flex flex-col gap-1">
            {!collapsed && section.title && (
              <span 
                className="px-2 mb-1 font-bold uppercase tracking-wider"
                style={{
                    color: 'var(--sb-section-color)',
                    fontSize: 'var(--sb-section-size)'
                }}
              >
                {section.title}
              </span>
            )}

            {section.items.map((item) => {
              const isActive = item.active;

              return (
                <div
                  key={item.id}
                  onClick={() => item.href && onItemClick?.(item.href)}
                  style={{ cursor: item.href ? 'pointer' : 'default' }}
                  className={cn(
                    'flex items-center transition-all select-none',
                    'h-[var(--sb-item-h)] rounded-[var(--sb-item-radius)] px-[var(--sb-item-px)] gap-[var(--sb-item-gap)]',
                    'text-[var(--sb-item-size)] font-[var(--sb-item-weight)]',
                    collapsed && 'justify-center px-0',
                    isActive
                      ? 'bg-[var(--sb-item-active-bg)] text-[var(--sb-item-active-color)]'
                      : 'text-[var(--sb-item-color)] hover:bg-[var(--sb-item-hover-bg)] hover:text-[var(--sb-item-hover-color)]'
                  )}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {item.icon}
                  </span>
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}