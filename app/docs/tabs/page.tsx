'use client';

/*
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  Card,
  ListItem
} from 'nave-ui-library/react';
 */
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  Icon,
  Badge,
  Separator,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';
import { StoreIcon } from 'lucide-react';

type PaymentStatus = 'created' | 'pending' | 'refunded';
type PaymentType = 'link' | 'store' | 'qr';

export type PaymentMovement = {
  id: string;
  title: string;
  date: string;
  time: string;
  amount: string;
  status: PaymentStatus;
  type: PaymentType;
};

const statusConfig = {
  created: { label: 'Creado', variant: 'warning' },
  pending: { label: 'Por acreditar', variant: 'success' },
  refunded: { label: 'Devuelto', variant: 'info' },
} as const;

const typeIcon = {
  link: 'link',
  store: 'store',
  qr: 'qr',
} as const;

export default function TabsPage() {
  const componentRegistry = (registry as any)['tabs'];
  const naveTheme = tokenVariants[0].tokens;

  const mockMovements: PaymentMovement[] = [
    {
      id: '1',
      title: 'Ronda Dot',
      date: '20 Dic',
      time: '18:32',
      amount: '$32.850,10',
      status: 'created',
      type: 'link',
    },
    {
      id: '2',
      title: 'Ronda Alto Palermo',
      date: '19 Dic',
      time: '12:10',
      amount: '$1.450,00',
      status: 'pending',
      type: 'store',
    },
    {
      id: '3',
      title: 'Ronda Dot',
      date: '19 Dic',
      time: '08:21',
      amount: '$98.234,50',
      status: 'refunded',
      type: 'qr',
    },
  ];

  return (
    <DocsPage
      title="Tabs"
      description="Organiza contenido en diferentes vistas que se pueden alternar mediante pestañas. Ideal para separar contextos dentro de una misma pantalla."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import 'nave-ui-library/styles.css'
                 import { Tabs, TabsList, TabsTrigger, TabsContent } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: BÁSICO ───────────── */}
      <ContentCards title="Basic Usage">
        <p className="text-sm text-slate-500 mb-6">
          Un conjunto de pestañas estándar con tamaño <code>large</code>. El
          estado activo aplica un sombreado suave y fondo blanco sobre la base
          gris.
        </p>
        <ComponentExample
          preview={
            <div className="flex justify-center w-full">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Mi Cuenta</TabsTrigger>
                  <TabsTrigger value="password">Seguridad</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <Card title="Información Personal">
                    <p className="text-sm text-slate-600">
                      Configura los datos básicos de tu perfil de Nave.
                    </p>
                  </Card>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <Card title="Contraseña">
                    <p className="text-sm text-slate-600">
                      Cambia tu clave de acceso o activa 2FA.
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={`
            <div className="flex justify-center w-full">
              
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Mi Cuenta</TabsTrigger>
                  <TabsTrigger value="password">Seguridad</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <Card title="Información Personal">
                    <p className="text-sm text-slate-600">
                      Configura los datos básicos de tu perfil de Nave.
                    </p>
                  </Card>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <Card title="Contraseña">
                    <p className="text-sm text-slate-600">
                      Cambia tu clave de acceso o activa 2FA.
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
              
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: TAMAÑOS ───────────── */}
      <ContentCards title="Sizes">
        <p className="text-sm text-slate-500 mb-6">
          Soporta variantes <code>medium</code> (42px) y <code>small</code>{' '}
          (32px), ajustando automáticamente los paddings y el tamaño de fuente.
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Medium (Default)
                </span>
                <Tabs defaultValue="tab1medium" size="medium">
                  <TabsList>
                    <TabsTrigger value="tab1" disabled>
                      Label
                    </TabsTrigger>
                    <TabsTrigger value="tab2">Label</TabsTrigger>
                    <TabsTrigger value="tab3">Label</TabsTrigger>
                    <TabsTrigger value="tab4">Label</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Small
                </span>
                <Tabs defaultValue="tab1small" size="small">
                  <TabsList>
                    <TabsTrigger value="tab11">Label</TabsTrigger>
                    <TabsTrigger value="tab12">Label</TabsTrigger>
                    <TabsTrigger value="tab13">Label</TabsTrigger>
                    <TabsTrigger value="tab14">Label</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          }
          code={`
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Medium (Default)
                </span>
                <Tabs defaultValue="tab1medium" size="medium">
                  <TabsList>
                    <TabsTrigger value="tab1" disabled>
                      Label
                    </TabsTrigger>
                    <TabsTrigger value="tab2">Label</TabsTrigger>
                    <TabsTrigger value="tab3">Label</TabsTrigger>
                    <TabsTrigger value="tab4">Label</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Small
                </span>
                <Tabs defaultValue="tab1small" size="small">
                  <TabsList>
                    <TabsTrigger value="tab11">Label</TabsTrigger>
                    <TabsTrigger value="tab12">Label</TabsTrigger>
                    <TabsTrigger value="tab13">Label</TabsTrigger>
                    <TabsTrigger value="tab14">Label</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: COMPOSICIÓN ───────────── */}
      <ContentCards title="Advanced Composition">
        <p className="text-sm text-slate-500 mb-6">
          Las pestañas pueden contener estructuras complejas como{' '}
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-md mx-auto">
              <Tabs defaultValue="all">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    Moovimientos
                  </TabsTrigger>
                  <TabsTrigger value="success" className="flex-1">
                    Descuentos
                  </TabsTrigger>
                  <TabsTrigger value="pending" className="flex-1">
                    Detalles
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="all"
                  className="mt-4 border border-[#E2E5E9] rounded-xl overflow-hidden"
                >
                  {mockMovements.map((item, index) => {
                    const status = statusConfig[item.status];

                    return (
                      <div key={item.id} className="w-full">
                        <div
                          key={item.id}
                          className="flex items-center justify-between w-full px-4 py-3"
                        >
                          {/* LEFT */}
                          <div className="flex items-start gap-3">
                            {/* Icon */}

                            {/* Info */}
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1">
                                {' '}
                                <Icon color="muted" size="sm">
                                  <StoreIcon
                                    size={18}
                                    className="text-[--text-muted]"
                                  />
                                </Icon>
                                {/* Title */}
                                <span className="text-[12px] font-[400] text-[#6E7991]">
                                  {item.title}
                                </span>
                              </div>

                              {/* Date */}
                              <span className="text-[#020303] font-[550] text-[14px]">
                                {item.date}, {item.time}
                              </span>

                              {/* Type */}
                              <div className="flex items-center gap-1 mt-1">
                                {/* opcional */}
                                <span className="text-[12px] font-[400] text-[#6E7991]">
                                  {item.type === 'link' && 'Link de pago'}
                                  {item.type === 'store' && 'Tienda online'}
                                  {item.type === 'qr' && 'QR'}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="flex flex-col items-end gap-1">
                            {/* Amount */}
                            <span className="text-[14px] font-[600] text-[#020303]">
                              {item.amount}
                            </span>

                            {/* Status */}
                            <Badge tone={status.variant} size="small">
                              {status.label}
                            </Badge>
                          </div>
                        </div>
                        {/* SEPARATOR */}
                        {index !== mockMovements.length - 1 && (
                          <Separator orientation="horizontal" />
                        )}
                      </div>
                    );
                  })}
                </TabsContent>
              </Tabs>
            </div>
          }
          code={`
            <div className="w-full max-w-md mx-auto">
              <Tabs defaultValue="all">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    Moovimientos
                  </TabsTrigger>
                  <TabsTrigger value="success" className="flex-1">
                    Descuentos
                  </TabsTrigger>
                  <TabsTrigger value="pending" className="flex-1">
                    Detalles
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="all"
                  className="mt-4 border border-[#E2E5E9] rounded-xl overflow-hidden"
                >
                  {mockMovements.map((item, index) => {
                    const status = statusConfig[item.status];

                    return (
                      <div key={item.id} className="w-full">
                        <div
                          key={item.id}
                          className="flex items-center justify-between w-full px-4 py-3"
                        >
                          {/* LEFT */}
                          <div className="flex items-start gap-3">
                            {/* Icon */}

                            {/* Info */}
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1">
                                {' '}
                                <Icon color="muted" size="sm">
                                  <StoreIcon
                                    size={18}
                                    className="text-[--text-muted]"
                                  />
                                </Icon>
                                {/* Title */}
                                <span className="text-[12px] font-[400] text-[#6E7991]">
                                  {item.title}
                                </span>
                              </div>

                              {/* Date */}
                              <span className="text-[#020303] font-[550] text-[14px]">
                                {item.date}, {item.time}
                              </span>

                              {/* Type */}
                              <div className="flex items-center gap-1 mt-1">
                                {/* opcional */}
                                <span className="text-[12px] font-[400] text-[#6E7991]">
                                  {item.type === 'link' && 'Link de pago'}
                                  {item.type === 'store' && 'Tienda online'}
                                  {item.type === 'qr' && 'QR'}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="flex flex-col items-end gap-1">
                            {/* Amount */}
                            <span className="text-[14px] font-[600] text-[#020303]">
                              {item.amount}
                            </span>

                            {/* Status */}
                            <Badge tone={status.variant} size="small">
                              {status.label}
                            </Badge>
                          </div>
                        </div>
                        {/* SEPARATOR */}
                        {index !== mockMovements.length - 1 && (
                          <Separator orientation="horizontal" />
                        )}
                      </div>
                    );
                  })}
                </TabsContent>
              </Tabs>
            </div>
            `}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: REGISTRY JSON ───────────── */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-bold mb-2 text-slate-900">Registry</h2>
        <p className="text-sm text-slate-500 mb-6">
          Este componente utiliza Radix UI Tabs y un sistema de{' '}
          <code>group/tabs</code> para que los triggers hereden el tamaño
          definido en la lista padre.
        </p>
        <CodeBlock code={JSON.stringify(componentRegistry, null, 2)} />
      </div>
    </DocsPage>
  );
}
