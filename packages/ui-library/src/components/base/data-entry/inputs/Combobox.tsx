'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Check, ChevronDownIcon, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';
import { cva } from 'class-variance-authority';

interface ComboboxItem {
  label: string;
  value: string;
}

import type { ThemeTokensBase } from '../../../../theme/theme';

interface ComboboxProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  items: ComboboxItem[];
  size?: 'sm' | 'md';
  disabled?: boolean;
  tokens?: Partial<ThemeTokensBase>;
  className?: string;
  error?: boolean;
}

const selectBase =
  'w-full inline-flex items-center justify-between ' +
  'rounded-[var(--combobox-radius)] border outline-none ' +
  'text-[--color-text-primary] ' +
  'transition-[border-color,box-shadow] ' +
  'disabled:bg-[--color-bg-disabled] ' +
  'disabled:text-[--color-text-disabled] ' +
  'disabled:border-[--border-hover] ' +
  'disabled:cursor-not-allowed';

const selectVariants = cva(selectBase, {
  variants: {
    size: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-3 text-base',
    },
    error: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      error: false,
      className: `
        border-[--border-default]
        hover:border-[--border-hover]
        focus:border-[--combobox-border-color]
        focus:ring-2
        focus:ring-[--combobox-focus-ring]
        focus:ring-offset-0
      `,
    },
    {
      error: true,
      className: `
        border-[--color-error-main]
        hover:border-[--color-error-dark]
        focus:border-[--color-error-main]
        focus:ring-2
        focus:ring-[--color-error-lighter]
      `,
    },
  ],
  defaultVariants: {
    size: 'md',
    error: false,
  },
});

export function Combobox({
  value,
  onValueChange,
  placeholder = 'Seleccionar...',
  items,
  size = 'md',
  error = false,
  disabled,
  tokens,
  className,
}: ComboboxProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'select', tokens },
    theme
  ) as any ?? {};

  const styles = {
    '--combobox-text': mergedTokens?.color ?? '#000000',
    '--combobox-radius': mergedTokens?.radius ?? '8px',
    '--combobox-border-width': mergedTokens?.borderWidth ?? '1px',
    '--combobox-border-color': mergedTokens?.border ?? 'transparent',
    '--combobox-focus-ring': mergedTokens?.focusBorder ?? 'transparent',
  } as React.CSSProperties;

  const selectedItem = items.find((i) => i.value === value);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          disabled={disabled}
          style={styles}
          className={cn(
            selectVariants({ size, error }),
            'group w-full inline-flex items-center justify-between rounded-[var(--combobox-radius)] ',
            className
          )}
        >
          <span className="truncate">{selectedItem?.label ?? placeholder}</span>

          <ChevronsUpDown
            className="
            h-4 w-4 shrink-0 text-[--color-text-tertiary]
            "
          />
        </button>
      </Popover.Trigger>

      <Popover.Content
        align="start"
        sideOffset={4}
        className="
          z-50 rounded-md border border-[--border-default]
          bg-white shadow-lg p-1
        "
        style={{
          width: 'var(--radix-popover-trigger-width)',
        }}
      >
        <ul className="max-h-60 overflow-auto">
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => onValueChange?.(item.value)}
              className="
                flex items-center justify-between
                h-10 px-3 rounded-sm text-sm cursor-pointer
                hover:bg-[--border-default]
              "
            >
              <span>{item.label}</span>

              {value === item.value}
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
