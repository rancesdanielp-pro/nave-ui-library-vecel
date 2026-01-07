'use client'

import * as React from 'react'
import { DragSlider, PromoBanner, Card } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function DragSliderPage() {
  const componentRegistry = (registry as any)['drag-slider']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="DragSlider"
      description="Contenedor de desplazamiento horizontal que permite navegar el contenido mediante arrastre con el mouse o interacción táctil."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
import { DragSlider } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: PROMO BANNER SLIDER ───────────── */}
      <ContentCards title="Promo Banner Slider">
        <p className="text-sm text-slate-500 mb-6">
          Uso común para carruseles de promociones. El slider aplica automáticamente <code>snap-start</code> a cada hijo para un desplazamiento fluido.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-[600px] border rounded-xl p-4 bg-white">
              <DragSlider>
                <PromoBanner 
                  title="Promoción de Verano" 
                  imageSrc="https://picsum.photos/200/100?random=1" 
                />
                <PromoBanner 
                  title="Descuentos en Tecnología" 
                  imageSrc="https://picsum.photos/200/100?random=2" 
                />
                <PromoBanner 
                  title="Viajes y Turismo" 
                  imageSrc="https://picsum.photos/200/100?random=3" 
                />
                <PromoBanner 
                  title="Nueva Colección" 
                  imageSrc="https://picsum.photos/200/100?random=4" 
                />
              </DragSlider>
            </div>
          }
          code={`import { PromoBanner } from 'nave-ui-library/react'

<DragSlider>\n  <PromoBanner ... />\n  <PromoBanner ... />\n  <PromoBanner ... />\n</DragSlider>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CARDS SLIDER ───────────── */}
      <ContentCards title="Cards Horizontal Layout">
        <p className="text-sm text-slate-500 mb-6">
          Ideal para mostrar múltiples tarjetas de información sin ocupar espacio vertical excesivo.
        </p>
        <ComponentExample
          preview={
            <div className="w-full">
              <DragSlider className="pb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i} title={`Card #${i}`} width={240}>
                    <p className="text-sm text-slate-600">
                      Contenido de la tarjeta número {i} deslizable mediante drag.
                    </p>
                  </Card>
                ))}
              </DragSlider>
            </div>
          }
          code={`import { Card } from 'nave-ui-library/react

<DragSlider className="gap-6">\n  {items.map(item => (\n    <Card width={240}>...</Card>\n  ))}\n</DragSlider>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BEHAVIOR ───────────── */}
      <ContentCards title="Interactive Behavior">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            El componente gestiona automáticamente el estado del cursor para mejorar la UX:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Cursor Grab:</strong> Indica que el área es arrastrable.</li>
            <li><strong>Cursor Grabbing:</strong> Se activa durante el movimiento de arrastre.</li>
            <li><strong>Snap Scroll:</strong> Alinea los elementos al inicio del contenedor al soltar.</li>
            <li><strong>No Scrollbar:</strong> Oculta la barra de desplazamiento nativa para un diseño más limpio.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. Este componente no depende de tokens de color específicos, sino de la estructura de layout y eventos de mouse.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}