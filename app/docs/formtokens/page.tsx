"use client";

import React, { useState } from 'react';

// Estructura base basada en tu token.ts (usamos la de 'Nave' como plantilla)
const INITIAL_TOKENS = {
  name: 'Nuevo Variant',
  tokens: {
    colors: { primary: '#652BDF', text: '#000000' },
    typography: { fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '1%' },
    button: { backgroundColor: '#652BDF', color: '#FFFFFF', borderRadius: '8px' },
    input: { color: '#000000', backgroundColor: '#FFFFFF', borderColor: '#E2E5E9', borderRadius: '8px' },
    // Agregué los principales, el formulario detectará automáticamente cualquier objeto anidado
  }
};

export default function TokenGenerator() {
  // Estado inicial con la estructura de tu primer variante (Nave)
  const [formData, setFormData] = useState(INITIAL_TOKENS);

  // Función recursiva para actualizar valores anidados
  const updateField = (path: string[], value: any) => {
    const newData = { ...formData };
    let current: any = newData;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = value;
    setFormData(newData);
  };

  // Función para descargar el JSON
  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify([formData], null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${formData.name.toLowerCase()}_tokens.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Renderizador recursivo de inputs
  const renderInputs = (obj: any, path: string[] = []) => {
    return Object.keys(obj).map((key) => {
      const currentPath = [...path, key];
      const value = obj[key];

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return (
          <div key={currentPath.join('.')} className="ml-4 border-l-2 border-gray-200 pl-4 my-4">
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-2">{key}</h3>
            {renderInputs(value, currentPath)}
          </div>
        );
      }

      return (
        <div key={currentPath.join('.')} className="flex flex-col mb-3">
          <label className="text-xs font-medium text-gray-700 mb-1">{key}</label>
          <input
            type={key.toLowerCase().includes('color') ? 'color' : 'text'}
            value={value}
            onChange={(e) => updateField(currentPath, e.target.value)}
            className="p-2 border rounded-md bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">CSS Token Generator</h1>
            <p className="text-sm text-gray-500">Configura tu variante y exporta el JSON</p>
          </div>
          <button
            onClick={downloadJSON}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-md flex items-center gap-2"
          >
            <span>Descargar JSON</span>
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-y-auto max-h-[70vh]">
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Nombre del Variante</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border-2 border-indigo-100 rounded-lg focus:border-indigo-500 outline-none transition-colors"
                placeholder="Ej: Galicia, Equis..."
              />
            </div>
            <hr className="my-6" />
            {renderInputs(formData.tokens, ['tokens'])}
          </div>

          {/* Preview del JSON */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-inner overflow-hidden flex flex-col">
            <h2 className="text-indigo-400 text-xs font-mono mb-4 uppercase tracking-widest">Live Preview (tokenVariants)</h2>
            <pre className="text-green-400 font-mono text-xs overflow-auto flex-1 custom-scrollbar">
              {JSON.stringify([formData], null, 2)}
            </pre>
          </div>
        </main>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
      `}</style>
    </div>
  );
}