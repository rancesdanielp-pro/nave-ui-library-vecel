'use client';

import * as React from 'react';
import { Calendar } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function CalendarPage() {
  const componentRegistry = (registry as any)['calendar'];
  const naveTheme = tokenVariants[0].tokens;

  // Estados para los ejemplos interactivos
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [range, setRange] = React.useState<any>({
    from: new Date(),
  });

  return (
    <DocsPage
      title="Calendar"
      description="Componente de selección de fechas basado en tokens, con soporte para selección única, rangos y personalización de estados dinámicos."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock code={`import { Calendar } from 'nave-ui-library/react'`} />
      </ContentCards>

      {/* ───────────── SECCIÓN: PROPERTIES (Igual que en Buttons) ───────────── */}
      <ContentCards title="Properties">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-2 font-semibold">Prop</th>
                <th className="pb-2 font-semibold">Tipo</th>
                <th className="pb-2 font-semibold">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 font-mono text-xs text-brand font-bold">
                  mode
                </td>
                <td className="py-3 text-xs italic">
                  "single" | "range" | "multiple"
                </td>
                <td className="py-3">Define el tipo de selección permitida.</td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand font-bold">
                  selected
                </td>
                <td className="py-3 text-xs italic">
                  Date | DateRange | undefined
                </td>
                <td className="py-3">
                  La fecha o el conjunto de fechas actualmente seleccionadas.
                </td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand font-bold">
                  onSelect
                </td>
                <td className="py-3 text-xs italic">function</td>
                <td className="py-3">
                  Callback ejecutado al cambiar la selección.
                </td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand font-bold">
                  showOutsideDays
                </td>
                <td className="py-3 text-xs italic">boolean</td>
                <td className="py-3">
                  Muestra u oculta los días que no pertenecen al mes actual.
                </td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand font-bold">
                  tokens
                </td>
                <td className="py-3 text-xs italic">
                  Partial{'<ThemeTokensBase>'}
                </td>
                <td className="py-3">
                  Permite sobreescribir los tokens de diseño localmente.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Single Date Selection">
        <p className="text-sm text-slate-500 mb-6">
          Utiliza el estado <code>Active</code> (morado) para la selección y{' '}
          <code>Current</code> (gris) para el día de hoy.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col items-center gap-4 py-4">
              <Calendar mode="single" selected={date} onSelect={setDate} />
              {date && (
                <p className="text-xs text-slate-400 font-mono">
                  Seleccionado: {date.toLocaleDateString()}
                </p>
              )}
            </div>
          }
          code={`<div className="flex flex-col items-center gap-4 py-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
              {date && (
                <p className="text-xs text-slate-400 font-mono">
                  Seleccionado: {date.toLocaleDateString()}
                </p>
              )}
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: RANGO ───────────── */}
      <ContentCards title="Date Range Selection">
        <p className="text-sm text-slate-500 mb-6">
          Selección de periodos. Los botones de los días mantienen un tamaño
          fijo de 32px para preservar la simetría.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center py-4">
              <Calendar mode="range" selected={range} onSelect={setRange} />
            </div>
          }
          code={`<div className="flex justify-center py-4">
              <Calendar mode="range" selected={range} onSelect={setRange} />
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900 tracking-tight">
          Registry
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Propiedades técnicas y configuración del registro del componente
          extraídas de los tokens.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
