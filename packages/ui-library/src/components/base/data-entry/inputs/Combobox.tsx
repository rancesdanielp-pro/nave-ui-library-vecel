'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { ChevronsUpDown } from 'lucide-react';
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
  label?: string;
  size?: 'small' | 'medium';
  disabled?: boolean;
  tokens?: Partial<ThemeTokensBase>;
  className?: string;
  error?: boolean;
}

const inputBase = 'ui-input w-full outline-none';

const inputLabel = 'leading-[1.3] tracking-[-0.04em]';

const inputHelper = 'leading-[1.3]';

const inputHelperError = 'leading-[1.3]';

const selectVariants = cva(inputBase, {
  variants: {},
  defaultVariants: {
    size: 'medium',
  },
});

export function Combobox({
  value,
  onValueChange,
  placeholder = 'Seleccionar...',
  items,
  label,
  size = 'medium',
  error = false,
  disabled,
  tokens,
  className,
}: ComboboxProps) {
  const theme = useTheme();

  const mergedTokens =
    (resolveTokens({ componentName: 'select', tokens }, theme) as any) ?? {};

  const sizeTokens = mergedTokens?.sizes?.[size ?? 'medium'] ?? {};

  const styles = {
    '--input-bg': mergedTokens?.background,
    '--input-text': mergedTokens?.color,
    '--input-radius': mergedTokens?.radius,
    '--input-border': mergedTokens?.border,
    '--input-shadow': mergedTokens?.boxShadow,

    // hover
    '--input-hover-bg': mergedTokens?.hover?.background,
    '--input-hover-text': mergedTokens?.hover?.color,
    '--input-hover-border': mergedTokens?.hover?.border,

    // focus
    '--input-focus-border': mergedTokens?.focus?.border,
    '--input-focus-ring': mergedTokens?.focus?.boxShadow,
    '--input-focus-text': mergedTokens?.focus?.color,

    // filled
    '--input-filled-bg': mergedTokens?.filled?.background,
    '--input-filled-text': mergedTokens?.filled?.color,
    '--input-filled-shadow': mergedTokens?.filled?.boxShadow,

    // disabled
    '--input-disabled-bg': mergedTokens?.disabled?.background,
    '--input-disabled-text': mergedTokens?.disabled?.color,
    '--input-disabled-border': mergedTokens?.disabled?.border,
    '--input-disabled-shadow': mergedTokens?.disabled?.boxShadow,

    // error
    '--input-error-bg': mergedTokens?.error?.background,
    '--input-error-border': mergedTokens?.error?.border,
    '--input-error-text': mergedTokens?.error?.color,
    '--input-error-shadow': mergedTokens?.error?.boxShadow,

    // error.filled
    '--input-error-filled-border': mergedTokens?.error?.filled?.border,
    '--input-error-filled-text': mergedTokens?.error?.filled?.color,
    '--input-error-filled-shadow': mergedTokens?.error?.filled?.boxShadow,

    // error.focus
    '--input-error-focus-border': mergedTokens?.error?.focus?.border,
    '--input-error-focus-ring': mergedTokens?.error?.focus?.boxShadow,
    '--input-error-focus-text': mergedTokens?.error?.focus?.color,

    // error.hover
    '--input-error-hover-border': mergedTokens?.error?.hover?.border,
    '--input-error-hover-ring': mergedTokens?.error?.hover?.boxShadow,
    '--input-error-hover-text': mergedTokens?.error?.hover?.color,

    /* TYPO */
    '--input-label-font-size': sizeTokens.labelFontSize,
    '--input-font-size': sizeTokens.inputFontSize,
    '--input-helper-font-size': sizeTokens.helperFontSize,
    '--input-label-font-weight': sizeTokens.labelFontWeight,
    '--input-font-weight': sizeTokens.inputFontWeight,
    '--input-helper-font-weight': sizeTokens.helperFontWeight,
    '--input-label-color': sizeTokens.labelColor,
    '--input-helper-color': sizeTokens.helperColor,
    '--input-description-color': sizeTokens.descriptionColor,

    /* Height */
    '--input-height': sizeTokens.height,

    /* Padding */
    '--input-padding': sizeTokens.padding,

    /* Icon */
    '--input-icon-size': sizeTokens?.iconSize,
  } as React.CSSProperties;

  const selectedItem = items.find((i) => i.value === value);

  return (
    <Popover.Root>
      <div style={styles}>
        {label && (
          <label className={inputLabel + ' ui-input-label'}>{label}</label>
        )}
        <Popover.Trigger asChild>
          <button
            disabled={disabled}
            data-error={error ? 'true' : 'false'}
            className={cn(
              selectVariants(),
              'group w-full inline-flex items-center justify-between',
              className
            )}
          >
            <span className="truncate">
              {selectedItem?.label ?? placeholder}
            </span>

            <ChevronsUpDown
              className="
            h-4 w-4 shrink-0 ui-input-icon
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
                text-[length:var(--input-font-size)] font-[var(--input-font-weight)]
                h-10 px-3 rounded-[--input-radius] cursor-pointer
                bg-[--input-bg]
                hover:bg-[--input-hover-bg]
                border-[--input-hover-border]
                box-shadow-[0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A]
              "
              >
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </Popover.Content>
      </div>
    </Popover.Root>
  );
}
