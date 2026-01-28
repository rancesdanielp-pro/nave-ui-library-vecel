'use client'

import * as React from 'react'
//import { UnknownPurchase } from 'nave-ui-library/react';

import { UnknownPurchase } from '@/packages/ui-library/dist/react';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import { DocsPage } from '../../DocsPage'
import { ContentCards } from '../../ContentCards'
import { tokenVariants } from '@/app/utils/tokens'

export default function UnknownPurchasePage() {
  const naveTheme = tokenVariants[0].tokens

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <DocsPage
      title="Unknown Purchase Widget"
      description="Un widget de métricas financieras diseñado para visualizar montos y cantidades de transacciones no identificadas con filtrado temporal."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import { UnknownPurchase } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El componente muestra dos métricas principales (monto y conteo) dentro de una tarjeta con un selector de fecha integrado.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm mx-auto">
              <UnknownPurchase 
                title="Compras desconocidas"
                totalAmount="$ 150.400,00"
                totalCount={24}
                date={date}
                onDateChange={setDate}
              />
            </div>
          }
          code={`<UnknownPurchase \n  title="Compras desconocidas" \n  totalAmount="$ 150.400,00" \n  totalCount={24} \n  date={date} \n  onDateChange={setDate} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSICIÓN TÉCNICA ───────────── */}
      <ContentCards title="Estructura y Estilos">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Este organismo utiliza estilos fijos para garantizar la legibilidad de las métricas financieras:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Tipografía de Datos:</strong> Los valores numéricos utilizan <code>text-xl font-semibold</code> para destacar sobre el resto del contenido.</li>
            <li><strong>Selector de Fecha:</strong> El <code>Button</code> disparador tiene un tracking de <code>-0.04em</code> y un estilo de fuente específico para alinearse al branding de Nave.</li>
            <li><strong>Interacción:</strong> El <code>Popover</code> se ajusta al ancho del contenido del calendario (<code>w-auto</code>).</li>
          </ul>
        </div>
      </ContentCards>
    </DocsPage>
  )
}