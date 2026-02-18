'use client';

import * as React from 'react';
import {
  DragSlider,
  PromoBanner,
  Card,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function DragSliderPage() {
  // Restauramos la clave exacta que funciona en tu registry
  const componentRegistry = (registry as any)['drag-slider'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="DragSlider"
      description="Contenedor de desplazamiento horizontal que permite navegar el contenido mediante arrastre con el mouse o interacción táctil, optimizado mediante tokens de Nave."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Instalación">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente para habilitar gestos de arrastre en cualquier
          colección de elementos.
        </p>
        <CodeBlock
          code={`import { DragSlider } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: PROMO BANNER SLIDER ───────────── */}
      <ContentCards title="Promo Banner Slider">
        <p className="text-sm text-slate-500 mb-6">
          Uso común para carruseles de promociones. El slider aplica
          automáticamente <code>snap-start</code> a cada hijo para un
          desplazamiento fluido y sincroniza el espaciado vía{' '}
          <code>--ds-gap</code>.
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
          code={`<div className="w-full max-w-[600px] border rounded-xl p-4 bg-white">
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
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CARDS SLIDER ───────────── */}
      <ContentCards title="Cards Horizontal Layout">
        <p className="text-sm text-slate-500 mb-6">
          Ideal para mostrar múltiples tarjetas de información sin ocupar
          espacio vertical excesivo, manteniendo la consistencia visual del
          ecosistema.
        </p>
        <ComponentExample
          preview={
            <div className="w-full">
              <DragSlider className="pb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i} title={`Card #${i}`} width={240}>
                    <p className="text-sm text-slate-600">
                      Contenido de la tarjeta número {i} deslizable mediante el
                      motor de fricción de Nave.
                    </p>
                  </Card>
                ))}
              </DragSlider>
            </div>
          }
          code={`<div className="w-full">
              <DragSlider className="pb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i} title={Card} width={240}>
                    <p className="text-sm text-slate-600">
                      Contenido de la tarjeta número {i} deslizable mediante el motor de fricción de Nave.
                    </p>
                  </Card>
                ))}
              </DragSlider>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BEHAVIOR ───────────── */}
      <ContentCards title="Comportamiento Interactivo">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            El componente gestiona dinámicamente el estado de los periféricos y
            el scroll:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li>
              <strong>Cursor Inteligente:</strong> Cambia entre estados{' '}
              <code>grab</code> y <code>grabbing</code> usando variables CSS.
            </li>
            <li>
              <strong>Snap Scroll:</strong> Alineación magnética basada en el
              estándar CSS Scroll Snap.
            </li>
            <li>
              <strong>Optimización Visual:</strong> Oculta barras de
              desplazamiento nativas manteniendo la funcionalidad táctil.
            </li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900 font-mono">
          Registry Architecture
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos registrados para el componente. El motor de temas
          inyecta valores de gap y fricción definidos aquí.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
