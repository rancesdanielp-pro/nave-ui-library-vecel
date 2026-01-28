'use client';

//import { Banner, Button } from 'nave-ui-library/react';
import {
  AlertTriangle,
  CardSim,
  CheckCircle,
  Info,
  Timer,
  XCircle,
} from 'lucide-react';

import { Banner, Button } from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';

export default function BannersPage() {
  const componentRegistry = (registry as any)['banner'];
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Banner"
      description="Componente utilizado para presentar mensajes informativos o accionables en contextos globales o específicos."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css
import { Banner } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TONES ───────────── */}
      <ContentCards title="Semantic Tones">
        <p className="text-sm text-slate-500 mb-6">
          Utiliza los tonos para comunicar diferentes estados: éxito,
          advertencia, error o información.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-4 w-full">
              <Banner
                tone="info"
                title="Nueva funcionalidad"
                subtitle="Ahora puedes exportar tus reportes en formato Excel."
                icon={<Info className="size-5" />}
              />
              <Banner
                tone="success"
                title="Pago acreditado"
                subtitle="El dinero ya se encuentra disponible en tu cuenta."
                icon={<CheckCircle className="size-5" />}
              />
              <Banner
                tone="warning"
                title="Acceso limitado"
                subtitle="Tu suscripción vence en 3 días. Renueva ahora para evitar cortes."
                icon={<AlertTriangle className="size-5" />}
              />
              <Banner
                tone="error"
                title="Error de conexión"
                subtitle="No pudimos sincronizar tus ventas. Reintenta en unos minutos."
                icon={<XCircle className="size-5" />}
              />
            </div>
          }
          code={`<Banner tone="info" title="..." subtitle="..." />\n<Banner tone="success" title="..." subtitle="..." />\n<Banner tone="warning" title="..." subtitle="..." />\n<Banner tone="error" title="..." subtitle="..." />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ACTIONS ───────────── */}
      <ContentCards title="Actions & Links">
        <p className="text-sm text-slate-500 mb-6">
          Los banners pueden contener acciones mediante links directos o
          funciones de callback.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col gap-4 w-full">
              <Banner
                tone="brand"
                title="¡Bienvenido a Nave!"
                subtitle="Completa tu perfil para empezar a cobrar."
                icon={<CardSim className="size-5" />}
                actionLabel="Completar perfil"
                onActionClick={() => alert('Redirigiendo...')}
              />
              <Banner
                tone="neutral"
                title="Mantenimiento programado"
                subtitle="El sistema estará fuera de servicio hoy a las 23:00hs."
                icon={<Timer className="size-5" />}
                actionLabel="Ver cronograma"
                actionHref="#"
              />
            </div>
          }
          code={`<Banner \n  tone="brand" \n  title="..." \n  actionLabel="Click me" \n  onActionClick={() => {}} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: SIZES ───────────── */}
      <ContentCards title="Sizes">
        <ComponentExample
          preview={
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="w-full space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Full (Default)
                </span>
                <Banner
                  tone="info"
                  title="Banner de ancho completo"
                  icon={<Info className="size-5" />}
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-slate-400 font-bold">
                  Compact
                </span>
                <Banner
                  size="compact"
                  tone="info"
                  title="Banner compacto"
                  icon={<Info className="size-5" />}
                />
              </div>
            </div>
          }
          code={`<Banner size="full" title="..." />\n<Banner size="compact" title="..." icon={<Info className="size-5" />} />`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: CUSTOM SLOTS ───────────── */}
      <ContentCards title="Custom End Slots">
        <p className="text-sm text-slate-500 mb-6">
          Puedes inyectar cualquier componente en el extremo derecho usando la
          prop <code>endSlot</code>.
        </p>
        <ComponentExample
          preview={
            <Banner
              tone="neutral"
              title="¿Necesitas ayuda?"
              subtitle="Nuestro equipo de soporte está disponible 24/7."
              endSlot={<Button size="sm">Chat</Button>}
            />
          }
          code={`<Banner \n  title="..." \n  endSlot={<Button size="sm">Chat</Button>} \n/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Configuración técnica del componente Banner, incluyendo el mapeo de
          colores para cada tono semántico.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
