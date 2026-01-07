'use client'

import { RadioGroup, RadioItem } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function RadioGroupPage() {
  const componentRegistry = (registry as any)['radio']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Radio Group"
      description="Un conjunto de botones de selección que permite al usuario elegir una única opción de una lista."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { RadioGroup, RadioItem } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Los Radio Items deben envolverse en un <code>RadioGroup</code> para gestionar el estado de selección única.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm">
              <RadioGroup defaultValue="option-1">
                <RadioItem value="option-1" label="Opción estándar" />
                <RadioItem 
                  value="option-2" 
                  label="Con descripción" 
                  description="Esta es una breve explicación de la opción seleccionada." 
                />
                <RadioItem value="option-3" label="Opción deshabilitada" disabled />
              </RadioGroup>
            </div>
          }
          code={`<RadioGroup defaultValue="option-1">\n  <RadioItem value="option-1" label="Opción 1" />\n  <RadioItem \n    value="option-2" \n    label="Opción 2" \n    description="Descripción..." \n  />\n</RadioGroup>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TONES ───────────── */}
      <ContentCards title="Tones">
        <p className="text-sm text-slate-500 mb-6">
          Soporta diferentes tonos para indicar estados semánticos como <code>brand</code>, <code>neutral</code> y <code>destructive</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <RadioGroup defaultValue="brand">
                <RadioItem value="brand" tone="brand" label="Brand Tone (Default)" />
                <RadioItem value="neutral" tone="neutral" label="Neutral Tone" />
                <RadioItem value="destructive" tone="destructive" label="Destructive Tone" />
              </RadioGroup>
            </div>
          }
          code={`<RadioItem tone="brand" label="Brand" />\n<RadioItem tone="neutral" label="Neutral" />\n<RadioItem tone="destructive" label="Destructive" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Disponible en tamaños <code>regular</code> y <code>small</code> para ajustarse a la densidad de la interfaz.
        </p>
        <ComponentExample
          preview={
            <div className="flex items-start justify-center gap-16">
              <div className="space-y-4">
                 <span className="text-[10px] uppercase text-slate-400 font-bold">Regular (20px)</span>
                 <RadioGroup defaultValue="r1">
                    <RadioItem value="r1" size="regular" label="Opción A" />
                    <RadioItem value="r2" size="regular" label="Opción B" />
                 </RadioGroup>
              </div>
              <div className="space-y-4">
                 <span className="text-[10px] uppercase text-slate-400 font-bold">Small (16px)</span>
                 <RadioGroup defaultValue="s1">
                    <RadioItem value="s1" size="small" label="Opción A" />
                    <RadioItem value="s2" size="small" label="Opción B" />
                 </RadioGroup>
              </div>
            </div>
          }
          code={`<RadioItem size="regular" />\n<RadioItem size="small" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente utiliza Radix UI Radio Group Primitive para la gestión de accesibilidad por teclado y estados de formulario.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}