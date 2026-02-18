'use client';

import * as React from 'react';
import { Alert } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

// --- Iconos del Design System ---

const SuccessIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const WarningIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ErrorIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default function AlertsPage() {
  const componentRegistry = (registry as any)['alert'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Alert"
      description="Los Alerts comunican mensajes importantes con estados de éxito, información, advertencia o error. Soporta múltiples layouts: Full Width, Inline y Stacked."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente Alert. El contenido se define mediante las props{' '}
          <code>title</code>, <code>subtitle</code> y <code>label</code>.
        </p>
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'\nimport { Alert } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: DEFAULT ───────────── */}
      <ContentCards title="Default Usage">
        <p className="text-sm text-slate-500 mb-4">
          Uso estándar de una alerta de éxito.
        </p>
        <ComponentExample
          preview={
            <Alert
              size="full-width"
              tone="success"
              icon={<SuccessIcon />}
              title="Pago acreditado"
              subtitle="El dinero ya se encuentra disponible en tu cuenta."
              label="Ver movimientos"
              onClose={() => console.log('Close clicked')}
            />
          }
          code={`<Alert 
  size="full-width"
  tone="success"
  icon={<SuccessIcon />}
  title="Pago acreditado"
  subtitle="El dinero ya se encuentra disponible en tu cuenta."
  label="Ver movimientos"
  onClose={() => handleClose()}
/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TONES (FULL WIDTH) ───────────── */}
      <ContentCards title="Tones">
        <p className="text-sm text-slate-500 mb-4">
          Variaciones semánticas en tamaño completo (Full Width).
        </p>
        <ComponentExample
          preview={
            /* Cambiamos el div para que tenga w-full. 
          Asegúrate de que las alertas no tengan un max-width interno que las limite 
          si quieres que ocupen todo el espacio del contenedor.
        */
            <div className="flex flex-col gap-4 w-full">
              <Alert
                tone="success"
                size="full-width"
                icon={<SuccessIcon />}
                title="Title"
                subtitle="Subtitle"
                label="Label"
                onClose={() => {}}
                className="w-full" // Forzamos w-full si el componente Alert no lo hace por defecto
              />
              <Alert
                tone="warning"
                size="full-width"
                icon={<WarningIcon />}
                title="Title"
                subtitle="Subtitle"
                label="Label"
                onClose={() => {}}
                className="w-full"
              />
              <Alert
                tone="error"
                size="full-width"
                icon={<ErrorIcon />}
                title="Title"
                subtitle="Subtitle"
                label="Label"
                onClose={() => {}}
                className="w-full"
              />
              <Alert
                tone="info"
                size="full-width"
                icon={<InfoIcon />}
                title="Title"
                subtitle="Subtitle"
                label="Label"
                onClose={() => {}}
                className="w-full"
              />
            </div>
          }
          code={`        <div className="flex flex-col gap-4 w-full">
          <Alert 
            tone="success" 
            size="full-width" 
            icon={<SuccessIcon />} 
            title="Title" 
            subtitle="Subtitle" 
            label="Label" 
            onClose={() => {}} 
            className="w-full" // Forzamos w-full si el componente Alert no lo hace por defecto
          />
          <Alert 
            tone="warning" 
            size="full-width" 
            icon={<WarningIcon />} 
            title="Title" 
            subtitle="Subtitle" 
            label="Label" 
            onClose={() => {}} 
            className="w-full"
          />
          <Alert 
            tone="error" 
            size="full-width" 
            icon={<ErrorIcon />} 
            title="Title" 
            subtitle="Subtitle" 
            label="Label" 
            onClose={() => {}} 
            className="w-full"
          />
          <Alert 
            tone="info" 
            size="full-width" 
            icon={<InfoIcon />} 
            title="Title" 
            subtitle="Subtitle" 
            label="Label" 
            onClose={() => {}} 
            className="w-full"
          />
        </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Layouts (Sizes)">
        <p className="text-sm text-slate-500 mb-4">
          Dimensiones disponibles para diferentes contextos de UI.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  size="full-width" (1184px)
                </span>
                <Alert
                  size="full-width"
                  tone="info"
                  icon={<InfoIcon />}
                  title="Full Width Alert"
                  subtitle="Ocupa todo el contenedor disponible."
                  label="Label"
                  onClose={() => {}}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  size="inline" (343px)
                </span>
                <Alert
                  size="inline"
                  tone="info"
                  icon={<InfoIcon />}
                  title="Inline Alert"
                  subtitle="Ancho fijo de 343px."
                  label="Label"
                  onClose={() => {}}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  size="stacked" (343px vertical)
                </span>
                <Alert
                  size="stacked"
                  tone="info"
                  icon={<InfoIcon />}
                  title="Stacked Alert"
                  subtitle="Layout vertical para móviles."
                  label="Label"
                  onClose={() => {}}
                />
              </div>
            </div>
          }
          code={`            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  size="full-width" (1184px)
                </span>
                <Alert
                  size="full-width"
                  tone="info"
                  icon={<InfoIcon />}
                  title="Full Width Alert"
                  subtitle="Ocupa todo el contenedor disponible."
                  label="Label"
                  onClose={() => {}}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  size="inline" (343px)
                </span>
                <Alert
                  size="inline"
                  tone="info"
                  icon={<InfoIcon />}
                  title="Inline Alert"
                  subtitle="Ancho fijo de 343px."
                  label="Label"
                  onClose={() => {}}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  size="stacked" (343px vertical)
                </span>
                <Alert
                  size="stacked"
                  tone="info"
                  icon={<InfoIcon />}
                  title="Stacked Alert"
                  subtitle="Layout vertical para móviles."
                  label="Label"
                  onClose={() => {}}
                />
              </div>
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: PERSISTENT (SIN CLOSE) ───────────── */}
      <ContentCards title="Persistent (No Close Button)">
        <p className="text-sm text-slate-500 mb-4">
          Para alertas que deben ser leídas y no pueden descartarse, simplemente
          omite la prop <code>onClose</code>.
        </p>
        <ComponentExample
          preview={
            <div className="w-full">
              <Alert
                size="full-width"
                tone="warning"
                icon={<WarningIcon />}
                title="Mantenimiento programado"
                subtitle="Nuestros servicios estarán interrumpidos hoy de 02:00 a 04:00 AM por mejoras en la plataforma."
              />
            </div>
          }
          code={`<div className="w-full">
              <Alert
                size="full-width"
                tone="warning"
                icon={<WarningIcon />}
                title="Mantenimiento programado"
                subtitle="Nuestros servicios estarán interrumpidos hoy de 02:00 a 04:00 AM por mejoras en la plataforma."
              />
            </div>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Metadatos técnicos y definición de todos los tokens (Typography,
          Tones, Sizes) para el componente Alert.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
