'use client'

//import { Input } from 'nave-ui-library/react';
import { Input } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function InputPage() {
  const componentRegistry = (registry as any)['input']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Input"
      description="Un campo de entrada de texto que permite a los usuarios ingresar y editar datos."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Input } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El input estándar incluye soporte para etiquetas (labels) y textos de ayuda (helper text) integrados.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-6">
              <Input 
                label="Nombre de usuario" 
                placeholder="Ej: juan.perez" 
              />
              <Input 
                label="Correo electrónico" 
                placeholder="tu@email.com" 
                helperText="Nunca compartiremos tu email con terceros."
              />
            </div>
          }
          code={`<Input label="Usuario" placeholder="juan.perez" />\n<Input \n  label="Email" \n  helperText="Nunca compartiremos..." \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS (ERROR & DISABLED) ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Manejo de validación mediante la prop <code>error</code> y estados de lectura mediante <code>disabled</code>.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-6">
              <Input 
                error
                label="Contraseña" 
                type="password"
                defaultValue="123"
                helperText="La contraseña es demasiado corta."
              />
              <Input 
                disabled
                label="ID de Cliente" 
                defaultValue="NAVE-99283"
                helperText="Este campo no es editable."
              />
            </div>
          }
          code={`<Input error label="Password" helperText="Error..." />\n<Input disabled label="ID" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TAMAÑOS ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Disponible en tamaño mediano (por defecto) y pequeño para interfaces más densas.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-6">
              <Input 
                size="md"
                label="Medium (Default)" 
                placeholder="Altura 44px"
              />
              <Input 
                size="sm"
                label="Small" 
                placeholder="Altura 36px"
              />
            </div>
          }
          code={`<Input size="md" label="Medium" />\n<Input size="sm" label="Small" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente utiliza <code>cva</code> para gestionar las variantes de borde y foco basadas en el estado de error.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}