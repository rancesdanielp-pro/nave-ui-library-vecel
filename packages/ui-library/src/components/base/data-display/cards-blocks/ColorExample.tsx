'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn'; 

interface ContrastResult {
  grade: string;
  textColor: string;
  badgeBg: string;
  ratio: string;
}

function getSmartContrast(hex: string): ContrastResult {
  // CASO DE ERROR: Ahora incluimos badgeBg para que TS no se queje
  if (hex === "VAR_NOT_FOUND" || hex === "#N/A") {
    return { 
      grade: "N/A", 
      textColor: "text-slate-400", 
      badgeBg: "bg-slate-100",
      ratio: "0:1" 
    };
  }

  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const getL = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const L = 0.2126 * getL(r) + 0.7152 * getL(g) + 0.0722 * getL(b);

  const ratioWithWhite = (1.0 + 0.05) / (L + 0.05);
  const ratioWithBlack = (L + 0.05) / (0.0 + 0.05);

  const isDarkBg = ratioWithWhite > ratioWithBlack;
  const bestRatio = isDarkBg ? ratioWithWhite : ratioWithBlack;
  
  // Colores dinámicos
  const textColor = isDarkBg ? "text-white" : "text-black";
  const badgeBg = isDarkBg ? "bg-white/20" : "bg-black/10";

  let grade = "FAIL";
  if (bestRatio >= 7) grade = "AAA";
  else if (bestRatio >= 4.5) grade = "AA";

  return { 
    grade, 
    textColor, 
    badgeBg, 
    ratio: bestRatio.toFixed(1) + ":1" 
  };
}

interface ColorExampleProps {
  className?: string;
  colorToken: string;
  colorName: string;
}

export function ColorExample({ className, colorToken, colorName }: ColorExampleProps) {
  const [computedHex, setComputedHex] = React.useState('#N/A');
  // Estado inicial con todas las propiedades requeridas
  const [contrastData, setContrastData] = React.useState<ContrastResult>({ 
    grade: '...', 
    textColor: 'text-transparent', 
    badgeBg: 'bg-transparent',
    ratio: '0:1'
  });
  
  const colorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const readColor = () => {
      if (colorRef.current) {
        const style = window.getComputedStyle(colorRef.current);
        const color = style.backgroundColor;
        
        if (color && color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
          const rgb = color.match(/\d+/g);
          if (rgb) {
            const hex = "#" + rgb.slice(0, 3).map(x => parseInt(x).toString(16).padStart(2, '0')).join("");
            const finalHex = hex.toUpperCase();
            setComputedHex(finalHex);
            setContrastData(getSmartContrast(finalHex));
          }
        }
      }
    };
    setTimeout(readColor, 200);
  }, [colorToken]);

  return (
    <div className={cn("inline-flex flex-col overflow-hidden rounded-[16px] border border-slate-200 w-[160px] h-[170px]", className)}>
      <div 
        ref={colorRef}
        className={cn("flex-1 w-full flex flex-col items-center justify-center gap-1 transition-colors duration-300", contrastData.textColor)}
        style={{ backgroundColor: colorToken }}
      >
        <span className={cn("px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider", contrastData.badgeBg)}>
           {contrastData.grade}
        </span>
        <span className="text-[10px] opacity-80 font-medium">
          {contrastData.ratio}
        </span>
      </div>

      <div className="h-[75px] p-3 flex flex-col justify-center bg-white border-t border-slate-100">
        <div className="font-bold text-[13px] text-slate-900 truncate">{colorName}</div>
        <div className="mt-1 font-mono text-[10px] text-slate-400 uppercase tracking-tight">
          {computedHex}
        </div>
      </div>
    </div>
  );
}