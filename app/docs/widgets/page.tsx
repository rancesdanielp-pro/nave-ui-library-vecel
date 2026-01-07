'use client'

import * as React from 'react'
import { LastMovements, Movement } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import { tokenVariants } from '@/app/utils/tokens'

export default function LastMovementsPage() {
  const naveTheme = tokenVariants[0].tokens

  // Datos de ejemplo para la demo
  const mockMovements: Movement[] = [
    {
      id: '1',
      date: '19 Dic, 08:21',
      title: 'QR',
      subtitle: 'Caja Principal',
      amount: '$ 32.850,10',
      status: 'success',
    },
    {
      id: '2',
      date: '18 Dic, 14:45',
      title: 'Tienda online',
      subtitle: 'Orden #4432',
      amount: '$ 12.400,00',
      status: 'pending',
    },
    {
      id: '3',
      date: '18 Dic, 11:20',
      title: 'Link de pago',
      subtitle: 'Venta de Servicios',
      amount: '$ 5.000,00',
      status: 'failed',
    },
    {
        id: '4',
        date: '17 Dic, 10:00',
        title: 'QR',
        subtitle: 'Sucursal Palermo',
        amount: '$ 8.900,50',
        status: 'refunded',
      },
  ]

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isExpanded, setIsExpanded] = React.useState(true)

  return (
    <DocsPage
      title="Last Movements Widget"
      description="Un widget complejo que resume la actividad financiera, integrando filtrado por fecha y estados de carga."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import { LastMovements } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: INTERACTIVO ───────────── */}
      <ContentCards title="Complete Interactive Widget">
        <p className="text-sm text-slate-500 mb-6">
          Este widget utiliza un <code>Popover</code> con un <code>Calendar</code> en su acción de cabecera para filtrar los datos.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-2xl mx-auto">
              <LastMovements 
                title="Últimos movimientos"
                items={mockMovements}
                date={date}
                period=''
                expanded={isExpanded}
                onDateChange={setDate}
                onExpandedChange={setIsExpanded}
                onItemClick={(id) => alert(`Navegando al detalle de: ${id}`)}
              />
            </div>
          }
          code={`<LastMovements \n  title="Últimos movimientos" \n  items={movements} \n  date={date} \n  onDateChange={setDate} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS (LOADING & EMPTY) ───────────── */}
      <ContentCards title="States: Loading & Empty">
        <p className="text-sm text-slate-500 mb-6">
          El widget maneja nativamente esqueletos de carga y un estado vacío con ilustraciones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loading State</span>
            <LastMovements 
              title="Movimientos" 
              state="loading" 
              items={[]} 
              period=''
            />
          </div>
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Empty State</span>
            <LastMovements 
              title="Movimientos" 
              state="empty" 
              items={[]} 
              period=''
            />
          </div>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: MAPEO DE ESTADOS ───────────── */}
      <ContentCards title="Status Mapping">
        <p className="text-sm text-slate-600 mb-4">
            El widget mapea estados técnicos a etiquetas amigables y variantes de color (Badges):
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['success', 'pending', 'failed', 'created', 'refunded'].map((s) => (
                <div key={s} className="p-3 border rounded-md bg-white flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-mono">{s}</span>
                    <span className="text-sm font-medium">Mapea a Badge</span>
                </div>
            ))}
        </div>
      </ContentCards>
    </DocsPage>
  )
}