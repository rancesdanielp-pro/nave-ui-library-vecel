'use client';

//import { PromoBanner } from 'nave-ui-library/react';

import { PromoBanner } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function PromoBannersPage() {
  const componentRegistry = (registry as any)['promo-banner'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="PromoBanner"
      description="Componente visual compacto destinado a comunicar contenido promocional o informativo de corta duración, con soporte de imagen."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'
import { PromoBanner } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default (Image Right)">
        <p className="text-sm text-slate-500 mb-6">
          La posición por defecto de la imagen es a la derecha, optimizada para
          tarjetas promocionales estándar.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <PromoBanner
                title="10% de descuento en tu próxima compra"
                imageSrc="https://picsum.photos/300/200?random=1"
              />
            </div>
          }
          code={`<PromoBanner 
                title="10% de descuento en tu próxima compra" 
                imageSrc="https://picsum.photos/300/200?random=1" 
              />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: IMAGE POSITION ───────────── */}
      <ContentCards title="Image Position">
        <p className="text-sm text-slate-500 mb-6">
          Puedes alternar la posición de la imagen entre <code>left</code> y{' '}
          <code>right</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Left Position
                </span>
                <PromoBanner
                  imagePosition="left"
                  title="Nuevas funciones disponibles en el dashboard"
                  imageSrc="https://picsum.photos/300/200?random=2"
                />
              </div>
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Right Position
                </span>
                <PromoBanner
                  imagePosition="right"
                  title="Suma puntos Nave con cada una de tus ventas"
                  imageSrc="https://picsum.photos/300/200?random=3"
                />
              </div>
            </div>
          }
          code={`<div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Left Position</span>
                <PromoBanner 
                  imagePosition="left"
                  title="Nuevas funciones disponibles en el dashboard" 
                  imageSrc="https://picsum.photos/300/200?random=2" 
                />
              </div>
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Right Position</span>
                <PromoBanner 
                  imagePosition="right"
                  title="Suma puntos Nave con cada una de tus ventas" 
                  imageSrc="https://picsum.photos/300/200?random=3" 
                />
              </div>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: VARIANTS ───────────── */}
      <ContentCards title="Visual Variants">
        <p className="text-sm text-slate-500 mb-6">
          El componente permite extender estilos mediante <code>variants</code>{' '}
          si están definidos en los tokens.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-wrap justify-center gap-6 w-full">
              <PromoBanner
                variant="primary"
                title="Variante Primary (Nave Style)"
                imageSrc="https://picsum.photos/300/200?random=4"
              />
              <PromoBanner
                variant="secondary"
                title="Variante Secondary para contraste"
                imageSrc="https://picsum.photos/300/200?random=5"
              />
            </div>
          }
          code={`<div className="flex flex-wrap justify-center gap-6 w-full">
              <PromoBanner 
                variant="primary"
                title="Variante Primary (Nave Style)" 
                imageSrc="https://picsum.photos/300/200?random=4" 
              />
              <PromoBanner 
                variant="secondary"
                title="Variante Secondary para contraste" 
                imageSrc="https://picsum.photos/300/200?random=5" 
              />
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: LONG TEXT ───────────── */}
      <ContentCards title="Text Truncation">
        <p className="text-sm text-slate-500 mb-6">
          El componente limita automáticamente el texto a 2 líneas para mantener
          la consistencia visual.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <PromoBanner
                title="Este es un título extremadamente largo para probar cómo funciona el truncado de texto automático en dos líneas dentro de la caja"
                imageSrc="https://picsum.photos/300/200?random=6"
              />
            </div>
          }
          code={`<div className="flex justify-center w-full">
              <PromoBanner 
                title="Este es un título extremadamente largo para probar cómo funciona el truncado de texto automático en dos líneas dentro de la caja" 
                imageSrc="https://picsum.photos/300/200?random=6" 
              />
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos para la generación dinámica de este componente.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
