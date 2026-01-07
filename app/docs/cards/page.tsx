'use client'

import * as React from 'react'
import { Card, Banner, PromoBanner, Button, Icon } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function CardsPage() {
  const componentRegistry = (registry as any)['card']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Card"
      description="Componente de contenedor que organiza información y acciones asociadas dentro de una superficie visual definida."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
import { Card } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default Card">
        <p className="text-sm text-slate-500 mb-6">
          Una tarjeta básica que se ajusta al contenido (w-fit) con el diseño estándar de Nave.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Card title="Card Title">
                <p className="text-sm text-slate-600">
                  This is the main content area of the card.
                </p>
              </Card>
            </div>
          }
          code={`<Card title="Card Title">\n  <p>Main content...</p>\n</Card>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: WITH ACTIONS ───────────── */}
      <ContentCards title="With Actions">
        <p className="text-sm text-slate-500 mb-6">
          Puedes incluir un nodo de acción en la esquina superior derecha.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Card 
                title="Configuración" 
                width={320}
                action={
                  <Button variant="tertiary" size="icon-sm">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </Button>
                }
              >
                <p className="text-sm text-slate-600">
                  Administra las preferencias de tu cuenta y notificaciones.
                </p>
              </Card>
            </div>
          }
          code={`<Card \n  title="Configuración" \n  action={<Button size="icon-sm">...</Button>}\n>\n  <p>...</p>\n</Card>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSED CONTENT ───────────── */}
      <ContentCards title="Composed Content">
        <p className="text-sm text-slate-500 mb-6">
          La Card es el contenedor ideal para otros componentes complejos como Banners.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Card title="Actividad Reciente" width={400}>
                <div className="space-y-4">
                  <Banner 
                    tone="success" 
                    size="compact" 
                    title="Venta exitosa" 
                    subtitle="Cobraste $2.500" 
                  />
                  <PromoBanner 
                    title="¡Duplica tus ventas!" 
                    imageSrc="https://picsum.photos/200/100" 
                  />
                </div>
              </Card>
            </div>
          }
          code={`import { Banner, PromoBanner } from 'nave-ui-library/react'

<Card title="Recent Activity">
  <Banner tone="success" />
  <PromoBanner />
</Card>`}

        />
      </ContentCards>

      {/* ───────────── SECCIÓN: VARIANTS ───────────── */}
      <ContentCards title="Custom Widths">
        <p className="text-sm text-slate-500 mb-6">
          Puedes definir el ancho mediante un número (px) o un string (%, rem).
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 items-center w-full">
              <Card width="100%" title="Full Width Card">
                <p className="text-sm text-slate-600 italic">Esta tarjeta ocupa el 100% de su contenedor padre.</p>
              </Card>
              <Card width={286} title="Fixed Width (286px)">
                <p className="text-sm text-slate-600 italic">Ancho fijo ideal para grids laterales.</p>
              </Card>
            </div>
          }
          code={`<Card width="100%" title="..." />\n<Card width={286} title="..." />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica. Nota cómo el componente usa variables CSS internas (<code>--card-bg</code>, <code>--card-text</code>) para resolver los tokens.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}