'use client'
/*
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  Badge,
  Card 
} from 'nave-ui-library/react';
*/
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  Badge,
  Card 
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function AccordionPage() {
  const componentRegistry = (registry as any)['accordion']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Accordion"
      description="Un conjunto de encabezados interactivos que permiten mostrar u ocultar secciones de contenido relacionado."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'\n\nimport { \n  Accordion, \n  AccordionItem, \n  AccordionTrigger, \n  AccordionContent \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Por defecto, el acordeón permite abrir una sección a la vez. El contenedor mantiene un ancho constante para evitar saltos visuales.
        </p>
        <ComponentExample
          preview={
            /* Contenedor con ancho fijo consistente */
            <div className="w-full max-w-2xl mx-auto h-auto">
              <Card title="Ayuda y Soporte" className="w-full">
                <Accordion type="single" collapsible className="w-full" size="md">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Cómo funciona el sistema de pagos?</AccordionTrigger>
                    <AccordionContent>
                      Aceptamos todas las tarjetas de crédito y débito. Los pagos se procesan de forma instantánea a través de nuestra pasarela segura.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Tienen costos de mantenimiento?</AccordionTrigger>
                    <AccordionContent>
                      No, solo pagas una comisión por cada venta realizada. No hay costos fijos mensuales ni sorpresas.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
          }
          code={`<div className="w-full max-w-2xl">\n  <Card title="Soporte">\n    <Accordion type="single" collapsible>\n      <AccordionItem value="item-1">\n        <AccordionTrigger>Título</AccordionTrigger>\n        <AccordionContent>Contenido...</AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  </Card>\n</div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: RICH CONTENT ───────────── */}
      <ContentCards title="Rich Content Trigger Size: sm">
        <p className="text-sm text-slate-500 mb-6">
          Los triggers pueden contener estructuras complejas. El ancho se mantiene idéntico en estado abierto y cerrado.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-2xl mx-auto">
              <Card title="Seguridad de Cuenta" className="w-full">
                <Accordion type="multiple" className="w-full" size="sm">
                  <AccordionItem value="security">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Autenticación Biométrica</span>
                        <Badge tone="success" size="small">Activo</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      La autenticación por huella o rostro añade una capa extra de protección a tus transacciones diarias.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="limits">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Límites Transaccionales</span>
                        <Badge tone="warning" size="small">En revisión</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Tu límite actual es de $500.000. Puedes solicitar un aumento adjuntando documentación adicional.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
          }
          code={`<AccordionTrigger>\n  <div className="flex items-center gap-2">\n    <span>Seguridad</span>\n    <Badge>Activo</Badge>\n  </div>\n</AccordionTrigger>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPORTAMIENTO ───────────── */}
      <ContentCards title="Consistencia Visual">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Para asegurar que el componente no "baile" o cambie de tamaño al colapsar:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Ancho Fijo (Container):</strong> Se utiliza <code>max-w-2xl</code> en el wrapper para definir el ancho máximo de la <code>Card</code>.</li>
            <li><strong>W-Full:</strong> Tanto la <code>Card</code> como el <code>Accordion</code> usan <code>w-full</code> para estirarse hasta el límite del contenedor.</li>
            <li><strong>Flexbox:</strong> El trigger usa <code>justify-between</code> para que el chevron siempre esté en el extremo derecho, sin importar si el acordeón está abierto o cerrado.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}