'use client';

import * as React from 'react';
import {
  Badge,
  Banner,
  Button,
  Card,
  DragSlider,
  Navbar,
  PromoBanner,
  Separator,
  Sidebar,
  ThemeProvider,
} from '@/packages/ui-library/dist/react';
import { tokenVariants } from '@/app/utils/tokens';
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  CreditCard,
  DownloadIcon,
} from 'lucide-react';
import { cn } from '@/packages/ui-library/src/utils/cn';

// Iconos SVGs para la navegación
const HomeSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const SalesSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);
const SettingsSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
type PaymentStatus =
  | 'created'
  | 'pending'
  | 'refunded'
  | 'rejected'
  | 'accredited';
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
  rejected: { label: 'Rechazado', variant: 'warning' },
  accredited: { label: 'Acreditado', variant: 'brand' },
} as const;

// mocks/navbar.ts
export const merchantsMock = [
  { id: '1', name: 'Nave Coffee Roasters' },
  { id: '2', name: 'Nave Bakery & Co.' },
];

export const userMock = {
  name: 'Rodrigo Paz',
  role: 'Administrador',
  avatarUrl: 'https://github.com/shadcn.png',
  menu: [
    { id: 'profile', label: 'Mi Perfil', onClick: () => {} },
    { id: 'logout', label: 'Cerrar sesión', onClick: () => {} },
  ],
};

// mocks/sidebar.ts
export const sidebarSectionsMock = [
  {
    id: 'main',
    title: 'Gestión',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <HomeSvg />, active: true },
      { id: 'sales', label: 'Mis Ventas', icon: <SalesSvg /> },
    ],
  },
  {
    id: 'config',
    title: 'Ajustes',
    items: [{ id: 'settings', label: 'Configuración', icon: <SettingsSvg /> }],
  },
];

export default function OverviewPage() {
  /* NAVBAR */
  const [currentMerchant, setCurrentMerchant] = React.useState('1');

  /* SIDEBAR */
  const [collapsed, setCollapsed] = React.useState(false);
  const naveTheme = tokenVariants[0].tokens;

  /* CARD LAST MOVEMENTS */
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
    {
      id: '4',
      title: 'Ronda Alto Palermo',
      date: '19 Dic',
      time: '08:01',
      amount: '$2.500,00',
      status: 'rejected',
      type: 'qr',
    },
    {
      id: '5',
      title: 'Ronda Dot',
      date: '18 Dic',
      time: '19:32',
      amount: '$7.890,12',
      status: 'accredited',
      type: 'store',
    },
  ];

  return (
    <ThemeProvider theme={naveTheme}>
      <div className="flex flex-col gap-4 w-full min-h-[600px] bg-app-bg p-6 border border-border-main rounded-2xl">
        {/* NAVBAR */}
        <Navbar>
          <Navbar.Start>
            <Navbar.Logo />
            <Separator orientation="vertical" />
            <Navbar.Merchant
              merchants={merchantsMock}
              currentId={currentMerchant}
              onChange={setCurrentMerchant}
            />
          </Navbar.Start>

          <Navbar.End>
            <Navbar.Slot>
              <Button variant="secondary" startIcon={<CreditCard className="h-4 w-4" />}>
                Cobrar
              </Button>
            </Navbar.Slot>

            <Navbar.Slot>
              <Navbar.User user={userMock} />
            </Navbar.Slot>
          </Navbar.End>
        </Navbar>

        <div className="flex gap-6">
          {/* SIDEBAR */}
          <aside className="w-[240px] shrink-0">
            <Sidebar
              title="Tu Nave"
              sections={sidebarSectionsMock}
              collapsed={collapsed}
              onToggleCollapse={() => setCollapsed(!collapsed)}
            />
          </aside>

          {/* MAIN + RIGHT COLUMN */}
          <section className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_337px] gap-6">
            {/* MAIN */}
            <div className="space-y-5">
              <Card
                title="Total neto de ventas"
                variant="primary"
                className="w-full"
                action={
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 transition-transform text-[#9DA5B5]'
                    )}
                  />
                }
              >
                <div className="mt-3">
                  <div className="flex items-baseline gap-2">
                    <p className="text-[32px] font-[500] text-[#020303]">
                      $32.045.668
                    </p>
                    <Badge tone="success" size="small">
                      +10% que el último mes
                    </Badge>
                  </div>
                  <Separator orientation="horizontal" className="my-3" />
                  <div className="mt-3 grid grid-cols-3 gap-4 text-xs text-muted">
                    <div className="space-y-2">
                      <p className="text-[14px] font-[550] text-[#6E7991] leading-tight">
                        Total bruto
                      </p>
                      <p className="text-[16px] font-[550] text-[#020303]">
                        $38.211.412,12
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[14px] font-[550] text-[#6E7991] leading-tight">
                        Impuestos (17,5%)
                      </p>
                      <p className="text-[16px] font-[550] text-[#020303]">
                        -$3.500.000,00
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[14px] font-[550] text-[#6E7991] leading-tight">
                        Costos servicio (7,5%)
                      </p>
                      <p className="text-[16px] font-[550] text-[#020303]">
                        -$1.500.000,00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card
                title="Tenemos las mejores promociones para tu comercio"
                className="w-full"
                action={
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 transition-transform text-[#9DA5B5]'
                    )}
                  />
                }
              >
                <DragSlider>
                  <PromoBanner
                    title="10% de descuento para clientes Galicia"
                    className="bg-[#F9F9FA]"
                    imageSrc="https://picsum.photos/400/200"
                  />

                  <PromoBanner
                    title="9 cuotas sin interés para todas tus ventas"
                    className="bg-[#F9F9FA]"
                    imageSrc="https://picsum.photos/400/200"
                  />

                  <PromoBanner
                    title="12 cuotas sin interés para todas tus ventas"
                    className="bg-[#F9F9FA]"
                    imageSrc="https://picsum.photos/400/200"
                  />
                </DragSlider>
              </Card>

              <Card
                title="Acreditaciones"
                className="w-full"
                action={
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 transition-transform text-[#9DA5B5]'
                    )}
                  />
                }
              >
                <div className="flex gap-6 mt-3">
                  <div className="flex-1 space-y-2 bg-[#F9F9FA] rounded-lg p-4">
                    <p className="text-[14px] font-[550] text-[#6E7991] leading-tight">
                      Total pendiente
                    </p>
                    <p className="text-[18px] font-[550] text-[#020303]">
                      $1.321.123,44
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="secondary"
                        size="small"
                        startIcon={<DownloadIcon className="h-4 w-4" />}
                      >
                        Descargar planilla de acreditaciones
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="px-4">
                      <p className="text-[14px] font-medium text-[#6E7991] text-left">
                        Próximas acreditaciones
                      </p>
                    </div>

                    <div>
                      {/* ROW 1 */}
                      <div className="flex items-center justify-between px-4 py-3">
                        {/* LEFT */}
                        <span className="text-[12px] font-normal text-[#3A3F4B] text-left">
                          Lunes 1/12
                        </span>

                        {/* RIGHT */}

                        <div className="flex items-center gap-2">
                          <Badge tone="brand" size="small">
                            Lo recibirás hoy
                          </Badge>
                          <span className="text-[14px] font-semibold text-[#020303]">
                            $1.340.000,50
                          </span>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="flex items-center justify-between px-4 py-3">
                        <span className="text-[12px] font-normal text-[#3A3F4B] text-right">
                          Martes 2/12
                        </span>

                        <span className="text-[14px] font-semibold text-[#020303]">
                          $550.998,10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-5 w-[337px]">
              <Card
                title="Últimos movimientos"
                className="w-full"
                action={
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 transition-transform text-[#9DA5B5]'
                    )}
                  />
                }
              >
                <div className="divide-y-1">
                  {mockMovements.map((m, index) => {
                    const status = statusConfig[m.status];

                    return (
                      <div
                        key={m.id}
                        className="flex justify-between py-2 border-b border-[#E2E5E9] last:border-none"
                      >
                        <div className="space-y-0.5">
                          <p className="text-[12px] font-[400] text-[#6E7991]">
                            {m.title}
                          </p>
                          <p className="text-[#020303] font-[550] text-[14px]">
                            {m.date} · {m.time}
                          </p>
                        </div>

                        <div className="text-right space-y-0.5">
                          <p className="text-[14px] font-[600] text-[#020303]">
                            {m.amount}
                          </p>
                          <Badge tone={status.variant} size="small">
                            {status.label}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <PromoBanner
                title="Empezá a cobrar con Nave Point"
                //description="Recibí pagos con tarjeta de crédito, débito y QR"
                className="bg-[#F9F9FA]"
                imageSrc="https://picsum.photos/400/200"
              />

              <Card
                title="Compras desconocidas"
                className="w-full"
                action={
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 transition-transform text-[#9DA5B5]'
                    )}
                  />
                }
              >
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="small"
                    endIcon={<ChevronsUpDownIcon className="h-4 w-4" />}
                  >
                    Este mes
                  </Button>
                </div>
                <div className="mt-3">
                  <p className="text-[14px] font-[550] text-[#6E7991] leading-tight">
                    Monto total desconocido
                  </p>
                  <p className="text-[24px] font-[500] text-[#020303]">
                    $12.021.412,21
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-[14px] font-[550] text-[#6E7991] leading-tight">
                    Total de compras desconocidas
                  </p>
                  <p className="text-[24px] font-[500] text-[#020303]">31</p>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}
