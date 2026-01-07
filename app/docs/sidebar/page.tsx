'use client'

import * as React from 'react'
import { Sidebar } from '@/packages/ui-library/dist/react'
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

// Usamos SVGs puros para los items de navegación
const HomeSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
)
const SalesSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
)
const SettingsSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
)

export default function SidebarPage() {
  const componentRegistry = (registry as any)['sidebar']
  const naveTheme = tokenVariants[0].tokens

  // Estado para el colapso interactivo en la documentación
  const [collapsed, setCollapsed] = React.useState(false)

  const sections = [
    {
      id: 'main',
      title: 'Gestión',
      items: [
        { id: '1', label: 'Dashboard', icon: <HomeSvg />, href: '#', active: true },
        { id: '2', label: 'Mis Ventas', icon: <SalesSvg />, href: '#' },
      ]
    },
    {
      id: 'config',
      title: 'Ajustes',
      items: [
        { id: '3', label: 'Configuración', icon: <SettingsSvg />, href: '#' },
      ]
    }
  ]

  return (
    <DocsPage
      title="Sidebar"
      description="Navegación lateral persistente con soporte para secciones jerárquicas y estados de colapso."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css

import { Sidebar } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: INTERACTIVO ───────────── */}
      <ContentCards title="Interactive Preview">
        <p className="text-sm text-slate-500 mb-6">
          Prueba el botón de colapso superior para ver cómo los iconos de Nave cambian y el menú se ajusta dinámicamente.
        </p>
        <ComponentExample
          preview={
            <div className="flex h-[450px] w-full border rounded-lg bg-[#F9FAFB] overflow-hidden">
              <Sidebar 
                title="Consola Nave"
                sections={sections}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
              />
              <div className="flex-1 p-10 text-center flex flex-col items-center justify-center gap-2">
                <p className="text-slate-400 font-medium">Contenido de la Página</p>
                <p className="text-xs text-slate-300">El ancho de la sidebar es: {collapsed ? '64px' : '240px'}</p>
              </div>
            </div>
          }
          code={`const [collapsed, setCollapsed] = useState(false)\n\n<Sidebar \n  collapsed={collapsed}\n  onToggleCollapse={() => setCollapsed(!collapsed)}\n  sections={sections}\n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CARACTERÍSTICAS ───────────── */}
      <ContentCards title="Anatomía del Componente">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Iconos de Colapso</h4>
            <p className="text-sm text-slate-500 italic">
              Utiliza <code>CollapseIconExpanded</code> y <code>Collapsed</code> internamente para indicar la dirección del movimiento.
            </p>
            <div className="flex gap-4 p-4 bg-white border rounded-md justify-center">
               <div className="text-slate-400">Expanded SVG</div>
               <div className="text-slate-400">Collapsed SVG</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Estados de Item</h4>
            <p className="text-sm text-slate-500">
              Los items activos usan un fondo lavanda <code>#F4F0FF</code> y texto púrpura <code>#6D28D9</code>.
            </p>
            <div className="w-full bg-white border p-2 rounded-md">
               <div className="flex items-center gap-2 h-[36px] rounded-md px-2 bg-[#F4F0FF] text-[#6D28D9] text-sm font-medium">
                  <div className="w-5 h-5 bg-current opacity-20 rounded" /> <span>Item Activo</span>
               </div>
            </div>
          </div>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPORTAMIENTO ───────────── */}
      <ContentCards title="Detalles Técnicos">
        <div className="space-y-4">
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-3">
            <li><strong>Transiciones:</strong> El cambio de ancho (64px a 240px) es instantáneo pero el contenido interno se oculta mediante condicionales para evitar saltos de texto.</li>
            <li><strong>Secciones:</strong> El componente normaliza los datos. Si pasas <code>items</code>, crea una sección por defecto. Si pasas <code>sections</code>, respeta los títulos superiores.</li>
            <li><strong>Next.js:</strong> Los enlaces utilizan el componente <code>Link</code> de Next.js para asegurar que la navegación sea SPA (Single Page Application).</li>
            <li><strong>Hover:</strong> Los items no activos tienen un hover suave <code>hover:bg-[#F3F4F6]</code>.</li>
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