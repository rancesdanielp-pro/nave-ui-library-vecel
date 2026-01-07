'use client'

import * as React from 'react'
import { DocsPage } from '../DocsPage'
import { ContentCards } from '../ContentCards'
import { CodeBlock } from '@/app/components/[slug]/CodeBlock'
import { tokenVariants } from '@/app/utils/tokens'
import { Button, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from '@/packages/ui-library/dist/react';

export default function TokensStrategyPage() {
  const [activeVariant, setActiveVariant] = React.useState(tokenVariants[0])

  return (
    <DocsPage
      title="Tokens Strategy"
      description="La arquitectura de Nave UI se basa en un motor de inyección de tokens que permite el multi-tenant y el 'white-label' dinámico."
      theme={activeVariant.tokens}
    >
      {/* ───────────── SECCIÓN: SELECTOR DE TEMA ───────────── */}
      <ContentCards title="Theme Switcher (Live Demo)">
        <p className="text-sm text-slate-500 mb-6">
          Selecciona un esquema para ver cómo los tokens de este JSON impactan en tiempo real a los componentes de abajo.
        </p>
        <div className="flex gap-4 mb-8">
          {tokenVariants.map((variant) => (
            <button
              key={variant.name}
              onClick={() => setActiveVariant(variant)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border-2 ${
                activeVariant.name === variant.name
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {variant.name}
            </button>
          ))}
        </div>

{/* PREVISUALIZACIÓN DE COMPONENTES SEGÚN TOKEN */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-slate-50 rounded-xl border border-dashed transition-all duration-500">
  <div className="space-y-4">
    <h4 className="text-xs font-bold uppercase text-slate-400">Botones y Radio</h4>
    <div className="flex flex-wrap gap-4 items-center">
      <Button 
        key={`btn-${activeVariant.name}`} 
        tokens={activeVariant.tokens}
        style={{ 
          backgroundColor: activeVariant.tokens.button.backgroundColor,
          borderRadius: activeVariant.tokens.button.borderRadius,
          color: activeVariant.tokens.button.color
        }}
      >
        Primary Action
      </Button>
      
      <div 
        key={`dot-${activeVariant.name}`}
        className="w-6 h-6 rounded-full border-2 transition-all duration-500 shadow-sm" 
        style={{ 
          borderColor: activeVariant.tokens.colors.primary, 
          backgroundColor: activeVariant.tokens.colors.primary 
        }} 
      />
    </div>
  </div>

  <div className="space-y-4">
    <h4 className="text-xs font-bold uppercase text-slate-400">Inputs & Textarea</h4>
    <div key={`input-container-${activeVariant.name}`} className="space-y-2">
      <Input 
        tokens={activeVariant.tokens} 
        placeholder={`Input estilo ${activeVariant.name}`}
        // Agregamos !important (!) a las clases de borde de tailwind para que el style gane
        className="!border-2 transition-all duration-500"
        style={{ 
          borderColor: activeVariant.tokens.input.borderColor,
          borderRadius: activeVariant.tokens.input.borderRadius,
          backgroundColor: activeVariant.tokens.input.backgroundColor,
          color: activeVariant.tokens.input.color
        }}
      />
      <p className="text-[10px] text-slate-400 font-mono italic">
        Border: {activeVariant.tokens.input.borderColor}
      </p>
    </div>
  </div>
</div>
      </ContentCards>

      {/* ───────────── SECCIÓN: EXPLICACIÓN TÉCNICA ───────────── */}
      <ContentCards title="¿Cómo funciona la estrategia?">
        <div className="prose prose-slate prose-sm max-w-none">
          <p>
            Nuestro sistema no usa variables CSS estáticas globales. En su lugar, utiliza un <strong>Contenedor de Contexto</strong> que resuelve los estilos en tres niveles:
          </p>
          <ol>
            <li><strong>Global:</strong> Definiciones base como <code>colors.primary</code>.</li>
            <li><strong>Component-Level:</strong> Tokens específicos como <code>button.borderRadius</code>.</li>
            <li><strong>Override:</strong> La capacidad de pasar una prop <code>tokens</code> directamente al componente para casos excepcionales.</li>
          </ol>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: JSON ESTRUCTURA ───────────── */}
      <ContentCards title="JSON Structure">
        <p className="text-sm text-slate-500 mb-4">
          Esta es la estructura que viaja desde el backend o la configuración de marca hacia el frontend.
        </p>
        <div className="max-h-[400px] overflow-auto rounded-lg border">
            <CodeBlock 
              code={JSON.stringify(activeVariant.tokens, null, 2)} 
            />
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN: IMPACTO POR TEMA ───────────── */}
      <ContentCards title="Diferencias Clave">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Propiedad</TableHead>
              <TableHead>Nave (Default)</TableHead>
              <TableHead>Galicia</TableHead>
              <TableHead>Equis</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell >Primary Color</TableCell>
              <TableCell>#652BDF</TableCell>
              <TableCell>#c85000</TableCell>
              <TableCell>#50007f</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Border Radius (Btn)</TableCell>
              <TableCell>8px</TableCell>
              <TableCell>50px (Pill)</TableCell>
              <TableCell>16px</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Input Border</TableCell>
              <TableCell>#E2E5E9</TableCell>
              <TableCell>#c85000</TableCell>
              <TableCell>#50007f</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        </div>
      </ContentCards>
    </DocsPage>
  )
}