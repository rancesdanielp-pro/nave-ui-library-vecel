'use client'

import * as React from 'react'
import { ListItem, Card } from 'nave-ui-library/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function ListItemPage() {
  const componentRegistry = (registry as any)['listItem']
  const naveTheme = tokenVariants[0].tokens

  const transactions = [
    {
      id: 'tx-1',
      overline: 'Hoy • 14:30',
      title: 'Transferencia recibida',
      subtitle: 'De Juan Pérez',
      amount: '+ $ 15.000,00',
      status: { label: 'Aprobado' }
    },
    {
      id: 'tx-2',
      overline: 'Ayer • 09:15',
      title: 'Pago con QR',
      subtitle: 'Starbucks Coffee',
      amount: '- $ 4.500,00',
      status: { label: 'Aprobado' }
    },
    {
      id: 'tx-3',
      overline: '02 Ene • 18:00',
      title: 'Carga de SUBE',
      subtitle: 'Red Link',
      amount: '- $ 2.000,00',
      status: { label: 'Aprobado' }
    }
  ]

  return (
    <DocsPage
      title="List Item"
      description="Un componente de fila diseñado para mostrar información detallada de transacciones o registros de forma compacta."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'

import { ListItem } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Transaction">
        <p className="text-sm text-slate-500 mb-6">
          El ListItem organiza automáticamente la fecha (overline), el título y la descripción, junto con el monto y estado a la derecha.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md bg-white p-2 rounded-xl border">
              <ListItem 
                id="single-item"
                overline="15 de Mayo, 2024"
                title="Suscripción Netflix"
                subtitle="Tarjeta Visa terminada en 4432"
                amount="$ 6.700,00"
                status={{ label: "Aprobado" }}
                onItemClick={(id) => alert(`Click en item: ${id}`)}
              />
            </div>
          }
          code={`<ListItem \n  id="1" \n  overline="15 de Mayo" \n  title="Netflix" \n  amount="$ 6.700" \n  status={{ label: "Aprobado" }}\n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: LISTA DENTRO DE CARD ───────────── */}
      <ContentCards title="Activity Feed Pattern">
        <p className="text-sm text-slate-500 mb-6">
          Es muy común agrupar múltiples ListItems dentro de una <code>Card</code> para crear un feed de actividad.
        </p>
        <ComponentExample
          preview={
            <Card title="Actividad reciente" width={400}>
              <div className="flex flex-col">
                {transactions.map((tx) => (
                  <ListItem 
                    key={tx.id}
                    {...tx}
                    onItemClick={(id) => console.log(id)}
                  />
                ))}
              </div>
            </Card>
          }
          code={`<Card title="Actividad">\n  {transactions.map(tx => (\n    <ListItem key={tx.id} {...tx} />\n  ))}\n</Card>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPORTAMIENTO ───────────── */}
      <ContentCards title="Propiedades y UX">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            El componente está optimizado para flujos de navegación táctiles y de escritorio:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Hover State:</strong> Aplica <code>hover:bg-muted/50</code> para dar feedback visual al usuario.</li>
            <li><strong>Interactive:</strong> Si se pasa <code>onItemClick</code>, el componente cambia su rol a <code>button</code>.</li>
            <li><strong>Bordes Inteligentes:</strong> Incluye un separador inferior que desaparece automáticamente en el último elemento (<code>last:border-b-0</code>).</li>
            <li><strong>Badge Integrado:</strong> Utiliza el componente <code>Badge</code> interno para mostrar estados de éxito o error.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica del componente. Nota cómo utiliza tipografías <code>font-medium</code> para resaltar los datos clave.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}