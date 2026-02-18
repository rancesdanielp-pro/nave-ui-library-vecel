'use client';

import { DocsPage } from '../DocsPage';
import { ContentCards } from '../ContentCards';
import { CodeBlock } from '@/app/components/[slug]/CodeBlock';
import { ComponentExample } from '@/app/components/[slug]/ComponentExample';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { tokenVariants } from '@/app/utils/tokens';
import { ColorExample } from '@/packages/ui-library/dist/react';

export default function ColorsPage() {
  // Obtenemos el registro específico para el componente de ejemplo de color
  const componentRegistry = (registry as any)['colorExample'];
  // Usamos el tema de Nave como base para la documentación
  const naveTheme = tokenVariants[0].tokens;

  return (
    <DocsPage
      title="Color Example"
      description="El componente ColorExample (o Swatch) se utiliza dentro del catálogo para visualizar y documentar los tokens de color del sistema de diseño, permitiendo validar el contraste y los códigos HEX."
      theme={naveTheme}
    >
      {/* ───────────── SECCIÓN: IMPORTS ───────────── */}
      <ContentCards title="Imports">
        <p className="text-sm text-slate-500 mb-4">
          Importa el componente para documentar tus paletas:
        </p>
        <CodeBlock
          code={`import { ColorExample } from 'nave-ui-library/react'`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: PRIMARY COLOR ───────────── */}
      <ContentCards title="Primary Color">
        <p className="text-sm text-slate-500 mb-4">
          Ejemplo visualizando el token de acción primaria:
        </p>
        <ComponentExample
          preview={
            <div className="flex gap-4">
              <ColorExample colorToken={'#6200EE'} colorName="Primary Action" />
            </div>
          }
          code={`<ColorExample 
  colorToken={theme.tokens['brand-primary']}
  colorName="Primary Action"
/>`}
        />
      </ContentCards>

      {/* ───────────── SECCIÓN: STATUS COLORS ───────────── */}
      <ContentCards title="Status Colors">
        <p className="text-sm text-slate-500 mb-4">
          Visualización de tokens de estado (Error, Success, Warning):
        </p>
        <ComponentExample
          preview={
            <div className="flex flex-wrap gap-4">
              <ColorExample colorToken="#EF4444" colorName="Semantic Error" />
              <ColorExample colorToken="#10B981" colorName="Semantic Success" />
            </div>
          }
          code={`<div className="flex gap-4">
  <ColorExample 
    colorToken="#EF4444"
    colorName="Semantic Error"
  />
  <ColorExample 
    colorToken="#10B981"
    colorName="Semantic Success"
  />
</div>`}
        />
      </ContentCards>
    </DocsPage>
  );
}
