'use client'

import { Label, Input, Checkbox, Switch } from '@/packages/ui-library/dist/react'
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function LabelPage() {
  const componentRegistry = (registry as any)['label']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Label"
      description="El componente fundamental para la identificación de campos. Implementa una gestión inteligente de estados y tipografía mediante nuestro sistema de tokens dinámicos."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Instalación e Importación">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente desde el core de la librería. Asegúrate de tener configurado nuestro motor de temas para la correcta inyección de variables.
        </p>
        <CodeBlock 
          code={`import { Label } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Uso Esencial">
        <p className="text-sm text-slate-500 mb-6">
          Por defecto, el Label hereda la semántica de la marca Nave, aplicando automáticamente <code>font-weight</code> y <code>letter-spacing</code> definidos en el registro de tokens.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Label>Nombre de usuario</Label>
            </div>
          }
          code={`<Label>Nombre de usuario</Label>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: FORM INTEGRATION ───────────── */}
      <ContentCards title="Vinculación de Controles">
        <p className="text-sm text-slate-500 mb-6">
          Nuestra arquitectura permite una vinculación nativa con los inputs de la librería. Al usar <code>htmlFor</code>, el Label actúa como disparador de foco, optimizando la superficie de interacción.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-8 max-w-sm w-full mx-auto">
              {/* Con Input */}
              <div className="grid gap-2">
                <Label htmlFor="email-input">Correo electrónico</Label>
                <Input id="email-input" placeholder="tu@email.com" />
              </div>

              {/* Con Checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">
                  Acepto los términos y condiciones
                </Label>
              </div>
            </div>
          }
          code={`{/* Integración con Inputs */}\n<div className="grid gap-2">\n  <Label htmlFor="email">Email</Label>\n  <Input id="email" />\n</div>\n\n{/* Integración con Checkbox */}\n<div className="flex items-center gap-3">\n  <Checkbox id="terms" />\n  <Label htmlFor="terms">Términos</Label>\n</div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="Reactividad de Estados">
        <p className="text-sm text-slate-500 mb-6">
          El Label no es estático; reacciona al contexto. Implementa selectores inteligentes para detectar si sus componentes hermanos (<code>peer</code>) o su contenedor padre (<code>group</code>) están en estado deshabilitado.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 max-w-sm w-full mx-auto">
              <div className="flex items-center gap-3">
                 <Switch disabled id="airplane-mode" />
                 <Label htmlFor="airplane-mode">Modo avión (Auto-disabled)</Label>
              </div>
              <div className="grid gap-2 group" data-disabled="true">
                 <Label>Campo bloqueado por grupo</Label>
                 <Input disabled placeholder="Solo lectura" />
              </div>
            </div>
          }
          code={`{/* El componente detecta automáticamente el estado del entorno */}\n<Label htmlFor="airplane-mode">Etiqueta</Label>\n<Switch disabled id="airplane-mode" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900 font-mono">Arquitectura de Tokens</h2>
        <p className="text-sm text-slate-500 mb-6">
          A continuación se detalla la hoja de ruta técnica del componente. Los valores de <code>--lbl-color</code> y <code>--lbl-size</code> se sincronizan en tiempo real con el motor de temas de la Nave.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}