'use client'

import * as React from 'react'
import { Calendar } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function CalendarPage() {
  const componentRegistry = (registry as any)['calendar']
  const naveTheme = tokenVariants[0].tokens

  // Estados para los ejemplos interactivos
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [range, setRange] = React.useState<any>({
    from: new Date(),
  })

  return (
    <DocsPage
      title="Calendar"
      description="Un componente de calendario flexible para seleccionar fechas individuales o rangos de fechas."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Calendar } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO (SINGLE SELECT) ───────────── */}
      <ContentCards title="Single Date Selection">
        <p className="text-sm text-slate-500 mb-6">
          Selección de una única fecha. Utiliza tokens para el color de acento y el estado "hoy".
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col items-center gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
              />
              {date && (
                <p className="text-xs text-slate-400 font-mono italic">
                  Seleccionado: {date.toLocaleDateString()}
                </p>
              )}
            </div>
          }
          code={`const [date, setDate] = useState(new Date())\n\n<Calendar \n  mode="single" \n  selected={date} \n  onSelect={setDate} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: RANGO ───────────── */}
      <ContentCards title="Date Range Selection">
        <p className="text-sm text-slate-500 mb-6">
          Permite seleccionar un periodo de tiempo. Los estilos visuales para el inicio, fin y medio del rango se gestionan automáticamente.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                className="rounded-md border shadow-sm"
              />
            </div>
          }
          code={`<Calendar \n  mode="range" \n  selected={range} \n  onSelect={setRange} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CONFIGURACIÓN ───────────── */}
      <ContentCards title="Configuration options">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 italic">
            El componente hereda toda la potencia de <code>react-day-picker</code>, permitiendo:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>showOutsideDays:</strong> Muestra u oculta días de los meses adyacentes.</li>
            <li><strong>captionLayout:</strong> Permite alternar entre etiquetas simples o selectores de mes/año.</li>
            <li><strong>Custom Components:</strong> Los iconos de navegación (Chevron) están personalizados con Lucide.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente inyecta variables CSS (<code>--calendar-accent</code>, etc.) basadas en tus tokens de diseño para una personalización profunda.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}