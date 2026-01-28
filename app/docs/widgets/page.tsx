'use client';

import * as React from 'react';
//import { LastMovements, Movement } from 'nave-ui-library/react';
import {
  LastMovements,
  Movement,
  Loader,
  Label,
  ListItem,
  EmptyState,
  Alert,
  AlertDescription,
  AlertTitle,
  Banner,
} from '@/packages/ui-library/dist/react';
import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import { tokenVariants } from '@/app/utils/tokens';

export default function LastMovementsPage() {
  const naveTheme = tokenVariants[0].tokens;

  // Datos de ejemplo para la demo
  const mockMovements: Movement[] = [
    {
      id: '1',
      date: '19 Dic, 08:21',
      title: 'QR',
      subtitle: 'Caja Principal',
      amount: '$ 32.850,10',
      status: 'success',
    },
    {
      id: '2',
      date: '18 Dic, 14:45',
      title: 'Tienda online',
      subtitle: 'Orden #4432',
      amount: '$ 12.400,00',
      status: 'pending',
    },
    {
      id: '3',
      date: '18 Dic, 11:20',
      title: 'Link de pago',
      subtitle: 'Venta de Servicios',
      amount: '$ 5.000,00',
      status: 'failed',
    },
    {
      id: '4',
      date: '17 Dic, 10:00',
      title: 'QR',
      subtitle: 'Sucursal Palermo',
      amount: '$ 8.900,50',
      status: 'refunded',
    },
  ];

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [expandedDefault, setExpandedDefault] = React.useState(true);
  const [expandedLoading, setExpandedLoading] = React.useState(true);
  const [expandedEmpty, setExpandedEmpty] = React.useState(true);
  const [expandedErrorAlert, setExpandedErrorAlert] = React.useState(true);
  const [expandedErrorBanner, setExpandedErrorBanner] = React.useState(true);

  return (
    <DocsPage
      title="Last Movements Widget"
      description="Un widget complejo que resume la actividad financiera, integrando filtrado por fecha y estados de carga."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <CodeBlock
          code={`import { LastMovements } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: INTERACTIVO ───────────── */}
      <ContentCards title="Complete Interactive Widget">
        <p className="text-sm text-slate-500 mb-6">
          Este widget utiliza un <code>Popover</code> con un{' '}
          <code>Calendar</code> en su acción de cabecera para filtrar los datos.
        </p>
        <ComponentExample
          preview={
            <div className="w-full max-w-2xl mx-auto">
              <LastMovements
                title="Últimos movimientos"
                period="Este mes"
                state="default"
                date={date}
                expanded={expandedDefault}
                onDateChange={setDate}
                onExpandedChange={setExpandedDefault}
              >
                {mockMovements.map((item) => (
                  <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    amount={item.amount}
                    status={item.status as any}
                    onItemClick={() => console.log(item.id)}
                  />
                ))}
              </LastMovements>
            </div>
          }
          code={`const [date, setDate] = useState<Date>();
const [expanded, setExpanded] = useState(true);

<LastMovements
  title="Últimos movimientos"
  period="Este mes"
  date={date}
  expanded={expanded}
  onDateChange={setDate}
  onExpandedChange={setExpanded}
>
  {movements.map((item) => (
    <ListItem key={item.id} {...item} />
  ))}
</LastMovements>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: ESTADOS (LOADING & EMPTY) ───────────── */}
      <ContentCards title="States">
        <p className="text-sm text-slate-500 mb-6">
          El widget soporta distintos estados visuales según el ciclo de vida de
          los datos: carga, vacío y error. Cada estado puede personalizar su
          contenido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ───────── Loading ───────── */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Loading State
            </span>

            <ComponentExample
              preview={
                <LastMovements
                  title="Movimientos"
                  period="Este mes"
                  state="loading"
                  date={date}
                  expanded={expandedLoading}
                  onDateChange={setDate}
                  onExpandedChange={setExpandedLoading}
                  loadingContent={
                    <div className="flex flex-col items-center gap-2 p-4 justify-center">
                      <Loader size="lg" />
                      <Label>Cargando datos...</Label>
                    </div>
                  }
                />
              }
              code={`const [date, setDate] = useState<Date>();
const [expanded, setExpanded] = useState(true);

<LastMovements
  title="Movimientos"
  period="Este mes"
  state="loading"
  date={date}
  expanded={expanded}
  onDateChange={setDate}
  onExpandedChange={setExpanded}
  loadingContent={
    <div className="flex flex-col items-center gap-2 p-4">
      <Loader size="lg" />
      <Label>Cargando datos...</Label>
    </div>
  }
/>`}
            />
          </div>

          {/* ───────── Empty ───────── */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Empty State
            </span>

            <ComponentExample
              preview={
                <LastMovements
                  title="Movimientos"
                  period="Este mes"
                  state="empty"
                  date={date}
                  expanded={expandedEmpty}
                  onDateChange={setDate}
                  onExpandedChange={setExpandedEmpty}
                  emptyContent={
                    <EmptyState
                      title="No hay movimientos"
                      description="Todavía no registramos operaciones"
                    />
                  }
                />
              }
              code={`const [date, setDate] = useState<Date>();
const [expanded, setExpanded] = useState(true);

<LastMovements
  title="Movimientos"
  period="Este mes"
  state="empty"
  date={date}
  expanded={expanded}
  onDateChange={setDate}
  onExpandedChange={setExpanded}
  emptyContent={
    <EmptyState
      title="No hay movimientos"
      description="Todavía no registramos operaciones"
    />
  }
/>`}
            />
          </div>

          {/* ───────── Error (Alert) ───────── */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Error State (Alert)
            </span>

            <ComponentExample
              preview={
                <LastMovements
                  title="Movimientos"
                  period="Este mes"
                  state="error"
                  date={date}
                  expanded={expandedErrorAlert}
                  onDateChange={setDate}
                  onExpandedChange={setExpandedErrorAlert}
                  errorContent={
                    <Alert tone="error">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>Something went wrong.</AlertDescription>
                    </Alert>
                  }
                />
              }
              code={`const [date, setDate] = useState<Date>();
const [expanded, setExpanded] = useState(true);

<LastMovements
  title="Movimientos"
  period="Este mes"
  state="error"
  date={date}
  expanded={expanded}
  onDateChange={setDate}
  onExpandedChange={setExpanded}
  errorContent={
    <Alert tone="error">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong.
      </AlertDescription>
    </Alert>
  }
/>`}
            />
          </div>

          {/* ───────── Error (Banner) ───────── */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Error State (Banner)
            </span>

            <ComponentExample
              preview={
                <LastMovements
                  title="Movimientos"
                  period="Este mes"
                  state="error"
                  date={date}
                  expanded={expandedErrorBanner}
                  onDateChange={setDate}
                  onExpandedChange={setExpandedErrorBanner}
                  errorContent={
                    <Banner
                      tone="error"
                      title="Error"
                      subtitle="No pudimos sincronizar tus ventas."
                    />
                  }
                />
              }
              code={`const [date, setDate] = useState<Date>();
const [expanded, setExpanded] = useState(true);

<LastMovements
  title="Movimientos"
  period="Este mes"
  state="error"
  date={date}
  expanded={expanded}
  onDateChange={setDate}
  onExpandedChange={setExpanded}
  errorContent={
    <Banner
      tone="error"
      title="Error"
      subtitle="No pudimos sincronizar tus ventas."
    />
  }
/>`}
            />
          </div>
        </div>
      </ContentCards>
    </DocsPage>
  );
}
