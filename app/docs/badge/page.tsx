'use client'

//import { Badge } from 'nave-ui-library/react';
import { Badge } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function BadgePage() {
  const componentRegistry = (registry as any)['badge']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Badge"
      description="Indicadores visuales de bajo peso que representan estados o atributos semánticos asociados a un elemento."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente Badge desde la librería:
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'
import { Badge } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TONES ───────────── */}
      <ContentCards title="Tones">
        <ComponentExample
          preview={
            <div className="flex flex-wrap justify-center gap-4">
              <Badge tone="neutral">Neutral</Badge>
              <Badge tone="brand">Brand</Badge>
              <Badge tone="success">Success</Badge>
              <Badge tone="info">Info</Badge>
              <Badge tone="warning">Warning</Badge>
              <Badge tone="error">Error</Badge>
            </div>
          }
          code={`<Badge tone="neutral">Neutral</Badge>\n<Badge tone="brand">Brand</Badge>\n<Badge tone="success">Success</Badge>\n<Badge tone="info">Info</Badge>\n<Badge tone="warning">Warning</Badge>\n<Badge tone="error">Error</Badge>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <ComponentExample
          preview={
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Badge size="small">Small</Badge>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Badge size="medium">Medium</Badge>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Badge size="large">Large</Badge>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Large</span>
              </div>
            </div>
          }
          code={`<Badge size="small">Small</Badge>\n<Badge size="medium">Medium</Badge>\n<Badge size="large">Large</Badge>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SHAPES ───────────── */}
      <ContentCards title="Shapes">
        <ComponentExample
          preview={
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Badge shape="rounded" tone="brand">Rounded</Badge>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Default / Rounded</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Badge shape="square" tone="brand">Square</Badge>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Square / Rounded-md</span>
              </div>
            </div>
          }
          code={`<Badge shape="rounded">Rounded</Badge>\n<Badge shape="square">Square</Badge>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Propiedades técnicas y metadatos del componente Badge.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}