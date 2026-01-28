'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { tokenVariants } from '../utils/tokens';

const BrandContext = createContext({
  activeBrand: tokenVariants[0],
  setBrand: (name: string) => {},
});

export function BrandProvider({ children }: { children: React.ReactNode }) {
  // Usamos un estado solo para forzar el re-render de la UI cuando mutamos el array
  const [version, setVersion] = useState(0);

  const setBrand = (name: string) => {
    const index = tokenVariants.findIndex((v) => v.name === name);
    
    if (index !== -1 && index !== 0) {
      // 🔄 EL TRUCO: Movemos el seleccionado a la posición [0]
      const [selectedBrand] = tokenVariants.splice(index, 1);
      tokenVariants.unshift(selectedBrand);
      
      // Guardamos en localStorage para que al recargar persista el swap
      localStorage.setItem('selected-brand-name', name);
      
      // Forzamos que React se entere del cambio
      setVersion(v => v + 1);
    }
  };

  // Efecto para mantener el swap si el usuario recarga la página
  useEffect(() => {
    const saved = localStorage.getItem('selected-brand-name');
    if (saved && tokenVariants[0].name !== saved) {
      setBrand(saved);
    }
  }, []);

  return (
    <BrandContext.Provider value={{ activeBrand: tokenVariants[0], setBrand }}>
      {/* Usamos la v como key para forzar que toda la doc se refresque al cambiar marca */}
      <div key={version}>
        {children}
      </div>
    </BrandContext.Provider>
  );
}

export const useBrand = () => useContext(BrandContext);