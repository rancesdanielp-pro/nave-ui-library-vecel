'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TypographyExampleProps {
  name: string;      // Ej: "Display L"
  tokenPrefix: string; // Ej: "--display-l"
  sampleText?: string;
}

export function TypographyExample({ name, tokenPrefix, sampleText = "The quick brown fox jumps over the lazy dog" }: TypographyExampleProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [specs, setSpecs] = useState({ size: '', weight: '', line: '', letter: '' });

  useEffect(() => {
    if (textRef.current) {
      const style = window.getComputedStyle(textRef.current);
      setSpecs({
        size: style.fontSize,
        weight: style.fontWeight,
        line: style.lineHeight !== 'normal' ? parseFloat(style.lineHeight).toFixed(1) : 'normal',
        letter: style.letterSpacing
      });
    }
  }, []);

  // Construimos el estilo dinámico usando las variables CSS
  const textStyle = {
    fontSize: `var(${tokenPrefix}-size)`,
    lineHeight: `var(${tokenPrefix}-line)`,
    fontWeight: `var(${tokenPrefix}-weight, var(--body-regular))`, // fallback a regular si no existe weight específico
    letterSpacing: `var(${tokenPrefix}-letter, normal)`,
  };

  return (
    <div className="flex flex-col gap-4 border-b border-slate-100 py-8 last:border-none">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Variable Prefix</span>
          <code className="text-sm font-mono text-nave-500">{tokenPrefix}</code>
        </div>
        
        {/* Tabla de Specs (Inspector) */}
        <div className="flex gap-6 text-[11px] font-mono text-slate-500 bg-slate-50 px-4 py-2 rounded-lg">
          <div><span className="text-slate-300">SIZE:</span> {specs.size}</div>
          <div><span className="text-slate-300">WEIGHT:</span> {specs.weight}</div>
          {specs.line !== 'normal' && <div><span className="text-slate-300">LINE:</span> {specs.line}</div>}
          {specs.letter !== '0px' && <div><span className="text-slate-300">SPACING:</span> {specs.letter}</div>}
        </div>
      </div>

      <div 
        ref={textRef} 
        style={textStyle}
        className="text-slate-900 truncate"
      >
        {sampleText}
      </div>
    </div>
  );
}