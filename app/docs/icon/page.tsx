'use client'

import * as React from 'react'
import { Icon, IconLabel } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

// --- SVGS PUROS PARA LOS EJEMPLOS ---
const HomeSvg = (props: any) => (
  <svg viewBox="0 0 24 24" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
)

const CheckSvg = (props: any) => (
  <svg viewBox="0 0 24 24" {...props}><polyline points="20 6 9 17 4 12"/></svg>
)

const AlertSvg = (props: any) => (
  <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
)

export default function IconsPage() {
  const componentRegistry = (registry as any)['icon']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Icons & IconLabel"
      description="Componentes para estandarizar el uso de iconografía, gestionando tamaños y colores semánticos a través de tokens."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
            
import { Icon, IconLabel } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ICON SIZES ───────────── */}
      <ContentCards title="Icon Sizes">
        <p className="text-sm text-slate-500 mb-6">
          El componente mapea tamaños predefinidos a píxeles exactos (xs: 12px a xl: 32px).
        </p>
        <ComponentExample
          preview={
            <div className="flex items-end justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Icon size="xs"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">XS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="sm"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">SM</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="md"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">MD</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="lg"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">LG</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="xl"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">XL</span>
              </div>
            </div>
          }
          code={`<Icon size="xl">\n  <svg>...</svg>\n</Icon>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SEMANTIC COLORS ───────────── */}
      <ContentCards title="Semantic Variants">
        <p className="text-sm text-slate-500 mb-6">
          Utiliza la prop <code>color</code> para aplicar variantes semánticas resueltas desde los tokens (primary, danger, success).
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center gap-10">
              <Icon color="primary" size="lg"><HomeSvg /></Icon>
              <Icon color="success" size="lg"><CheckSvg /></Icon>
              <Icon color="danger" size="lg"><AlertSvg /></Icon>
              <Icon color="muted" size="lg"><HomeSvg /></Icon>
            </div>
          }
          code={`<Icon color="success"><CheckSvg /></Icon>\n<Icon color="danger"><AlertSvg /></Icon>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ICON LABEL ───────────── */}
      <ContentCards title="IconLabel Composition">
        <p className="text-sm text-slate-500 mb-6">
          Permite combinar un ícono con un texto manteniendo la alineación y el espaciado perfecto.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 items-center">
              <IconLabel 
                icon={<Icon color="primary"><HomeSvg /></Icon>} 
                label="Inicio" 
              />
              <IconLabel 
                icon={<Icon color="danger"><AlertSvg /></Icon>} 
                label="Error de conexión" 
                iconPosition="right"
                className="text-red-600"
              />
            </div>
          }
          code={`<IconLabel \n  icon={<Icon><HomeSvg /></Icon>} \n  label="Inicio" \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          El componente utiliza <code>React.cloneElement</code> para inyectar propiedades a los SVGs hijos, asegurando que hereden el <code>pixelSize</code> y el color de trazo.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}