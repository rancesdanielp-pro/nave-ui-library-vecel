'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Card,
  ListItem,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function PaginationPage() {
  const componentRegistry = (registry as any)['pagination'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Pagination"
      description="Navegación para dividir contenido extenso. Los colores se resuelven dinámicamente mediante variables CSS inyectadas por el componente raíz."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'
        
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious, 
  PaginationEllipsis 
} from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Ejemplo estándar con números y controles de navegación. El elemento
          con <code>isActive</code> tomará automáticamente el color de marca.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
          code={`<div className="flex justify-center w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Uso de la propiedad <code>disabled</code> para deshabilitar la
          navegación.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full gap-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" disabled>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" disabled />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
          code={`<div className="flex justify-center w-full gap-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" disabled>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" disabled />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSICIÓN AVANZADA ───────────── */}
      <ContentCards title="Advanced Composition">
        <p className="text-sm text-slate-500 mb-6">
          Integración de la paginación dentro de un componente <code>Card</code>
          .
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md mx-auto">
              <Card title="Historial de Pagos">
                <div className="overflow-hidden mb-4">
                  <ListItem
                    id="1"
                    title="Venta de Producto"
                    amount="$ 2.500"
                    overline="Página 2"
                  />
                  <ListItem
                    id="2"
                    title="Servicio Técnico"
                    amount="$ 8.000"
                    overline="Página 2"
                  />
                </div>
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationLink href="#">1</PaginationLink>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                    <PaginationLink href="#">3</PaginationLink>
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </Card>
            </div>
          }
          code={`<Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" disabled>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" disabled />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
