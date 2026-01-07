'use client'

import * as React from 'react'
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  Card,
  ListItem
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function TabsPage() {
  const componentRegistry = (registry as any)['tabs']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Tabs"
      description="Organiza contenido en diferentes vistas que se pueden alternar mediante pestañas. Ideal para separar contextos dentro de una misma pantalla."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
        
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Un conjunto de pestañas estándar con tamaño <code>large</code>. El estado activo aplica un sombreado suave y fondo blanco sobre la base gris.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Mi Cuenta</TabsTrigger>
                  <TabsTrigger value="password">Seguridad</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <Card title="Información Personal">
                    <p className="text-sm text-slate-600">Configura los datos básicos de tu perfil de Nave.</p>
                  </Card>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <Card title="Contraseña">
                    <p className="text-sm text-slate-600">Cambia tu clave de acceso o activa 2FA.</p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={`<Tabs defaultValue="account">\n  <TabsList>\n    <TabsTrigger value="account">Mi Cuenta</TabsTrigger>\n    <TabsTrigger value="password">Seguridad</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">...</TabsContent>\n</Tabs>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TAMAÑOS ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Soporta variantes <code>large</code> (42px) y <code>small</code> (32px), ajustando automáticamente los paddings y el tamaño de fuente.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Large (Default)</span>
                <Tabs defaultValue="tab1">
                  <TabsList size="large">
                    <TabsTrigger value="tab1">Actividad</TabsTrigger>
                    <TabsTrigger value="tab2">Reportes</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Small</span>
                <Tabs defaultValue="tab1">
                  <TabsList size="small">
                    <TabsTrigger value="tab1">Hoy</TabsTrigger>
                    <TabsTrigger value="tab2">Mes</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          }
          code={`<TabsList size="large">...</TabsList>\n<TabsList size="small">...</TabsList>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSICIÓN ───────────── */}
      <ContentCards title="Advanced Composition">
        <p className="text-sm text-slate-500 mb-6">
          Las pestañas pueden contener estructuras complejas como <code>ListItems</code> para filtrar historiales.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md mx-auto">
              <Tabs defaultValue="all">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">Todos</TabsTrigger>
                  <TabsTrigger value="success" className="flex-1">Cobros</TabsTrigger>
                  <TabsTrigger value="pending" className="flex-1">Pendientes</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 border rounded-xl overflow-hidden">
                  <ListItem id="1" title="Venta Express" amount="$ 1.200" overline="10:00 AM" />
                  <ListItem id="2" title="Cobro QR" amount="$ 5.400" overline="09:30 AM" />
                </TabsContent>
              </Tabs>
            </div>
          }
          code={`<TabsContent value="all">\n  <ListItem ... />\n  <ListItem ... />\n</TabsContent>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este componente utiliza Radix UI Tabs y un sistema de <code>group/tabs</code> para que los triggers hereden el tamaño definido en la lista padre.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}