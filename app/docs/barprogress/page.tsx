'use client';

import * as React from 'react';
import { Progress } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

// Icono de reloj limpio (sin bordes externos)
const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5209 8.49996C14.5209 5.17475 11.8253 2.47913 8.50004 2.47913C5.17483 2.47913 2.47921 5.17475 2.47921 8.49996C2.47921 11.8252 5.17483 14.5208 8.50004 14.5208C11.8253 14.5208 14.5209 11.8252 14.5209 8.49996ZM7.96879 5.66663C7.96879 5.37323 8.20664 5.13538 8.50004 5.13538C8.79344 5.13538 9.03129 5.37323 9.03129 5.66663V8.27999L10.6465 9.89518C10.854 10.1026 10.854 10.4389 10.6465 10.6464C10.439 10.8539 10.1027 10.8539 9.89526 10.6464L8.12443 8.87557C8.0248 8.77594 7.96879 8.64086 7.96879 8.49996V5.66663ZM3.1661 1.2181C3.37356 1.01063 3.70985 1.01063 3.91732 1.2181C4.12478 1.42557 4.12478 1.76185 3.91732 1.96932L1.79232 4.09432C1.58485 4.30179 1.24856 4.30179 1.0411 4.09432C0.833632 3.88685 0.833632 3.55057 1.0411 3.3431L3.1661 1.2181ZM13.0828 1.2181C13.2902 1.01063 13.6265 1.01063 13.834 1.2181L15.959 3.3431C16.1665 3.55057 16.1665 3.88685 15.959 4.09432C15.7515 4.30179 15.4152 4.30179 15.2078 4.09432L13.0828 1.96932C12.8753 1.76185 12.8753 1.42557 13.0828 1.2181ZM15.5834 8.49996C15.5834 12.412 12.4121 15.5833 8.50004 15.5833C4.58802 15.5833 1.41671 12.412 1.41671 8.49996C1.41671 4.58794 4.58802 1.41663 8.50004 1.41663C12.4121 1.41663 15.5834 4.58794 15.5834 8.49996Z"
      fill="currentColor"
    />
  </svg>
);

export default function ProgressPage() {
  const componentRegistry = (registry as any)['progress'];
  const naveTheme = tokenVariants[0].tokens;

  const [dynamicValue, setDynamicValue] = React.useState(13);

  React.useEffect(() => {
    if (dynamicValue >= 100) {
      return;
    }

    const timer = setTimeout(() => {
      setDynamicValue((prev) => Math.min(prev + 1, 100));
    }, 150);

    return () => clearTimeout(timer);
  }, [dynamicValue]);

  return (
    <DocsPage
      title="Progress"
      description="Componente visual para comunicar el estado de avance de un proceso."
      theme={naveTheme}
    >
      <ContentCards title="Imports">
        <CodeBlock code={`import { Progress } from 'nave-ui-library/react'`} />
      </ContentCards>

      <ContentCards title="Properties">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-2 font-semibold">Prop</th>
                <th className="pb-2 font-semibold">Tipo</th>
                <th className="pb-2 font-semibold">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 font-mono text-xs text-brand">value</td>
                <td className="py-3 text-xs">number</td>
                <td className="py-3">Valor de progreso (0 a 100).</td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand">label</td>
                <td className="py-3 text-xs">string</td>
                <td className="py-3">Título descriptivo.</td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand">showValue</td>
                <td className="py-3 text-xs">boolean</td>
                <td className="py-3">Muestra el porcentaje.</td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand">
                  description
                </td>
                <td className="py-3 text-xs">string</td>
                <td className="py-3">Texto informativo inferior.</td>
              </tr>
              <tr>
                <td className="py-3 font-mono text-xs text-brand">icon</td>
                <td className="py-3 text-xs">ReactNode</td>
                <td className="py-3">Icono para la descripción.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentCards>

      {/* CASO 1: FULL USAGE - LIMPIO SIN BORDES NEGROS */}
      <ContentCards title="Full Usage (Figma Style)">
        <ComponentExample
          preview={
            <div className="w-full max-w-md py-4">
              <Progress
                value={dynamicValue}
                label="Actualizando..."
                showValue
                icon={<ClockIcon />}
                description="30 segundos restantes"
              />
            </div>
          }
          code={`<Progress 
  value={${Math.round(dynamicValue)}} 
  label="Actualizando..." 
  showValue 
  icon={<ClockIcon />} 
  description="30 segundos restantes" 
/>`}
        />
      </ContentCards>

      <ContentCards title="Minimal Progress">
        <ComponentExample
          preview={
            <div className="w-full max-w-md py-4">
              <Progress value={75} />
            </div>
          }
          code={`<Progress value={75} />`}
        />
      </ContentCards>

      <ContentCards title="Label & Percentage">
        <ComponentExample
          preview={
            <div className="w-full max-w-md space-y-6 py-4">
              <Progress value={40} label="Completando perfil" showValue />
            </div>
          }
          code={`<Progress value={40} label="Completando perfil" showValue />`}
        />
      </ContentCards>

      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">
          Registry Definition
        </h2>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
