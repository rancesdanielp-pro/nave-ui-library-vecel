'use client'

import * as React from 'react'
import { Label, Input, Checkbox, Switch } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function LabelPage() {
  const componentRegistry = (registry as any)['label']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Label"
      description="Un componente de etiqueta accesible que se utiliza habitualmente junto a controles de formulario."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'

import { Label } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Una etiqueta simple con tipografía optimizada y soporte para tokens de color.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Label>Este es un Label estándar</Label>
            </div>
          }
          code={`<Label>Este es un Label estándar</Label>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: FORM INTEGRATION ───────────── */}
      <ContentCards title="Form Integration">
        <p className="text-sm text-slate-500 mb-6">
          Uso del Label junto a otros componentes para mejorar la experiencia de usuario y la accesibilidad.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-8 max-w-sm w-full mx-auto">
              {/* Con Input */}
              <div className="grid gap-2">
                <Label htmlFor="email-input">Correo electrónico</Label>
                <Input id="email-input" placeholder="tu@email.com" />
              </div>

              {/* Con Checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">
                  Acepto los términos y condiciones
                </Label>
              </div>
            </div>
          }
          code={`<div className="grid gap-2">\n  <Label htmlFor="email">Email</Label>\n  <Input id="email" />\n</div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          El Label responde visualmente cuando el control asociado está deshabilitado (usando la clase <code>peer-disabled</code>).
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 max-w-sm w-full mx-auto">
              <div className="flex items-center gap-3 opacity-50">
                 <Switch disabled id="airplane-mode" />
                 <Label htmlFor="airplane-mode">Modo avión (Deshabilitado)</Label>
              </div>
              <div className="grid gap-2">
                 <Label className="peer-disabled:opacity-50">Campo bloqueado</Label>
                 <Input disabled placeholder="No se puede editar" />
              </div>
            </div>
          }
          code={`<Label className="peer-disabled:opacity-50">Etiqueta</Label>\n<Input disabled />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente utiliza <code>Radix UI Label Primitive</code> para asegurar que el clic en la etiqueta enfoque correctamente el control asociado.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}