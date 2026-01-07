'use client'

import * as React from 'react'
import { Switch } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function SwitchPage() {
  const componentRegistry = (registry as any)['switch']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Switch"
      description="Un control interactivo que permite al usuario alternar entre dos estados: activado o desactivado."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Switch } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El Switch puede utilizarse solo o acompañado de etiquetas y descripciones para dar contexto a la acción.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6">
              <Switch label="Notificaciones push" />
              <Switch 
                label="Modo oscuro" 
                description="Cambia la apariencia de la interfaz a colores oscuros."
                defaultChecked 
              />
            </div>
          }
          code={`<Switch label="Notificaciones" />\n<Switch \n  label="Modo oscuro" \n  description="Cambia la apariencia..." \n  defaultChecked \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Soporta estados deshabilitados tanto para la variante activa como inactiva.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col md:flex-row gap-12 justify-center">
              <div className="space-y-4">
                <span className="text-[10px] uppercase text-slate-400 font-bold italic">Disabled Off</span>
                <Switch label="Servicio inactivo" disabled />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase text-slate-400 font-bold italic">Disabled On</span>
                <Switch label="Servicio activo" disabled defaultChecked />
              </div>
            </div>
          }
          code={`<Switch label="Inactivo" disabled />\n<Switch label="Activo" disabled defaultChecked />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Disponible en tamaños <code>regular</code> y <code>small</code> para adaptarse a diferentes densidades de interfaz.
        </p>
        <ComponentExample
          preview={
            <div className="flex items-start justify-center gap-16">
              <div className="flex flex-col items-center gap-3">
                <Switch size="regular" defaultChecked />
                <span className="text-[10px] uppercase text-slate-400 font-bold">Regular (Default)</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Switch size="small" defaultChecked />
                <span className="text-[10px] uppercase text-slate-400 font-bold">Small</span>
              </div>
            </div>
          }
          code={`<Switch size="regular" />\n<Switch size="small" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente utiliza Radix UI Switch Primitive y gestiona las transiciones de color y posición mediante tokens.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}