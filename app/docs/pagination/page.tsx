'use client'

import * as React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function PaginationPage() {
  const componentRegistry = (registry as any)['pagination']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Pagination"
      description="Un sistema de navegación para dividir contenido en múltiples páginas y facilitar la exploración de datos."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { \n  Pagination, \n  PaginationContent, \n  PaginationItem, \n  PaginationLink, \n  PaginationPrevious, \n  PaginationNext, \n  PaginationEllipsis \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Pagination">
        <p className="text-sm text-slate-500 mb-6">
          La estructura estándar con páginas numeradas y controles de dirección. El estado activo utiliza un fondo lavanda suave y texto púrpura.
        </p>
        <ComponentExample
          preview={
            <div className="py-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
          code={`<Pagination>\n  <PaginationContent>\n    <PaginationPrevious href="#" />\n    <PaginationLink href="#">1</PaginationLink>\n    <PaginationLink href="#" isActive>2</PaginationLink>\n    <PaginationNext href="#" />\n  </PaginationContent>\n</Pagination>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CON ELIPSIS ───────────── */}
      <ContentCards title="Advanced Layout">
        <p className="text-sm text-slate-500 mb-6">
          Para una gran cantidad de páginas, se utiliza <code>PaginationEllipsis</code> para indicar saltos en la numeración.
        </p>
        <ComponentExample
          preview={
            <div className="py-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#" isActive>11</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">12</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationLink href="#">20</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationNext href="#" /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
          code={`<PaginationContent>\n  <PaginationLink href="#">1</PaginationLink>\n  <PaginationEllipsis />\n  <PaginationLink href="#" isActive>11</PaginationLink>\n</PaginationContent>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS DESHABILITADOS ───────────── */}
      <ContentCards title="Disabled States">
        <p className="text-sm text-slate-500 mb-6">
          Los enlaces pueden deshabilitarse visual y funcionalmente cuando no hay páginas anteriores o posteriores disponibles.
        </p>
        <ComponentExample
          preview={
            <div className="py-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
          code={`<PaginationPrevious disabled />\n<PaginationNext disabled />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          El componente utiliza semántica <code>nav</code> y <code>aria-label</code> para asegurar que sea accesible para lectores de pantalla.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}