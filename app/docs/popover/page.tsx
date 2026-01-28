'use client';

/*
import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  Button, 
  Input, 
  Label 
} from 'nave-ui-library/react';
*/
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function PopoverPage() {
  const componentRegistry = (registry as any)['popover'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Popover"
      description="Muestra contenido flotante centrado en un elemento disparador (trigger). Es ideal para configuraciones rápidas o detalles adicionales."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css

import { Popover, PopoverTrigger, PopoverContent } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO (FORMULARIO) ───────────── */}
      <ContentCards title="Basic Usage (Form)">
        <p className="text-sm text-slate-500 mb-6">
          Un uso muy común es utilizar el Popover para ajustes rápidos que no
          requieren una navegación completa.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center p-8">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Click Aquí</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold leading-none">
                        Dimensiones
                      </h4>
                      <p className="text-xs text-slate-500">
                        Ajusta el tamaño del contenedor.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <Input label="Ancho" defaultValue="100%" size="sm" />
                      <Input label="Alto" defaultValue="auto" size="sm" />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          }
          code={`<Popover>\n  <PopoverTrigger asChild>\n    <Button size="icon"><Settings2 /></Button>\n  </PopoverTrigger>\n  <PopoverContent className="w-80">\n    <div className="grid gap-4">\n      <h4>Dimensiones</h4>\n      <Input label="Ancho" size="sm" />\n    </div>\n  </PopoverContent>\n</Popover>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ALINEACIÓN ───────────── */}
      <ContentCards title="Alignment & Side Offset">
        <p className="text-sm text-slate-500 mb-6">
          Puedes controlar la posición del Popover respecto al trigger usando{' '}
          <code>side</code> y <code>align</code>.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-wrap justify-center gap-4 p-8">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="tertiary" size="sm">
                    Alineado al inicio
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start">
                  Este Popover se alinea al inicio del botón.
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="tertiary" size="sm">
                    Alineado al final
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end">
                  Este Popover se alinea al final del botón.
                </PopoverContent>
              </Popover>
            </div>
          }
          code={`<PopoverContent align="start">...</PopoverContent>\n<PopoverContent align="end">...</PopoverContent>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: THEMING ───────────── */}
      <ContentCards title="Tokens & Estilos">
        <p className="text-sm text-slate-600 mb-4">
          El Popover utiliza un sistema de portales para evitar problemas de
          capas (z-index) y hereda los siguientes tokens:
        </p>
        <ul className="list-disc list-inside text-sm text-slate-500 space-y-2 mb-6">
          <li>
            <strong>Shadow:</strong> Se aplica vía{' '}
            <code>mergedTokens.shadow</code>.
          </li>
          <li>
            <strong>Borders:</strong> Borde sólido de 1px usando{' '}
            <code>styles.borderColor</code>.
          </li>
          <li>
            <strong>Animations:</strong> Efectos de fade y zoom con soporte para
            estados de Radix.
          </li>
        </ul>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El Popover utiliza{' '}
          <code>Radix UI Popover Primitive</code> para asegurar la mejor
          experiencia de accesibilidad y foco.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
