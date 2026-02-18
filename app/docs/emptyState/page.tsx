'use client';

import { Button, EmptyState } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';
import { ArrowLeftRight } from 'lucide-react';

export default function EmptyStatePage() {
  const componentRegistry = (registry as any)['empty-state'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Empty State"
      description="Utilizado para comunicar que una vista no tiene contenido, guiando al usuario hacia una acción clara."
      theme={naveTheme}
    >
      {/* ───────────────── IMPORTS ───────────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'
                 import { EmptyState } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────────── CENTERED (DEFAULT) ───────────────── */}
      <ContentCards title="Centered (Default)">
        <p className="text-sm text-slate-500 mb-6 max-w-2xl">
          La alineación central es el estándar para pantallas completas o
          secciones principales.
        </p>

        <ComponentExample
          preview={
            <div className="w-full bg-gray-50 p-8 rounded-xl">
              <div className="w-full min-h-[280px] rounded-lg border-2 border-dashed border-violet-300 flex items-center justify-center">
                <EmptyState
                  icon={<ArrowLeftRight />}
                  title="Title"
                  description="Description"
                  actions={
                    <div className="flex gap-3">
                      <Button variant="primary">Button</Button>
                      <Button variant="secondary">Button</Button>
                    </div>
                  }
                />
              </div>
            </div>
          }
          code={`<div className="w-full bg-gray-50 p-8 rounded-xl">
                  <div className="w-full min-h-[280px] rounded-lg border-2 border-dashed border-violet-300 flex items-center justify-center">
                    <EmptyState
                      icon={<ArrowLeftRight />}
                      title="Title"
                      description="Description"
                      actions={
                        <div className="flex gap-3">
                          <Button variant="primary">Button</Button>
                          <Button variant="secondary">Button</Button>
                        </div>
                      }
                    />
                  </div>
                </div>`}
        />
      </ContentCards>

      {/* ───────────────── LEFT ALIGNED ───────────────── */}
      <ContentCards title="Left Aligned">
        <p className="text-sm text-slate-500 mb-6 max-w-2xl">
          Útil para secciones laterales o contenedores angostos donde el texto
          debe respetar el flujo de lectura natural.
        </p>

        <ComponentExample
          preview={
            <div className="w-full p-8 rounded-xl">
              <EmptyState
                icon={<ArrowLeftRight />}
                align="left"
                title="Title"
                description="Description"
                actions={
                  <div className="flex gap-3">
                    <Button variant="primary">Button</Button>
                    <Button variant="secondary">Button</Button>
                  </div>
                }
              />
            </div>
          }
          code={`<div className="w-full p-8 rounded-xl">
                  <EmptyState
                    icon={<ArrowLeftRight />}
                    align="left"
                    title="Title"
                    description="Description"
                    actions={
                      <div className="flex gap-3">
                        <Button variant="primary">Button</Button>
                        <Button variant="secondary">Button</Button>
                      </div>
                    }
                  />
                </div>`}
        />
      </ContentCards>

      {/* ───────────────── SIZE VARIANTS ───────────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6 max-w-2xl">
          Puedes ajustar el tamaño del componente según el contexto visual donde
          se utilice.
        </p>

        <ComponentExample
          preview={
            <div className="w-full bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Medium */}
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-medium text-slate-600">
                    Medium
                  </span>

                  <div className="min-h-[260px] rounded-lg border border-slate-200 bg-white flex items-center justify-center p-6">
                    <EmptyState
                      icon={<ArrowLeftRight />}
                      size="medium"
                      align="left"
                      title="Title"
                      description="Description"
                      actions={
                        <div className="flex gap-3">
                          <Button variant="primary">Button</Button>
                          <Button variant="secondary">Button</Button>
                        </div>
                      }
                    />
                  </div>
                </div>

                {/* Small */}
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-medium text-slate-600">
                    Small
                  </span>

                  <div className="min-h-[260px] rounded-lg border border-slate-200 bg-white flex items-center justify-center p-6">
                    <EmptyState
                      icon={<ArrowLeftRight />}
                      size="small"
                      align="left"
                      title="Title"
                      description="Description"
                      actions={
                        <div className="flex gap-3">
                          <Button variant="primary" size="small">
                            Button
                          </Button>
                          <Button variant="secondary" size="small">
                            Button
                          </Button>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<div className="w-full bg-gray-50 p-8 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Medium */}
                    <div className="flex flex-col gap-4">
                      <span className="text-sm font-medium text-slate-600">
                        Medium
                      </span>

                      <div className="min-h-[260px] rounded-lg border border-slate-200 bg-white flex items-center justify-center p-6">
                        <EmptyState
                          icon={<ArrowLeftRight />}
                          size="medium"
                          align="left"
                          title="Title"
                          description="Description"
                          actions={
                            <div className="flex gap-3">
                              <Button variant="primary">Button</Button>
                              <Button variant="secondary">Button</Button>
                            </div>
                          }
                        />
                      </div>
                    </div>

                    {/* Small */}
                    <div className="flex flex-col gap-4">
                      <span className="text-sm font-medium text-slate-600">
                        Small
                      </span>

                      <div className="min-h-[260px] rounded-lg border border-slate-200 bg-white flex items-center justify-center p-6">
                        <EmptyState
                          icon={<ArrowLeftRight />}
                          size="small"
                          align="left"
                          title="Title"
                          description="Description"
                          actions={
                            <div className="flex gap-3">
                              <Button variant="primary" size="small">
                                Button
                              </Button>
                              <Button variant="secondary" size="small">
                                Button
                              </Button>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
            </div>`}
        />
      </ContentCards>

      {/* ───────────────── REGISTRY ───────────────── */}
      <div className="mt-20 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">
          Registry Metadata
        </h2>
        <p className="text-sm text-slate-500 mb-6 max-w-2xl">
          Metadatos técnicos del componente. Internamente utiliza el componente{' '}
          <code>Button</code> de la librería para renderizar acciones.
        </p>

        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
