'use client';

//import { Checkbox } from 'nave-ui-library/react';
import { Checkbox } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function CheckboxPage() {
  const componentRegistry = (registry as any)['checkbox'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Checkbox"
      description="Un control que permite al usuario seleccionar una o más opciones de un conjunto."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css

import { Checkbox } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Checkboxes simples para selección individual, con soporte para
          etiquetas y descripciones integradas.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6">
              <Checkbox label="Aceptar términos y condiciones" />
              <Checkbox
                label="Suscribirme al newsletter"
                description="Recibí novedades y promociones exclusivas cada semana."
                defaultChecked
              />
            </div>
          }
          code={`<Checkbox label="Aceptar términos" />\n<Checkbox \n  label="Newsletter" \n  description="Recibí novedades..." \n  defaultChecked \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Soporta estados de solo lectura, deshabilitados e indeterminados (útil
          para selecciones parciales).
        </p>
        <ComponentExample
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Disabled States
                </span>
                <Checkbox label="Deshabilitado" disabled />
                <Checkbox label="Deshabilitado Marcado" disabled checked />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Indeterminate State
                </span>
                <Checkbox
                  label="Seleccionar todos"
                  description="Estado parcial activo."
                  state="indeterminate"
                  checked="indeterminate"
                />
                <Checkbox
                  label="Deshabilitado Marcado"
                  disabled
                  state="indeterminate"
                  checked="indeterminate"
                />
              </div>
            </div>
          }
          code={`<Checkbox label="Disabled" disabled />\n<Checkbox \n  label="Indeterminado" \n  state="indeterminate" \n  checked="indeterminate" \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Disponible en tamaño regular (20px) y pequeño (16px).
        </p>
        <ComponentExample
          preview={
            <div className="flex items-start justify-center gap-12">
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="regular" defaultChecked />
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Regular
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="small" defaultChecked />
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Small
                </span>
              </div>
            </div>
          }
          code={`<Checkbox size="regular" />\n<Checkbox size="small" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos. El componente utiliza Radix UI Checkbox Primitive
          para manejar accesibilidad y estados de formulario.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
