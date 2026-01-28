'use client'

import { Loader, Label } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function LoaderPage() {
  const componentRegistry = (registry as any)['loader']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Loader"
      description="Indicador animado utilizado para representar un estado de carga o la ejecución de un proceso en segundo plano."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente Loader desde la librería:
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
import { Loader } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default">
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Loader />
            </div>
          }
          code={`<Loader />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CON TEXTO ───────────── */}
      <ContentCards title="With Label">
        <ComponentExample
          preview={
            <div className="flex flex-col items-center gap-3">
              <Loader className="size-8" />
              <Label className="text-slate-500">Cargando datos...</Label>
            </div>
          }
          code={`<div className="flex flex-col items-center gap-3">\n  <Loader className="size-8" />\n  <Label>Cargando datos...</Label>\n</div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <ComponentExample
          preview={
            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Loader size="sm" variant="default" />
                <span className="text-[10px] uppercase text-slate-400 font-bold">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Loader size="md" variant="primary" />
                <span className="text-[10px] uppercase text-slate-400 font-bold">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Loader size="lg" variant="secondary" />
                <span className="text-[10px] uppercase text-slate-400 font-bold">Large</span>
              </div>
            </div>
          }
          code={`<Loader className="size-4" />\n<Loader className="size-8" />\n<Loader className="size-12" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración de tokens para el color principal y el texto del Loader.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}