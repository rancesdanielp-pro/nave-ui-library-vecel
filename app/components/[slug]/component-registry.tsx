'use client';

import registry from '@/packages/ui-library/src/registry/registry.json';
import { cn } from '@/packages/ui-library/src/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ComponentsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export default function ComponentsPage() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full border-r border-gray-200 bg-background px-4 py-4">
      <div className="mb-4 flex items-center gap-2 px-2">
        <ComponentsIcon />
        <h2 className="text-sm font-semibold tracking-tight">Components</h2>
      </div>

      <nav className="space-y-1">
        <ul className="mt-2 space-y-1 pl-2">
          {Object.entries(registry).map(([slug, component]) => {
            const active = pathname === `/components/${slug}`;

            return (
              <li key={slug}>
                <Link
                  href={`/components/${slug}`}
                  className={cn(
                    'group flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-all hover:bg-[#652BDF]/10  hover:text-foreground',
                    active
                      ? 'bg-[#652BDF]/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span
                    className={cn(
                      'transition-all',
                      active
                        ? 'text-primary'
                        : 'text-muted-foreground group-hover:text-foreground'
                    )}
                  ></span>

                  <span className="truncate">{component.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
