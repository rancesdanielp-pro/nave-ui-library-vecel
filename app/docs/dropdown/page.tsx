'use client'

import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Button,
} from '@/packages/ui-library/dist/react';

import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function DropdownMenuPage() {
  const componentRegistry = (registry as any)['dropdown']
  const naveTheme = tokenVariants[0].tokens

  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [position, setPosition] = React.useState('bottom')

  return (
    <DocsPage
      title="Dropdown Menu"
      description="Muestra un menú al usuario —como un conjunto de acciones o funciones— activado por un botón."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { \n  DropdownMenu, \n  DropdownMenuTrigger, \n  DropdownMenuContent, \n  DropdownMenuItem \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Un menú desplegable simple con etiquetas, separadores y atajos de teclado opcionales.
        </p>
        <ComponentExample
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">Abrir Menú</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <span>Perfil</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Facturación</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button>Abrir</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Cuenta</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Perfil</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SUBMENÚS ───────────── */}
      <ContentCards title="Submenus">
        <p className="text-sm text-slate-500 mb-6">
          Puedes anidar menús utilizando el componente <code>DropdownMenuSub</code> para estructuras más complejas.
        </p>
        <ComponentExample
          preview={
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">Opciones avanzadas</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <span>Ajustes</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Invitar usuarios</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Más...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          code={`<DropdownMenuSub>\n  <DropdownMenuSubTrigger>Invitar</DropdownMenuSubTrigger>\n  <DropdownMenuSubContent>\n    <DropdownMenuItem>Email</DropdownMenuItem>\n  </DropdownMenuSubContent>\n</DropdownMenuSub>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CHECKBOX & RADIO ───────────── */}
      <ContentCards title="Checkboxes & Radio Groups">
        <p className="text-sm text-slate-500 mb-6">
          Ideal para menús de filtros o preferencias de vista.
        </p>
        <ComponentExample
          preview={
            <div className="flex gap-4">
              {/* Checkbox Example */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="tertiary">Checkboxes</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Mostrar barra de estado
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Radio Example */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="tertiary">Radios</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Posición del panel</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">Arriba</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Abajo</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Derecha</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          }
          code={`<DropdownMenuCheckboxItem checked={val} onCheckedChange={setVal}>\n  Etiqueta\n</DropdownMenuCheckboxItem>\n\n<DropdownMenuRadioGroup value={pos}>\n  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>\n</DropdownMenuRadioGroup>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este componente utiliza Radix UI para garantizar accesibilidad total (WAI-ARIA). Los estilos de fondo y bordes se resuelven mediante tokens web.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}