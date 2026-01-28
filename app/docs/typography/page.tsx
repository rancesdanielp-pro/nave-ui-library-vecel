'use client';

import React from 'react';
import { DocsPage } from '../DocsPage';
import '@/packages/ui-library/src/components/base/foundation/typography/index.css';
import { TypographyExample } from '@/packages/ui-library/src/components/base/foundations/TypographyExample';

export default function TypographyPage() {
  const sections = [
    {
      title: 'Display',
      description: 'Utilizado para títulos grandes y secciones de marketing.',
      tokens: [
        { name: 'Display Grande', prefix: '--display-l' },
        { name: 'Display Medio', prefix: '--display-m' },
        { name: 'Display Pequeño', prefix: '--display-s' },
      ]
    },
    {
      title: 'Heading',
      description: 'Encabezados estándar para interfaces, paneles y modales.',
      tokens: [
        { name: 'Heading Grande', prefix: '--heading-l' },
        { name: 'Heading Medio', prefix: '--heading-m' },
        { name: 'Heading Pequeño', prefix: '--heading-s' },
      ]
    },
    {
      title: 'Body',
      description: 'Texto estándar para párrafos y componentes de interfaz.',
      tokens: [
        { name: 'Body Grande', prefix: '--body-l' },
        { name: 'Body Medio', prefix: '--body-m' },
        { name: 'Body Pequeño', prefix: '--body-s' },
        { name: 'Body XS', prefix: '--body-xs' },
        { name: 'Body XXS', prefix: '--body-xxs' },
      ]
    }
  ];

  return (
    <DocsPage title="Tipografía" description="Sistema de escalas tipográficas y variables CSS.">
      <div className="flex flex-col gap-16 max-w-5xl">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <div className="border-b-2 border-slate-900 pb-2">
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
              <p className="text-slate-500 text-sm mt-1">{section.description}</p>
            </div>
            
            <div className="bg-white rounded-xl">
              {section.tokens.map((token) => (
                <TypographyExample 
                  key={token.prefix} 
                  name={token.name} 
                  tokenPrefix={token.prefix}
                  sampleText="Cobrás con Nave, tu negocio vuela." // Ejemplo en español con tildes y ñ
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </DocsPage>
  );
}