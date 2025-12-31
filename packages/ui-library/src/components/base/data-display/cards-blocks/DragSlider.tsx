'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';

export type DragSliderProps = {
  children: React.ReactNode;
  className?: string;
};

function DragSlider({ children, className }: DragSliderProps) {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    isDown.current = true;
    sliderRef.current.classList.add('cursor-grabbing');

    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    sliderRef.current?.classList.remove('cursor-grabbing');
  };

  const onMouseUp = () => {
    isDown.current = false;
    sliderRef.current?.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // velocidad
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={sliderRef}
      className={cn(
        'flex gap-4',
        'overflow-x-auto',
        'scroll-smooth',
        'snap-x snap-mandatory',
        'no-scrollbar',
        'cursor-grab',
        'select-none',
        className
      )}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {React.Children.map(children, (child) => (
        <div className="shrink-0 snap-start">
          {child}
        </div>
      ))}
    </div>
  );
}

export { DragSlider };
