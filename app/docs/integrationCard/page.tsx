'use client'

import * as React from 'react'
import { IntegrationCard } from '@/packages/ui-library/dist/react' // Ajustado a tu ruta de desarrollo
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function IntegrationCardsPage() {
  const componentRegistry = (registry as any)['integration-card']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Integration Card"
      description="Componente especializado para la exhibición de integraciones y partners. Gestiona dinámicamente dos arquitecturas de layout (Standard y Featured) mediante inyección de variables CSS."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Instalación">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente para presentar conexiones externas con una estética consistente y tematizable.
        </p>
        <CodeBlock 
          code={`import { IntegrationCard } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: LOGO SMALL ───────────── */}
      <ContentCards title="Layout Standard (Small)">
        <p className="text-sm text-slate-500 mb-6">
          Diseño optimizado para grillas de alta densidad. Utiliza un contenedor de logotipo de 40x40px y una estructura vertical que prioriza la legibilidad de la descripción.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <IntegrationCard
                logoSize="small"
                title="Tienda Online"
                description="Conecta tu carrito de compras y empieza a vender en minutos a través de Nave."
                badgeText="Sin costo"
                logoSrc="https://picsum.photos/40/40"
                linkLabel="Configurar integración"
                onLinkClick={() => alert('Abrir configuración')}
              />
            </div>
          }
          code={`<IntegrationCard \n  logoSize="small" \n  title="Tienda Online" \n  badgeText="Sin costo" \n  linkLabel="Configurar" \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: LOGO LARGE ───────────── */}
      <ContentCards title="Layout Featured (Large)">
        <p className="text-sm text-slate-500 mb-6">
          Variante de alto impacto con banner superior de 140px. Diseñada para destacar integraciones premium o servicios destacados dentro del ecosistema.
        </p>

        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <IntegrationCard
                logoSize="large"
                variant="subtle"
                badgeText="Partner Oficial"
                title="Nave Connect"
                description="Potencia tu negocio con nuestra integración de servicios financieros avanzada."
                linkHref="#"
                bannerClassName="bg-[#08B7F6]"
                logoSlot={
                  <svg width="60" height="60" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3356 6.42786C7.28679 6.42786 2.38379 9.34132 2.38379 12.9356C2.38379 16.5299 7.28679 19.7255 13.3356 19.7255C19.3843 19.7255 24.2872 16.5296 24.2872 12.9356C24.2872 9.34158 19.3841 6.42786 13.3356 6.42786Z" fill="white" fillOpacity="0.2"/>
                    <path d="M13.3356 8.5C10.5 8.5 8.5 10.5 8.5 13C8.5 15.5 10.5 17.5 13.3356 17.5C16.1712 17.5 18.1712 15.5 18.1712 13C18.1712 10.5 16.1712 8.5 13.3356 8.5Z" fill="white"/>
                  </svg>
                }
              />
            </div>
          }
          code={`<IntegrationCard\n  logoSize="large"\n  variant="subtle"\n  badgeText="Partner Oficial"\n  title="Nave Connect"\n  bannerClassName="bg-[#08B7F6]"\n  logoSlot={<CustomIcon />}\n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: VARIANTS ───────────── */}
      <ContentCards title="Variantes de Contorno">
        <p className="text-sm text-slate-500 mb-6">
          Controla la jerarquía visual del borde mediante el sistema de tokens de <code>integrationCard</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Standard Border</span>
                <IntegrationCard 
                  variant="default"
                  title="Default Card" 
                  description="Borde sutil definido en tokens"
                />
              </div>
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase text-slate-400 font-bold">Borderless (Clean)</span>
                <IntegrationCard 
                  variant="none"
                  title="Borderless Card" 
                  description="Sin bordes, ideal para layouts sobre fondo gris"
                />
              </div>
            </div>
          }
          code={`<IntegrationCard variant="default" />\n<IntegrationCard variant="none" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900 font-mono">Registry Architecture</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica del registro. Nota cómo las variables <code>--ic-title-color</code> y <code>--ic-link-color</code> permiten que los elementos internos reaccionen al cambio de tema global.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}