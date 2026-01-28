'use client'

//import { Textarea } from 'nave-ui-library/react';
import { Textarea } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function TextareaPage() {
  const componentRegistry = (registry as any)['textarea']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Textarea"
      description="Un campo de entrada que permite a los usuarios ingresar y editar textos largos de múltiples líneas."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Textarea } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El Textarea se expande verticalmente por defecto y permite redimensionamiento manual por el usuario (<code>resize-y</code>).
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-lg">
              <Textarea 
                label="Comentarios adicionales" 
                placeholder="Escribí aquí tus observaciones..." 
                helperText="Máximo 500 caracteres."
              />
            </div>
          }
          code={`<Textarea \n  label="Comentarios" \n  placeholder="Escribí aquí..." \n  helperText="Máximo 500 caracteres."\n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Incluye estilos específicos para validaciones de error y estados de solo lectura.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-lg flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold italic">Error State</span>
                <Textarea 
                  error
                  label="Descripción del problema" 
                  defaultValue="Texto corto"
                  helperText="La descripción debe ser más detallada."
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold italic">Disabled State</span>
                <Textarea 
                  disabled
                  label="Notas de auditoría" 
                  defaultValue="Esta nota no puede ser modificada una vez cerrada la sesión."
                />
              </div>
            </div>
          }
          code={`<Textarea error label="Error" helperText="Mensaje de error" />\n<Textarea disabled label="Deshabilitado" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ROWS & HEIGHT ───────────── */}
      <ContentCards title="Rows & Custom Height">
        <p className="text-sm text-slate-500 mb-6">
          Puedes controlar la altura inicial utilizando la propiedad nativa <code>rows</code> o mediante clases de CSS.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-lg">
              <Textarea 
                label="Mensaje extenso" 
                rows={8}
                placeholder="Este área de texto es más alta por defecto."
              />
            </div>
          }
          code={`<Textarea label="Mensaje" rows={8} />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente utiliza <code>aria-invalid</code> para accesibilidad cuando el estado de error está activo.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}