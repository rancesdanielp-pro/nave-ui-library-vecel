// DocsPageClient.tsx
'use client';

import { ThemeProvider } from '@/packages/ui-library/dist/react';
import { useBrand } from './BrandContext';
import { tokenVariants } from '../utils/tokens';
import ds_last from '../utils/DSL';

export function DocsPage({
  title,
  description,
  children,
}: any) {
  // Suscripción al cambio de brand
  useBrand();
   const { activeBrand } = useBrand();
   const channelId = 'nave';

  return (
     <ThemeProvider channelId={activeBrand?.name || channelId}>
      <section className="w-full min-h-screen flex justify-center bg-slate-100">
        <div className="w-full max-w-[960px] px-6 py-12">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 px-8 py-8">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
              {description && (
                <p className="mt-3 text-slate-600">{description}</p>
              )}
            </header>
            <div className="space-y-12">{children}</div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
