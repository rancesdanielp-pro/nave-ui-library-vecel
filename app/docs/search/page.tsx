'use client'

import * as React from 'react'
import { SearchBar } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function SearchBarPage() {
  const componentRegistry = (registry as any)['input'] // Reutiliza tokens de input
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Search Bar"
      description="Un campo de entrada optimizado para búsquedas, con iconos integrados y funcionalidad de limpieza rápida."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { SearchBar } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          La SearchBar incluye un icono de búsqueda a la izquierda y un botón para limpiar el texto a la derecha que aparece automáticamente al escribir.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md">
              <SearchBar placeholder="Buscar movimientos, clientes..." />
            </div>
          }
          code={`<SearchBar placeholder="Buscar..." />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Disponible en tamaños <code>sm</code> (36px) y <code>md</code> (44px) para adaptarse a diferentes contextos de la cabecera o filtros.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md flex flex-col gap-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Medium (Default)</span>
                <SearchBar size="md" placeholder="Search size md..." />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Small</span>
                <SearchBar size="sm" placeholder="Search size sm..." />
              </div>
            </div>
          }
          code={`<SearchBar size="md" />\n<SearchBar size="sm" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Maneja estados deshabilitados bloqueando tanto el input como el botón de limpieza.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md">
              <SearchBar disabled placeholder="Búsqueda deshabilitada" />
            </div>
          }
          code={`<SearchBar disabled />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este componente utiliza referencias (<code>useRef</code>) para manipular el DOM directamente al limpiar la búsqueda, optimizando el rendimiento sin necesidad de re-renders constantes.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}