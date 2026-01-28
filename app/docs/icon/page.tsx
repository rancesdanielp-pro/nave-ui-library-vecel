'use client'

import * as React from 'react'
// Ajusta las rutas según tu estructura de paquetes
import { Icon, IconLabel } from '@/packages/ui-library/dist/react' 
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

// --- SVGS PUROS PARA LOS EJEMPLOS ---
// Nota: El componente Icon ahora inyecta width, height y stroke automáticamente
const HomeSvg = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const CheckSvg = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const AlertSvg = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

export default function IconsPage() {
  const componentRegistry = (registry as any)['icon']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Icons & IconLabel"
      description="Estandarización de iconografía mediante tokens. Gestiona tamaños en píxeles y colores semánticos inyectando variables CSS al componente raíz."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'\n\nimport { Icon, IconLabel } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ICON SIZES ───────────── */}
      <ContentCards title="Icon Sizes">
        <p className="text-sm text-slate-500 mb-6">
          El componente utiliza la escala de tokens <code>icon.sizes</code> para mapear variantes (xs a xl) a valores numéricos, aplicándolos mediante la variable <code>--icon-size</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex items-end justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Icon size="xs"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">XS (12px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="sm"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">SM (16px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="md"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">MD (20px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="lg"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">LG (24px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon size="xl"><HomeSvg /></Icon>
                <span className="text-[10px] text-slate-400 font-bold">XL (32px)</span>
              </div>
            </div>
          }
          code={`<Icon size="xs"><HomeSvg /></Icon>\n<Icon size="xl"><HomeSvg /></Icon>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SEMANTIC COLORS ───────────── */}
      <ContentCards title="Semantic Variants">
        <p className="text-sm text-slate-500 mb-6">
          La prop <code>color</code> resuelve la variante desde los tokens dinámicos. El componente inyecta <code>--icon-color</code> y los hijos SVG heredan este valor mediante <code>currentColor</code>.
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
          code={`<Icon color="primary"><HomeSvg /></Icon>\n<Icon color="success"><CheckSvg /></Icon>\n<Icon color="danger"><AlertSvg /></Icon>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ICON LABEL ───────────── */}
      <ContentCards title="IconLabel Composition">
        <p className="text-sm text-slate-500 mb-6">
          Abstracción para alinear iconos con texto. Utiliza <code>flex</code> para garantizar que el centro óptico del icono coincida con la línea de base del texto.
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
                className="text-red-600 font-medium"
              />
            </div>
          }
          code={`<IconLabel \n  icon={<Icon color="primary"><HomeSvg /></Icon>} \n  label="Inicio" \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900 font-mono">Registry Metadata</h2>
        <p className="text-sm text-slate-500 mb-6">
          El componente utiliza <code>React.cloneElement</code> para asegurar que el stroke y el tamaño se sincronicen con la variable CSS <code>--icon-size</code>.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}