'use client'

import * as React from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Button
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function AlertDialogPage() {
  const componentRegistry = (registry as any)['modal-dialog']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Alert Dialog"
      description="Un modal de interrupción que requiere una acción del usuario. Se utiliza para confirmaciones críticas o mensajes de advertencia."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { \n  AlertDialog, \n  AlertDialogTrigger, \n  AlertDialogContent, \n  AlertDialogHeader, \n  AlertDialogFooter, \n  AlertDialogTitle, \n  AlertDialogDescription, \n  AlertDialogAction, \n  AlertDialogCancel \n} from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Un diálogo de alerta estándar con un título claro, descripción y los dos botones de acción configurados por defecto.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="primary">Eliminar Cuenta</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                      y quitará tus datos de nuestros servidores.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Confirmar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          }
          code={`<AlertDialog>\n  <AlertDialogTrigger asChild>\n    <Button>Eliminar Cuenta</Button>\n  </AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>\n      <AlertDialogDescription>Esta acción no se puede deshacer.</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancelar</AlertDialogCancel>\n      <AlertDialogAction>Confirmar</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: VARIANTE DESTRUCTIVA ───────────── */}
      <ContentCards title="Destructive Intent">
        <p className="text-sm text-slate-500 mb-6">
          Para acciones peligrosas, puedes personalizar el disparador. Los botones de acción dentro del modal utilizan tus variantes de <code>Button</code> predefinidas.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="primary" size="md" className="gap-2">
                    Eliminar Archivos
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-100 rounded-full">
                    </div>
                    <AlertDialogTitle>Eliminar archivos</AlertDialogTitle>
                  </div>
                  <AlertDialogDescription>
                    Estás por vaciar la papelera. Se eliminarán 124 archivos de forma permanente.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Volver atrás</AlertDialogCancel>
                    <AlertDialogAction>Vaciar ahora</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          }
          code={`// El footer ya integra tus componentes Button \n<AlertDialogAction>Vaciar ahora</AlertDialogAction>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPORTAMIENTO ───────────── */}
      <ContentCards title="Detalles Técnicos & UX">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Nuestra implementación de AlertDialog asegura una experiencia consistente:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li><strong>Overlay:</strong> Aplica un fondo <code>bg-black/50</code> con animación de fade-in para centrar la atención.</li>
            <li><strong>Animaciones:</strong> El contenido utiliza un efecto de <code>zoom-in-95</code> al abrirse para una transición suave.</li>
            <li><strong>Mobile First:</strong> En pantallas pequeñas, el footer apila los botones verticalmente de forma inversa (Cancel abajo) para facilitar el clic.</li>
            <li><strong>Portales:</strong> Renderiza el modal en un portal de Radix para evitar cortes por <code>overflow</code> del contenedor padre.</li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica. El componente utiliza <code>AlertDialogPrimitive</code> para el manejo de focos y bloqueo de scroll.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}