'use client';

import * as React from 'react';
import { ThemeProvider } from '@/packages/ui-library/dist/react';
import { tokenVariants } from '@/app/utils/tokens'

type DocsPageProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  theme?: any;
};

export function DocsPage({
  title,
  description,
  children,
  theme,
}: DocsPageProps) {
  const activeTheme = theme || tokenVariants[0].tokens;

  return (
    <ThemeProvider theme={activeTheme}>
      {/* Fondo general */}
      <section className="w-full min-h-screen flex justify-center bg-slate-100">
        {/* Contenedor principal */}
        <div className="w-full max-w-[960px] px-6 py-12">
          {/* Card */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 px-8 py-8">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                {title}
              </h1>

              {description && (
                <p className="mt-3 max-w-2xl text-base text-slate-600">
                  {description}
                </p>
              )}
            </header>

            <div className="space-y-12">
              {children}
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
