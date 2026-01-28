'use client'

import * as React from 'react'
import { Sidebar } from '@/packages/ui-library/dist/react' // Ajustado a tu ruta de desarrollo
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
      description="Navegación lateral robusta con soporte para múltiples secciones, estados de colapso y compatibilidad con tokens dinámicos."
      theme={naveTheme}
    >
      
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Importación">
        <p className="text-sm text-slate-500 mb-4">
          El componente resuelve automáticamente los tokens basándose en el <code>theme</code> del contexto.
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css';\nimport { Sidebar } from 'nave-ui-library/react';`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: OPCIONES DE ESTRUCTURA ───────────── */}
      <ContentCards title="Opciones de Estructura">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold text-slate-900 italic">Opción A: Lista de Items</h4>
              <p className="text-xs text-slate-500 italic">Ideal para menús directos sin categorización.</p>
            </div>
            <div className="border rounded-lg bg-white overflow-hidden h-[220px] flex">
              <Sidebar title="App Simple" items={simpleItems} className="w-full border-none" />
            </div>
            <CodeBlock code={`<Sidebar items={items} />`} />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold text-slate-900 italic">Opción B: Secciones Agrupadas</h4>
              <p className="text-xs text-slate-500 italic">Para interfaces con múltiples áreas funcionales.</p>
            </div>
            <div className="border rounded-lg bg-white overflow-hidden h-[220px] flex">
              <Sidebar title="App Enterprise" sections={sectionsData} className="w-full border-none" />
            </div>
            <CodeBlock code={`<Sidebar sections={sections} />`} />
          </div>

        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: INTERACTIVO ───────────── */}
      <ContentCards title="Vista Previa Interactiva">
        <ComponentExample
          preview={
            <div className="flex h-[500px] w-full border rounded-xl bg-[#F9FAFB] overflow-hidden shadow-sm">
              <Sidebar 
                title="Consola Nave"
                sections={sectionsData}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed(!collapsed)}
              />
              <div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 italic">Área de Trabajo</h3>
                  <p className="text-sm text-slate-400">
                    La transición del Sidebar es de 300ms y utiliza variables CSS para los colores.
                  </p>
                </div>
              </div>
            </div>
          }
          code={`const [collapsed, setCollapsed] = useState(false);\n\n<Sidebar \n  collapsed={collapsed}\n  onToggleCollapse={() => setCollapsed(!collapsed)}\n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DISEÑO Y ESTADOS ───────────── */}
      <ContentCards title="Anatomía Visual (Themed)">
        <p className="text-sm text-slate-500 mb-6 italic">Visualización de los estados consumiendo las variables inyectadas.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Activo</h5>
            <div 
               style={{ backgroundColor: 'var(--sb-item-active-bg)', color: 'var(--sb-item-active-color)' }}
               className="flex items-center gap-3 h-[36px] rounded-md px-2 text-sm font-bold shadow-sm"
            >
              <div className="w-5 h-5 bg-current opacity-20 rounded" /> <span>Seleccionado</span>
            </div>
          </div>

          <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hover / Default</h5>
            <div 
              style={{ color: 'var(--sb-item-color)' }}
              className="flex items-center gap-3 h-[36px] rounded-md px-2 text-sm font-medium"
            >
              <div className="w-5 h-5 bg-slate-300 rounded" /> <span>Interacción</span>
            </div>
          </div>

          <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Toggle (Icon)</h5>
            <div style={{ color: 'var(--sb-toggle-color)' }} className="inline-flex items-center justify-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 3.125V16.875H6.25V3.125H7.5Z" /></svg>
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
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">tokens</td>
                <td className="py-3 px-3 text-xs italic">any</td>
                <td className="py-3 px-3">Override opcional de tokens para esta instancia.</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">sections</td>
                <td className="py-3 px-3 text-xs italic">SidebarSection[]</td>
                <td className="py-3 px-3">Estructura agrupada con títulos de categoría.</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-3 px-3 font-mono text-xs text-purple-600 font-bold">collapsed</td>
                <td className="py-3 px-3 text-xs italic">boolean</td>
                <td className="py-3 px-3">Controla si el sidebar está minimizado.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-4 text-slate-900 italic tracking-tighter">Metadata de Registro (JSON)</h2>
        <CodeBlock 
          code={JSON.stringify((registry as any)['sidebar'], null, 2)} 
        />
      </div>
    </DocsPage>
  )
}