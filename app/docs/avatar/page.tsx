'use client'

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/packages/ui-library/dist/react';

import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function AvatarPage() {
  const componentRegistry = (registry as any)['avatar']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Avatar"
      description="Los avatares se utilizan para representar usuarios o entidades con una imagen o contenido de respaldo."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa los componentes necesarios para construir el avatar:
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'
import { Avatar, AvatarImage, AvatarFallback } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default">
        <ComponentExample
          preview={
            <div className="flex justify-center">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User avatar"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          }
          code={`<Avatar>
  <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <ComponentExample
          preview={
            <div className="flex items-end justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Avatar size="sm" className='bg-slate-200'>
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Small</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar size="md" className='bg-slate-200'>
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Medium</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" className='bg-slate-200'>
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Large</span>
              </div>
            </div>
          }
          code={`<Avatar size="sm">...</Avatar>\n<Avatar size="md">...</Avatar>\n<Avatar size="lg">...</Avatar>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: FALLBACK ───────────── */}
      <ContentCards title="Fallback">
        <ComponentExample
          preview={
            <div className="flex justify-center gap-6">
              <Avatar size="lg">
                <AvatarFallback className="bg-brand text-white">NA</AvatarFallback>
              </Avatar>

              <Avatar size="lg">
                <AvatarFallback className="bg-slate-200 text-slate-600">UI</AvatarFallback>
              </Avatar>
            </div>
          }
          code={`<Avatar>\n  <AvatarFallback>NA</AvatarFallback>\n</Avatar>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica y metadatos del componente Avatar.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}