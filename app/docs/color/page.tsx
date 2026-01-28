// page.tsx
'use client'

import { DocsPage } from '../DocsPage'

import { ColorExample } from '@/packages/ui-library/dist/react';

export default function ColorsPage() {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const colorSections = [
    {
      title: 'Basics',
      tokens: ['white', 'black'] // Sin números
    },
    {
      title: 'Gray',
      tokens: steps.map(s => `gray-${s}`)
    },
    {
      title: 'Nave',
      tokens: steps.map(s => `nave-${s}`)
    },
    {
        title: 'Pink',
        tokens: steps.map(s => `pink-${s}`)
    }
  ]

  return (
    <DocsPage title="Colors" description="Catálogo de variables CSS">
      <div className="flex flex-col gap-16">
        {colorSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold border-b pb-2">{section.title}</h2>
            <div className="flex flex-wrap gap-6">
            {section.tokens.map((tokenName) => (
            <ColorExample
                key={tokenName}
                colorToken={`var(--color-${tokenName})`} 
                colorName={tokenName}
                // Borramos la prop accessibilityGrade porque ahora es automática
            />
            ))}
            </div>
          </div>
        ))}
      </div>
    </DocsPage>
  )
}