'use client'

import * as React from 'react'
import {
  Breadcrumb as BreadcrumbBase,
  BreadcrumbList as BreadcrumbListBase,
  BreadcrumbItem as BreadcrumbItemBase,
  BreadcrumbLink as BreadcrumbLinkBase,
  BreadcrumbPage as BreadcrumbPageBase,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

// --- SOLUCIÓN PARA EL ERROR TS(2559) ---
// Forzamos a TypeScript a reconocer que los componentes aceptan children
const Breadcrumb = BreadcrumbBase as any;
const BreadcrumbList = BreadcrumbListBase as any;
const BreadcrumbItem = BreadcrumbItemBase as any;
const BreadcrumbLink = BreadcrumbLinkBase as any;
const BreadcrumbPage = BreadcrumbPageBase as any;

export default function BreadcrumbPageDoc() {
  const componentRegistry = (registry as any)['breadcrumb']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Breadcrumb"
      description="Un componente de navegación secundaria que ayuda al usuario a entender su ubicación jerárquica dentro de la aplicación."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import { \n  Breadcrumb, \n  BreadcrumbList, \n  BreadcrumbItem, \n  BreadcrumbLink, \n  BreadcrumbPage, \n  BreadcrumbSeparator, \n  BreadcrumbEllipsis \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          La estructura estándar utilizando links interactivos y un separador visual.
        </p>
        <ComponentExample
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">First level</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Current level</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          code={`<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="#">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Ventas</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CON ELLIPSIS ───────────── */}
      <ContentCards title="With Ellipsis">
        <p className="text-sm text-slate-500 mb-6">
          Para jerarquías profundas, puedes utilizar el componente <code>BreadcrumbEllipsis</code> para colapsar niveles intermedios.
        </p>
        <ComponentExample
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">First level</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Current level</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          code={`<BreadcrumbItem>\n  <BreadcrumbEllipsis />\n</BreadcrumbItem>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TAMAÑOS ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          El componente soporta dos tamaños: <code>md</code> (por defecto) y <code>sm</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Medium (md)</span>
                <Breadcrumb>
                  <BreadcrumbList size="md">
                    <BreadcrumbItem><BreadcrumbLink href="#">Admin</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Usuarios</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Small (sm)</span>
                <Breadcrumb>
                  <BreadcrumbList size="sm">
                    <BreadcrumbItem><BreadcrumbLink href="#">Admin</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Usuarios</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          }
          code={`<BreadcrumbList size="sm">...</BreadcrumbList>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DETALLES TÉCNICOS ───────────── */}
      <ContentCards title="Características">
        <div className="space-y-4">
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Accesibilidad:</strong> Utiliza la etiqueta semántica <code>nav</code> con <code>aria-label="breadcrumb"</code> y el atributo <code>aria-current="page"</code> en el nivel activo.</li>
            <li><strong>Composición:</strong> Gracias al uso de <code>asChild</code> de Radix UI, puedes integrar fácilmente componentes de ruteo como <code>next/link</code> sin generar tags anidados inválidos.</li>
            <li><strong>Estética:</strong> Los links utilizan el color de marca <code>#652BDF</code> con un estado hover de subrayado, mientras que la página actual utiliza el gris neutro <code>#6E7991</code>.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}