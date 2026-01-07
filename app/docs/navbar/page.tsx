'use client'

import * as React from 'react'
import { Navbar, Badge } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function NavbarPage() {
  const componentRegistry = (registry as any)['navbar']
  const naveTheme = tokenVariants[0].tokens

  // Datos de ejemplo para la demo
  const mockMerchants = [
    { id: '1', name: 'Nave Coffee Roasters' },
    { id: '2', name: 'Nave Bakery & Co.' },
  ]

  const mockUser = {
    name: 'Rodrigo Paz',
    role: 'Administrador',
    avatarUrl: 'https://github.com/shadcn.png',
    menu: [
      { id: 'profile', label: 'Mi Perfil', onClick: () => alert('Perfil') },
      { id: 'settings', label: 'Configuración', onClick: () => {} },
      { id: 'logout', label: 'Cerrar sesión', onClick: () => {} },
    ]
  }

  const mockActions = [
    { id: 'help', label: 'Ayuda', onClick: () => {} },
    { id: 'notif', label: 'Notificaciones', onClick: () => {} },
  ]

  const [currentMerchant, setCurrentMerchant] = React.useState('1')

  return (
    <DocsPage
      title="Navbar"
      description="El encabezado principal de la aplicación que gestiona la identidad de marca, la selección de contexto (comercios) y el acceso al perfil de usuario."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Navbar } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Complete Navigation">
        <p className="text-sm text-slate-500 mb-6">
          La Navbar orquesta la selección de comercios a la izquierda y las acciones/usuario a la derecha. 
          Incluye un borde inferior <code>#E2E5E9</code> para separar el contenido del header.
        </p>
        <ComponentExample
          preview={
            <div className="w-full bg-slate-50 p-4 rounded-xl border border-dashed">
              <Navbar 
                merchants={mockMerchants}
                currentMerchantId={currentMerchant}
                onMerchantChange={setCurrentMerchant}
                actions={mockActions}
                user={mockUser}
              />
            </div>
          }
          code={`<Navbar \n  merchants={merchants} \n  currentMerchantId={activeId} \n  actions={actions} \n  user={user} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSICIÓN ───────────── */}
      <ContentCards title="Navbar Anatomy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Merchant Select</h4>
            <p className="text-sm text-slate-500">
              Si hay más de un comercio, habilita automáticamente un <code>DropdownMenu</code> para alternar el contexto de la aplicación.
            </p>
            <div className="p-4 bg-white border rounded-lg">
               <span className="text-sm font-medium">Nave Coffee Roasters</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900">User Menu</h4>
            <p className="text-sm text-slate-500">
              Muestra el <code>Avatar</code> del usuario, su nombre y rol, junto con un menú desplegable de acciones personales.
            </p>
            <div className="p-4 bg-white border rounded-lg flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-200" />
               <div className="flex flex-col">
                 <span className="text-sm font-medium">Rodrigo Paz</span>
                 <span className="text-xs text-slate-400">Administrador</span>
               </div>
            </div>
          </div>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este es un componente compuesto que depende de <code>DropdownMenu</code>, <code>Button</code> y <code>Avatar</code>.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}