This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# 📂 **Estructura del Monorepo**

```powershell
packages/
  theme-service/   ← reglas de theming y consumo dinámico de temas
  tokens/          ← design tokens (colors, spacing, radii, typography…)
  core/            ← componentes base, lógica compartida, blocks y pages
  ui-react/        ← wrappers de componentes para proyectos React
  ui-next/         ← wrappers para proyectos Next.js / RSC
  cli/             ← CLI que copia y genera los componentes necesarios
```

Cada paquete funciona de forma independiente, pero todos se integran en la librería final.

# 📦 **Instalación**
1. Instalar Nave UI en tu proyecto:

```sh
npm install nave-ui
# or
yarn add nave-ui
# or
pnpm add nave-ui
```

# ⚙️ **Instalación de componentes con la CLI**

La CLI de Nave UI permite instalar componentes individuales dentro de tu proyecto React o Next.js.
La sintaxis general es:

cd ./packages/cli

```sh
nave-ui install <component> <framework> --publicKey=<key>
```

Ejemplo: instalar el componente Checkbox en React

```sh
nave-ui install checkbox react --publicKey=pk_123
```

```yaml
✔️ Output esperado
✔ Componente generado: NaveCheckbox
📁 Ubicación: C:\Users\rance\proyectos-ranty\nave-component-library\packages\ui-react\src\NaveCheckbox.tsx
⚡ Framework: react
🔑 Public Key: pk_123
```

# **La CLI**:

📥 Copia el componente desde packages/core

🧩 Lo adapta al framework seleccionado

🛠️ Inyecta automáticamente la publicKey

📁 Lo agrega a tu proyecto en ui-react/src/

🧩 Uso del componente instalado

```tsx
import NaveButton from '@/packages/ui-react/src/NaveButton';

const tokens = {
  colors: {
    primary: '#6366F1',
    secondary: '#a9aae4ff',
    text: '#000000',
  },
  radius: {
    sm: '4px',
    md: '8px',
    xl: '16px',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
  },
};

export default function Example() {
  return (
    <NaveButton tokens={tokens} className="w-full">
      Pagar ahora
    </NaveButton>
  );
}
```

La CLI copia las versiones correctas desde:
```powershell
packages/ui-react

packages/ui-next
```
dependiendo del entorno en el que estés trabajando.

# 🏗️ **Desarrollo interno — Cómo construir el paquete core**

Moverse al paquete:
```sh
cd ./packages/core
```

Instalar dependencias (recomendado pnpm):
```sh
pnpm install
```

Compilar:
```sh
pnpm build
# o
npm run build
```

Esto genera:
```powershell
dist/
  index.js
  index.d.ts
  ...
```
# 🧭 **Navegación dentro del monorepo**

Moverse entre paquetes:
```sh
cd packages/core
cd packages/ui-react
cd packages/theme-service
```

Ejecutar scripts desde la raíz:
```sh
pnpm -F core build
pnpm -F ui-react dev
```

Listar todos los paquetes:
```sh
pnpm -w ls --depth 1
```
📘 Crear nuevos componentes

Si querés crear un componente nuevo en el core:
```sh
cd packages/core
npm run dev
```
