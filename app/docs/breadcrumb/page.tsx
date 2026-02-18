'use client';

import * as React from 'react';
import {
  Breadcrumb as BreadcrumbBase,
  BreadcrumbList as BreadcrumbListBase,
  BreadcrumbItem as BreadcrumbItemBase,
  BreadcrumbLink as BreadcrumbLinkBase,
  BreadcrumbPage as BreadcrumbPageBase,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

// Castings para TS (considera revisar los tipos en la lib base después)
const Breadcrumb = BreadcrumbBase as any;
const BreadcrumbList = BreadcrumbListBase as any;
const BreadcrumbItem = BreadcrumbItemBase as any;
const BreadcrumbLink = BreadcrumbLinkBase as any;
const BreadcrumbPage = BreadcrumbPageBase as any;

export default function BreadcrumbPageDoc() {
  // Safe access al registry
  const componentRegistry = (registry as Record<string, any>)['breadcrumb'];
  const naveTheme = tokenVariants[0]?.tokens;

  return (
    <DocsPage
      title="Breadcrumb"
      description="Un componente de navegación secundaria que ayuda al usuario a entender su ubicación jerárquica dentro de la aplicación."
      theme={naveTheme}
    >
      {/* SECCIÓN: IMPORTS */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator, 
  BreadcrumbEllipsis 
} from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* SECCIÓN: BÁSICO */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Estructura estándar utilizando links interactivos y un separador
          visual. Los colores se resuelven automáticamente mediante los tokens
          del tema.
        </p>
        <ComponentExample
          preview={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Ventas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          code={`<Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Ventas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>`}
        />
      </ContentCards>

      {/* SECCIÓN: CON ELLIPSIS */}
      <ContentCards title="With Ellipsis">
        <p className="text-sm text-slate-500 mb-6">
          Para jerarquías profundas, utiliza <code>BreadcrumbEllipsis</code>{' '}
          para colapsar niveles intermedios.
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
          code={`<Breadcrumb>
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
            </Breadcrumb>`}
        />
      </ContentCards>

      {/* SECCIÓN: TAMAÑOS */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          El componente soporta dos tamaños: <code>md</code> (por defecto) y{' '}
          <code>sm</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Medium (md)
                </span>
                <Breadcrumb>
                  <BreadcrumbList size="md">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Usuarios</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Small (sm)
                </span>
                <Breadcrumb>
                  <BreadcrumbList size="sm">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Usuarios</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          }
          code={`            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Medium (md)
                </span>
                <Breadcrumb>
                  <BreadcrumbList size="md">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Usuarios</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Small (sm)
                </span>
                <Breadcrumb>
                  <BreadcrumbList size="sm">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Usuarios</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>`}
        />
      </ContentCards>

      {/* SECCIÓN: CARACTERÍSTICAS */}
      <ContentCards title="Características">
        <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
          <li>
            <strong>Accesibilidad:</strong> Etiqueta semántica <code>nav</code>{' '}
            con <code>aria-label="breadcrumb"</code>.
          </li>
          <li>
            <strong>Composición:</strong> Compatible con <code>asChild</code> de
            Radix UI para <code>next/link</code>.
          </li>
          <li>
            <strong>Tokens:</strong> Consumo de variables CSS dinámicas para
            consistencia visual.
          </li>
        </ul>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Definición técnica de tokens para el componente Breadcrumb, incluyendo
          estados interactivos y tamaños.
        </p>
        <CodeBlock
          code={JSON.stringify(componentRegistry, null, 2)}
        />
      </div>
    </DocsPage>
  );
}
