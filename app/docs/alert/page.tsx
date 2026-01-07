'use client'

import {
  Alert,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/packages/ui-library/dist/react';

import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { ComponentExample } from '@/app/components/[slug]/ComponentExample'
import registry from '@/packages/ui-library/src/registry/registry.json'
import { tokenVariants } from '@/app/utils/tokens'

export default function AlertsPage() {
  const componentRegistry = (registry as any)['alert']
  const naveTheme = tokenVariants[0].tokens

  return (
    <DocsPage
      title="Alert"
      description="Los Alerts se utilizan para mostrar mensajes importantes al usuario, como advertencias, errores o confirmaciones."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa los componentes necesarios desde la librería:
        </p>
        <CodeBlock 
          code={`import 'nave-ui-library/styles.css'
import { Alert, AlertTitle, AlertDescription } from 'nave-ui-library/react'`} 
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default">
        <ComponentExample
          preview={
            <Alert className="max-w-lg">
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                This is a default alert — check it out!
              </AlertDescription>
            </Alert>
          }
          code={`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    This is a default alert — check it out!
  </AlertDescription>
</Alert>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DESTRUCTIVE ───────────── */}
      <ContentCards title="Destructive">
        <ComponentExample
          preview={
            <Alert variant="destructive" className="max-w-lg">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          }
          code={`<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: WITH ICON ───────────── */}
      <ContentCards title="With Icon">
        <ComponentExample
          preview={
            <Alert className="max-w-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <AlertTitle>Notice</AlertTitle>
              <AlertDescription>
                This alert includes an icon for visual emphasis.
              </AlertDescription>
            </Alert>
          }
          code={`<Alert>
  <Icon />
  <AlertTitle>Notice</AlertTitle>
  <AlertDescription>
    This alert includes an icon for visual emphasis.
  </AlertDescription>
</Alert>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos y configuración del componente Alert.
        </p>
        <CodeBlock 
          code={JSON.stringify(componentRegistry, null, 2)} 
        />
      </div>
    </DocsPage>
  )
}