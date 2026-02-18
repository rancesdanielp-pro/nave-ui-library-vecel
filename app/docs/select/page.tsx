'use client';

import * as React from 'react';
import { Select } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function SelectPage() {
  const componentRegistry = (registry as any)['select'];
  const naveTheme = tokenVariants[0].tokens;

  const fruitItems = [
    { label: 'Manzana', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Arándano', value: 'blueberry' },
    { label: 'Uva', value: 'grape' },
  ];

  const countryItems = [
    { label: 'Argentina', value: 'ar' },
    { label: 'Brasil', value: 'br' },
    { label: 'Chile', value: 'cl' },
    { label: 'Uruguay', value: 'uy' },
  ];

  const [selectedValue, setSelectedValue] = React.useState('');

  return (
    <DocsPage
      title="Select"
      description="Muestra una lista de opciones para que el usuario elija, activada por un botón de activación (Trigger)."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css

import { Select } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El Select requiere un array de objetos <code>items</code> con las
          propiedades <code>label</code> y <code>value</code>.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-[240px]">
              <Select
                items={fruitItems}
                placeholder="Elegí una fruta"
                value={selectedValue}
                onValueChange={setSelectedValue}
              />
              {selectedValue && (
                <p className="mt-2 text-xs text-slate-400 font-mono">
                  Valor seleccionado: {selectedValue}
                </p>
              )}
            </div>
          }
          code={`const fruits = [{ label: 'Manzana', value: 'apple' },  { label: 'Banana', value: 'banana' }]             <div className="w-full max-w-[240px]">
              <Select 
                items={fruitItems} 
                placeholder="Elegí una fruta" 
                value={selectedValue}
                onValueChange={setSelectedValue}
              />
              {selectedValue && (
                <p className="mt-2 text-xs text-slate-400 font-mono">
                  Valor seleccionado: {selectedValue}
                </p>
              )}
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TAMAÑOS ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Soporta tres tamaños predefinidos: <code>sm</code> (32px),{' '}
          <code>default</code> (40px) y <code>lg</code> (48px).
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 w-full max-w-[240px]">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Small (32px)
                </span>
                <Select
                  size="small"
                  items={countryItems}
                  placeholder="Pequeño"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Default (40px)
                </span>
                <Select
                  size="medium"
                  items={countryItems}
                  placeholder="Por defecto"
                />
              </div>
            </div>
          }
          code={`<div className="flex flex-col gap-6 w-full max-w-[240px]">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Small (32px)
                </span>
                <Select
                  size="small"
                  items={countryItems}
                  placeholder="Pequeño"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Default (40px)
                </span>
                <Select
                  size="medium"
                  items={countryItems}
                  placeholder="Por defecto"
                />
              </div>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TOKENS & ESTILOS ───────────── */}
      <ContentCards title="Theming">
        <p className="text-sm text-slate-500 mb-6">
          El Select utiliza <code>resolveTokens</code> para sincronizar el fondo
          del dropdown y los bordes con tu sistema de diseño.
        </p>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
            <li>
              <strong>Dropdown Background:</strong> Controlado por{' '}
              <code>dropdownBackground</code> en los tokens.
            </li>
            <li>
              <strong>Border Radius:</strong> Se hereda de los estilos base del
              componente.
            </li>
            <li>
              <strong>Indicator:</strong> Muestra un icono de <code>Check</code>{' '}
              automáticamente en el ítem activo.
            </li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica del componente Select basado en Radix UI.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
