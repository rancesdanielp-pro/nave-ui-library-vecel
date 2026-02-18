'use client';

//import { PasswordInput } from 'nave-ui-library/react';
import { PasswordInput } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function PasswordInputPage() {
  const componentRegistry = (registry as any)['input']; // Reutiliza lógica de input
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Password Input"
      description="Un campo de entrada especializado para contraseñas que permite alternar la visibilidad del texto."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'
                 import { PasswordInput } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          El Password Input viene configurado por defecto con un botón de ojo
          para mostrar/ocultar los caracteres.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm">
              <PasswordInput
                label="Contraseña"
                placeholder="Ingresá tu clave"
                helperText="Debe tener al menos 8 caracteres."
              />
            </div>
          }
          code={`
            <div className="w-full max-w-sm">
              <PasswordInput
                label="Contraseña"
                placeholder="Ingresá tu clave"
                helperText="Debe tener al menos 8 caracteres."
              />
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS ───────────── */}
      <ContentCards title="Interaction States">
        <p className="text-sm text-slate-500 mb-6">
          El botón de visibilidad se ajusta automáticamente según el estado del
          input (error o deshabilitado).
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Error State
                </span>
                <PasswordInput
                  error
                  label="Clave actual"
                  defaultValue="clave123"
                  helperText="La contraseña es incorrecta."
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Disabled State
                </span>
                <PasswordInput
                  disabled
                  label="Clave de seguridad"
                  defaultValue="••••••••"
                  helperText="No puedes modificar la clave en este momento."
                />
              </div>
            </div>
          }
          code={`
            <div className="w-full max-w-sm flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Error State
                </span>
                <PasswordInput
                  error
                  label="Clave actual"
                  defaultValue="clave123"
                  helperText="La contraseña es incorrecta."
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Disabled State
                </span>
                <PasswordInput
                  disabled
                  label="Clave de seguridad"
                  defaultValue="••••••••"
                  helperText="No puedes modificar la clave en este momento."
                />
              </div>
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Al igual que el Input estándar, soporta tamaños <code>small</code> y{' '}
          <code>medium</code>, ajustando la posición del icono automáticamente.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-sm flex flex-col gap-6">
              <span>Medium</span>
              <PasswordInput size="medium" label="Label" placeholder="Placeholder" />
              <span>Small</span>
              <PasswordInput size="small" label="Label" placeholder="Placeholder" />
            </div>
          }
          code={`
            <div className="w-full max-w-sm flex flex-col gap-6">
              <span>Medium</span>
              <PasswordInput size="medium" label="Label" placeholder="Placeholder" />
              <span>Small</span>
              <PasswordInput size="small" label="Label" placeholder="Placeholder" />
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este componente utiliza una referencia interna (<code>useRef</code>)
          para alternar el atributo <code>type</code> entre 'password' y 'text'.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
