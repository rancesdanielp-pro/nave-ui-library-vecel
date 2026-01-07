'use client'

import * as React from 'react'
import { EmptyState, Button } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function EmptyStatePage() {
  const componentRegistry = (registry as any)['empty-state']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Empty State"
      description="Utilizado para comunicar que una vista no tiene contenido, guiando al usuario hacia una acción clara."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
import { EmptyState } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT (CENTERED) ───────────── */}
      <ContentCards title="Centered (Default)">
        <p className="text-sm text-slate-500 mb-6">
          La alineación central es el estándar para pantallas completas o secciones principales.
        </p>
        <ComponentExample
          preview={
            <div className="w-full bg-gray-50 p-4 rounded-xl border">
              <EmptyState 
                title="No hay movimientos"
                description="Acá vas a poder seguir los pagos con QR, link de pago y Tienda online."
                actions={[
                  { label: 'Crear link de pago', variant: 'primary', onClick: () => {} },
                  { label: 'Saber más', variant: 'secondary' }
                ]}
              />
            </div>
          }
          code={`<EmptyState \n  title="No hay movimientos" \n  description="Acá vas a poder..." \n  actions={[\n    { label: 'Crear link', variant: 'primary' },\n    { label: 'Saber más', variant: 'secondary' }\n  ]} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ALIGN LEFT ───────────── */}
      <ContentCards title="Left Aligned">
        <p className="text-sm text-slate-500 mb-6">
          Útil para secciones laterales o componentes de menor ancho donde el texto debe seguir el flujo de lectura izquierdo.
        </p>
        <ComponentExample
          preview={
            <div className="w-full bg-gray-50 p-4 rounded-xl border">
              <EmptyState 
                align="left"
                title="Sin resultados"
                description="No encontramos coincidencias para tu búsqueda. Probá con otros filtros."
                actions={[
                  { label: 'Limpiar filtros', variant: 'tertiary' }
                ]}
              />
            </div>
          }
          code={`<EmptyState \n  align="left" \n  title="Sin resultados" \n  actions={[\n    { label: 'Limpiar filtros', variant: 'tertiary' }\n  ]} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CUSTOM ICON ───────────── */}
      <ContentCards title="Custom Icon Integration">
        <p className="text-sm text-slate-500 mb-6">
          Aunque el componente trae un ícono por defecto, puedes inyectar cualquier nodo de React para personalizar el mensaje visual.
        </p>
        <ComponentExample
          preview={
            <div className="w-full bg-gray-50 p-4 rounded-xl border">
               <EmptyState
                               title="Últimos movimientos"
                               description="Acá vas a poder seguir los pagos con QR, link de pago y Tienda online"
                               actions={[
                                 { label: 'Primary', variant: 'primary', onClick: () => {} },
                                 { label: 'Secondary', variant: 'secondary' },
                               ]}
                             />
            </div>
          }
          code={`<EmptyState \n  title="..." \n  icon={<Plus />} \n  actions={[{ label: 'Agregar' }]} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. Este componente utiliza internamente el componente <code>Button</code> de la librería para sus acciones.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}