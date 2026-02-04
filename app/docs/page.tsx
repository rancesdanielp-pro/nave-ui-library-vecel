'use client';

import React from 'react';
import { CodeBlock } from '../components/[slug]/CodeBlock';
// Eliminamos la importación directa de tokenVariants aquí para evitar confusiones
import { ContentCards } from './ContentCards';
import { useBrand } from './BrandContext';
import {
  Button,
  Input,
  Card,
  Badge,
  Icon,
} from '@/packages/ui-library/dist/react';

import { DocsPage } from './DocsPage';
// Icono de ejemplo para la preview
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function DocsHome() {
  // Extraemos staticVariants del contexto. Este array NO cambia de orden.
  const { setBrand, activeBrand, staticVariants } = useBrand();

  return (
    <DocsPage 
      title="Design System" 
      description="Bienvenido a la documentación oficial de Nave. Una arquitectura multi-marca de alto rendimiento basada en Design Tokens."
    >
      
      {/* ───────────── SECCIÓN 1: BRAND SWITCHER (ESTÁTICO REAL) ───────────── */}
      <ContentCards title="Brand Experience Switcher">
        <p className="text-sm text-slate-500 mb-6">
          Selecciona una marca para reconfigurar el ADN visual del sistema. 
          Los botones mantienen su posición fija gracias al uso de <code>staticVariants</code>.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {/* IMPORTANTE: Usamos staticVariants para mapear los botones */}
          {staticVariants.map((variant) => {
            const isActive = activeBrand.name === variant.name;
            
            return (
              <button
                key={variant.name}
                onClick={() => setBrand(variant.name)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all border-2 shadow-sm ${
                  isActive
                    ? 'border-purple-600 bg-purple-50 text-purple-700 ring-2 ring-purple-200 scale-105'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {variant.name}
              </button>
            );
          })}
        </div>

        {/* LIVE PREVIEW AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 transition-all duration-500">
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Acciones</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Feedback</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge tone="brand" shape="rounded">Branded Badge</Badge>
                <Icon color="primary" size="lg"><StarIcon /></Icon>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Formularios</h4>
              <Input placeholder={`Escribe en estilo ${activeBrand.name}...`} />
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Superficies</h4>
              <Card title="DNA Preview" className="w-full">
                <p className="text-sm text-slate-500">
                  Los componentes consumen <code>tokenVariants[0]</code> internamente, 
                  que actualmente es <strong>{activeBrand.name}</strong>.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN 2: ESTRATEGIA TÉCNICA ───────────── */}
      <ContentCards title="¿Cómo funciona la inyección de ADN?">
        <div className="prose prose-slate prose-sm max-w-none">
          <p>
            El sistema utiliza un <strong>Swap de Tokens</strong> en el índice cero del array original:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-6">
            <li className="bg-white p-4 rounded-lg border shadow-sm">
              <span className="block font-bold text-purple-600 mb-1">Capa Visual</span>
              Los botones usan un mapeo estático para no moverse de su lugar.
            </li>
            <li className="bg-white p-4 rounded-lg border shadow-sm">
              <span className="block font-bold text-purple-600 mb-1">Capa de Estilos</span>
              La librería de componentes siempre lee la posición [0], que muta dinámicamente.
            </li>
          </ul>
        </div>
      </ContentCards>

      {/* ───────────── SECCIÓN 3: JSON EXPLORER ───────────── */}
      <ContentCards title={`Explorador de Tokens: ${activeBrand.name}`}>
        <p className="text-sm text-slate-500 mb-4">
          Este es el esquema de tokens activo (Posición [0]):
        </p>
        <div className="max-h-[400px] overflow-auto rounded-xl border bg-slate-900 shadow-2xl">
          <CodeBlock code={JSON.stringify(activeBrand.tokens, null, 2)} />
        </div>
      </ContentCards>

    </DocsPage>
  );
}