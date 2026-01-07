'use client'

import * as React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/packages/ui-library/dist/react';

import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function TooltipPage() {
  const componentRegistry = (registry as any)['tooltip']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Tooltip"
      description="Un elemento flotante que muestra información adicional cuando un usuario pasa el cursor o enfoca un elemento."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Tooltip, TooltipTrigger, TooltipContent } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El Tooltip básico se activa al hacer hover sobre el trigger. Incluye una flecha posicionada automáticamente.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center p-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" >
                    Tooltip
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Agregar nuevo elemento</p>
                </TooltipContent>
              </Tooltip>
            </div>
          }
          code={`<Tooltip>\n  <TooltipTrigger asChild>\n    <Button size="icon"><Plus /></Button>\n  </TooltipTrigger>\n  <TooltipContent>\n    <p>Agregar nuevo elemento</p>\n  </TooltipContent>\n</Tooltip>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: POSICIONES ───────────── */}
      <ContentCards title="Sides & Positions">
        <p className="text-sm text-slate-500 mb-6">
          Puedes controlar la ubicación del contenido usando la propiedad <code>side</code>.
        </p>
        <ComponentExample
          preview={
            <div className="grid grid-cols-2 gap-8 md:flex md:justify-center md:gap-12 p-10">
              <Tooltip>
                <TooltipTrigger asChild><Button variant="tertiary" size="sm">Top</Button></TooltipTrigger>
                <TooltipContent side="top">Tooltip arriba</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild><Button variant="tertiary" size="sm">Bottom</Button></TooltipTrigger>
                <TooltipContent side="bottom">Tooltip abajo</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild><Button variant="tertiary" size="sm">Left</Button></TooltipTrigger>
                <TooltipContent side="left">Tooltip izquierda</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild><Button variant="tertiary" size="sm">Right</Button></TooltipTrigger>
                <TooltipContent side="right">Tooltip derecha</TooltipContent>
              </Tooltip>
            </div>
          }
          code={`<TooltipContent side="top">Arriba</TooltipContent>\n<TooltipContent side="bottom">Abajo</TooltipContent>\n<TooltipContent side="left">Izquierda</TooltipContent>\n<TooltipContent side="right">Derecha</TooltipContent>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CON OTROS COMPONENTES ───────────── */}
      <ContentCards title="Rich Triggers">
        <p className="text-sm text-slate-500 mb-6">
          Los Tooltips pueden envolver cualquier componente, como Avatares para mostrar nombres de usuario.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="cursor-help">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">shadcn</p>
                  <p className="text-[10px] opacity-80">Online</p>
                </TooltipContent>
              </Tooltip>

              <div className="flex items-center gap-1 text-slate-400">
                <span className="text-sm">Info de seguridad</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[200px]">
                    Tus datos están protegidos con encriptación de grado bancario.
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          }
          code={`<Tooltip>\n  <TooltipTrigger asChild>\n    <Avatar>...</Avatar>\n  </TooltipTrigger>\n  <TooltipContent>\n    <p>Usuario Online</p>\n  </TooltipContent>\n</Tooltip>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          El Tooltip utiliza Radix UI para la gestión de portales y accesibilidad. Los estilos de la flecha (`Arrow`) se sincronizan automáticamente con el color de fondo del contenido.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}