'use client'

import * as React from 'react'
import { Card, Banner, PromoBanner, Button } from '@/packages/ui-library/dist/react'
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
      description="Componente de contenedor versátil que organiza información y acciones. Utiliza un sistema de capas dinámicas para adaptarse a cualquier identidad de marca."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Instalación e Importación">
        <p className="text-sm text-slate-500 mb-4">
          La Card de Nave está diseñada para ser un contenedor inteligente que resuelve su tipografía y colores en tiempo real.
        </p>
        <CodeBlock 
          code={`import { Card } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Uso Básico">
        <p className="text-sm text-slate-500 mb-6">
          Una tarjeta estándar que utiliza el token <code>primary</code> por defecto. El ancho se ajusta automáticamente al contenido (w-fit) a menos que se especifique lo contrario.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Card title="Título de la Card">
                <p className="text-sm text-slate-600">
                  Este es el área de contenido principal. Los márgenes y el radio de borde se ajustan según los tokens del tema activo.
                </p>
              </Card>
            </div>
          }
          code={`<Card title="Título de la Card">\n  <p>Contenido principal...</p>\n</Card>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: WITH ACTIONS ───────────── */}
      <ContentCards title="Acciones de Cabecera">
        <p className="text-sm text-slate-500 mb-6">
          El componente permite inyectar un nodo de <code>action</code> en el header. Ideal para botones de cierre, edición o menús contextuales.
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
                  Administra las preferencias de tu cuenta y notificaciones desde este contenedor modular.
                </p>
              </Card>
            </div>
          }
          code={`<Card \n  title="Configuración" \n  action={<Button size="icon-sm">...</Button>}\n>\n  <p>...</p>\n</Card>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSED CONTENT ───────────── */}
      <ContentCards title="Composición Avanzada">
        <p className="text-sm text-slate-500 mb-6">
          La Card actúa como un ecosistema para otros componentes. En este ejemplo, combinamos <code>Banner</code> y <code>PromoBanner</code> dentro del flujo de la tarjeta.
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
                    imageSrc="https://picsum.photos/400/200" 
                  />
                </div>
              </Card>
            </div>
          }
          code={`<Card title="Actividad Reciente">\n  <Banner tone="success" title="Venta exitosa" />\n  <PromoBanner title="¡Duplica tus ventas!" />\n</Card>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DIMENSIONES ───────────── */}
      <ContentCards title="Control de Dimensiones">
        <p className="text-sm text-slate-500 mb-6">
          Nuestra arquitectura de props permite definir el ancho mediante valores numéricos (px) o descriptivos (%, rem, auto).
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 items-center w-full">
              <Card width="100%" title="Tarjeta de Ancho Completo">
                <p className="text-sm text-slate-600 italic">Esta tarjeta se expande para ocupar el total del contenedor padre.</p>
              </Card>
              <Card width={286} title="Ancho Fijo (286px)">
                <p className="text-sm text-slate-600 italic">Estructura rígida ideal para grids de información lateral.</p>
              </Card>
            </div>
          }
          code={`<Card width="100%" title="Full Width" />\n<Card width={286} title="Fixed Width" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900 font-mono">Arquitectura del Registro</h2>
        <p className="text-sm text-slate-500 mb-6">
          El motor de renderizado utiliza variables CSS (<code>--card-title-size</code>, <code>--card-bg</code>) vinculadas a este esquema de tokens para garantizar la coherencia visual.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}