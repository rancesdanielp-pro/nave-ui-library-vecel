'use client'

import * as React from 'react'
import { Progress } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function ProgressPage() {
  const componentRegistry = (registry as any)['progress']
  const naveTheme = tokenVariants[0].tokens

  // Estado para el ejemplo animado
  const [dynamicValue, setDynamicValue] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (dynamicValue < 100) setDynamicValue(prev => prev + 1)
    }, 100)
    return () => clearTimeout(timer)
  }, [dynamicValue])

  return (
    <DocsPage
      title="Progress"
      description="Componente que comunica visualmente el estado de avance de una tarea o proceso mediante una barra de progreso."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente Progress desde la librería:
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
import { Progress } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default">
        <ComponentExample
          preview={
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>Cargando recursos...</span>
                  <span>60%</span>
                </div>
                <Progress value={60} />
              </div>
            </div>
          }
          code={`<Progress value={60} />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DYNAMIC / ANIMATED ───────────── */}
      <ContentCards title="Animated Example">
        <ComponentExample
          preview={
            <div className="w-full max-w-md space-y-4 text-center">
              <Progress value={dynamicValue} className="h-3" />
              <p className="text-xs text-slate-400 font-mono italic">
                Status: {dynamicValue}%
              </p>
              <button 
                onClick={() => setDynamicValue(0)}
                className="text-xs text-brand underline font-medium"
              >
                Reiniciar animación
              </button>
            </div>
          }
          code={`const [value, setValue] = React.useState(13)\n\n// Render\n<Progress value={value} />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: STEPS ───────────── */}
      <ContentCards title="Progress States">
        <ComponentExample
          preview={
            <div className="w-full max-w-md space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Initial State (10%)</span>
                <Progress value={10} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">In Progress (45%)</span>
                <Progress value={45} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Almost Done (90%)</span>
                <Progress value={90} />
              </div>
            </div>
          }
          code={`<Progress value={10} />\n<Progress value={45} />\n<Progress value={90} />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración de tokens para el track (fondo) y el indicator (barra móvil).
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}