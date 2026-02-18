'use client'

import * as React from 'react'
import { Sidebar } from '@/packages/ui-library/dist/react'
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

// Iconos SVGs para la navegación
const HomeSvg = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>)
const SalesSvg = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>)
const SettingsSvg = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>)

export default function SidebarPage() {
  const [collapsed, setCollapsed] = React.useState(false)
  const naveTheme = tokenVariants[0].tokens;

  const sectionsData = [
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

  const simpleItems = [
    { id: '1', label: 'Dashboard', icon: <HomeSvg />, href: '#', active: true },
    { id: '2', label: 'Configuración', icon: <SettingsSvg />, href: '#' },
  ]

  return (
    <DocsPage
      title="Sidebar"
      description="Navegación lateral 100% configurable mediante tokens. Controla tipografía, espaciados y estados dinámicos desde el tema central."
      theme={naveTheme}
    >
      
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Importación">
        <p className="text-sm text-slate-500 mb-4">
          El componente utiliza variables CSS inyectadas para permitir una personalización total sin re-renderizados de lógica.
        </p>
        <CodeBlock 
          code={`import { Sidebar } from 'nave-ui-library/react';`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: INTERACTIVO ───────────── */}
      <ContentCards title="Vista Previa Interactiva">
        <p className="text-sm text-slate-500 mb-6">
          Prueba el estado <code>collapsed</code>. Observa cómo los tokens de <code>width</code> y <code>collapsedWidth</code> dictan las dimensiones.
        </p>
        <ComponentExample
          preview={
            <div className="flex h-[500px] w-full border rounded-xl bg-slate-50 overflow-hidden shadow-sm">
              <Sidebar 
                title="Consola Nave"
                sections={sectionsData}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
              />
              <div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Área de Contenido</h3>
                  <p className="text-sm text-slate-400">
                    El sidebar utiliza <code>transition-all</code> con la duración definida en el token <code>motion.duration</code>.
                  </p>
                </div>
              </div>
            </div>
          }
          code={`<Sidebar 
                title="Consola Nave"
                sections={sectionsData}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
              />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ANATOMÍA DE TOKENS ───────────── */}
      <ContentCards title="Anatomía Visual (Basada en Tokens)">
        <p className="text-sm text-slate-500 mb-6 italic">Cada elemento visual está mapeado a una variable CSS específica.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Navegación (Item)</h5>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex justify-between"><span>Altura:</span> <code className="text-purple-600">--sb-item-h</code></li>
                <li className="flex justify-between"><span>Radio:</span> <code className="text-purple-600">--sb-item-radius</code></li>
                <li className="flex justify-between"><span>Gap Icono/Texto:</span> <code className="text-purple-600">--sb-item-gap</code></li>
                <li className="flex justify-between"><span>Fuente:</span> <code className="text-purple-600">--sb-item-size</code></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Secciones y Toggle</h5>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex justify-between"><span>Gap Secciones:</span> <code className="text-purple-600">--sb-section-gap</code></li>
                <li className="flex justify-between"><span>Color Label:</span> <code className="text-purple-600">--sb-section-color</code></li>
                <li className="flex justify-between"><span>Icono Toggle:</span> <code className="text-purple-600">--sb-toggle-color</code></li>
                <li className="flex justify-between"><span>Transición:</span> <code className="text-purple-600">--sb-motion</code></li>
              </ul>
            </div>
          </div>

        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: PROPS ───────────── */}
      <ContentCards title="Propiedades (Props)">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-3 px-3 font-bold">Prop</th>
                <th className="py-3 px-3 font-bold">Tipo</th>
                <th className="py-3 px-3 font-bold">Descripción</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">title</td>
                <td className="py-3 px-3 text-xs italic">string</td>
                <td className="py-3 px-3">Título que aparece en el header (ej: Nombre de App).</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">sections</td>
                <td className="py-3 px-3 text-xs italic">SidebarSection[]</td>
                <td className="py-3 px-3">Arreglo de secciones con títulos y sub-items.</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">collapsed</td>
                <td className="py-3 px-3 text-xs italic">boolean</td>
                <td className="py-3 px-3">Estado de colapso controlado.</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">onToggleCollapse</td>
                <td className="py-3 px-3 text-xs italic">() = {'>'} void</td>
                <td className="py-3 px-3">Callback ejecutado al clickear el ícono de colapso.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-4 text-slate-900 tracking-tighter">Metadata de Registro (JSON)</h2>
        <p className="text-sm text-slate-500 mb-6">
          Estructura de tokens definida para el componente <code>sidebar</code>.
        </p>
        <CodeBlock 
          code={JSON.stringify((registry as any)['sidebar'], null, 2)} 
        />
      </div>
    </DocsPage>
  )
}