# Nave Design System – Component Showcase

Esta página es una **demo interactiva** y documentación viva del *Nave Design System*, donde se visualizan y prueban todos los componentes principales bajo distintos **tokens de tema**.

---

## 🎯 Objetivo

* Mostrar el catálogo completo de componentes UI
* Validar consistencia visual entre variantes
* Permitir cambio dinámico de tema mediante tokens
* Servir como referencia clara para desarrollo

---

## 🧩 Setup general

Toda la UI está envuelta por un `ThemeProvider`, que expone los tokens a los componentes.

```tsx
<ThemeProvider theme={theme}>
  {/* UI */}
</ThemeProvider>
```

---

## 🔘 Buttons

### Import

```ts
import { Button } from '@packages/ui-library/dist'
```

### Uso básico

```tsx
<Button>Default</Button>
```

### Variantes

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="link">Link</Button>
```

---

## ✍️ Inputs & Forms

### Input

```ts
import { Input } from '@packages/ui-library/dist'
```

```tsx
<Input placeholder="Email" />
<Input type="password" placeholder="Password" />
```

### Textarea

```ts
import { Textarea } from '@packages/ui-library/dist'
```

```tsx
<Textarea placeholder="Write something..." />
```

### Label

```ts
import { Label } from '@packages/ui-library/dist'
```

```tsx
<Label>Email</Label>
```

### Select

```ts
import { Select } from '@packages/ui-library/dist'
```

```tsx
<Select
  placeholder="Select option"
  items={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>
```

---

## ☑️ Selection Controls

### Checkbox

```ts
import { Checkbox } from '@packages/ui-library/dist'
```

```tsx
<Checkbox />
```

### Switch

```ts
import { Switch } from '@packages/ui-library/dist'
```

```tsx
<Switch />
```

### Radio Group

```ts
import { RadioGroup, RadioGroupItem } from '@packages/ui-library/dist'
```

```tsx
<RadioGroup defaultValue="a">
  <RadioGroupItem value="a" />
  <RadioGroupItem value="b" />
</RadioGroup>
```

---

## 🧭 Navigation

### Breadcrumb

```ts
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@packages/ui-library/dist'
```

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Dashboard</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Tabs

```ts
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@packages/ui-library/dist'
```

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Pagination

```ts
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@packages/ui-library/dist'
```

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

## 🪟 Overlays

### Dropdown Menu

```ts
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@packages/ui-library/dist'
```

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Tooltip

```ts
import { Tooltip, TooltipTrigger, TooltipContent } from '@packages/ui-library/dist'
```

```tsx
<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>Tooltip text</TooltipContent>
</Tooltip>
```

### Alert Dialog

```ts
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@packages/ui-library/dist'
```

```tsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    <AlertDialogDescription>Action cannot be undone.</AlertDialogDescription>
    <AlertDialogCancel>Cancel</AlertDialogCancel>
    <AlertDialogAction>Confirm</AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>
```

---

## 📊 Data Display

### Table

```ts
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@packages/ui-library/dist'
```

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Badge

```ts
import { Badge } from '@packages/ui-library/dist'
```

```tsx
<Badge>New</Badge>
```

### Progress

```ts
import { Progress } from '@packages/ui-library/dist'
```

```tsx
<Progress value={60} />
```

---

## 🚨 Feedback

### Alert

```ts
import { Alert, AlertTitle, AlertDescription } from '@packages/ui-library/dist'
```

```tsx
<Alert>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong</AlertDescription>
</Alert>
```

### Loader

```ts
import { Loader } from '@packages/ui-library/dist'
```

```tsx
<Loader />
```

---

## 🎨 Temas y Tokens

* Todos los estilos se resuelven mediante **tokens de diseño**
* El cambio de tema es dinámico
* Los componentes reaccionan automáticamente sin re-render manual

### Ejemplo completo de tokens de tema

A continuación se muestra un ejemplo real de cómo definir un tema completo y pasarlo al `ThemeProvider`.

````md
```ts
const NaveTheme = {
  name: 'Nave',
  tokens: {
    colors: {
      primary: '#652BDF',
      text: '#000000',
    },
    typography: {
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '1%',
    },
    button: {
      backgroundColor: '#652BDF',
      color: '#FFFFFF',
      borderRadius: '12.73px',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderStyle: 'solid',
      boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
      transition: 'all ease',
      transitionDuration: '150ms',
      opacity: 1,
    },
    input: {
      color: '#000000',
      backgroundColor: '#FFFFFF',
      placeholderColor: '#666666',
      borderRadius: '8px',
      borderWidth: '1px',
      borderColor: '#652BDF',
      borderStyle: 'solid',
      focusBorderColor: '#652BDF',
      focusBorderWidth: '1px',
      transitionDuration: '150ms',
    },
    checkbox: {
      backgroundColor: '#652BDF',
      borderRadius: '8px',
      borderColor: '#CCCCCC',
      checkColor: '#FFFFFF',
    },
    switch: {
      trackWidth: 38,
      trackHeight: 20,
      backgroundColor: '#CCCCCC',
      activeBackgroundColor: '#652BDF',
      thumbSize: 18,
      thumbColor: '#FFFFFF',
    },
    badge: {
      backgroundColor: '#652BDF',
      color: '#FFFFFF',
      borderRadius: '50px',
    },
    progress: {
      track: {
        backgroundColor: '#E0E0E0',
        height: '8px',
        borderRadius: '9999px',
      },
      indicator: {
        backgroundColor: '#652BDF',
      },
    },
    alert: {
      backgroundColor: '#E0E0E0',
      color: '#000000',
      borderRadius: '8px',
    },
  },
}
````

Uso con `ThemeProvider`:

```tsx
<ThemeProvider theme={NaveTheme}>
  <App />
</ThemeProvider>
```

Todos los componentes consumirán automáticamente estos tokens.

---

## ✅ Conclusión

Este README funciona como:

* 📘 Documentación oficial del Design System
* 🧪 Playground de referencia visual
* 🧩 Base sólida para escalar nuevos componentes
