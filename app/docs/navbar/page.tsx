'use client'

import * as React from 'react'
import { Navbar } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'

// Iconos para la demo de acciones
const HelpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
)

export default function NavbarPage() {
  const componentRegistry = (registry as any)['navbar']
  const [currentMerchant, setCurrentMerchant] = React.useState('1')

  // Datos para los bloques de código
  const mockMerchants = [
    { id: '1', name: 'Nave Coffee Roasters' },
    { id: '2', name: 'Nave Bakery & Co.' },
  ]

  const mockUser = {
    name: 'Rodrigo Paz',
    role: 'Administrador',
    avatarUrl: 'https://github.com/shadcn.png',
    menu: [
      { id: 'profile', label: 'Mi Perfil', onClick: () => {} },
      { id: 'logout', label: 'Cerrar sesión', onClick: () => {} },
    ]
  }

  return (
    <DocsPage
      title="Navbar"
      description="Encabezado global para la gestión de identidad, cambio de contexto entre comercios y menús de usuario."
    >
      
      {/* ───────────── 1. INSTALACIÓN E IMPORTACIÓN ───────────── */}
      <ContentCards title="Instalación e Importación">
        <p className="text-sm text-slate-600 mb-4">
          La <code>Navbar</code> es un componente compuesto. Asegúrate de tener instaladas las dependencias de <b>Data Display</b> (Avatar) y <b>Dropdown Menu</b> para su correcto funcionamiento.
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css';\nimport { Navbar } from 'nave-ui-library/react';

import { \n  DropdownMenu, \n  DropdownMenuTrigger, \n  DropdownMenuContent, \n  DropdownMenuItem \n} from 'nave-ui-library/react';

import { Avatar, AvatarImage, AvatarFallback } from 'nave-ui-library/react';
            `} 
        />
      </ContentCards>

      {/* ───────────── 2. VISTA PREVIA INTERACTIVA ───────────── */}
      <ContentCards title="Vista Previa en Vivo">
        <p className="text-sm text-slate-500 mb-6 italic">
          Nota: El selector de la izquierda cambiará el estado local de la documentación.
        </p>
        <ComponentExample
          preview={
            <div className="w-full bg-slate-100/50 p-8 rounded-xl border border-dashed border-slate-300">
              <Navbar 
                merchants={mockMerchants}
                currentMerchantId={currentMerchant}
                onMerchantChange={setCurrentMerchant}
                actions={[
                  { id: 'help', label: 'Ayuda', icon: <HelpIcon />, onClick: () => alert('Ayuda') }
                ]}
                user={mockUser}
              />
            </div>
          }
          code={`const [merchantId, setMerchantId] = useState('1');\n\n<Navbar \n  merchants={merchants}\n  currentMerchantId={merchantId}\n  onMerchantChange={(id) => setMerchantId(id)}\n  user={userData}\n  actions={actionsData}\n/>`}
        />
      </ContentCards>

      {/* ───────────── 3. CONCEPTOS CLAVE ───────────── */}
      <ContentCards title="Arquitectura del Componente">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* MERCHANT SELECT */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 border-l-4 border-purple-500 pl-3 uppercase tracking-tighter">
              Selector de Comercios
            </h4>
            <p className="text-sm text-slate-600">
              El componente detecta automáticamente el número de comercios. Si hay <b>más de uno</b>, renderiza un Dropdown. Si hay <b>solo uno</b>, muestra el nombre como texto estático.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <CodeBlock code={`// merchants: Merchant[]\n{\n  id: '1',\n  name: 'Nave Coffee'\n}`} />
            </div>
          </div>

          {/* USER MENU */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 border-l-4 border-purple-500 pl-3 uppercase tracking-tighter">
              Menú de Usuario
            </h4>
            <p className="text-sm text-slate-600">
              Requiere un objeto <code>user</code> que incluya un array <code>menu</code>. El componente gestiona internamente el renderizado del Avatar y el Dropdown.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <CodeBlock code={`// user: NavbarUser\n{\n  name: 'Rodrigo',\n  role: 'Admin',\n  menu: [{ label: 'Salir', onClick: fn }]\n}`} />
            </div>
          </div>

        </div>
      </ContentCards>

      {/* ───────────── 4. TABLA DE PROPIEDADES ───────────── */}
      <ContentCards title="Propiedades (Props)">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-3 px-3 font-bold text-slate-900">Prop</th>
                <th className="py-3 px-3 font-bold text-slate-900">Tipo</th>
                <th className="py-3 px-3 font-bold text-slate-900">Descripción</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">merchants</td>
                <td className="py-3 px-3 text-xs italic">Merchant[]</td>
                <td className="py-3 px-3">Lista de comercios disponibles para el usuario.</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">currentMerchantId</td>
                <td className="py-3 px-3 text-xs italic">string</td>
                <td className="py-3 px-3">ID del comercio seleccionado actualmente.</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">actions</td>
                <td className="py-3 px-3 text-xs italic">NavbarAction[]</td>
                <td className="py-3 px-3">Botones de acción rápida (Ayuda, Notificaciones, etc).</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">user</td>
                <td className="py-3 px-3 text-xs italic">NavbarUser</td>
                <td className="py-3 px-3">Datos del usuario y las opciones de su menú personal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentCards>

      {/* ───────────── 5. REGISTRY ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-4 text-slate-900 italic tracking-tighter">Metadata del Componente (Registry)</h2>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}