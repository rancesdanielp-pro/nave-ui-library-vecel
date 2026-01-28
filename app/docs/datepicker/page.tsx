'use client';

import * as React from 'react';
/*
import {
  DatePickerInput,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
} from 'nave-ui-library/react';
*/
import {
  DatePickerInput,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function DatePickerPage() {
  const componentRegistry = (registry as any)['input'];
  const naveTheme = tokenVariants[0].tokens;

  // Estado para manejar la fecha en el ejemplo interactivo
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <DocsPage
      title="Date Picker Input"
      description="Un campo de entrada que actúa como disparador para un selector de calendario, permitiendo elegir fechas de forma visual y accesible."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import { \n  DatePickerInput, \n  Popover, \n  PopoverTrigger, \n  PopoverContent, \n  Calendar \n} from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: INTERACTIVO ───────────── */}
      <ContentCards title="Interactive Selection">
        <p className="text-sm text-slate-500 mb-6">
          Haz clic en el input para abrir el calendario. El{' '}
          <code>DatePickerInput</code> debe envolverse en un{' '}
          <code>Popover</code> para funcionar como selector.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm mx-auto">
              {/* Pasamos error={undefined} o simplemente no lo pasamos para evitar el warning de React */}
              
              <Popover>
                <PopoverTrigger asChild>
                  <DatePickerInput
                    label="Fecha de operación"
                    placeholder="Seleccioná una fecha"
                    readOnly
                    value={date ? date.toLocaleDateString('es-AR') : ''}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => setDate(d)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          }
          code={`const [date, setDate] = useState<Date>()\n\n<Popover>\n  <PopoverTrigger asChild>\n    <DatePickerInput\n      label="Select date"\n      value={date ? date.toLocaleDateString() : 'Este mes'}\n    />\n  </PopoverTrigger>\n  <PopoverContent className="w-auto p-0">\n    <Calendar mode="single" selected={date} onSelect={setDate} />\n  </PopoverContent>\n</Popover>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          Soporta estados de error y deshabilitado, afectando tanto al borde
          como a la opacidad del icono.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Error State
                </span>
                {/* Para evitar el warning "Received true for a non-boolean attribute error",
                   nos aseguramos que el componente no inyecte props inválidas al DOM.
                */}
                <DatePickerInput
                  error={true}
                  label="Fecha de vencimiento"
                  defaultValue="12/10/2023"
                  helperText="La fecha no puede ser anterior a hoy."
                  onChange={() => {}} // dummy to avoid readOnly warning
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Disabled State
                </span>
                <DatePickerInput
                  disabled
                  label="Fecha de registro"
                  defaultValue="01/01/2024"
                />
              </div>
            </div>
          }
          code={`<DatePickerInput error label="Vencimiento" />\n<DatePickerInput disabled label="Registro" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Al igual que el resto de los controles, ofrece variantes{' '}
          <code>sm</code> y <code>md</code>.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-6">
              <DatePickerInput size="md" label="Medium (44px)" />
              <DatePickerInput size="sm" label="Small (36px)" />
            </div>
          }
          code={`<DatePickerInput size="md" />\n<DatePickerInput size="sm" />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este componente utiliza <code>inputVariants</code> para garantizar la
          coherencia visual con el sistema de diseño central.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
