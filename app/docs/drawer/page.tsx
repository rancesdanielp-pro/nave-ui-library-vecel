'use client';
/*
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
} from 'nave-ui-library/react';
*/
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
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function DrawerPage() {
  const componentRegistry = (registry as any)['drawer'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Drawer"
      description="Un panel superpuesto que se desliza desde los bordes de la pantalla, ideal para menús móviles, filtros o formularios secundarios."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'
                 import {Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerTitle, DrawerDescription, DrawerCloseButton} from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: MOBILE DRAWER (BOTTOM) ───────────── */}
      <ContentCards title="Mobile Style (Bottom)">
        <p className="text-sm text-slate-500 mb-6">
          La dirección por defecto para dispositivos móviles. Incluye un
          manejador (handle) visual y cierre por arrastre.
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
                    <DrawerTitle>Title</DrawerTitle>
                    <DrawerDescription>
                      This is a description.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody className="flex flex-col h-full">
                    <div
                      className="
                        flex-1
                        rounded-sm
                        border-2 border-dashed border-violet-300
                        bg-violet-50
                        flex items-center justify-center
                        text-sm text-violet-500
                        "
                    >
                      Slot
                    </div>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="primary" className="w-[68px]">
                      Guardar
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          }
          code={`
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
                    <DrawerTitle>Title</DrawerTitle>
                    <DrawerDescription>
                      This is a description.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody className="flex flex-col h-full">
                    <div
                      className=" flex-1 rounded-sm border-2 border-dashed border-violet-300 bg-violet-50 flex items-center justify-center text-sm text-violet-500"
                    >
                      Slot
                    </div>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="primary" className="w-[68px]">
                      Guardar
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIDE PANEL (RIGHT) ───────────── */}
      <ContentCards title="Side Panel (left)">
        <p className="text-sm text-slate-500 mb-6">
          Ideal para filtros de búsqueda o paneles de configuración en
          escritorio y tablets.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button variant="tertiary" className="gap-2">
                    open
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <DrawerTitle>Title</DrawerTitle>
                    <DrawerDescription>
                      This is a description.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody className="flex flex-col h-full">
                    <div
                      className="
                        flex-1
                        rounded-sm
                        border-2 border-dashed border-violet-300
                        bg-violet-50
                        flex items-center justify-center
                        text-sm text-violet-500
                       "
                    >
                      Slot
                    </div>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="secondary" className="w-[68px]">
                      Label
                    </Button>
                    <Button variant="primary" className="w-[68px]">
                      Label
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          }
          code={`
             <div className="flex justify-center">
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button variant="tertiary" className="gap-2">
                    open
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <DrawerTitle>Title</DrawerTitle>
                    <DrawerDescription>
                      This is a description.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody className="flex flex-col h-full">
                    <div
                      className="flex-1 rounded-sm border-2 border-dashed border-violet-300 bg-violet-50 flex items-center justify-center text-sm text-violet-500"
                    >
                      Slot
                    </div>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="secondary" className="w-[68px]">
                      Label
                    </Button>
                    <Button variant="primary" className="w-[68px]">
                      Label
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: UX & ANIMACIONES ───────────── */}
      <ContentCards title="UX & Estructura">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            El Drawer está construido sobre <code>vaul</code> para ofrecer una
            experiencia nativa:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li>
              <strong>Handle Visual:</strong> En la dirección{' '}
              <code>bottom</code>, se muestra automáticamente un tirador para
              indicar que se puede arrastrar.
            </li>
            <li>
              <strong>Zonas de Contenido:</strong> Estructura clara con{' '}
              <code>Header</code>, <code>Body</code> (con scroll automático) y{' '}
              <code>Footer</code>.
            </li>
            <li>
              <strong>Sombras y Bordes:</strong> Utiliza un sistema de sombras
              complejas para dar profundidad y bordes redondeados selectivos
              según la dirección.
            </li>
            <li>
              <strong>Botón de Cierre:</strong> Un{' '}
              <code>DrawerCloseButton</code> posicionado absolutamente para
              facilitar la salida.
            </li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica. El componente resuelve tokens para el título y
          la descripción, asegurando consistencia tipográfica.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
