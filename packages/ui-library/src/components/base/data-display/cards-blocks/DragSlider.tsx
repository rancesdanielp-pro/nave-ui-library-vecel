'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { useTheme, resolveTokens } from '../../../../theme';

import type { ThemeTokensBase } from '../../../../theme/theme';

export type DragSliderProps = {
  children: React.ReactNode;
  className?: string;
  tokens?: Partial<ThemeTokensBase>;
};

function DragSlider({ children, className, tokens: customTokens }: DragSliderProps) {
  const theme = useTheme();
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // 1) Resolución de tokens
  const mergedTokens = resolveTokens({ componentName: 'dragslider', tokens: customTokens }, theme) as any ?? {};

  // Refs de control de dragging
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  // Mapeo de estilos a variables CSS
  const styles = {
    '--ds-gap': mergedTokens?.gap ?? '16px',
    '--ds-cursor': mergedTokens?.cursorGrab ?? 'grab',
    '--ds-cursor-active': mergedTokens?.cursorGrabbing ?? 'grabbing',
  } as React.CSSProperties;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    sliderRef.current.style.cursor = 'var(--ds-cursor-active)';
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'var(--ds-cursor)';
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Ajuste leve de velocidad
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={sliderRef}
      style={styles}
      className={cn(
        'flex overflow-x-auto no-scrollbar select-none scroll-smooth',
        'snap-x snap-mandatory',
        'gap-[var(--ds-gap)] cursor-[var(--ds-cursor)]',
        className
      )}
      onMouseDown={onMouseDown}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={onMouseMove}
    >
      {React.Children.map(children, (child) => (
        <div data-slot="drag-slider-item" className="shrink-0 snap-start">
          {child}
        </div>
      ))}
    </div>
  );
}

export { DragSlider };