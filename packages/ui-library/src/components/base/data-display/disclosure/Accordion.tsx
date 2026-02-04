'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

const AccordionSizeContext = React.createContext<'sm' | 'md'>('md');

export const accordionTriggerVariants = cva(
  `
  flex flex-1 items-center justify-between gap-4
  rounded-md
  text-left font-medium
  transition-all
  hover:text-[--accordion-bg-hover]
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[--color-focus-ring]
  disabled:pointer-events-none disabled:opacity-50
  [&[data-state=open]>svg]:rotate-90
  `,
  {
    variants: {
      size: {
        sm: 'text-sm py-3',
        md: 'text-base py-4',
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
        sm: 'text-sm',
        md: 'text-base',
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
  
  const mergedTokens = resolveTokens(
    { componentName: 'accordion', size, tokens },
    theme
  ) as any ?? {};

  const styles = {
    '--accordion-bg': mergedTokens?.background ?? 'transparent',
    '--accordion-bg-hover': mergedTokens?.focusBorder ?? '#000000',

    '--accordion-text': mergedTokens?.text ?? '#000000',
    '--accordion-radius': mergedTokens?.radius ?? '8px',
    '--accordion-border-width': mergedTokens?.border ?? '1px',
    '--accordion-border-color': mergedTokens?.border ?? 'transparent',
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
        'border-b p-2 border-[--border-default]',
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
          accordionTriggerVariants({ size }),
          className
        )}
        {...props}
      >
        <span className="flex flex-1 items-center gap-2">{children}</span>
        <ChevronDownIcon
          className="
            h-5 w-5 shrink-0
            text-[--color-text-tertiary]
            transition-transform duration-200
            group-hover:text-[--accordion-bg-hover]
            group-focus-visible:text-[--accordion-bg-hover]
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
        accordionContentVariants({ size }),
        'group-data-[size=md]:text-base',
        className
      )}
      {...props}
    >
      <div className="pt-2 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
