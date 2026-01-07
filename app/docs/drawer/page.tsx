'use client'

import * as React from 'react'
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader, 
  DrawerBody, 
  DrawerFooter, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerCloseButton,
  Button,
  ListItem,
  Input
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function DrawerPage() {
  const componentRegistry = (registry as any)['drawer']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Drawer"
      description="Un panel superpuesto que se desliza desde los bordes de la pantalla, ideal para menús móviles, filtros o formularios secundarios."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
            
import { \n  Drawer, \n  DrawerTrigger, \n  DrawerContent, \n  DrawerHeader, \n  DrawerBody, \n  DrawerFooter, \n  DrawerTitle, \n  DrawerDescription, \n  DrawerCloseButton \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: MOBILE DRAWER (BOTTOM) ───────────── */}
      <ContentCards title="Mobile Style (Bottom)">
        <p className="text-sm text-slate-500 mb-6">
          La dirección por defecto para dispositivos móviles. Incluye un manejador (handle) visual y cierre por arrastre.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Drawer direction="bottom">
                <DrawerTrigger asChild>
                  <Button variant="secondary" className="gap-2">
                    open
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <DrawerTitle>Mi Perfil</DrawerTitle>
                    <DrawerDescription>Administra la información de tu cuenta Nave.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody>
                    <div className="space-y-4">
                      <ListItem id="1" title="Datos Personales" subtitle="Nombre, DNI, Fecha de nacimiento" />
                      <ListItem id="2" title="Seguridad" subtitle="Contraseña y 2FA" />
                      <ListItem id="3" title="Notificaciones" subtitle="Preferencias de alertas" />
                    </div>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="primary" className="w-full">Guardar cambios</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          }
          code={`<Drawer direction="bottom">\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>Mi Perfil</DrawerTitle>\n    </DrawerHeader>\n    <DrawerBody>...</DrawerBody>\n  </DrawerContent>\n</Drawer>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIDE PANEL (RIGHT) ───────────── */}
      <ContentCards title="Side Panel (Right)">
        <p className="text-sm text-slate-500 mb-6">
          Ideal para filtros de búsqueda o paneles de configuración en escritorio y tablets.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <Button variant="tertiary" className="gap-2">
                    open
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <DrawerTitle>Filtros</DrawerTitle>
                    <DrawerDescription>Refiná tu búsqueda de movimientos.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody className="space-y-6">
                    <Input label="Fecha desde" type="date" size="sm" />
                    <Input label="Fecha hasta" type="date" size="sm" />
                    <Input label="Monto mínimo" type="number" placeholder="$ 0" size="sm" />
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="secondary" className="flex-1">Limpiar</Button>
                    <Button variant="primary" className="flex-1">Aplicar</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          }
          code={`<Drawer direction="right">\n  <DrawerContent>\n    <DrawerHeader>Filtros</DrawerHeader>\n    <DrawerBody>...</DrawerBody>\n  </DrawerContent>\n</Drawer>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: UX & ANIMACIONES ───────────── */}
      <ContentCards title="UX & Estructura">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            El Drawer está construido sobre <code>vaul</code> para ofrecer una experiencia nativa:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Handle Visual:</strong> En la dirección <code>bottom</code>, se muestra automáticamente un tirador para indicar que se puede arrastrar.</li>
            <li><strong>Zonas de Contenido:</strong> Estructura clara con <code>Header</code>, <code>Body</code> (con scroll automático) y <code>Footer</code>.</li>
            <li><strong>Sombras y Bordes:</strong> Utiliza un sistema de sombras complejas para dar profundidad y bordes redondeados selectivos según la dirección.</li>
            <li><strong>Botón de Cierre:</strong> Un <code>DrawerCloseButton</code> posicionado absolutamente para facilitar la salida.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica. El componente resuelve tokens para el título y la descripción, asegurando consistencia tipográfica.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}