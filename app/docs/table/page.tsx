'use client'

import * as React from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  Badge,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/packages/ui-library/dist/react';

import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function TablePage() {
  const componentRegistry = (registry as any)['table']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Table"
      description="Un contenedor responsivo y estilizado para mostrar grandes volúmenes de datos con soporte para paginación y estados."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import { \n  Table, \n  TableHeader, \n  TableBody, \n  TableRow, \n  TableHead, \n  TableCell, \n  TableFooter \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Full Width Table">
        <p className="text-sm text-slate-500 mb-6">
          La tabla está diseñada para ocupar el 100% del contenedor padre. Se recomienda el uso de <code>whitespace-nowrap</code> en celdas críticas.
        </p>
        <ComponentExample
          preview={
            <div className="w-full overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Header Text</TableHead>
                    <TableHead>Header Text</TableHead>
                    <TableHead>Header Text</TableHead>
                    <TableHead>Header Text</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>
                      <Badge size="medium" tone="warning">label</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>
                      <Badge size="medium" tone="info">label</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>Cell Text</TableCell>
                    <TableCell>
                      <Badge size="medium" tone="success">label</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableFooter>
                  <div className="text-sm text-[#6E7991] whitespace-nowrap">
                    1–10 de 91 resultados
                  </div>
                  <Pagination className="justify-end">
                    <PaginationContent>
                      <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                      <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationEllipsis /></PaginationItem>
                      <PaginationItem><PaginationNext href="#" /></PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </TableFooter>
              </Table>
            </div>
          }
          code={`<Table>\n  <TableHeader>...</TableHeader>\n  <TableBody>...</TableBody>\n  <TableFooter>\n    <div>1-10 de 91</div>\n    <Pagination>...</Pagination>\n  </TableFooter>\n</Table>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: NOTAS DE DISEÑO ───────────── */}
      <ContentCards title="Diseño y Proporciones">
        <div className="space-y-4 text-sm text-slate-600">
          <p>Para evitar que la tabla se corte en pantallas pequeñas o dentro de contenedores estrechos:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Contenedor:</strong> El componente <code>Table</code> aplica un <code>w-full</code> automático.</li>
            <li><strong>Paginación:</strong> El <code>TableFooter</code> usa flexbox para separar el contador de la navegación.</li>
            <li><strong>Badges:</strong> Se integran perfectamente en las celdas usando el tamaño <code>medium</code> para mantener la altura de fila consistente.</li>
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