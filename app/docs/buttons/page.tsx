'use client';

//import { Button, Icon } from 'nave-ui-library/react';
import { Button, Icon } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function ButtonsPage() {
  const componentRegistry = (registry as any)['button'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Buttons"
      description="Los botones permiten realizar acciones con un solo clic. Admite múltiples variantes, tamaños y tokens de diseño."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Para utilizar el componente, importa los estilos base y el componente
          Button:
        </p>
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'\nimport { Button } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: VARIANTS ───────────── */}
      <ContentCards title="Variants">
        <ComponentExample
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Label</Button>
              <Button variant="secondary">Label</Button>
              <Button variant="tertiary">Label</Button>
            </div>
          }
          code={`<div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">Label</Button>
                  <Button variant="secondary">Label</Button>
                  <Button variant="tertiary">Label</Button>
                </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TONES ───────────── 
      <ContentCards title="Tones">
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="secondary" tone="brand">
                  Outline Brand
                </Button>
                <Button variant="secondary" tone="destructive">
                  Outline Danger
                </Button>
              </div>
            </div>
          }
          code={`<Button tone="brand">Brand</Button>\n<Button tone="destructive">Destructive</Button>\n<Button variant="secondary" tone="brand">Outline</Button>`}
        />
      </ContentCards>
      */}
      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <ComponentExample
          preview={
            <div className="flex flex-wrap items-end gap-4">
              <Button size="small">Label</Button>
              <Button size="medium">Label</Button>
              <Button size="large">Label</Button>
            </div>
          }
          code={`<div className="flex flex-wrap items-end gap-4">
                    <Button size="small">Label</Button>
                    <Button size="medium">Label</Button>
                    <Button size="large">Label</Button>
                  </div>`}
        />
      </ContentCards>

      {/* ───────────── Estados ───────────── */}
      <ContentCards title="States">
        <ComponentExample
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button>Label</Button>
              <Button disabled>Label</Button>
            </div>
          }
          code={`<div className="flex flex-wrap items-center gap-4">
                    <Button>Label</Button>
                    <Button disabled>Label</Button>
                 </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BUTTON ICON ───────────── */}
      <ContentCards title="Button Icon">
        <ComponentExample
          preview={
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="secondary"
                tone="brand"
                aria-label="label"
                startIcon={
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10h20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Icon>
                }
              >
                Left icon
              </Button>

              <Button
                variant="secondary"
                tone="brand"
                aria-label="label"
                endIcon={
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10h20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Icon>
                }
              >
                Right icon
              </Button>
            </div>
          }
          code={`<div className="flex flex-col items-center gap-4">
              <Button
                variant="secondary"
                tone="brand"
                aria-label="label"
                startIcon={
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10h20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Icon>
                }
              >
                Left icon
              </Button>

              <Button
                variant="secondary"
                tone="brand"
                aria-label="label"
                endIcon={
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10h20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Icon>
                }
              >
                Right icon
              </Button>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Propiedades técnicas y configuración del registro del componente.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
