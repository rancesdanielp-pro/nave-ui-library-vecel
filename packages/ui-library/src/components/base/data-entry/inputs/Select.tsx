'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from "../../../../utils/cn"
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from "../../../../theme"

const SELECT_SIZES = {
  sm: {
    height: '32px',
    padding: '0 12px',
    fontSize: '13px',
  },
  default: {
    height: '40px',
    padding: '0 16px',
    fontSize: '14px',
  },
  lg: {
    height: '48px',
    padding: '0 20px',
    fontSize: '16px',
  },
};


export interface SelectItem {
  label: string;
  value: string;
}

interface Props {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  items: SelectItem[];
  className?: string;
  tokens?: any;
  style?: React.CSSProperties;
  platform?: 'web' | 'native';
  size?: keyof typeof SELECT_SIZES;
}
export function Select({
  value,
  onValueChange,
  placeholder = 'Seleccionar...',
  items,
  className,
  tokens,
  platform = 'web',
  size = 'default',
}: Props) {
  const theme = useTheme();

  // 🔥 1. RESOLVER TOKENS
  const mergedTokens = resolveTokens(
    { componentName: 'select', tokens },
    theme
  );

  // 🔥 2. RESOLVER ESTILOS BASE PARA WEB O NATIVE
  const styles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  // 🔥 3. ESTILOS ESPECÍFICOS PARA SUBCOMPONENTES
  const triggerStyle = {
    ...styles,
    ...SELECT_SIZES[size],     
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  const itemStyle = {
    fontSize: styles.fontSize,
    padding: mergedTokens.padding ?? '10px',
  };

  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      {/* Trigger */}
      <SelectPrimitive.Trigger
        className={cn('outline-none', className)}
        style={triggerStyle}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          style={{ color: styles.color }}
        />

        <SelectPrimitive.Icon>
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      {/* Content */}
      <SelectPrimitive.Content
        className="relative z-50 w-full shadow-lg rounded-md"
        style={{
          backgroundColor: mergedTokens.dropdownBackground ?? '#FFFFFF',
          borderRadius: mergedTokens.borderRadius ?? '6px',
        }}
      >
        <SelectPrimitive.Viewport className="p-1">
          {items.map((item) => (
            <SelectPrimitive.Item
              key={item.value}
              value={item.value}
              className="relative flex cursor-pointer select-none items-center rounded-sm outline-none hover:bg-gray-100"
              style={itemStyle}
            >
              <SelectPrimitive.ItemText>{item.label}</SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center">
                <Check className="h-4 w-4" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}
