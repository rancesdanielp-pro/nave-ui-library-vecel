'use client'

import * as React from 'react'
import { FileUpload, Badge } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function FileUploadPage() {
  const componentRegistry = (registry as any)['file-upload-file']
  const naveTheme = tokenVariants[0].tokens

  const [uploadedFiles, setUploadedFiles] = React.useState<string[]>([])
  const [lastErrors, setLastErrors] = React.useState<string[]>([])

  const handleFiles = (files: File[]) => {
    setUploadedFiles(files.map(f => f.name))
    setLastErrors([])
  }

  const handleErrors = (errors: string[]) => {
    setLastErrors(errors)
  }

  return (
    <DocsPage
      title="File Upload"
      description="Un componente robusto de carga de archivos que admite arrastrar y soltar, validación de tipos y límites de tamaño."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css
import { FileUpload } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default Upload">
        <p className="text-sm text-slate-500 mb-6">
          La zona de carga estándar permite seleccionar un solo archivo (PDF, JPG o PNG) con un límite de 3MB por defecto.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-2xl bg-gray-50 p-4 rounded-xl">
              <FileUpload 
                onFilesChange={handleFiles}
                onError={handleErrors}
              />
              {(uploadedFiles.length > 0 || lastErrors.length > 0) && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                   {uploadedFiles.map(name => (
                     <div key={name} className="flex items-center gap-2 text-sm text-green-600">
                        <Badge tone="success">Cargado</Badge> {name}
                     </div>
                   ))}
                   {lastErrors.map(err => (
                     <div key={err} className="text-sm text-red-600">
                        <Badge tone="error">Error</Badge> {err}
                     </div>
                   ))}
                </div>
              )}
            </div>
          }
          code={`<FileUpload \n  onFilesChange={(files) => console.log(files)} \n  onError={(errs) => console.log(errs)} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: MULTIPLE & RESTRICTIONS ───────────── */}
      <ContentCards title="Multiple Files & Restrictions">
        <p className="text-sm text-slate-500 mb-6">
          Puedes habilitar la carga múltiple y restringir los archivos solo a imágenes con un tamaño más estricto.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-2xl">
              <FileUpload 
                multiple
                accept={['image/jpeg', 'image/png']}
                maxSizeMB={1}
                title="Subí tus fotos de perfil"
                description="Solo JPG o PNG. Máximo 1MB por foto."
                buttonLabel="Seleccionar imágenes"
              />
            </div>
          }
          code={`<FileUpload \n  multiple \n  accept={['image/jpeg', 'image/png']} \n  maxSizeMB={1} \n  buttonLabel="Seleccionar imágenes" \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CUSTOM ICON ───────────── */}
      <ContentCards title="Custom UI">
        <p className="text-sm text-slate-500 mb-6">
          Es posible personalizar los textos y el ícono superior para adaptarlo al contexto del formulario.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-2xl">
              <FileUpload 
                title="Documentación técnica"
                description="Subí el manual de usuario en formato PDF."
                accept={['application/pdf']}
                icon={
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#652BDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                }
              />
            </div>
          }
          code={`<FileUpload \n  title="Documentación técnica" \n  accept={['application/pdf']} \n  icon={<MyCustomIcon />} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. Este componente utiliza un input de tipo file oculto y maneja eventos nativos de Drag & Drop para la interacción.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}