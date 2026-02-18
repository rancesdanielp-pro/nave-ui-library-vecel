'use client';

import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCellDescription,
  Badge,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/packages/ui-library/dist/react';

// Ícono de tres puntos (MoreVertical) para acciones
const MoreIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
      stroke="#6E7991"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z"
      stroke="#6E7991"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
      stroke="#6E7991"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function TablePage() {
  const componentRegistry = (registry as any)['table'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Table"
      description="Contenedor optimizado para grandes volúmenes de datos. Permite jerarquizar información mediante títulos y descripciones de celda."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCellDescription, TableFooter } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Data Table with Cell Descriptions">
        <p className="text-sm text-slate-500 mb-6">
          Utiliza <code>TableCellDescription</code> para agregar subtítulos en
          tipografía XS dentro de las celdas, mejorando la jerarquía visual.
        </p>
        <ComponentExample
          preview={
            <div className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Operación</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {[
                    {
                      id: '001',
                      name: 'Juan Pérez',
                      desc: 'ID: 452930',
                      op: 'Venta Directa',
                      opDesc: 'Ref: 99201',
                      amount: '$ 25.000',
                      tone: 'success',
                    },
                    {
                      id: '002',
                      name: 'María Garcia',
                      desc: 'ID: 882103',
                      op: 'Transferencia',
                      opDesc: 'Ref: 10293',
                      amount: '$ 12.400',
                      tone: 'warning',
                    },
                    {
                      id: '003',
                      name: 'Luca Modric',
                      desc: 'ID: 110293',
                      op: 'Cobro QR',
                      opDesc: 'Ref: 88301',
                      amount: '$ 8.900',
                      tone: 'info',
                    },
                  ].map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <span className="font-medium block">{row.name}</span>
                        <TableCellDescription>{row.desc}</TableCellDescription>
                      </TableCell>
                      <TableCell>
                        <span className="block">{row.op}</span>
                        <TableCellDescription>
                          {row.opDesc}
                        </TableCellDescription>
                      </TableCell>
                      <TableCell className="font-mono">{row.amount}</TableCell>
                      <TableCell>
                        <Badge size="medium" tone={row.tone as any}>
                          Completado
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                          <MoreIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableFooter>
                  <div className="text-sm text-[#6E7991]">
                    Mostrando 1–10 de 91 resultados
                  </div>
                  <Pagination className="justify-end w-auto mx-0">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </TableFooter>
              </Table>
            </div>
          }
          code={`<Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Operación</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {[
                    { id: '001', name: 'Juan Pérez', desc: 'ID: 452930', op: 'Venta Directa', opDesc: 'Ref: 99201', amount: '$ 25.000', tone: 'success' },
                    { id: '002', name: 'María Garcia', desc: 'ID: 882103', op: 'Transferencia', opDesc: 'Ref: 10293', amount: '$ 12.400', tone: 'warning' },
                    { id: '003', name: 'Luca Modric', desc: 'ID: 110293', op: 'Cobro QR', opDesc: 'Ref: 88301', amount: '$ 8.900', tone: 'info' },
                  ].map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <span className="font-medium block">{row.name}</span>
                        <TableCellDescription>{row.desc}</TableCellDescription>
                      </TableCell>
                      <TableCell>
                        <span className="block">{row.op}</span>
                        <TableCellDescription>{row.opDesc}</TableCellDescription>
                      </TableCell>
                      <TableCell className="font-mono">{row.amount}</TableCell>
                      <TableCell>
                        <Badge size="medium" tone={row.tone as any}>Completado</Badge>
                      </TableCell>
                      <TableCell>
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                          <MoreIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableFooter>
                  <div className="text-sm text-[#6E7991]">
                    Mostrando 1–10 de 91 resultados
                  </div>
                  <Pagination className="justify-end w-auto mx-0">
                    <PaginationContent>
                      <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                      <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationEllipsis /></PaginationItem>
                      <PaginationItem><PaginationNext href="#" /></PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </TableFooter>
              </Table>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: NOTAS DE DISEÑO ───────────── */}
      <ContentCards title="Anatomía y Tokens">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-xs">
              Celdas y Jerarquía
            </h4>
            <p className="text-slate-600">
              El componente inyecta variables CSS para controlar el color de las
              filas impares, hover y tipografía secundaria.
            </p>
            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>
                <code>--cell-text</code>: Color principal del dato.
              </li>
              <li>
                <code>--cell-desc-text</code>: Color para metadatos
                (TableCellDescription).
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-xs">
              Footer
            </h4>
            <p className="text-slate-600">
              El footer detecta automáticamente componentes de paginación para
              alinearlos a la derecha del contador de resultados.
            </p>
          </div>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">
          Registry definition
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos y mapeo de tokens para Table.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
