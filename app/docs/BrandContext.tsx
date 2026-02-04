'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { tokenVariants } from '../utils/tokens';

const BrandContext = createContext({
  activeBrand: tokenVariants[0],
  staticVariants: tokenVariants, // Nuevo: Array que nunca cambia de orden
  setBrand: (name: string) => {},
});

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersion] = useState(0);

  // 1. Creamos una copia estática del array original al inicio
  // Esto garantiza que los botones NUNCA cambien de posición.
  const staticVariants = useMemo(() => [...tokenVariants], []);

  const setBrand = (name: string) => {
    const index = tokenVariants.findIndex((v) => v.name === name);
    
    // Seguimos haciendo el swap en tokenVariants para que la librería 
    // reciba los tokens en la posición [0] y aplique los estilos.
    if (index !== -1) {
      const [selectedBrand] = tokenVariants.splice(index, 1);
      tokenVariants.unshift(selectedBrand);
      
      localStorage.setItem('selected-brand-name', name);
      setVersion(v => v + 1);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('selected-brand-name');
    if (saved && tokenVariants[0].name !== saved) {
      setBrand(saved);
    }
  }, []);

  return (
    // Pasamos staticVariants para que el componente de los botones use este array fijo
    <BrandContext.Provider value={{ 
      activeBrand: tokenVariants[0], 
      staticVariants, 
      setBrand 
    }}>
      <div key={version}>
        {children}
      </div>
    </BrandContext.Provider>
  );
}

export const useBrand = () => useContext(BrandContext);