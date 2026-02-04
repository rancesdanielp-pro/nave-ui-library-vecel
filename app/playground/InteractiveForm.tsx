'use client';
import {
  Badge,
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  Switch,
  Textarea,
  ThemeProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Progress,
  Loader,
  Alert,
  AlertDescription,
  AlertTitle,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Banner,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Navbar,
  Card,
  PromoBanner,
  DragSlider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
  Icon,
  IntegrationCard,
  FileUpload,
  RadioItem,
  PasswordInput,
  SearchBar,
  Combobox,
  DatePickerInput,
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  TableFooter,
  EmptyState,
  Sidebar,
} from '@/packages/ui-library/dist/react/index';

import React from 'react';
import { useState } from 'react';

interface TokenVariant {
  name: string;
  tokens: Record<string, unknown>;
}

// Componente auxiliar para reducir repetición
const ComponentCard = ({
  title,
  children,
  span = 1,
}: {
  title: string;
  children: React.ReactNode;
  span?: number;
}) => (
  <div
    className={`rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 ${
      span > 1 ? `lg:col-span-${span}` : ''
    }`}
  >
    <span className="text-xs items-center tracking-wide text-gray-400">
      {title}
    </span>
    {children}
  </div>
);

export default function InteractiveForm({
  tokenVariants,
}: {
  tokenVariants: TokenVariant[];
}) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [theme, setTheme] = useState(tokenVariants[0].tokens);
  const [isOn, setIsOn] = useState(true);
  const [date, setDate] = React.useState<Date>();
  const [collapsed, setCollapsed] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('home');

  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl font-extrabold text-[var(--primary-color)] leading-tight m-6">
            Nave Design System
        </h1>
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
          <section className="space-y-4">
            <h1 className="text-sm font-medium text-gray-500 mt-4">
              Lists & Structures
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-4">
                <span className="text-xs items-center tracking-wide text-gray-400">
                  Navbar
                </span>

                <div>
                  <Navbar
                    merchants={[
                      { id: '1', name: 'Ronda Comercio y Servicios S.R.L.' },
                      { id: '2', name: 'Otro comercio' },
                    ]}
                    currentMerchantId="1"
                    onMerchantChange={(id) => console.log(id)}
                    actions={[
                      {
                        id: 'pay',
                        label: 'Cobrar',
                        icon: (
                          <Icon>
                            <svg viewBox="0 0 24 24" fill="none">
                              <rect
                                x="2"
                                y="5"
                                width="20"
                                height="14"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M2 10h20"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </Icon>
                        ),
                        onClick: () => {},
                      },
                    ]}
                    user={{
                      name: 'Lorena P.',
                      role: 'Cajera',
                      avatarUrl: 'https://github.com/evilrabbit.png',
                      menu: [
                        { id: 'profile', label: 'Perfil', onClick: () => {} },
                        {
                          id: 'logout',
                          label: 'Cerrar sesión',
                          onClick: () => {},
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <h1 className="text-sm font-medium text-gray-500 mt-4">
              Disclosure
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-4">
                <span className="text-xs  items-center tracking-wide text-gray-400">
                  Accordion
                </span>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Title</AccordionTrigger>
                    <AccordionContent>
                      This is an accordion content.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Title</AccordionTrigger>
                    <AccordionContent>
                      This is an accordion content.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Title</AccordionTrigger>
                    <AccordionContent>
                      This is an accordion content.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
          {/* Navegation */}
          <h2 className="text-xl font-semibold text-gray-800">Navegation</h2>
          <section className="grid grid-cols-3 gap-6">
            <ComponentCard title="Breadcrumbs">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">First level</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Current level</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ComponentCard>

            {['large', 'small'].map((size) => (
              <ComponentCard key={size} title="Tabs">
                <Tabs defaultValue="tab1">
                  <TabsList size={size as any}>
                    {[1, 2, 3, 4].map((n) => (
                      <TabsTrigger key={n} value={`tab${n}`}>
                        Label
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {[1, 2, 3, 4].map((n) => (
                    <TabsContent key={n} value={`tab${n}`}>
                      Contenido {n}
                    </TabsContent>
                  ))}
                </Tabs>
              </ComponentCard>
            ))}

            <ComponentCard title="Pagination">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </ComponentCard>

            <ComponentCard title="Modal Dialog">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </ComponentCard>
          </section>

          {/* Buttons */}
          <h2 className="text-xl font-semibold text-gray-800">Buttons</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['primary', 'secondary', 'tertiary'].map((variant) => (
              <ComponentCard
                key={variant}
                title={variant.charAt(0).toUpperCase() + variant.slice(1)}
              >
                <div className="flex flex-col items-center gap-4">
                  {(['brand', 'neutral', 'destructive'] as const).map(
                    (tone) => (
                      <Button
                        key={tone}
                        variant={variant as any}
                        tone={tone}
                        aria-label="label"
                      >
                        Label
                      </Button>
                    )
                  )}
                  <Button
                    variant={variant as any}
                    tone="destructive"
                    aria-label="label"
                    disabled
                  >
                    Label
                  </Button>
                </div>
              </ComponentCard>
            ))}

            <ComponentCard title="Button Icon">
              <div className="flex flex-col items-center gap-4">
                <Button
                  variant="secondary"
                  tone="brand"
                  aria-label="label"
                  className="flex items-center gap-2"
                >
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10h20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Icon>
                  Icon right
                </Button>
                <Button
                  variant="secondary"
                  tone="brand"
                  aria-label="label"
                  className="flex items-center gap-2"
                >
                  Icon left
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10h20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Icon>
                </Button>
              </div>
            </ComponentCard>
          </section>

          {/* Data Entry */}
          <div title="Data Entry">
            <h2 className="text-xl font-semibold text-gray-800">Data Entry</h2>
            <section className="space-y-4 centered">
              <h1 className="text-sm font-medium text-gray-500 mt-4">
                Inputs & Forms
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Text input */}
                <ComponentCard title="Text input">
                  <Input
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    tone="brand"
                  />
                  <Input
                    label="Label"
                    placeholder="Placeholder"
                    size="sm"
                    tone="brand"
                    error
                    helperText="Error message"
                  />
                  <Input label="Label" placeholder="Placeholder" disabled />
                </ComponentCard>

                {/* Password */}
                <ComponentCard title="Password">
                  <PasswordInput
                    label="Password"
                    placeholder="••••••••"
                    helperText="Helper text"
                  />
                  <PasswordInput
                    label="Password"
                    error
                    helperText="Password incorrect"
                    size="sm"
                  />
                  <PasswordInput label="Password" disabled />
                </ComponentCard>

                {/* Textarea */}
                <ComponentCard title="Textarea">
                  <Textarea
                    label="Description"
                    placeholder="Write something..."
                    helperText="Max 300 characters"
                  />
                  <Textarea
                    label="Description"
                    error
                    helperText="This field is required"
                  />
                  <Textarea label="Disabled" disabled placeholder="Disabled" />
                </ComponentCard>

                {/* Select */}
                <ComponentCard title="Select">
                  <Combobox
                    value={selectedVariant.toString()}
                    onValueChange={(v) => {
                      setSelectedVariant(Number(v));
                      setTheme(tokenVariants[Number(v)].tokens);
                    }}
                    items={tokenVariants.map((v, i) => ({
                      label: v.name,
                      value: i.toString(),
                    }))}
                    placeholder="Theme"
                  />
                </ComponentCard>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* SearchBar */}
                <ComponentCard title="SearchBar">
                  <SearchBar placeholder="Search…" />
                  <SearchBar size="sm" placeholder="Search users" />
                  <SearchBar disabled placeholder="Search…" />
                </ComponentCard>

                {/* Date */}
                <ComponentCard title="Date Picker">
                  <Popover>
                    <PopoverTrigger asChild>
                      <DatePickerInput
                        label="Select date"
                        placeholder="Select date"
                        value={date ? date.toLocaleDateString() : 'Este mes'}
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                </ComponentCard>

                {/* Textarea */}
                <ComponentCard title="Textarea">
                  <Textarea
                    label="Description"
                    placeholder="Write something..."
                    helperText="Max 300 characters"
                  />
                  <Textarea
                    label="Description"
                    error
                    helperText="This field is required"
                  />
                  <Textarea label="Disabled" disabled placeholder="Disabled" />
                </ComponentCard>
              </div>
            </section>
          </div>

          {/* Selection controls */}
          <section className="space-y-6 col-span-3">
            <h1 className="text-sm font-medium text-gray-500">
              Selection controls
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Checkbox */}
              <ComponentCard title="Checkbox">
                <div className="flex items-center gap-2 flex-col">
                  <Checkbox
                    label="Label"
                    description="Description"
                    size="regular"
                    defaultChecked
                  />
                  <Checkbox
                    label="Small"
                    description="Description"
                    size="small"
                  />
                  <Checkbox
                    label="Disabled"
                    description="Description"
                    disabled
                  />
                  <Checkbox
                    label="Label"
                    description="Description"
                    size="regular"
                    defaultChecked
                    disabled
                  />
                  <Checkbox
                    label="Label"
                    description="Description"
                    size="regular"
                    checked="indeterminate"
                    state="indeterminate"
                  />
                  <Checkbox
                    label="Label"
                    description="Description"
                    size="regular"
                    checked="indeterminate"
                    state="indeterminate"
                    disabled
                  />
                </div>
              </ComponentCard>

              {/* Switch */}
              <ComponentCard title="Switch">
                <div className="flex items-center gap-2 flex-col">
                  <Switch
                    id="s1"
                    label="Label"
                    description="Description"
                    size="regular"
                    checked={isOn}
                    onCheckedChange={setIsOn}
                  />
                  <Switch
                    id="s2"
                    label="Label"
                    description="Description"
                    size="regular"
                    checked={true}
                    disabled
                  />
                  <Switch
                    id="s3"
                    label="Label"
                    description="Description"
                    size="regular"
                    checked={false}
                  />
                  <Switch
                    id="s4"
                    label="Label"
                    description="Description"
                    size="regular"
                    checked={false}
                    disabled
                  />
                </div>
              </ComponentCard>

              {/* Radio group */}
              <ComponentCard title="Radio group">
                <RadioGroup defaultValue="one">
                  <RadioItem
                    value="one"
                    label="Option 1"
                    description="Description"
                  />
                  <RadioItem
                    value="two"
                    label="Option 2"
                    description="Disabled option"
                    disabled
                  />
                </RadioGroup>
                <RadioGroup defaultValue="onetwo">
                  <RadioItem
                    value="3"
                    label="Option 3"
                    checked={true}
                    description="Description"
                  />
                  <RadioItem
                    value="4"
                    label="Option 4"
                    description="Disabled option"
                    checked={true}
                    disabled
                  />
                </RadioGroup>
              </ComponentCard>
            </div>
          </section>

          {/* Data Display */}
          <div title="Data Display">
            <h2 className="text-xl font-semibold text-gray-800">
              Data Display
            </h2>
            <section className="space-y-4">
              <h1 className="text-sm font-medium text-gray-500 mt-4">
                Lists & Structures
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-4">
                  <span className="text-xs  items-center tracking-wide text-gray-400">
                    Table
                  </span>

                  <div className="overflow-x-auto">
                    <Table>
                      {/* 
                      <TableCaption>
                        A list of your recent invoices.
                      </TableCaption>
                      */}
                      <TableHeader>
                        <TableRow>
                          <TableHead>Header Text</TableHead>
                          <TableHead>Header Text</TableHead>
                          <TableHead>Header Text</TableHead>
                          <TableHead>Header Text</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        <TableRow>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>
                            <Badge size="medium" tone="warning">
                              label
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>
                            <Badge size="medium" tone="info">
                              label
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>
                            <Badge size="medium" tone="success">
                              label
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>Cell Text</TableCell>
                          <TableCell>
                            <Badge size="medium" tone="error">
                              label
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>

                      <TableFooter>
                        <div className="text-sm text-[#6E7991] whitespace-nowrap">
                          1–10 de 91 resultados
                        </div>

                        <Pagination className="justify-end">
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#" isActive>
                                2
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationNext href="#" />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </TableFooter>
                    </Table>
                  </div>
                </div>
              </div>
            </section>

            {/* Selection controls */}
            <section className="space-y-6">
              {/* Section title */}
              <h1 className="text-sm font-medium text-gray-500 mt-4">
                Overlays
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Dropdown */}
                <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-2">
                  <span className="block text-xs tracking-wide text-gray-400 text-center">
                    Dropdown
                  </span>

                  <div className="flex justify-center ">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>Open</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Tooltip */}
                <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-2">
                  <span className="block text-xs tracking-wide text-gray-400 text-center">
                    Tooltip
                  </span>

                  <div className="flex justify-center gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="Hover me"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="top">Tooltip arriba</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="Hover me"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        Tooltip abajo
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="Hover me"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        Tooltip izquierda
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="Hover me"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Tooltip derecha
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Banners */}
          <div title="Banner">
            <h2 className="text-xl font-semibold text-gray-800">Banners</h2>
            <br />
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(['success', 'warning', 'info', 'error'] as const).map(
                (tone) => (
                  <ComponentCard
                    key={tone}
                    title={tone.charAt(0).toUpperCase() + tone.slice(1)}
                    span={2}
                  >
                    <div className="flex justify-center">
                      <Banner tone={tone} title="title" subtitle="subtitle" />
                    </div>
                  </ComponentCard>
                )
              )}

              <ComponentCard title="banner como link" span={2}>
                <div className="flex justify-center">
                  <Banner
                    tone="warning"
                    title="Los pagos con tarjetas de débito se acreditarán a lo largo del día"
                    subtitle="Estamos resolviendo un problema y las acreditaciones pueden tardar un poco más de lo normal."
                    actionHref="/detalle"
                  />
                </div>
              </ComponentCard>

              <ComponentCard title="banner como callback" span={2}>
                <div className="flex justify-center">
                  <Banner
                    tone="warning"
                    title="Los pagos con tarjetas de débito se acreditarán a lo largo del día"
                    subtitle="Estamos resolviendo un problema..."
                    onActionClick={() => console.log('click')}
                    actionLabel="Ver detalle"
                  />
                </div>
              </ComponentCard>

              {/* PromoBanner */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {['Default', 'Left img'].map((pos, idx) => (
                    <ComponentCard key={pos} title={`PromoBanner ${pos}`}>
                      <PromoBanner
                        title={`Promo con imagen a la ${
                          idx === 0 ? 'derecha' : 'izquierda'
                        }`}
                        imageSrc="https://picsum.photos/300/200"
                        imagePosition={idx === 0 ? undefined : 'left'}
                      />
                    </ComponentCard>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Integrations cards */}
          <div title="Integration Cards">
            <h1 className="text-sm font-semibold text-gray-800">
              INTEGRATIONS CARDS
            </h1>
            <section className="space-y-4">
              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-2">
                <span className="text-xs tracking-wide text-gray-400">
                  Integration Logo Small
                </span>
                <div className="flex justify-center">
                  <IntegrationCard
                    badgeText="Sin costo de vinculación"
                    logoSrc="/logos/handshake.svg"
                    title="Integration"
                    description="Description"
                    linkLabel="Link"
                    onLinkClick={() => console.log('click')}
                  />
                </div>
              </div>
              <br />
              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-2">
                <span className="text-xs tracking-wide text-gray-400">
                  Integration Logo Large
                </span>
                <div className="flex justify-center">
                  <IntegrationCard
                    logoSize="large"
                    badgeText="Sin costo de vinculación"
                    title="Integration"
                    description="Description"
                    linkHref="#"
                    bannerClassName="bg-[#08B7F6]"
                    logoSlot={
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3356 6.42786C7.28679 6.42786 2.38379 9.34132 2.38379 12.9356C2.38379 16.5299 7.28679 19.7255 13.3356 19.7255C19.3843 19.7255 24.2872 16.5296 24.2872 12.9356C24.2872 9.34158 19.3841 6.42786 13.3356 6.42786Z"
                          fill="#00BCFF"
                        />
                        <path
                          d="M9.77246 10.924C9.76699 10.9339 9.65999 11.0367 9.72939 11.1193C9.89863 11.3203 10.4218 11.4355 10.9508 11.3253C11.2658 11.2597 11.6694 10.9613 12.0606 10.6731C12.4339 10.3581 12.8622 10.1044 13.3272 9.92291C13.6242 9.82188 13.9487 9.814 14.251 9.90047C14.558 10.0064 14.8429 10.1608 15.0932 10.3569C15.8273 10.8697 18.7798 13.2634 19.29 13.6771C20.8576 13.0715 22.4806 12.598 24.1393 12.2621C23.9236 11.0334 23.128 9.86213 21.9073 8.94172C20.206 9.60543 17.9883 10.0028 15.9554 9.08082C15.2648 8.79038 14.5179 8.63263 13.7599 8.61707C12.147 8.65192 11.4483 9.30018 10.709 9.98649L9.77246 10.924Z"
                          fill="white"
                        />
                        <path
                          d="M19.1699 13.9376C19.1352 13.9087 15.6986 11.1155 14.9198 10.5719C14.6486 10.3477 14.3141 10.2001 13.9555 10.1466C13.8012 10.1352 13.6459 10.149 13.4967 10.1875C13.0369 10.3484 12.6116 10.5838 12.2404 10.8829C11.8053 11.205 11.3948 11.5083 11.0136 11.5876C10.5531 11.6755 10.0739 11.6086 9.66145 11.3989C9.56488 11.344 9.48707 11.2648 9.43704 11.1705C9.40948 11.0982 9.4057 11.02 9.42617 10.9457C9.44664 10.8714 9.49044 10.8045 9.55198 10.7534L10.5005 9.80049C10.6108 9.6984 10.7217 9.596 10.8357 9.49544C10.5431 9.53628 10.2542 9.59673 9.97106 9.67628C9.645 9.77688 9.30569 9.83566 8.96251 9.851C8.61669 9.81848 8.27301 9.76859 7.93301 9.70153C6.91918 9.48056 5.92954 9.17294 4.97674 8.78259C3.62835 9.71495 2.75031 10.8597 2.48975 12.1437C2.68348 12.1913 3.19115 12.2987 3.32235 12.3258C6.3738 12.9559 7.32406 13.605 7.49647 13.7407C7.59787 13.6347 7.72383 13.5514 7.86488 13.4971C8.00592 13.4428 8.15838 13.419 8.31079 13.4274C8.46319 13.4357 8.61158 13.476 8.74479 13.5453C8.878 13.6146 8.99257 13.711 9.07987 13.8274C9.28566 13.6728 9.54249 13.5888 9.80712 13.5896C9.95579 13.5909 10.1032 13.6149 10.2435 13.6607C10.3795 13.701 10.5046 13.7679 10.6106 13.8568C10.7165 13.9457 10.8007 14.0546 10.8577 14.1761C10.9911 14.12 11.1359 14.0915 11.2823 14.0923C11.4574 14.0944 11.6302 14.1297 11.7898 14.1963C12.0121 14.293 12.1923 14.4569 12.3011 14.6611C12.4099 14.8655 12.4408 15.098 12.3888 15.3207C12.4292 15.3167 12.4698 15.3147 12.5104 15.3147C12.8311 15.3153 13.1385 15.4338 13.3653 15.6445C13.5919 15.8551 13.7195 16.1408 13.7199 16.4387C13.7199 16.624 13.6702 16.8064 13.5752 16.9693C13.8909 17.1486 14.2558 17.2394 14.6258 17.2306C14.7181 17.2307 14.8094 17.213 14.8939 17.1787C14.9785 17.1445 15.0545 17.0944 15.1173 17.0316C15.1477 16.9917 15.1794 16.9451 15.1499 16.9115L14.2888 16.0234C14.2888 16.0234 14.1473 15.8988 14.1941 15.8508C14.2424 15.8014 14.3301 15.8723 14.3922 15.9204C14.8303 16.2603 15.3651 16.7733 15.3651 16.7733C15.3744 16.7788 15.4096 16.8438 15.6074 16.8768C15.7257 16.8959 15.8468 16.8927 15.9638 16.8674C16.0807 16.842 16.1909 16.7951 16.2878 16.7294C16.3428 16.6867 16.3929 16.639 16.4377 16.587C16.4346 16.5898 16.4313 16.5923 16.4276 16.5943C16.4879 16.5168 16.5184 16.4226 16.5139 16.327C16.5094 16.2315 16.4704 16.1401 16.4031 16.0678L15.3978 15.0194C15.3978 15.0194 15.2541 14.8957 15.3034 14.8465C15.3469 14.8033 15.4393 14.8684 15.5024 14.9169C15.8205 15.1641 16.2702 15.5829 16.7012 15.9755C16.8448 16.0657 17.0156 16.1114 17.1889 16.1058C17.3622 16.1001 17.5292 16.0437 17.6657 15.9444C17.7776 15.887 17.8702 15.802 17.9332 15.6987C17.9962 15.5954 18.0271 15.4779 18.0225 15.3593C18.0008 15.2109 17.9261 15.0737 17.8103 14.9696L16.4377 13.6873C16.4377 13.6873 16.2923 13.5721 16.3438 13.5141C16.3858 13.4651 16.4795 13.5356 16.5416 13.5836C16.9787 13.9235 18.1626 14.9319 18.1626 14.9319C18.3021 15.0156 18.4653 15.0586 18.6313 15.0556C18.7972 15.0525 18.9584 15.0035 19.0943 14.9148C19.1815 14.8674 19.2549 14.8009 19.3082 14.7211C19.3615 14.6415 19.3931 14.5508 19.4001 14.4571C19.4042 14.3603 19.3857 14.2638 19.3459 14.1741C19.3063 14.0845 19.2463 14.0038 19.1699 13.9376Z"
                          fill="white"
                        />
                        <path
                          d="M12.5101 15.5628C12.3489 15.5838 12.1897 15.6165 12.034 15.6608C12.017 15.6505 12.047 15.5711 12.0668 15.5252C12.0876 15.4799 12.3679 14.6962 11.6843 14.4242C11.5313 14.348 11.356 14.3196 11.1843 14.3434C11.0127 14.3672 10.8538 14.4418 10.7315 14.5561C10.7029 14.5839 10.6899 14.5815 10.6867 14.5465C10.6826 14.4002 10.6293 14.2588 10.5343 14.142C10.4393 14.0252 10.3073 13.939 10.1568 13.8955C9.94374 13.8345 9.71517 13.8392 9.50517 13.9088C9.29518 13.9783 9.11498 14.109 8.99142 14.2814C8.96942 14.1269 8.89197 13.9838 8.77159 13.8752C8.6512 13.7665 8.49492 13.6989 8.32799 13.683C8.16107 13.667 7.99324 13.7039 7.85162 13.7875C7.71001 13.8711 7.60289 13.9966 7.54757 14.1438C7.49225 14.291 7.49195 14.4512 7.54674 14.5984C7.60151 14.7458 7.70817 14.8716 7.84947 14.9558C7.99077 15.0399 8.15847 15.0772 8.32546 15.0619C8.49245 15.0464 8.64897 14.9792 8.76976 14.871C8.77408 14.8746 8.77572 14.8812 8.77359 14.8943C8.72302 15.1091 8.75738 15.3335 8.87036 15.5266C8.98332 15.7198 9.16738 15.8686 9.38884 15.946C9.50846 15.9889 9.63809 16.0019 9.7648 15.9836C9.89152 15.9655 10.0109 15.9169 10.1111 15.8424C10.1704 15.8036 10.18 15.82 10.1716 15.8719C10.1462 16.0326 10.1786 16.3769 10.6981 16.5722C10.8268 16.6309 10.9724 16.6493 11.1133 16.625C11.2542 16.6006 11.383 16.5348 11.4804 16.4372C11.5473 16.3809 11.5656 16.3901 11.569 16.4774C11.5773 16.6486 11.6397 16.8138 11.7482 16.9523C11.8567 17.091 12.0066 17.1969 12.1793 17.2571C12.3521 17.3172 12.54 17.329 12.7199 17.2908C12.8998 17.2526 13.0636 17.1662 13.191 17.0423C13.3186 16.9185 13.404 16.7625 13.437 16.594C13.4699 16.4253 13.4488 16.2514 13.3763 16.0939C13.3038 15.9363 13.1831 15.802 13.0291 15.7075C12.8751 15.6131 12.6947 15.5628 12.5101 15.5628Z"
                          fill="white"
                        />
                        <path
                          d="M13.3342 6.15833C7.17019 6.15833 2.17362 9.20359 2.17362 12.9389C2.17362 13.0355 2.17236 13.302 2.17236 13.3358C2.17236 17.2989 6.53964 20.5082 13.3327 20.5082C20.1669 20.5082 24.4944 17.2997 24.4944 13.3366V12.9389C24.4943 9.20359 19.4976 6.15833 13.3342 6.15833ZM23.9912 12.1875C22.3831 12.5179 20.8131 12.992 19.3031 13.603C18.2442 12.7449 15.7976 10.7688 15.1351 10.307C14.8783 10.1063 14.5859 9.94834 14.2712 9.84003C14.1341 9.79987 13.9912 9.77912 13.8473 9.77851C13.6642 9.78077 13.4825 9.8092 13.3087 9.8628C12.8434 10.0422 12.4146 10.2944 12.0411 10.6083L12.0197 10.624C11.6353 10.9079 11.2379 11.2016 10.9373 11.2638C10.8057 11.2913 10.6713 11.3053 10.5364 11.3055C10.4011 11.3159 10.265 11.3015 10.1357 11.2628C10.0065 11.2242 9.88675 11.1622 9.78342 11.0804C9.7647 11.0581 9.77706 11.0222 9.82063 10.9706L9.82624 10.9636L10.7579 10.0314C11.4874 9.35372 12.1766 8.71388 13.7624 8.68008C13.7888 8.67937 13.8155 8.6789 13.8416 8.6789C14.5618 8.7062 15.2698 8.86195 15.9267 9.13765C16.8094 9.54749 17.7815 9.76402 18.7683 9.77064C19.8477 9.75332 20.9101 9.51735 21.8812 9.07918C23.0126 9.96307 23.7631 11.0276 23.9912 12.1875ZM13.3362 6.55873C16.6077 6.55873 19.5354 7.42978 21.5036 8.80167C20.6448 9.16604 19.7144 9.36195 18.7705 9.37717C17.8469 9.37018 16.9375 9.16684 16.1117 8.78272C15.3977 8.48004 14.6266 8.3108 13.8423 8.28468C13.8124 8.28468 13.7823 8.28511 13.7528 8.28573C12.8081 8.27288 11.8898 8.57569 11.1653 9.139C10.7266 9.16035 10.2927 9.23393 9.8742 9.35793C9.58003 9.44906 9.27413 9.50349 8.96453 9.5198C8.84786 9.5198 8.63799 9.50989 8.61915 9.50912C7.50605 9.32712 6.41429 9.04647 5.35883 8.67102C7.32312 7.37444 10.1689 6.55873 13.3362 6.55873ZM4.97264 8.9417C6.33387 9.45887 7.98533 9.85824 8.50755 9.88965C8.65323 9.89855 8.80843 9.91385 8.96371 9.91416C9.313 9.89841 9.65839 9.8388 9.99045 9.73695C10.1882 9.68547 10.4062 9.62931 10.6356 9.58865C10.5742 9.64434 10.5131 9.70092 10.4517 9.7581L9.50559 10.7088C9.43363 10.7681 9.38272 10.8462 9.35959 10.9329C9.33645 11.0196 9.34219 11.1108 9.37603 11.1943C9.43094 11.3001 9.51724 11.3891 9.62476 11.4508C9.93084 11.6115 10.2776 11.6932 10.6292 11.6875C10.7638 11.6883 10.8982 11.6752 11.0298 11.6486C11.4266 11.566 11.8427 11.258 12.2834 10.9325C12.6484 10.6397 13.0653 10.408 13.5156 10.2476C13.6277 10.2199 13.7431 10.2052 13.8591 10.2039C13.8888 10.2036 13.9185 10.2053 13.9479 10.2088C14.2945 10.2617 14.6177 10.4049 14.8799 10.6218C15.6568 11.1641 19.0938 13.957 19.1276 13.9846C19.1959 14.0447 19.2496 14.1177 19.2852 14.1986C19.3207 14.2795 19.3374 14.3665 19.3339 14.4538C19.3277 14.5375 19.2994 14.6185 19.2515 14.6897C19.2035 14.7608 19.1375 14.8199 19.0592 14.8617C18.9256 14.9447 18.7689 14.9899 18.6083 14.9922C18.4672 14.9923 18.3291 14.9551 18.2098 14.885C18.1973 14.8753 17.0197 13.8722 16.5861 13.5352C16.5318 13.4819 16.4604 13.4465 16.3826 13.4342C16.3653 13.4339 16.3482 13.4373 16.3325 13.4442C16.3169 13.451 16.3032 13.4611 16.2924 13.4737C16.2243 13.5517 16.3006 13.6599 16.3907 13.7308L17.7663 15.0158C17.8688 15.1086 17.9357 15.2302 17.9566 15.3619C17.9602 15.4696 17.9315 15.576 17.8738 15.6696C17.8162 15.763 17.7318 15.8399 17.6299 15.8916C17.4869 15.9851 17.3173 16.0372 17.1423 16.0413C17.0026 16.0413 16.8659 16.0028 16.7498 15.9306L16.5526 15.7501C16.1918 15.4206 15.8194 15.0796 15.5468 14.8683C15.4918 14.8157 15.4198 14.781 15.3418 14.7695C15.3255 14.7692 15.3094 14.7721 15.2945 14.7781C15.2796 14.784 15.2662 14.7928 15.2552 14.8039C15.2241 14.836 15.2024 14.8936 15.2803 14.9892C15.3012 15.015 15.3244 15.039 15.3496 15.0611L16.3533 16.1085C16.4112 16.1695 16.4451 16.247 16.4492 16.3282C16.4533 16.4096 16.4275 16.4897 16.3761 16.5555L16.3405 16.5971C16.3111 16.6267 16.2798 16.6547 16.2469 16.6809C16.1048 16.7777 15.9325 16.8285 15.7564 16.8252C15.7108 16.8255 15.6655 16.8219 15.6207 16.8146C15.5475 16.8092 15.4782 16.7821 15.4228 16.7371L15.4103 16.7253C15.3557 16.6727 14.8498 16.1929 14.4313 15.8682C14.3793 15.817 14.3107 15.7829 14.2359 15.7712C14.2188 15.7711 14.2018 15.7745 14.1862 15.7809C14.1705 15.7873 14.1565 15.7969 14.1452 15.8088C14.0626 15.893 14.1869 16.0189 14.2396 16.0651L15.0954 16.9423C15.0881 16.9618 15.0773 16.9799 15.0634 16.9959C15.0326 17.0352 14.9289 17.1318 14.6184 17.168C14.5806 17.1725 14.5427 17.1746 14.5047 17.1743C14.2102 17.1568 13.9236 17.0779 13.6663 16.9433C13.7581 16.7627 13.7991 16.5633 13.7856 16.3639C13.7723 16.1645 13.7048 15.9715 13.5897 15.8027C13.4745 15.6339 13.3153 15.4949 13.1268 15.3986C12.9384 15.3022 12.7268 15.2517 12.5117 15.2516C12.4967 15.2516 12.4807 15.252 12.4656 15.2525C12.5023 15.0267 12.4589 14.7959 12.3421 14.595C12.2252 14.394 12.0412 14.2339 11.8178 14.1386C11.6497 14.0686 11.4681 14.0313 11.2838 14.0292C11.1501 14.0287 11.0173 14.051 10.8923 14.0951C10.7622 13.8605 10.5374 13.6832 10.267 13.602C10.1198 13.5535 9.96484 13.5281 9.80862 13.527C9.5524 13.5257 9.30236 13.6001 9.09469 13.7396C9.00029 13.6293 8.8819 13.5389 8.74726 13.4742C8.61263 13.4096 8.4648 13.372 8.31345 13.3641C8.16211 13.3562 8.01066 13.378 7.86906 13.4283C7.72745 13.4786 7.59887 13.556 7.49175 13.6557C7.22517 13.4663 6.168 12.8426 3.33821 12.2458C3.20304 12.2173 2.89623 12.1358 2.70299 12.0831C2.96845 10.9033 3.77554 9.82577 4.97264 8.9417ZM10.2216 15.7839L10.191 15.7585H10.1601C10.1283 15.7607 10.098 15.772 10.0735 15.791C9.95196 15.8779 9.8039 15.9269 9.65055 15.9308C9.56974 15.9302 9.48974 15.9158 9.41456 15.8882C9.20689 15.8162 9.03441 15.6767 8.92917 15.4955C8.82393 15.3142 8.79309 15.1037 8.84236 14.9029C8.84574 14.8883 8.84486 14.8732 8.83983 14.859C8.83479 14.8448 8.82575 14.8321 8.81369 14.8223L8.76737 14.7871L8.72407 14.8255C8.59799 14.9392 8.42912 15.0028 8.25336 15.0027C8.12225 15.0032 7.99377 14.9686 7.88336 14.9029C7.77295 14.8372 7.6853 14.7433 7.63092 14.6325C7.57655 14.5217 7.55777 14.3987 7.57685 14.2781C7.59592 14.1577 7.65204 14.0449 7.73846 13.9532C7.82487 13.8617 7.93792 13.7952 8.06402 13.7619C8.19011 13.7285 8.32389 13.7297 8.44929 13.7652C8.57469 13.8008 8.68637 13.8691 8.77094 13.9622C8.85551 14.0552 8.90934 14.169 8.926 14.2899L8.94945 14.4598L9.04994 14.3159C9.16315 14.1528 9.33134 14.0289 9.52825 13.9639C9.72516 13.8988 9.93973 13.896 10.1385 13.9561C10.2758 13.9962 10.3961 14.0751 10.4825 14.182C10.569 14.2888 10.6172 14.4181 10.6205 14.5518C10.6278 14.6341 10.691 14.6382 10.7032 14.6382C10.7185 14.6372 10.7334 14.6332 10.7469 14.6267C10.7605 14.6201 10.7725 14.6109 10.7821 14.5999C10.8468 14.5371 10.9247 14.4872 11.0109 14.4535C11.0971 14.4197 11.1898 14.4026 11.2834 14.4032C11.4131 14.4059 11.5407 14.4327 11.6591 14.482C12.3003 14.7376 12.0095 15.4945 12.0061 15.5022C11.9507 15.6276 11.9486 15.683 12.0004 15.715L12.0257 15.726H12.0445C12.0873 15.7216 12.1291 15.7115 12.1687 15.6959C12.2779 15.6558 12.3934 15.6321 12.5107 15.6257C12.6255 15.6258 12.7396 15.6468 12.8457 15.6877C12.9518 15.7285 13.0483 15.7883 13.1295 15.8638C13.2106 15.9393 13.2751 16.0289 13.3189 16.1275C13.3629 16.226 13.3855 16.3317 13.3855 16.4385C13.3854 16.5451 13.3628 16.6508 13.3188 16.7493C13.2748 16.8479 13.2104 16.9375 13.1292 17.0129C13.0478 17.0882 12.9514 17.1481 12.8453 17.1889C12.7392 17.2297 12.6254 17.2507 12.5105 17.2507C12.2853 17.2519 12.0682 17.1718 11.9054 17.0271C11.7425 16.8825 11.6466 16.6847 11.6378 16.4756C11.6366 16.4383 11.6324 16.3395 11.5421 16.3395C11.5011 16.3439 11.4633 16.3625 11.4362 16.3913C11.3245 16.5018 11.1703 16.5665 11.0073 16.5712C10.91 16.5693 10.814 16.55 10.7247 16.5142C10.2266 16.3265 10.2197 16.0088 10.2399 15.881C10.2448 15.8646 10.2457 15.8473 10.2425 15.8306C10.2394 15.8138 10.2322 15.7978 10.2216 15.7839ZM13.3361 19.3123C7.40924 19.3123 2.60476 16.4572 2.60476 12.9356C2.60569 12.7948 2.61432 12.6541 2.63063 12.5141C2.67794 12.5247 3.14864 12.6292 3.24612 12.6496C6.1368 13.246 7.092 13.8661 7.25341 13.9835C7.18477 14.1362 7.15784 14.3026 7.175 14.4675C7.19215 14.6322 7.25287 14.7907 7.35176 14.9285C7.45066 15.0663 7.58466 15.1793 7.74187 15.2576C7.8991 15.3357 8.07465 15.3766 8.25297 15.3766C8.31962 15.3767 8.38612 15.371 8.45161 15.3596C8.49431 15.5589 8.59207 15.7446 8.73533 15.8983C8.87857 16.052 9.06239 16.1685 9.26872 16.2363C9.39169 16.2811 9.5225 16.3046 9.6546 16.3055C9.73775 16.3059 9.82062 16.2963 9.90115 16.2771C10.0004 16.4712 10.1554 16.6361 10.3491 16.7536C10.5428 16.871 10.7677 16.9365 10.9989 16.9428C11.1117 16.9428 11.2236 16.9242 11.3295 16.8879C11.4097 17.0701 11.5375 17.2309 11.7014 17.3557C11.8652 17.4805 12.0599 17.5653 12.2681 17.6027C12.4761 17.6399 12.6909 17.6285 12.8929 17.5692C13.0951 17.5101 13.2781 17.405 13.4255 17.2636C13.7552 17.442 14.1259 17.5449 14.5069 17.5636C14.5617 17.5635 14.6163 17.5602 14.6706 17.554C14.8113 17.55 14.9494 17.5182 15.0758 17.4608C15.2023 17.4032 15.3141 17.3215 15.4037 17.2207C15.4207 17.1991 15.4358 17.1762 15.4491 17.1525C15.5614 17.1842 15.6779 17.2012 15.7954 17.2028C16.0493 17.198 16.2945 17.1166 16.4941 16.9708C16.7047 16.8422 16.8527 16.6422 16.9064 16.4135C16.9068 16.411 16.9072 16.4085 16.9073 16.4059C16.9843 16.4205 17.0626 16.4278 17.1412 16.4278C17.3977 16.4248 17.6476 16.3512 17.8591 16.2163C18.0199 16.1297 18.1526 16.0043 18.2433 15.8536C18.3339 15.7027 18.3792 15.532 18.3741 15.3593C18.4521 15.3745 18.5315 15.3821 18.6112 15.3822C18.8505 15.3798 19.0841 15.313 19.2834 15.19C19.4159 15.1148 19.5274 15.0116 19.6087 14.8887C19.6901 14.7658 19.7389 14.6269 19.7514 14.4831C19.7673 14.283 19.7154 14.0833 19.6028 13.9121C21.0447 13.3655 22.5336 12.9323 24.0536 12.6175C24.0624 12.7229 24.0672 12.829 24.0672 12.9357C24.0672 16.4572 19.2627 19.3123 13.3361 19.3123Z"
                          fill="#0A0080"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
              <br />
              <br />

              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-2">
                <span className="text-xs tracking-wide text-gray-400">
                  Logo Types
                </span>
                <div className="flex flex-wrap justify-center gap-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#00BCFF" />
                    <path
                      d="M30.0036 19.6417C20.9304 19.6417 13.5759 24.0119 13.5759 29.4033C13.5759 34.7948 20.9304 39.5882 30.0036 39.5882C39.0767 39.5882 46.4311 34.7943 46.4311 29.4033C46.4311 24.0123 39.0764 19.6417 30.0036 19.6417Z"
                      fill="#00BCFF"
                    />
                    <path
                      d="M24.6585 26.386C24.6502 26.4009 24.4897 26.5551 24.5938 26.679C24.8477 26.9805 25.6324 27.1534 26.426 26.988C26.8984 26.8895 27.5039 26.4419 28.0906 26.0097C28.6506 25.5372 29.2931 25.1567 29.9906 24.8844C30.4361 24.7329 30.9228 24.7211 31.3763 24.8508C31.8368 25.0097 32.2641 25.2413 32.6396 25.5354C33.7408 26.3046 38.1694 29.8952 38.9348 30.5157C41.2861 29.6074 43.7206 28.897 46.2088 28.3932C45.8851 26.5502 44.6918 24.7933 42.8608 23.4126C40.3088 24.4082 36.9823 25.0043 33.9329 23.6213C32.8969 23.1856 31.7766 22.949 30.6396 22.9257C28.2203 22.9779 27.1723 23.9503 26.0633 24.9798L24.6585 26.386Z"
                      fill="white"
                    />
                    <path
                      d="M38.7549 30.9063C38.7028 30.863 33.5479 26.6732 32.3798 25.8577C31.9729 25.5215 31.4711 25.3002 30.9333 25.2198C30.7018 25.2027 30.4689 25.2235 30.2451 25.2813C29.5554 25.5225 28.9174 25.8757 28.3606 26.3243C27.7079 26.8075 27.0923 27.2623 26.5204 27.3813C25.8296 27.5132 25.1108 27.4128 24.4922 27.0983C24.3473 27.016 24.2306 26.8972 24.1556 26.7557C24.1142 26.6473 24.1086 26.5299 24.1393 26.4185C24.17 26.3071 24.2357 26.2067 24.328 26.13L25.7507 24.7007C25.9163 24.5475 26.0825 24.3939 26.2535 24.2431C25.8147 24.3044 25.3813 24.395 24.9566 24.5144C24.4675 24.6653 23.9585 24.7534 23.4438 24.7764C22.925 24.7277 22.4095 24.6528 21.8995 24.5522C20.3788 24.2208 18.8943 23.7593 17.4651 23.1738C15.4425 24.5724 14.1255 26.2895 13.7346 28.2155C14.0252 28.2868 14.7867 28.448 14.9835 28.4887C19.5607 29.4338 20.9861 30.4075 21.2447 30.611C21.3968 30.452 21.5858 30.327 21.7973 30.2457C22.0089 30.1642 22.2376 30.1285 22.4662 30.141C22.6948 30.1535 22.9174 30.214 23.1172 30.3178C23.317 30.4218 23.4889 30.5665 23.6198 30.741C23.9285 30.5092 24.3137 30.3832 24.7107 30.3843C24.9337 30.3863 25.1548 30.4223 25.3653 30.491C25.5693 30.5515 25.757 30.6518 25.9158 30.7852C26.0747 30.9185 26.2011 31.0818 26.2866 31.2642C26.4866 31.18 26.7039 31.1372 26.9234 31.1383C27.1861 31.1415 27.4453 31.1945 27.6848 31.2943C28.0181 31.4395 28.2884 31.6853 28.4516 31.9917C28.6149 32.2982 28.6613 32.647 28.5833 32.981C28.6438 32.975 28.7048 32.972 28.7656 32.972C29.2466 32.9728 29.7078 33.1507 30.0479 33.4667C30.3879 33.7827 30.5793 34.2112 30.5799 34.658C30.5799 34.936 30.5053 35.2095 30.3628 35.4538C30.8364 35.7228 31.3838 35.859 31.9388 35.8458C32.0771 35.846 32.2141 35.8195 32.3409 35.768C32.4678 35.7167 32.5818 35.6415 32.6759 35.5473C32.7216 35.4875 32.7691 35.4177 32.7249 35.3672L31.4333 34.035C31.4333 34.035 31.2209 33.8482 31.2911 33.7762C31.3636 33.702 31.4951 33.8083 31.5883 33.8805C32.2454 34.3903 33.0476 35.1598 33.0476 35.1598C33.0616 35.1682 33.1144 35.2657 33.4111 35.3152C33.5886 35.3438 33.7703 35.339 33.9458 35.301C34.1211 35.263 34.2864 35.1927 34.4318 35.094C34.5143 35.03 34.5894 34.9585 34.6566 34.8805C34.6519 34.8847 34.6469 34.8883 34.6414 34.8913C34.7319 34.7752 34.7776 34.6338 34.7709 34.4905C34.7641 34.3472 34.7056 34.2102 34.6046 34.1017L33.0968 32.529C33.0968 32.529 32.8811 32.3435 32.9551 32.2697C33.0204 32.2048 33.1589 32.3025 33.2536 32.3753C33.7308 32.7462 34.4053 33.3743 35.0518 33.9632C35.2673 34.0985 35.5234 34.167 35.7834 34.1587C36.0433 34.1502 36.2938 34.0655 36.4986 33.9165C36.6664 33.8305 36.8053 33.703 36.8998 33.548C36.9943 33.393 37.0406 33.2168 37.0338 33.0388C37.0013 32.8163 36.8891 32.6105 36.7154 32.4543L34.6566 30.5308C34.6566 30.5308 34.4384 30.3582 34.5158 30.2712C34.5788 30.1977 34.7193 30.3033 34.8124 30.3753C35.4681 30.8852 37.2439 32.3978 37.2439 32.3978C37.4531 32.5233 37.6979 32.5878 37.9469 32.5833C38.1958 32.5787 38.4376 32.5052 38.6414 32.3722C38.7723 32.301 38.8824 32.2013 38.9623 32.0817C39.0423 31.9622 39.0896 31.8262 39.1001 31.6857C39.1063 31.5403 39.0786 31.3957 39.0189 31.2612C38.9594 31.1267 38.8694 31.0057 38.7549 30.9063Z"
                      fill="white"
                    />
                    <path
                      d="M28.7654 33.3442C28.5236 33.3757 28.2847 33.4249 28.0512 33.4912C28.0257 33.4759 28.0707 33.3567 28.1004 33.2879C28.1316 33.2199 28.5521 32.0444 27.5267 31.6364C27.2972 31.522 27.0342 31.4795 26.7767 31.5152C26.5192 31.5509 26.281 31.6627 26.0974 31.8342C26.0546 31.8759 26.0351 31.8724 26.0303 31.8199C26.0242 31.6004 25.9442 31.3882 25.8017 31.213C25.6591 31.0379 25.4611 30.9085 25.2355 30.8434C24.9158 30.7519 24.573 30.7589 24.258 30.8632C23.943 30.9675 23.6727 31.1635 23.4874 31.4222C23.4544 31.1904 23.3382 30.9757 23.1576 30.8129C22.977 30.6499 22.7426 30.5484 22.4922 30.5245C22.2418 30.5005 21.9901 30.5559 21.7777 30.6814C21.5653 30.8067 21.4046 30.995 21.3216 31.2157C21.2386 31.4365 21.2382 31.6769 21.3203 31.8977C21.4025 32.1187 21.5625 32.3075 21.7744 32.4337C21.9864 32.5599 22.2379 32.6159 22.4884 32.5929C22.7389 32.5697 22.9737 32.4689 23.1549 32.3065C23.1614 32.312 23.1638 32.3219 23.1606 32.3415C23.0848 32.6637 23.1363 33.0004 23.3058 33.29C23.4752 33.5797 23.7513 33.803 24.0835 33.919C24.2629 33.9834 24.4574 34.0029 24.6474 33.9755C24.8375 33.9484 25.0166 33.8754 25.1668 33.7637C25.2558 33.7055 25.2702 33.73 25.2577 33.8079C25.2196 34.049 25.2681 34.5654 26.0474 34.8584C26.2404 34.9464 26.4589 34.974 26.6702 34.9375C26.8816 34.901 27.0747 34.8022 27.2209 34.6559C27.3212 34.5714 27.3486 34.5852 27.3537 34.7162C27.3662 34.973 27.4597 35.2207 27.6226 35.4285C27.7852 35.6365 28.0101 35.7954 28.2692 35.8857C28.5284 35.9759 28.8102 35.9935 29.0801 35.9362C29.3499 35.879 29.5956 35.7494 29.7867 35.5635C29.9781 35.3779 30.1062 35.1439 30.1557 34.891C30.2051 34.638 30.1734 34.3772 30.0647 34.1409C29.9559 33.9045 29.7749 33.703 29.5439 33.5614C29.3129 33.4197 29.0422 33.3442 28.7654 33.3442Z"
                      fill="white"
                    />
                    <path
                      d="M30.0012 19.2374C20.7553 19.2374 13.2604 23.8053 13.2604 29.4083C13.2604 29.5531 13.2585 29.953 13.2585 30.0036C13.2585 35.9483 19.8095 40.7623 29.9991 40.7623C40.2504 40.7623 46.7416 35.9495 46.7416 30.0048V29.4083C46.7414 23.8053 39.2464 19.2374 30.0012 19.2374ZM45.9867 28.2811C43.5746 28.7768 41.2196 29.488 38.9546 30.4045C37.3662 29.1173 33.6964 26.1531 32.7026 25.4605C32.3174 25.1594 31.8789 24.9224 31.4067 24.76C31.2011 24.6997 30.9867 24.6686 30.7709 24.6677C30.4962 24.6711 30.2237 24.7137 29.9631 24.7941C29.2651 25.0633 28.6219 25.4415 28.0616 25.9125L28.0296 25.9359C27.4529 26.3618 26.8569 26.8023 26.4059 26.8956C26.2085 26.937 26.0069 26.958 25.8046 26.9581C25.6017 26.9738 25.3974 26.9521 25.2036 26.8941C25.0097 26.8363 24.8301 26.7433 24.6751 26.6206C24.647 26.5871 24.6656 26.5333 24.7309 26.4559L24.7394 26.4453L26.1369 25.047C27.2311 24.0305 28.2649 23.0708 30.6436 23.0201C30.6832 23.019 30.7232 23.0183 30.7624 23.0183C31.8427 23.0592 32.9047 23.2929 33.8901 23.7064C35.2141 24.3212 36.6722 24.646 38.1524 24.6559C39.7716 24.6299 41.3651 24.276 42.8217 23.6187C44.5189 24.9445 45.6446 26.5414 45.9867 28.2811ZM30.0042 19.838C34.9116 19.838 39.3031 21.1446 42.2554 23.2024C40.9672 23.749 39.5716 24.0429 38.1557 24.0657C36.7704 24.0552 35.4062 23.7502 34.1676 23.174C33.0966 22.72 31.9399 22.4661 30.7634 22.427C30.7186 22.427 30.6734 22.4276 30.6292 22.4285C29.2121 22.4093 27.8347 22.8635 26.7479 23.7084C26.0899 23.7405 25.439 23.8508 24.8113 24.0368C24.37 24.1735 23.9112 24.2552 23.4468 24.2796C23.2718 24.2796 22.957 24.2648 22.9287 24.2636C21.2591 23.9906 19.6214 23.5696 18.0382 23.0065C20.9847 21.0616 25.2533 19.838 30.0042 19.838ZM17.459 23.4125C19.5008 24.1882 21.978 24.7873 22.7613 24.8344C22.9798 24.8478 23.2126 24.8707 23.4456 24.8712C23.9695 24.8476 24.4876 24.7581 24.9857 24.6054C25.2822 24.5281 25.6092 24.4439 25.9534 24.3829C25.8613 24.4664 25.7697 24.5513 25.6776 24.6371L24.2584 26.0632C24.1504 26.1521 24.0741 26.2693 24.0394 26.3993C24.0047 26.5293 24.0133 26.6661 24.064 26.7915C24.1464 26.9501 24.2759 27.0836 24.4371 27.1761C24.8963 27.4171 25.4164 27.5398 25.9437 27.5311C26.1457 27.5325 26.3473 27.5128 26.5446 27.4728C27.1399 27.349 27.7641 26.887 28.4251 26.3986C28.9726 25.9595 29.5979 25.6119 30.2734 25.3713C30.4416 25.3298 30.6146 25.3078 30.7886 25.3057C30.8332 25.3054 30.8777 25.3079 30.9219 25.3132C31.4417 25.3924 31.9266 25.6073 32.3199 25.9327C33.4852 26.7461 38.6407 30.9355 38.6914 30.9768C38.7939 31.067 38.8744 31.1765 38.9277 31.2978C38.9811 31.4191 39.0061 31.5496 39.0009 31.6806C38.9916 31.8061 38.9491 31.9276 38.8772 32.0345C38.8052 32.1411 38.7062 32.2298 38.5887 32.2925C38.3884 32.417 38.1534 32.4848 37.9124 32.4883C37.7007 32.4885 37.4936 32.4326 37.3147 32.3275C37.2959 32.313 35.5296 30.8083 34.8791 30.3028C34.7977 30.2228 34.6906 30.1696 34.5739 30.1513C34.5479 30.1508 34.5222 30.156 34.4987 30.1663C34.4754 30.1765 34.4547 30.1916 34.4386 30.2105C34.3364 30.3275 34.4509 30.4898 34.5861 30.5961L36.6494 32.5236C36.8032 32.6628 36.9036 32.8453 36.9349 33.0428C36.9402 33.2043 36.8972 33.364 36.8107 33.5043C36.7242 33.6445 36.5977 33.7598 36.4449 33.8373C36.2304 33.9776 35.9759 34.0558 35.7134 34.062C35.5039 34.062 35.2989 34.0041 35.1247 33.8958L34.8289 33.6251C34.2877 33.1308 33.7291 32.6193 33.3202 32.3025C33.2377 32.2235 33.1297 32.1715 33.0127 32.1541C32.9882 32.1538 32.9641 32.1581 32.9417 32.1671C32.9194 32.176 32.8992 32.1891 32.8827 32.2058C32.8361 32.254 32.8036 32.3403 32.9204 32.4838C32.9517 32.5225 32.9866 32.5585 33.0244 32.5916L34.5299 34.1626C34.6167 34.2541 34.6676 34.3705 34.6737 34.4923C34.6799 34.6143 34.6412 34.7345 34.5641 34.8331L34.5107 34.8956C34.4666 34.94 34.4197 34.982 34.3704 35.0213C34.1572 35.1665 33.8987 35.2426 33.6346 35.2378C33.5662 35.2381 33.4982 35.2328 33.4311 35.2218C33.3212 35.2138 33.2172 35.1731 33.1342 35.1056L33.1154 35.088C33.0336 35.009 32.2747 34.2893 31.6469 33.8023C31.5689 33.7255 31.4661 33.6743 31.3539 33.6568C31.3282 33.6566 31.3027 33.6616 31.2792 33.6713C31.2557 33.681 31.2347 33.6953 31.2177 33.7131C31.0939 33.8395 31.2804 34.0283 31.3594 34.0976L32.6431 35.4135C32.6321 35.4426 32.6159 35.4698 32.5951 35.4938C32.5489 35.5528 32.3934 35.6976 31.9276 35.752C31.8709 35.7586 31.8141 35.7618 31.7571 35.7615C31.3152 35.7351 30.8854 35.6168 30.4994 35.415C30.6371 35.144 30.6986 34.845 30.6784 34.5458C30.6584 34.2466 30.5572 33.9571 30.3846 33.704C30.2117 33.4508 29.9729 33.2423 29.6902 33.0978C29.4076 32.9533 29.0902 32.8775 28.7676 32.8773C28.7451 32.8773 28.7211 32.878 28.6984 32.8786C28.7534 32.54 28.6884 32.1938 28.5131 31.8925C28.3377 31.591 28.0617 31.3508 27.7267 31.2078C27.4746 31.1028 27.2021 31.047 26.9257 31.0438C26.7251 31.043 26.526 31.0765 26.3384 31.1426C26.1433 30.7906 25.8061 30.5248 25.4005 30.403C25.1797 30.3301 24.9473 30.2921 24.7129 30.2905C24.3286 30.2885 23.9535 30.4001 23.642 30.6093C23.5004 30.444 23.3228 30.3083 23.1209 30.2113C22.9189 30.1143 22.6972 30.058 22.4702 30.0461C22.2432 30.0343 22.016 30.067 21.8036 30.1425C21.5912 30.2178 21.3983 30.334 21.2376 30.4835C20.8378 30.1995 19.252 29.2638 15.0073 28.3686C14.8046 28.326 14.3443 28.2036 14.0545 28.1246C14.4527 26.3548 15.6633 24.7386 17.459 23.4125ZM25.3324 33.6758L25.2865 33.6376H25.2401C25.1924 33.641 25.147 33.658 25.1103 33.6865C24.9279 33.8168 24.7058 33.8903 24.4758 33.8961C24.3546 33.8953 24.2346 33.8736 24.1218 33.8323C23.8103 33.7243 23.5516 33.515 23.3938 33.2431C23.2359 32.9713 23.1896 32.6555 23.2635 32.3543C23.2686 32.3325 23.2673 32.3098 23.2597 32.2885C23.2522 32.2671 23.2386 32.2481 23.2205 32.2335L23.1511 32.1806L23.0861 32.2381C22.897 32.4088 22.6437 32.5041 22.38 32.504C22.1834 32.5048 21.9907 32.4528 21.825 32.3543C21.6594 32.2558 21.5279 32.115 21.4464 31.9486C21.3648 31.7825 21.3367 31.598 21.3653 31.4171C21.3939 31.2365 21.4781 31.0673 21.6077 30.9298C21.7373 30.7925 21.9069 30.6928 22.096 30.6428C22.2852 30.5926 22.4858 30.5945 22.6739 30.6478C22.862 30.7011 23.0296 30.8036 23.1564 30.9433C23.2833 31.0828 23.364 31.2535 23.389 31.4348L23.4242 31.6896L23.5749 31.4738C23.7447 31.2291 23.997 31.0433 24.2924 30.9458C24.5877 30.8481 24.9096 30.844 25.2077 30.9341C25.4136 30.9943 25.5941 31.1126 25.7238 31.273C25.8535 31.4331 25.9258 31.6271 25.9307 31.8276C25.9418 31.9511 26.0365 31.9573 26.0548 31.9573C26.0777 31.9558 26.1001 31.9498 26.1204 31.94C26.1408 31.9301 26.1587 31.9163 26.1731 31.8998C26.2702 31.8056 26.387 31.7308 26.5163 31.6801C26.6456 31.6295 26.7847 31.6038 26.9251 31.6048C27.1196 31.6088 27.3111 31.649 27.4886 31.723C28.4504 32.1063 28.0142 33.2416 28.0091 33.2533C27.9261 33.4413 27.9229 33.5245 28.0006 33.5725L28.0386 33.589H28.0667C28.1309 33.5823 28.1936 33.5671 28.2531 33.5438C28.4169 33.4836 28.5901 33.4481 28.7661 33.4385C28.9382 33.4386 29.1094 33.4701 29.2686 33.5315C29.4277 33.5926 29.5724 33.6825 29.6942 33.7956C29.8159 33.909 29.9126 34.0433 29.9784 34.1911C30.0444 34.339 30.0782 34.4975 30.0782 34.6576C30.0781 34.8176 30.0442 34.9761 29.9782 35.124C29.9122 35.2718 29.8156 35.4061 29.6937 35.5193C29.5717 35.6323 29.4271 35.7221 29.2679 35.7833C29.1087 35.8445 28.9381 35.876 28.7657 35.876C28.4279 35.8778 28.1022 35.7576 27.8581 35.5406C27.6137 35.3236 27.4699 35.027 27.4567 34.7133C27.4549 34.6575 27.4486 34.5091 27.3131 34.5091C27.2516 34.5158 27.1949 34.5436 27.1542 34.587C26.9867 34.7526 26.7554 34.8496 26.511 34.8568C26.365 34.854 26.221 34.825 26.087 34.7713C25.3399 34.4896 25.3296 34.0131 25.3598 33.8215C25.3671 33.7968 25.3685 33.771 25.3637 33.7458C25.359 33.7206 25.3483 33.6966 25.3324 33.6758ZM30.0041 38.9685C21.1139 38.9685 13.9071 34.6858 13.9071 29.4033C13.9085 29.1921 13.9215 28.9811 13.9459 28.7711C14.0169 28.787 14.723 28.9438 14.8692 28.9743C19.2052 29.869 20.638 30.7991 20.8801 30.9751C20.7772 31.2043 20.7368 31.4538 20.7625 31.7011C20.7882 31.9483 20.8793 32.186 21.0276 32.3926C21.176 32.5995 21.377 32.769 21.6128 32.8863C21.8486 33.0035 22.112 33.0648 22.3795 33.0648C22.4794 33.065 22.5792 33.0565 22.6774 33.0393C22.7415 33.3383 22.8881 33.6168 23.103 33.8475C23.3179 34.078 23.5936 34.2526 23.9031 34.3545C24.0875 34.4216 24.2837 34.4568 24.4819 34.4581C24.6066 34.4588 24.7309 34.4445 24.8517 34.4156C25.0006 34.7068 25.2332 34.9541 25.5237 35.1303C25.8143 35.3065 26.1515 35.4046 26.4984 35.4141C26.6676 35.4141 26.8354 35.3863 26.9942 35.3318C27.1146 35.6051 27.3062 35.8463 27.5521 36.0335C27.7977 36.2206 28.0899 36.348 28.4021 36.404C28.7141 36.4598 29.0364 36.4426 29.3394 36.3538C29.6426 36.2651 29.9171 36.1075 30.1382 35.8953C30.6327 36.163 31.1889 36.3173 31.7604 36.3453C31.8426 36.3451 31.9244 36.3403 32.0059 36.331C32.2169 36.325 32.4241 36.2773 32.6137 36.1911C32.8034 36.1048 32.9711 35.9821 33.1056 35.831C33.1311 35.7986 33.1537 35.7643 33.1736 35.7286C33.3421 35.7763 33.5169 35.8018 33.6931 35.8041C34.0739 35.797 34.4417 35.6748 34.7411 35.4561C35.0571 35.2633 35.2791 34.9633 35.3596 34.6201C35.3602 34.6165 35.3607 34.6126 35.3609 34.6088C35.4764 34.6306 35.5939 34.6416 35.7117 34.6416C36.0966 34.6371 36.4714 34.5268 36.7886 34.3245C37.0299 34.1945 37.2289 34.0065 37.3649 33.7803C37.5009 33.554 37.5687 33.298 37.5611 33.039C37.6781 33.0616 37.7972 33.0731 37.9167 33.0733C38.2757 33.0696 38.6261 32.9695 38.9251 32.785C39.1239 32.6721 39.2911 32.5173 39.4131 32.333C39.5351 32.1486 39.6084 31.9403 39.6271 31.7246C39.6509 31.4245 39.5731 31.125 39.4042 30.8681C41.5671 30.0481 43.8004 29.3985 46.0804 28.9261C46.0936 29.0843 46.1007 29.2435 46.1007 29.4035C46.1007 34.6858 38.8941 38.9685 30.0041 38.9685Z"
                      fill="#0A0080"
                    />
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#0050C3" />
                    <path
                      d="M34.4942 18.0007H34.4811C34.4811 18.0007 34.4738 18.0007 34.4695 18.0007C31.4618 18.0051 28.5962 19.187 26.4572 21.2666C25.3622 20.8025 24.1833 20.5618 22.9651 20.5618C18.0214 20.5618 14 24.5832 14 29.5254C14 34.4677 18.0214 38.4891 22.9637 38.4891C24.163 38.4891 25.3493 38.244 26.447 37.7828C28.5237 39.803 31.3559 41.0501 34.4753 41.0501C40.8301 41.0501 46 35.8802 46 29.5254C46 23.1707 40.8402 18.0109 34.4942 18.0007ZM34.4753 38.4891C29.5331 38.4891 25.5116 34.4677 25.5116 29.5254H22.9506C22.9506 31.7863 23.6075 33.8948 24.7358 35.6757C24.1615 35.8411 23.5655 35.928 22.9637 35.928C19.4339 35.928 16.561 33.0552 16.561 29.5254C16.561 25.9957 19.4339 23.1228 22.9637 23.1228C24.3616 23.1228 25.6901 23.5651 26.8038 24.4019C28.4323 25.6244 29.3663 27.4922 29.3663 29.5254H31.9273C31.9273 26.844 30.7657 24.3685 28.7252 22.6602C30.3278 21.3159 32.3594 20.5632 34.4811 20.5618C39.4205 20.5647 43.4375 24.5846 43.4375 29.5254C43.4375 34.4663 39.4162 38.4891 34.4738 38.4891H34.4753Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#873EFF" />
                    <g clipPath="url(#clip0_1394_16804)">
                      <path
                        d="M14.0961 35.6838C15.3766 35.6838 16.4041 35.0515 17.1787 33.5972L18.9018 30.3723V33.1071C18.9018 34.7195 19.9451 35.6838 21.5576 35.6838C22.8222 35.6838 23.7549 35.1305 24.656 33.5972L28.6238 26.8945C29.4933 25.4243 28.8768 24.3177 26.964 24.3177C25.9365 24.3177 25.2725 24.6497 24.6718 25.7721L21.937 30.9098V26.3412C21.937 24.9817 21.2889 24.3177 20.0874 24.3177C19.1389 24.3177 18.3801 24.7288 17.7952 25.867L15.2185 30.9098V26.3886C15.2185 24.9343 14.6178 24.3177 13.1634 24.3177H10.1915C9.0691 24.3177 8.5 24.8394 8.5 25.8037C8.5 26.768 9.10071 27.3213 10.1915 27.3213H11.4087V33.0913C11.4087 34.7195 12.4995 35.6838 14.0961 35.6838Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M34.4264 24.3177C31.1857 24.3177 28.7039 26.7364 28.7039 30.0087C28.7039 33.281 31.2015 35.6838 34.4264 35.6838C37.6513 35.6838 40.1174 33.2652 40.1332 30.0087C40.1332 26.7364 37.6513 24.3177 34.4264 24.3177ZM34.4264 32.1902C33.2092 32.1902 32.3713 31.2734 32.3713 30.0087C32.3713 28.7441 33.2092 27.8114 34.4264 27.8114C35.6436 27.8114 36.4815 28.7441 36.4815 30.0087C36.4815 31.2734 35.6595 32.1902 34.4264 32.1902Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40.9382 30.0087C40.9382 26.7364 43.4201 24.3177 46.645 24.3177C49.8699 24.3177 52.3517 26.7522 52.3517 30.0087C52.3517 33.2652 49.8699 35.6838 46.645 35.6838C43.4201 35.6838 40.9382 33.281 40.9382 30.0087ZM44.6057 30.0087C44.6057 31.2734 45.412 32.1902 46.645 32.1902C47.8622 32.1902 48.7001 31.2734 48.7001 30.0087C48.7001 28.7441 47.8622 27.8114 46.645 27.8114C45.4278 27.8114 44.6057 28.7441 44.6057 30.0087Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1394_16804">
                        <rect
                          width="44"
                          height="12.0421"
                          fill="white"
                          transform="translate(8.5 23.979)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#204677" />
                    <path
                      d="M36.745 22.6593L37.78 19.8483L37.363 19.7153C35.036 18.98 32.6094 18.6089 30.169 18.6153C27.7072 18.6099 25.2601 18.995 22.919 19.7563L22.506 19.8993L23.525 22.6743L23.925 22.5333C25.9314 21.8259 28.0445 21.469 30.172 21.4783C32.2766 21.4689 34.3672 21.8221 36.352 22.5223L36.745 22.6593Z"
                      fill="white"
                    />
                    <path
                      d="M26.75 30.0138L26.35 30.1548L27.45 33.1218L27.844 32.9828C29.3289 32.4574 30.9455 32.4356 32.444 32.9208L32.831 33.0448L33.931 30.0768L33.516 29.9418C31.3127 29.2299 28.9376 29.2552 26.75 30.0138Z"
                      fill="white"
                    />
                    <path
                      d="M36.257 31.3062L35.807 30.9922L34.66 34.0782L34.882 34.2662C35.6305 34.896 36.2334 35.6807 36.649 36.5662C37.0629 37.4485 37.279 38.4106 37.282 39.3852C37.2491 41.2223 36.489 42.9713 35.1683 44.2487C33.8476 45.5261 32.0742 46.2276 30.237 46.1992C28.3998 46.2276 26.6262 45.5261 25.3054 44.2488C23.9845 42.9714 23.2242 41.2224 23.191 39.3852C23.1958 38.4471 23.3974 37.5204 23.783 36.6652C24.17 35.8074 24.7317 35.0397 25.432 34.4112L25.641 34.2222L24.484 31.1082L24.031 31.4402C22.7754 32.3567 21.7512 33.5539 21.04 34.9362C20.3315 36.3128 19.9571 37.837 19.947 39.3852C19.9941 42.0696 21.1038 44.6258 23.0328 46.4933C24.9617 48.3607 27.5525 49.387 30.237 49.3472C32.9216 49.387 35.5123 48.3607 37.4413 46.4933C39.3702 44.6258 40.4799 42.0696 40.527 39.3852C40.5193 37.7976 40.1275 36.2355 39.385 34.8322C38.6394 33.4236 37.5667 32.2144 36.257 31.3062Z"
                      fill="white"
                    />
                    <path
                      d="M34.853 27.8109L35.823 25.1729C34.0002 24.5624 32.0903 24.2526 30.168 24.2559C28.2276 24.2872 26.3031 24.6105 24.459 25.2149L25.44 27.8829L25.84 27.7419C28.6252 26.7504 31.6634 26.7279 34.463 27.6779L34.853 27.8109Z"
                      fill="white"
                    />
                    <path
                      d="M38.6872 12.862C38.2193 12.8639 37.7525 12.9101 37.2932 13C36.9672 12.811 36.6362 12.632 36.3062 12.469C34.4174 11.5232 32.3376 11.0207 30.2252 11C30.1852 11 30.0442 11.015 30.0712 11.011C27.5669 11.0308 25.1143 11.7252 22.9712 13.021C22.0312 12.7977 21.0563 12.7622 20.1025 12.9166C19.1487 13.0711 18.2348 13.4124 17.4132 13.921C16.5947 14.4251 15.8849 15.0874 15.3252 15.869C14.4871 17.0429 14.0253 18.4437 14.001 19.8858C13.9767 21.328 14.3911 22.7436 15.1892 23.945C15.7207 24.7462 16.4068 25.4333 17.2072 25.966C18.0109 26.5009 18.9126 26.8714 19.8602 27.056L21.3362 30.756L21.7872 30.356C22.2591 29.944 22.7604 29.567 23.2872 29.228L23.5682 29.047L21.9502 24.7L21.6282 24.729C21.182 24.7688 20.7323 24.7392 20.2952 24.641C20.2692 24.635 20.2472 24.632 20.2582 24.641L20.1392 24.594C19.0889 24.3819 18.1471 23.8061 17.4795 22.968C16.8118 22.1299 16.4612 21.0831 16.4892 20.012C16.4992 19.2075 16.7128 18.4186 17.1102 17.719C17.5091 17.0167 18.0778 16.4256 18.7642 16C19.4543 15.5728 20.2396 15.3234 21.0497 15.2742C21.8598 15.2249 22.6695 15.3774 23.4062 15.718L23.6252 15.829L24.0932 15.524C24.5673 15.1928 25.0691 14.9034 25.5932 14.659C26.1815 14.4058 26.7896 14.2011 27.4112 14.047C28.2839 13.7897 29.1905 13.666 30.1002 13.68C31.0438 13.6652 31.9844 13.7906 32.8912 14.052C33.0752 14.096 33.2642 14.152 33.4582 14.212L33.7262 14.292C33.8659 14.3346 34.0028 14.3857 34.1362 14.445C33.6168 14.8559 33.1562 15.336 32.7672 15.872L32.3512 16.445L33.0592 16.53C33.7252 16.609 34.3372 16.706 34.9282 16.825L35.1502 16.87L35.3102 16.713C35.8138 16.2176 36.42 15.839 37.086 15.6037C37.7521 15.3685 38.4617 15.2825 39.1646 15.3517C39.8676 15.421 40.5467 15.6438 41.154 16.0045C41.7614 16.3652 42.282 16.8549 42.6792 17.439C43.2026 18.2165 43.4815 19.1328 43.4802 20.07V20.176C43.4605 21.187 43.1138 22.1644 42.4922 22.962C41.8664 23.764 41.0006 24.345 40.0212 24.62C39.6489 24.7069 39.2661 24.7406 38.8842 24.72L38.6792 24.709L38.5572 24.702L38.2392 24.681L36.7002 28.92L36.9882 29.098C37.5462 29.4434 38.0767 29.8313 38.5752 30.258L39.0192 30.638L40.5192 27.027C40.8535 26.9448 41.1813 26.8385 41.5002 26.709C43.0499 26.0725 44.3315 24.9192 45.1272 23.445C45.9176 21.9753 46.1688 20.2753 45.8371 18.6399C45.5054 17.0044 44.6118 15.5366 43.3112 14.491C42.0035 13.4345 40.3724 12.8594 38.6912 12.862H38.6872Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1394_16928)">
                      <rect width="60" height="60" rx="8" fill="#301CA3" />
                      <path
                        d="M44.2542 62H15.7458C8.4302 62 2.5 56.0696 2.5 48.7542V20.2458C2.5 12.9302 8.43045 7 15.7458 7H44.2542C51.5698 7 57.5 12.9306 57.5 20.2458V48.7542C57.5 56.0698 51.5695 62 44.2542 62Z"
                        fill="#301CA3"
                      />
                      <mask
                        id="mask0_1394_16928"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="7"
                        width="56"
                        height="55"
                      >
                        <path
                          d="M44.2542 62H15.7458C8.4302 62 2.5 56.0696 2.5 48.7542V20.2458C2.5 12.9302 8.43045 7 15.7458 7H44.2542C51.5698 7 57.5 12.9306 57.5 20.2458V48.7542C57.5 56.0698 51.5695 62 44.2542 62Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1394_16928)">
                        <path
                          d="M46.3488 56.0289C46.1603 56.0289 45.9744 56.0376 45.7913 56.0568C44.7466 53.6361 42.3394 51.9417 39.5362 51.9417C36.5586 51.9417 34.0344 53.8545 33.1079 56.5168C32.4365 55.3729 31.2062 52.9959 31.2062 51.5731H28.8811C28.8811 52.9959 27.5628 55.3723 26.891 56.5168C25.9645 53.8545 23.4402 51.9417 20.4626 51.9417C17.6588 51.9417 15.2527 53.6366 14.208 56.0568C14.0244 56.0376 13.8385 56.0289 13.6505 56.0289C10.6413 56.0289 8.20093 58.4682 8.20093 61.478H51.7976C51.7976 58.4682 49.3577 56.0289 46.3485 56.0289"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M30.5356 47.8415L29.9816 48.5062L29.4171 47.8504C28.2431 46.4863 27.5912 44.7501 27.5769 42.9504L32.298 42.913C32.3122 44.7127 31.6877 46.4591 30.5356 47.8415Z"
                        fill="white"
                      />
                      <path
                        d="M30.6183 46.3707L29.9522 44.8148L29.3109 46.3811L28.4667 45.637L28.2144 45.9907C28.5157 46.6796 28.9194 47.3254 29.4175 47.9041L29.9819 48.5599L30.5359 47.8952C31.0247 47.3087 31.4181 46.6567 31.7084 45.963L31.4505 45.6134L30.6183 46.3707Z"
                        fill="white"
                      />
                      <path
                        d="M26.9634 41.3574L23.2632 46.1698L20.3401 38.1632C19.9029 36.9656 20.1661 35.6243 21.0237 34.6809L23.5756 31.9128L27.0159 41.258L26.9634 41.3574Z"
                        fill="white"
                      />
                      <path
                        d="M32.8231 41.3574L36.5234 46.1698L39.4465 38.1632C39.8836 36.9656 39.6203 35.6243 38.7628 34.6809L36.211 31.9128L32.7705 41.258L32.8231 41.3574Z"
                        fill="white"
                      />
                      <path
                        d="M32.4721 24.4285C32.4859 25.8379 31.3556 26.9905 29.9461 27.0045C28.5367 27.0183 27.3806 25.8881 27.3668 24.4786C27.353 23.0692 28.4865 21.913 29.896 21.8992C31.3054 21.8854 32.4582 23.0191 32.4721 24.4285ZM29.8023 12.3045C29.8023 12.3045 28.6715 13.936 27.3797 16.6602L32.3102 16.6117C30.965 13.9134 29.8023 12.3045 29.8023 12.3045ZM29.9551 27.8568C28.0749 27.8753 26.5325 26.3676 26.514 24.4874C26.4956 22.607 28.0079 21.0647 29.8883 21.0462C31.7685 21.0277 33.3063 22.5402 33.3247 24.4205C33.3431 26.3007 31.8353 27.8384 29.9551 27.8568ZM32.9691 17.9979L26.7481 18.0591C25.2094 21.6493 23.6749 26.6185 23.7287 32.0963C23.7373 32.9784 23.7644 33.8418 23.8098 34.6863C23.9424 37.3084 24.2404 39.7663 24.6658 41.9535L35.5202 41.847C36.0257 38.9401 36.299 35.5713 36.2636 31.9733C36.2098 26.495 34.578 21.5569 32.9691 17.9975"
                        fill="white"
                      />
                      <path
                        d="M30.8704 40.8102L29.9264 44.1453L29.0635 40.789L29.155 32.9899C29.1609 32.4908 29.5701 32.0911 30.0691 32.097C30.568 32.1028 30.9679 32.5121 30.962 33.0111L30.8704 40.8102Z"
                        fill="#301CA3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1394_16928">
                        <rect width="60" height="60" rx="8" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#652BDF" />
                    <path
                      d="M40 23.2549C39.9998 22.5378 39.541 21.901 38.8607 21.6742L30.5273 18.8968C30.1852 18.7828 29.8148 18.7828 29.4727 18.8968L21.1393 21.6742C20.459 21.901 20.0002 22.5378 20 23.2549V29.8825C20 32.8626 21.2558 35.0614 23.1888 36.8955C25.043 38.6548 27.4798 40.0405 30 41.4059C32.5202 40.0405 34.957 38.6548 36.8112 36.8955C38.7442 35.0614 40 32.8626 40 29.8825V23.2549ZM32.9596 25.9593C33.3501 25.569 33.9832 25.569 34.3737 25.9593C34.7642 26.3498 34.7641 26.9828 34.3737 27.3734L29.3737 32.3734C29.1862 32.5609 28.9319 32.6663 28.6667 32.6663C28.4015 32.6663 28.1472 32.5609 27.9596 32.3734L25.6263 30.04C25.2359 29.6495 25.2358 29.0165 25.6263 28.626C26.0168 28.2356 26.6499 28.2356 27.0404 28.626L28.6667 30.2523L32.9596 25.9593ZM42 29.8825C42 33.5322 40.4223 36.2266 38.1888 38.346C35.9928 40.4297 33.121 41.9968 30.4753 43.4242C30.1789 43.584 29.8211 43.584 29.5247 43.4242C26.879 41.9968 24.0072 40.4297 21.8112 38.346C19.5777 36.2266 18 33.5322 18 29.8825V23.2549C18.0002 21.6768 19.0107 20.2761 20.5078 19.777L28.8411 16.9997C29.5936 16.749 30.4064 16.749 31.1589 16.9997L39.4922 19.777C40.9893 20.2761 41.9998 21.6768 42 23.2549V29.8825Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#652BDF" />
                    <path
                      d="M39.9996 31.0104C39.4518 31.2182 38.854 31.3333 38.2222 31.3333C36.5539 31.3333 35.0591 30.5115 34.148 29.2318C33.2156 30.4986 31.7153 31.3333 29.9996 31.3333C28.2836 31.3332 26.7821 30.4991 25.8498 29.2318C24.9387 30.5108 23.446 31.3332 21.7782 31.3333C21.1461 31.3333 20.5476 31.2184 19.9996 31.0104V38.3333C19.9996 39.2537 20.7459 39.9998 21.6662 40H38.3329C39.2534 40 39.9996 39.2538 39.9996 38.3333V31.0104ZM21.8472 20C21.1189 20 20.4754 20.4731 20.2574 21.168L18.9175 25.4375C18.3116 27.3688 19.7541 29.3333 21.7782 29.3333C23.2984 29.3332 24.5785 28.1947 24.7561 26.6849L24.8824 25.6094C24.8834 25.6003 24.8839 25.5911 24.885 25.582L25.5425 20H21.8472ZM26.9162 25.4427L26.8707 25.8138L26.872 25.8151C26.6517 27.6875 28.1143 29.3331 29.9996 29.3333C31.8804 29.3333 33.34 27.6963 33.1285 25.8294L32.4449 20H27.5556L26.9162 25.4427ZM35.2444 26.6849C35.422 28.1948 36.7019 29.3333 38.2222 29.3333C40.2462 29.3332 41.6888 27.3687 41.0829 25.4375L39.7431 21.168C39.5251 20.4732 38.8813 20.0002 38.1532 20H34.4579L35.2444 26.6849ZM41.9996 38.3333C41.9996 40.3584 40.3579 42 38.3329 42H21.6662C19.6414 41.9998 17.9996 40.3583 17.9996 38.3333V29.6042C16.922 28.3562 16.4593 26.5897 17.0087 24.8385L18.3485 20.569C18.8282 19.0403 20.245 18 21.8472 18H38.1532C39.7553 18.0002 41.1723 19.0404 41.6519 20.569L42.9905 24.8385C43.54 26.5902 43.0778 28.3574 41.9996 29.6055V38.3333Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#652BDF" />
                    <path
                      d="M19.3333 39.6666V20.3333C19.3333 18.3082 20.9749 16.6666 22.9999 16.6666H29.8958L30.2577 16.6849C31.0971 16.7682 31.8865 17.1392 32.4882 17.7408L39.5924 24.845C40.2799 25.5325 40.6665 26.4651 40.6666 27.4375V39.6666C40.6666 41.6917 39.025 43.3333 36.9999 43.3333H22.9999C20.9749 43.3333 19.3333 41.6917 19.3333 39.6666ZM24.3333 37V35C24.3333 34.4477 24.781 34 25.3333 34C25.8855 34 26.3333 34.4477 26.3333 35V37C26.3333 37.5522 25.8855 38 25.3333 38C24.781 38 24.3333 37.5522 24.3333 37ZM28.9999 37V31C28.9999 30.4477 29.4476 30 29.9999 30C30.5522 30 30.9999 30.4477 30.9999 31V37C30.9999 37.5522 30.5522 38 29.9999 38C29.4476 38 28.9999 37.5522 28.9999 37ZM33.6666 37V33.6666C33.6666 33.1143 34.1143 32.6666 34.6666 32.6666C35.2189 32.6666 35.6666 33.1143 35.6666 33.6666V37C35.6666 37.5522 35.2189 38 34.6666 38C34.1143 38 33.6666 37.5522 33.6666 37ZM31.9999 23.6666C31.9999 24.5871 32.7461 25.3333 33.6666 25.3333H37.2525L31.9999 20.0807V23.6666ZM21.3333 39.6666C21.3333 40.5871 22.0794 41.3333 22.9999 41.3333H36.9999C37.9204 41.3333 38.6666 40.5871 38.6666 39.6666V27.4375C38.6666 27.4026 38.6636 27.3679 38.6614 27.3333H33.6666C31.6415 27.3333 29.9999 25.6917 29.9999 23.6666V18.6705L29.8958 18.6666H22.9999C22.0794 18.6666 21.3333 19.4128 21.3333 20.3333V39.6666Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="8" fill="#652BDF" />
                    <path
                      d="M41.333 37.556C41.333 36.8071 41.1033 36.3418 40.8512 36.0729C40.5944 35.799 40.259 35.6667 39.9254 35.6667C39.5283 35.6667 39.2111 35.7859 38.9905 35.9062C38.8806 35.9663 38.7985 36.0246 38.7484 36.0638C38.7242 36.0827 38.7076 36.0962 38.7002 36.1029L38.7067 36.0964C38.5192 36.2837 38.2647 36.3893 37.9997 36.3893C37.7358 36.3893 37.4824 36.2848 37.2952 36.099C37.2867 36.0915 37.2722 36.0794 37.2523 36.0638C37.2022 36.0246 37.1199 35.9662 37.0101 35.9062C36.7894 35.7859 36.4712 35.6667 36.0739 35.6667C35.7404 35.6667 35.4049 35.799 35.1481 36.0729C34.8961 36.3418 34.6663 36.8073 34.6663 37.556C34.6665 38.4703 35.3492 39.4166 36.3343 40.2305C36.7999 40.6151 37.2787 40.9232 37.6559 41.1328C37.7892 41.2069 37.9061 41.2644 37.9997 41.3086C38.0933 41.2644 38.21 41.2069 38.3434 41.1328C38.7206 40.9233 39.1994 40.6151 39.665 40.2305C40.6502 39.4166 41.3328 38.4703 41.333 37.556ZM37.1572 18C39.0959 18.0003 40.6988 19.5102 40.8161 21.4453L41.3525 30.2786C41.3856 30.8297 40.9648 31.3038 40.4137 31.3372C39.8629 31.3703 39.3888 30.9505 39.3551 30.3997L38.82 21.5664C38.7667 20.6869 38.0383 20.0003 37.1572 20H22.8434C21.9621 20 21.2327 20.6867 21.1793 21.5664L20.1689 38.2331C20.1112 39.1911 20.8731 39.9999 21.833 40H30.3369C30.889 40.0002 31.3369 40.4478 31.3369 41C31.3369 41.5522 30.889 41.9998 30.3369 42H21.833C19.7209 41.9999 18.0453 40.2201 18.1728 38.112L19.1833 21.4453C19.3005 19.51 20.9045 18 22.8434 18H37.1572ZM24.9997 24.6667C24.9997 24.1145 25.4475 23.6668 25.9997 23.6667C26.5519 23.6667 26.9997 24.1144 26.9997 24.6667C26.9997 26.3234 28.3429 27.6665 29.9997 27.6667C31.6565 27.6667 32.9997 26.3235 32.9997 24.6667C32.9997 24.1145 33.4475 23.6668 33.9997 23.6667C34.5519 23.6667 34.9997 24.1144 34.9997 24.6667C34.9997 27.4281 32.7611 29.6667 29.9997 29.6667C27.2384 29.6665 24.9997 27.428 24.9997 24.6667ZM43.333 37.556C43.3328 39.4098 42.0294 40.8709 40.9385 41.7721C40.3661 42.2449 39.7838 42.6209 39.3148 42.8815C39.0805 43.0117 38.8643 43.119 38.6833 43.1966C38.5939 43.2349 38.5011 43.2711 38.4124 43.2995C38.3566 43.3174 38.1906 43.3698 37.9997 43.3698C37.8083 43.3697 37.6422 43.3172 37.5869 43.2995C37.4981 43.2711 37.4056 43.235 37.3161 43.1966C37.135 43.119 36.9189 43.0117 36.6846 42.8815C36.2155 42.6209 35.6332 42.245 35.0609 41.7721C33.9699 40.8709 32.6665 39.4098 32.6663 37.556C32.6663 36.3789 33.0391 35.3985 33.6898 34.7044C34.3356 34.0158 35.204 33.6667 36.0739 33.6667C36.8801 33.6667 37.5257 33.909 37.9671 34.1497C37.9783 34.1558 37.9888 34.1632 37.9997 34.1693C38.0106 34.1632 38.021 34.1558 38.0322 34.1497C38.4735 33.909 39.1193 33.6667 39.9254 33.6667C40.7956 33.6667 41.665 34.0155 42.3109 34.7044C42.9615 35.3985 43.333 36.3789 43.333 37.556Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4">
                <span className="text-xs  items-center tracking-wide text-gray-400">
                  File Upload
                </span>
                <FileUpload
                  multiple
                  accept={['application/pdf', 'image/jpeg', 'image/png']}
                  maxSizeMB={3}
                  onFilesChange={(files) => console.log(files)}
                  onError={(errs) => console.log(errs)}
                />
              </div>

              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4">
                <span className="text-xs  items-center tracking-wide text-gray-400">
                  Empty State
                </span>
                <EmptyState
                  title="Últimos movimientos"
                  description="Acá vas a poder seguir los pagos con QR, link de pago y Tienda online"
                  actions={[
                    { label: 'Primary', variant: 'primary', onClick: () => {} },
                    { label: 'Secondary', variant: 'secondary' },
                  ]}
                />
              </div>
            </section>
          </div>

          {/* Cards */}
          <div title="Data Display">
            <h2 className="text-xl font-semibold text-gray-800">Cards</h2>
            <section className="space-y-4">
              <h1 className="text-sm font-medium text-gray-500 mt-4">
                Cards types
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-4">
                  <span className="text-xs  items-center tracking-wide text-gray-400">
                    Cards Main
                  </span>

                  <div className="overflow-x-auto">
                    <div className="flex justify-center">
                      <Card
                        className="justify-self-start"
                        title="Título"
                        action={<span>›</span>} // opcional
                        variant="primary" // opcional
                      >
                        <Banner
                          tone="success"
                          size="compact"
                          title="Title"
                          subtitle="Subtitle"
                        />
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-4">
                  <span className="text-xs  items-center tracking-wide text-gray-400">
                    Cards Config width
                  </span>

                  <div className="overflow-x-auto">
                    <div className="flex justify-center">
                      <Card
                        width={286}
                        className="justify-self-start"
                        title="Título"
                        action={<span>›</span>}
                        variant="primary"
                      >
                        <p>Content Card</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Carousel */}
          <div title="Data Display">
            <h2 className="text-xl font-semibold text-gray-800">Carousel</h2>
            <section className="space-y-4">
              <h1 className="text-sm font-medium text-gray-500 mt-4">
                DragSlider
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white p-6 flex flex-col gap-4 lg:col-span-4">
                  <span className="text-xs  items-center tracking-wide text-gray-400">
                    Horizontal Slider Example in Card
                  </span>

                  <div className="overflow-x-auto">
                    <div className="flex justify-center w-150 m-auto">
                      <Card
                        className="justify-self-start sm:w-[320px]"
                        title="Tenemos las mejores promociones para tu comercio"
                        action={<span>›</span>}
                        variant="primary"
                        width="100%"
                      >
                        <DragSlider className="px-2">
                          <PromoBanner
                            title="10% de descuento para clientes Galicia"
                            imageSrc="https://picsum.photos/300/200"
                          />

                          <PromoBanner
                            title="9 cuotas sin interés para todas tus ventas"
                            imageSrc="https://picsum.photos/300/200"
                          />

                          <PromoBanner
                            title="12 cuotas sin interés para todas tus ventas"
                            imageSrc="https://picsum.photos/300/200"
                          />
                        </DragSlider>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* sidebar */}
          <div title="SideBar">
            <h2 className="text-xl font-semibold text-gray-800">Sidebar</h2>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <section className="space-y-4">
                <div className="flex h-screen">
                  <Sidebar
                    title="Tu Nave"
                    collapsed={collapsed}
                    items={[
                      {
                        id: 'home',
                        label: 'Inicio',
                        icon: (
                          <Icon>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.2501 8.13897C16.2501 7.64043 16.2448 7.50646 16.2134 7.39109C16.1811 7.27231 16.1279 7.1601 16.0564 7.05987C15.987 6.96258 15.887 6.87411 15.5014 6.55857L11.2932 3.11537C10.9853 2.86344 10.7801 2.69589 10.6112 2.57745C10.4491 2.46374 10.3555 2.42146 10.2824 2.40085C10.0979 2.34893 9.90218 2.34893 9.71766 2.40085C9.64456 2.42146 9.55104 2.46374 9.38889 2.57745C9.22001 2.69588 9.01484 2.86344 8.70692 3.11537L4.49875 6.55857C4.11309 6.87411 4.01315 6.96258 3.94374 7.05987C3.87225 7.1601 3.81902 7.2723 3.78667 7.39109C3.7553 7.50646 3.75005 7.64043 3.75005 8.13897V14.2083C3.75005 14.6853 3.75025 15.0059 3.7704 15.2524C3.78995 15.4915 3.82555 15.6059 3.86398 15.6813C3.96385 15.8772 4.12298 16.0364 4.3189 16.1362C4.39435 16.1747 4.5086 16.2102 4.74777 16.2298C4.99434 16.2499 5.31486 16.2501 5.79188 16.2501H14.2082C14.6852 16.2501 15.0058 16.2499 15.2523 16.2298C15.4915 16.2102 15.6058 16.1747 15.6812 16.1362C15.8771 16.0364 16.0363 15.8772 16.1361 15.6813C16.1746 15.6059 16.2102 15.4915 16.2297 15.2524C16.2499 15.0059 16.2501 14.6853 16.2501 14.2083V8.13897ZM17.5001 14.2083C17.5001 14.6647 17.5009 15.0449 17.4756 15.3541C17.4498 15.6706 17.3933 15.9676 17.2502 16.2485C17.0305 16.6797 16.6796 17.0306 16.2484 17.2503C15.9675 17.3934 15.6705 17.449 15.3541 17.4749C15.0448 17.5002 14.6646 17.5001 14.2082 17.5001H5.79188C5.33548 17.5001 4.95532 17.5002 4.64605 17.4749C4.32964 17.449 4.0326 17.3934 3.75168 17.2503C3.32047 17.0306 2.9696 16.6797 2.74989 16.2485C2.60678 15.9676 2.55033 15.6706 2.52447 15.3541C2.4992 15.0449 2.50005 14.6647 2.50005 14.2083V8.13897C2.50005 7.70891 2.49518 7.37731 2.58062 7.06313C2.65178 6.80164 2.76831 6.5546 2.92567 6.33396C3.1147 6.06892 3.37415 5.86322 3.70692 5.59096L7.9159 2.14776C8.20944 1.90759 8.45557 1.70568 8.67111 1.5545C8.89316 1.39877 9.11755 1.27086 9.37912 1.19724C9.78506 1.08302 10.215 1.08302 10.621 1.19724C10.8826 1.27086 11.1069 1.39877 11.329 1.5545C11.5445 1.70568 11.7907 1.90759 12.0842 2.14776L16.2932 5.59096C16.626 5.86322 16.8854 6.06892 17.0744 6.33396C17.2318 6.55459 17.3483 6.80163 17.4195 7.06313C17.5049 7.37731 17.5001 7.70891 17.5001 8.13897V14.2083Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Icon>
                        ),
                        active: activeItem === 'home',
                        onClick: () => setActiveItem('home'),
                      },
                      {
                        id: 'payments',
                        label: 'Pagos',
                        icon: (
                          <Icon>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.5 6.04167C17.5 5.46637 17.0336 5 16.4583 5H3.54167C2.96637 5 2.5 5.46637 2.5 6.04167V13.9583C2.5 14.5336 2.96637 15 3.54167 15H16.4583C17.0336 15 17.5 14.5336 17.5 13.9583V6.04167ZM18.75 13.9583C18.75 15.224 17.724 16.25 16.4583 16.25H3.54167C2.27601 16.25 1.25 15.224 1.25 13.9583V6.04167C1.25 4.77601 2.27601 3.75 3.54167 3.75H16.4583C17.724 3.75 18.75 4.77601 18.75 6.04167V13.9583Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10ZM12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M4.16667 4.375C4.16667 4.02982 4.44649 3.75 4.79167 3.75C5.13684 3.75 5.41667 4.02982 5.41667 4.375C5.41667 6.33101 3.83101 7.91667 1.875 7.91667C1.52982 7.91667 1.25 7.63684 1.25 7.29167C1.25 6.94649 1.52982 6.66667 1.875 6.66667C3.14065 6.66667 4.16667 5.64065 4.16667 4.375Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M14.5833 4.375C14.5833 4.02982 14.8632 3.75 15.2083 3.75C15.5535 3.75 15.8333 4.02982 15.8333 4.375C15.8333 5.64065 16.8593 6.66667 18.125 6.66667C18.4702 6.66667 18.75 6.94649 18.75 7.29167C18.75 7.63684 18.4702 7.91667 18.125 7.91667C16.169 7.91667 14.5833 6.33101 14.5833 4.375Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M4.16667 15.625C4.16667 14.3593 3.14065 13.3333 1.875 13.3333C1.52982 13.3333 1.25 13.0535 1.25 12.7083C1.25 12.3632 1.52982 12.0833 1.875 12.0833C3.83101 12.0833 5.41667 13.669 5.41667 15.625C5.41667 15.9702 5.13684 16.25 4.79167 16.25C4.44649 16.25 4.16667 15.9702 4.16667 15.625Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M14.5833 15.625C14.5833 13.669 16.169 12.0833 18.125 12.0833C18.4702 12.0833 18.75 12.3632 18.75 12.7083C18.75 13.0535 18.4702 13.3333 18.125 13.3333C16.8593 13.3333 15.8333 14.3593 15.8333 15.625C15.8333 15.9702 15.5535 16.25 15.2083 16.25C14.8632 16.25 14.5833 15.9702 14.5833 15.625Z"
                                fill="#A3AAB8"
                              />
                            </svg>
                          </Icon>
                        ),
                        active: activeItem === 'payments',
                        onClick: () => setActiveItem('payments'),
                      },
                      {
                        id: 'details',
                        label: 'Detalles',
                        icon: (
                          <Icon>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.4167 8.33333C15.4167 4.42132 12.2453 1.25 8.33333 1.25C4.42132 1.25 1.25 4.42132 1.25 8.33333C1.25 12.2453 4.42132 15.4167 8.33333 15.4167C12.2453 15.4167 15.4167 12.2453 15.4167 8.33333ZM7.70833 11.875V8.125H7.29167C6.94649 8.125 6.66667 7.84518 6.66667 7.5C6.66667 7.15482 6.94649 6.875 7.29167 6.875H8.33333C8.67851 6.875 8.95833 7.15482 8.95833 7.5V11.875C8.95833 12.2202 8.67851 12.5 8.33333 12.5C7.98816 12.5 7.70833 12.2202 7.70833 11.875ZM16.6667 8.33333C16.6667 12.9357 12.9357 16.6667 8.33333 16.6667C3.73096 16.6667 0 12.9357 0 8.33333C0 3.73096 3.73096 0 8.33333 0C12.9357 0 16.6667 3.73096 16.6667 8.33333Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M7.91667 5C7.91667 4.76988 8.10321 4.58333 8.33333 4.58333C8.56345 4.58333 8.75 4.76988 8.75 5C8.75 5.23012 8.56345 5.41667 8.33333 5.41667C8.10321 5.41667 7.91667 5.23012 7.91667 5Z"
                                fill="#A3AAB8"
                              />
                              <path
                                d="M8.75 5C8.75 4.76988 8.56345 4.58333 8.33333 4.58333C8.10321 4.58333 7.91667 4.76988 7.91667 5C7.91667 5.23012 8.10321 5.41667 8.33333 5.41667C8.56345 5.41667 8.75 5.23012 8.75 5ZM8.95833 5C8.95833 5.34518 8.67851 5.625 8.33333 5.625C7.98816 5.625 7.70833 5.34518 7.70833 5C7.70833 4.65482 7.98816 4.375 8.33333 4.375C8.67851 4.375 8.95833 4.65482 8.95833 5Z"
                                fill="#A3AAB8"
                              />
                            </svg>
                          </Icon>
                        ),
                        active: activeItem === 'details',
                        onClick: () => setActiveItem('details'),
                      },
                      {
                        id: 'settings',
                        label: 'Configuración',
                        icon: (
                          <Icon>
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 8v8"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M8 12h8"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </Icon>
                        ),
                        active: activeItem === 'settings',
                        onClick: () => setActiveItem('settings'),
                      },
                    ]}
                    footer={
                      <button
                        onClick={() => setCollapsed((v) => !v)}
                        className="text-xs text-gray-500 hover:text-gray-800"
                      >
                        {collapsed ? 'Expandir' : 'Colapsar'}
                      </button>
                    }
                  />

                  {/* Contenido de la página */}
                  <main className="flex-1 p-6 bg-gray-50">
                    {activeItem === 'home' && (
                      <h1 className="text-xl font-semibold">Inicio</h1>
                    )}

                    {activeItem === 'payments' && (
                      <h1 className="text-xl font-semibold">Pagos</h1>
                    )}

                    {activeItem === 'settings' && (
                      <h1 className="text-xl font-semibold">Configuración</h1>
                    )}
                    {activeItem === 'details' && (
                      <h1 className="text-xl font-semibold">Detalles</h1>
                    )}
                  </main>
                </div>
              </section>
            </div>
          </div>

          {/* Feedback */}
          <div title="System Feedback">
            <section className="space-y-4">
              <h1 className="text-sm font-medium text-gray-500 mt-4">
                System feedback
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ComponentCard title="Badge" span={2}>
                  <div className="flex justify-center">
                    <div className="w-full rounded-2xl flex flex-col items-center justify-center text-center gap-3">
                      <Badge tone="success" size="small">
                        Label
                      </Badge>
                      <Badge tone="warning" size="medium">
                        Label
                      </Badge>
                      <Badge tone="error" size="large" shape="square">
                        Label
                      </Badge>
                      <Badge tone="brand">Label</Badge>
                    </div>
                  </div>
                </ComponentCard>

                <ComponentCard title="Bar Progress" span={2}>
                  <div className="flex justify-center flex-col items-center gap-4">
                    {[progress, 60, 40, 30, 10].map((val, i) => (
                      <Progress key={i} value={val} className="w-[60%]" />
                    ))}
                  </div>
                </ComponentCard>

                <ComponentCard title="Loader" span={2}>
                  <div className="flex items-center justify-center gap-4">
                    <Loader />
                    <Label>Processing…</Label>
                  </div>
                </ComponentCard>

                <ComponentCard title="Alert" span={2}>
                  <div className="flex justify-center">
                    <Alert>
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                        <ul className="list-inside list-disc text-sm">
                          <li>Check your card details</li>
                          <li>Ensure sufficient funds</li>
                          <li>Verify billing address</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </div>
                </ComponentCard>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
