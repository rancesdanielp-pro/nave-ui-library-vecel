'use client';

import * as React from 'react';
//import { Combobox } from 'nave-ui-library/react';
import { Combobox, Select } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function ComboboxPage() {
  const componentRegistry = (registry as any)['combobox']; // Reutiliza tokens de select
  const naveTheme = tokenVariants[0].tokens;

  const frameworks = [
    { label: 'Next.js', value: 'next' },
    { label: 'SvelteKit', value: 'svelte' },
    { label: 'Nuxt.js', value: 'nuxt' },
    { label: 'Remix', value: 'remix' },
    { label: 'Astro', value: 'astro' },
  ];

  const [framework, setFramework] = React.useState('');

  return (
    <DocsPage
      title="Combobox | Select"
      description="Un selector interactivo que combina un botón disparador con un panel desplegable de opciones basado en Popover."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css

import { Combobox, Select } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El Combobox permite seleccionar una opción de una lista. Al estar
          basado en el Popover de Radix, gestiona correctamente el foco y el
          cierre al seleccionar.
        </p>
        <ComponentExample
          preview={
            <div className="flex w-full gap-10">
              <div className="w-full max-w-sm">
                <Combobox
                  items={frameworks}
                  placeholder="Seleccionar framework..."
                  value={framework}
                  onValueChange={setFramework}
                />

                {framework && (
                  <p className="mt-2 text-xs text-slate-400">
                    Seleccionado:{' '}
                    <span className="font-semibold text-brand">
                      {framework}
                    </span>
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Select
                  items={frameworks}
                  placeholder="Seleccionar framework..."
                  value={framework}
                  onValueChange={setFramework}
                />

                {framework && (
                  <p className="mt-2 text-xs text-slate-400">
                    Seleccionado:{' '}
                    <span className="font-semibold text-brand">
                      {framework}
                    </span>
                  </p>
                )}
              </div>
            </div>
          }
          code={`const frameworks = [\n  { label: 'Next.js', value: 'next' },\n  { label: 'SvelteKit', value: 'svelte' }\n]\n\n<Combobox \n  items={frameworks} \n  placeholder="Seleccionar..." \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TAMAÑOS ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Soporta variantes de altura <code>sm</code> (36px) y <code>md</code>{' '}
          (44px).
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <Combobox
                size="md"
                items={frameworks}
                placeholder="Tamaño Default"
              />
              <Combobox
                size="sm"
                items={frameworks}
                placeholder="Tamaño Small"
              />
            </div>
          }
          code={`<Combobox size="md" items={...} />\n<Combobox size="sm" items={...} />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DETALLES TÉCNICOS ───────────── */}
      <ContentCards title="Popover Integration">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            A diferencia de un Select estándar, el Combobox ofrece un control
            más granular sobre el renderizado del panel:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-500 space-y-2">
            <li>
              <strong>Dynamic Width:</strong> El panel utiliza{' '}
              <code>var(--radix-popover-trigger-width)</code> para asegurar que
              el dropdown siempre coincida con el ancho del botón.
            </li>
            <li>
              <strong>Z-Index:</strong> Utiliza un portal para renderizarse por
              encima de otros elementos, evitando problemas de{' '}
              <code>overflow: hidden</code>.
            </li>
            <li>
              <strong>Visual Feedback:</strong> Incluye un icono de{' '}
              <code>Check</code> para indicar la opción actualmente
              seleccionada.
            </li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          El componente resuelve los tokens de <code>dropdownBackground</code> y
          los estados de foco característicos de Nave.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
