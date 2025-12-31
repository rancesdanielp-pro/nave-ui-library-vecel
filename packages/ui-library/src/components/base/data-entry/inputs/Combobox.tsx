'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

interface ComboboxItem {
  label: string;
  value: string;
}

interface ComboboxProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  items: ComboboxItem[];
  size?: 'sm' | 'default';
  disabled?: boolean;
  tokens?: any;
  platform?: 'web' | 'native';
  className?: string;
}

export function Combobox({
  value,
  onValueChange,
  placeholder = 'Seleccionar...',
  items,
  size = 'default',
  disabled,
  tokens,
  platform = 'web',
  className,
}: ComboboxProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  const mergedTokens = resolveTokens(
    { componentName: 'select', tokens },
    theme
  );

  const styles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  const selectedItem = items.find((i) => i.value === value);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          disabled={disabled}
          className={cn(
            'w-full flex items-center justify-between rounded-md border border-[#E2E5E9]',
            size === 'sm' ? 'h-9 px-3 text-sm' : 'h-11 px-4 text-sm',
            'transition-colors outline-none',
            'focus:border-[#652BDF] focus:ring-2 focus:ring-[#652BDF]/20',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
        >
          <span className="truncate text-left leading-none">
            {selectedItem?.label ?? placeholder}
          </span>

          <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
        </button>
      </Popover.Trigger>

      <Popover.Content
        align="start"
        sideOffset={4}
        className="z-50 rounded-md shadow-lg p-1"
        style={{
          width: 'var(--radix-popover-trigger-width)',
          backgroundColor: mergedTokens.dropdownBackground ?? '#FFFFFF',
        }}
      >
        {/* Items */}
        <ul className="max-h-60 overflow-auto">
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => {
                onValueChange?.(item.value);
                setOpen(false);
              }}
              className={cn(
                'flex items-center justify-between',
                'h-10 px-3 rounded-sm text-sm cursor-pointer',
                'hover:bg-gray-100'
              )}
            >
              <span>{item.label}</span>

              {value === item.value && (
                <Check className="h-4 w-4 text-[#020303]" />
              )}
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
