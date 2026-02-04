'use client'

import * as React from 'react'
import { UnknownPurchase } from '@/packages/ui-library/dist/react';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import { DocsPage } from '../../DocsPage'
import { tokenVariants } from '@/app/utils/tokens'
import { AlertCircle, Inbox } from 'lucide-react'
import { ContentCards } from '../../ContentCards';

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

      {/* ───────────── SECCIÓN: ESTADO LOADING ───────────── */}
      <ContentCards title="Loading State">
        <p className="text-sm text-slate-500 mb-6">
          Utiliza la prop <code>state="loading"</code> junto con <code>loadingContent</code> para mostrar un estado de carga (ej. Skeletons).
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm mx-auto">
              <UnknownPurchase 
                title="Compras desconocidas"
                totalAmount=""
                totalCount={0}
                state="loading"
                loadingContent={
                  <div className="space-y-4 animate-pulse">
                    <div className="space-y-2">
                      <div className="h-3 w-24 bg-slate-200 rounded" />
                      <div className="h-6 w-32 bg-slate-200 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-24 bg-slate-200 rounded" />
                      <div className="h-6 w-12 bg-slate-200 rounded" />
                    </div>
                  </div>
                }
              />
            </div>
          }
          code={`<UnknownPurchase \n  state="loading" \n  loadingContent={<MySkeleton />} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADO EMPTY ───────────── */}
      <ContentCards title="Empty State">
        <p className="text-sm text-slate-500 mb-6">
          Cuando no hay datos para el periodo seleccionado, usa <code>state="empty"</code>.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm mx-auto">
              <UnknownPurchase 
                title="Compras desconocidas"
                totalAmount="$ 0,00"
                totalCount={0}
                state="empty"
                emptyContent={
                  <div className="flex flex-col items-center justify-center py-4 text-slate-400">
                    <Inbox className="h-8 w-8 mb-2 opacity-20" />
                    <p className="text-xs italic">No se encontraron movimientos</p>
                  </div>
                }
              />
            </div>
          }
          code={`<UnknownPurchase \n  state="empty" \n  emptyContent={<p>No hay datos</p>} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADO ERROR ───────────── */}
      <ContentCards title="Error State">
        <p className="text-sm text-slate-500 mb-6">
          Maneja fallos en la red o en el servidor mediante <code>state="error"</code>.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm mx-auto">
              <UnknownPurchase 
                title="Compras desconocidas"
                totalAmount="--"
                totalCount={0}
                state="error"
                errorContent={
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 text-red-600 border border-red-100">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-xs font-medium">Error al cargar métricas</p>
                  </div>
                }
              />
            </div>
          }
          code={`<UnknownPurchase \n  state="error" \n  errorContent={<ErrorComponent />} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSICIÓN TÉCNICA ───────────── */}
      <ContentCards title="Estructura y Estilos">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Este organismo utiliza una arquitectura basada en estados para gestionar su ciclo de vida sin necesidad de manejar lógica interna:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Gestión de Estados:</strong> Soporta los estados <code>default</code>, <code>loading</code>, <code>empty</code> y <code>error</code>.</li>
            <li><strong>Slots Dinámicos:</strong> Permite inyectar cualquier nodo de React mediante props de contenido para una personalización total de la UI de carga y error.</li>
            <li><strong>Tipografía de Datos:</strong> Los valores numéricos utilizan <code>text-xl font-semibold</code> para destacar en el estado por defecto.</li>
            <li><strong>Selector de Fecha:</strong> El <code>Button</code> disparador mantiene la coherencia visual con un tracking de <code>-0.04em</code>.</li>
          </ul>
        </div>
      </ContentCards>
    </DocsPage>
  )
}