'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

const AccordionSizeContext = React.createContext<'sm' | 'md'>('md');

const sizeMap: Record<'sm' | 'md', 'small' | 'medium'> = {
  sm: 'small',
  md: 'medium',
};

export const accordionTriggerVariants = cva(
  `
  flex flex-1 items-center justify-between gap-4
  rounded-md
  text-left font-medium
  transition-all
  hover:text-[--accordion-hover-text]
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[--accordion-focus-border]
  disabled:pointer-events-none disabled:opacity-50
  [&[data-state=open]>svg]:rotate-90
  `,
  {
    variants: {
      size: {
        sm: 'py-3',
        md: 'py-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const accordionContentVariants = cva(
  `
  text-[--color-text-secondary]
  overflow-hidden
  transition-all
  data-[state=closed]:animate-accordion-up
  data-[state=open]:animate-accordion-down
  `,
  {
    variants: {
      size: {
        sm: '',
        md: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

import type { ThemeTokensBase } from '../../../../theme/theme';

function Accordion({
  size = 'md',
  tokens,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & {
  size?: 'sm' | 'md';
  tokens?: Partial<ThemeTokensBase>;
}) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens(
      { componentName: 'accordion', size, tokens },
      theme
    ) as any) ?? {};;

  const styles = {
    '--accordion-bg': mergedTokens?.background ?? 'transparent',
    '--accordion-border-color': mergedTokens?.borderColor ?? 'transparent',
    '--accordion-radius': mergedTokens?.radius ?? '0px',
    '--accordion-border-width': mergedTokens?.borderWidth ?? '0px',
    '--accordion-text-title': mergedTokens?.text?.title ?? '#000000',
    '--accordion-text-content': mergedTokens?.text?.content ?? '#000000',
    '--accordion-icon-color': mergedTokens?.text?.icon ?? '#000000',
    '--accordion-hover-text': mergedTokens?.states?.hover?.text ?? '#000000',
    '--accordion-focus-border': mergedTokens?.states?.focus?.borderColor ?? '#000000',
    '--accordion-font-size':
      mergedTokens?.sizes?.[sizeMap[size]]?.trigger?.fontSize ?? '16px',
    '--accordion-font-weight': mergedTokens?.base?.fontWeight ?? '550',
  } as React.CSSProperties;

  return (
    <AccordionSizeContext.Provider value={size}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        data-size={size}
        className="group"
        style={styles}
        {...props}
      />
    </AccordionSizeContext.Provider>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        'border-b p-2 border-[--accordion-border-color]',
        '[&:last-child]:border-b-0',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  size?: 'sm' | 'md';
}) {
  const size = React.useContext(AccordionSizeContext);
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          'group w-full',
          'text-[color:var(--accordion-text-title)]',
          'text-[length:var(--accordion-font-size)]',
          'font-[var(--accordion-font-weight)]',
          'hover:text-[color:var(--accordion-hover-text)]',
          'focus-visible:ring-2 focus-visible:ring-[--accordion-focus-border]',
          accordionTriggerVariants({ size }),
          className
        )}
        {...props}
      >
        <span className="flex flex-1 items-center gap-2">{children}</span>
        <ChevronDownIcon
          className="
          text-[color:var(--accordion-icon-color)]
          transition-transform
          group-hover:text-[color:var(--accordion-hover-text)]
          [&[data-state=open]]:rotate-90
          "
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & {
  size?: 'sm' | 'md';
}) {
  const size = React.useContext(AccordionSizeContext);
  return (
    <AccordionPrimitive.Content
      className={cn(
        'group',
        'text-[--accordion-text-content]',
        'text-[length:var(--accordion-font-size)]',
        'font-[400]',
        accordionContentVariants({ size }),
        className
      )}
      {...props}
    >
      <div className="pt-2 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
