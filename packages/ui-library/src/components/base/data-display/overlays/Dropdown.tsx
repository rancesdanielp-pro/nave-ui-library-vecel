'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

import type { ThemeTokensBase } from '../../../../theme/theme';

interface DropdownItemProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  destructive?: boolean;
}

type ThemedProps = {
  variant?: string;
  tokens?: Partial<ThemeTokensBase>;
  platform?: 'web' | 'native';
};

type DropdownTokens = ReturnType<typeof resolveTokens>;
const DropdownStylesContext = React.createContext<DropdownTokens | null>(null);

/* ---------------------------------- Root ---------------------------------- */

function DropdownMenu(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Root> & {
    tokens?: Partial<ThemeTokensBase>;
  }
) {
  const { tokens, ...rest } = props;
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'dropdown', tokens },
    theme
  );

  return (
    <DropdownStylesContext.Provider value={mergedTokens}>
      <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...rest} />
    </DropdownStylesContext.Provider>
  );
}

function DropdownMenuPortal(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>
) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> & ThemedProps) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  const styles = {
    '--dropdown-bg': tokens?.background ?? '#fff',
    '--dropdown-text': tokens?.color ?? '#000',
    '--dropdown-text-font-size': tokens?.fontSize ?? '14px',
    '--dropdown-text-font-weight': tokens?.fontWeight ?? 400,
    '--dropdown-border': tokens?.border ?? '#E5E7EB',
    '--dropdown-radius': tokens?.radius ?? '8px',
    '--dropdown-shadow': tokens?.shadow ?? '0 4px 12px rgba(0,0,0,.08)',
  } as React.CSSProperties;

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        style={styles}
        className={cn(
          `
          min-w-[8rem] p-1
          bg-[var(--dropdown-bg)]
          text-[color:var(--dropdown-text)]
          text-[length:var(--dropdown-text-font-size)]
          font-[var(--dropdown-text-font-weight)]
          border-[var(--dropdown-border)]
          rounded-[var(--dropdown-radius)]
          shadow-[0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A]
          `,
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Group>
) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  iconLeft,
  iconRight,
  selected,
  destructive,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> &
  DropdownItemProps) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  const styles = {
    '--item-text': tokens?.item?.color ?? 'inherit',
    '--item-text-font-size': tokens?.item?.fontSize ?? '14px',
    '--item-text-font-weight': tokens?.item?.fontWeight ?? 400,
    '--item-bg': tokens?.item?.background ?? 'transparent',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-active': tokens?.item?.activeBackground ?? '#E2E5E9',
    '--item-disabled': tokens?.item?.disabledOpacity ?? '0.4',
    '--item-icon-size': tokens?.item?.iconSize ?? '13px', //
    '--item-icon-color': tokens?.item?.iconColor ?? 'inherit', //
  } as React.CSSProperties;

  return (
    <DropdownMenuPrimitive.Item
      style={styles}
      data-selected={selected ? 'true' : 'false'}
      data-destructive={destructive ? 'true' : 'false'}
      data-slot="dropdown-menu-item"
      className={cn(
        `
        flex items-center gap-2 px-2 py-1.5
        text-[color:var(--item-text)]
        text-[length:var(--item-text-font-size)]
        font-[var(--item-text-font-weight)]
        bg-[var(--item-bg)]
        rounded-[var(--item-radius)]
        outline-none select-none

        focus:bg-[var(--item-hover-bg)]
        data-[highlighted]:bg-[var(--item-hover-bg)]
        data-[state=open]:bg-[var(--item-active-bg)]
        data-[selected=true]:bg-[var(--item-hover-bg)]
        data-[disabled]:opacity-[var(--item-disabled)]
        `,
        className
      )}
      {...props}
    >
      {iconLeft && (
        <span
          className="flex items-center"
          style={{
            width: 'var(--item-icon-size)',
            height: 'var(--item-icon-size)',
            color: 'var(--item-icon-color)',
          }}
        >
          {iconLeft}
        </span>
      )}

      <span className="flex-1 truncate">{props.children}</span>

      {iconRight && (
        <span
          className="flex items-center"
          style={{
            width: 'var(--item-icon-size)',
            height: 'var(--item-icon-size)',
            color: 'var(--item-icon-color)',
          }}
        >
          {iconRight}
        </span>
      )}
    </DropdownMenuPrimitive.Item>
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  const styles = {
    '--item-text': tokens?.item?.color ?? 'inherit',
    '--item-text-font-size': tokens?.item?.fontSize ?? '14px',
    '--item-text-font-weight': tokens?.item?.fontWeight ?? 400,
    '--item-bg': tokens?.item?.background ?? 'transparent',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-active': tokens?.item?.activeBackground ?? '#E2E5E9',
    '--item-disabled': tokens?.item?.disabledOpacity ?? '0.4',
    '--item-icon-size': tokens?.item?.iconSize ?? '13px', //
    '--item-icon-color': tokens?.item?.iconColor ?? 'inherit', //
  } as React.CSSProperties;

  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      style={styles}
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        `
        relative flex items-center gap-2 px-2 py-1.5 pl-8
        text-[color:var(--item-text)]
        text-[length:var(--item-text-font-size)]
        font-[var(--item-text-font-weight)]
        bg-[var(--item-bg)]
        rounded-[var(--item-radius)]
        outline-none select-none

        focus:bg-[var(--item-hover-bg)]
        data-[highlighted]:bg-[var(--item-hover-bg)]
        data-[state=open]:bg-[var(--item-active-bg)]
        data-[selected=true]:bg-[var(--item-hover-bg)]
        data-[disabled]:opacity-[var(--item-disabled)]
        `,
        className
      )}
      {...props}
    >
      <span
        className="absolute left-2 flex items-center justify-center"
        style={{
          width: 'var(--item-icon-size)',
          height: 'var(--item-icon-size)',
        }}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="w-[var(--item-icon-size)] h-[var(--item-icon-size)] fill-[color:var(--item-icon-color)]" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      <span className="flex-1">{children}</span>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
function DropdownMenuRadioGroup(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>
) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  const styles = {
    '--item-text': tokens?.item?.color ?? 'inherit',
    '--item-text-font-size': tokens?.item?.fontSize ?? '14px',
    '--item-text-font-weight': tokens?.item?.fontWeight ?? 400,
    '--item-bg': tokens?.item?.background ?? 'transparent',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-active': tokens?.item?.activeBackground ?? '#E2E5E9',
    '--item-disabled': tokens?.item?.disabledOpacity ?? '0.4',
    '--item-icon-size': tokens?.item?.iconSize ?? '13px', //
    '--item-icon-color': tokens?.item?.iconColor ?? 'inherit', //
  } as React.CSSProperties;

  return (
    <DropdownMenuPrimitive.RadioItem
      style={styles}
      data-slot="dropdown-menu-radio-item"
      className={cn(
        `
        relative flex items-center gap-2 px-2 py-1.5 pl-8
        text-[color:var(--item-text)]
        text-[length:var(--item-text-font-size)]
        font-[var(--item-text-font-weight)]
        bg-[var(--item-bg)]
        rounded-[var(--item-radius)]
        outline-none select-none

        focus:bg-[var(--item-hover-bg)]
        data-[highlighted]:bg-[var(--item-hover-bg)]
        data-[state=open]:bg-[var(--item-active-bg)]
        data-[selected=true]:bg-[var(--item-hover-bg)]
        data-[disabled]:opacity-[var(--item-disabled)]
        `,
        className
      )}
      {...props}
    >
      <span
        className="absolute left-2 flex items-center justify-center"
        style={{
          width: 'var(--item-icon-size)',
          height: 'var(--item-icon-size)',
        }}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="w-[var(--item-icon-size)] h-[var(--item-icon-size)] fill-[color:var(--item-icon-color)]" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      <span className="flex-1">{children}</span>
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  const tokens = React.useContext(DropdownStylesContext) as any;


  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      style={{
        color: tokens?.item?.color ?? '#6B7280',
        fontSize: tokens?.item?.fontSize ?? '12px',
        fontWeight: tokens?.item?.fontWeight ?? 600,
      }}
      className={cn(
        `
        flex items-center gap-2 px-2 py-1.5
        data-[inset=true]:pl-8
        `,
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  const styles = {
    '--dropdown-separator': tokens?.section?.separatorColor ?? 'inherit',
  } as React.CSSProperties;
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      style={styles}
      className="bg-border bg-white -mx-1 my-1 h-px"
      {...props}
    />
  );
}

function DropdownMenuShortcut(props: React.ComponentProps<'span'>) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  return (
    <span
      data-slot="dropdown-menu-shortcut"
      style={{
        color: tokens?.item?.iconColor ?? '#6B7280',
        fontSize: tokens?.item?.fontSize ?? '12px',
        fontWeight: tokens?.item?.fontWeight ?? 400,
      }}
      className="ml-auto tracking-wider"
      {...props}
    />
  );
}

function DropdownMenuSub(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>
) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  const tokens = React.useContext(DropdownStylesContext) as any;
  const styles = {
    '--item-text': tokens?.item?.color ?? 'inherit',
    '--item-text-font-size': tokens?.item?.fontSize ?? '14px',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-active': tokens?.item?.activeBackground ?? '#E2E5E9',
    '--item-icon-size': tokens?.item?.iconSize ?? '16px',
  } as React.CSSProperties;

  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      style={styles}
      data-inset={inset}
      className={cn(
        `
        flex items-center gap-2 px-2 py-1.5
        rounded-[var(--item-radius)]
        outline-none select-none
        focus:bg-[var(--item-hover-bg)]
        data-[state=open]:bg-[var(--item-hover-bg)]
        data-[inset=true]:pl-8
        `,
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <ChevronRightIcon className="size-[var(--item-icon-size)] opacity-70" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  const tokens = React.useContext(DropdownStylesContext) as any;

  const styles = {
    '--item-text': tokens?.item?.color ?? 'inherit',
    '--item-text-font-size': tokens?.item?.fontSize ?? '14px',
    '--item-text-font-weight': tokens?.item?.fontWeight ?? 400,
    '--item-bg': tokens?.item?.background ?? 'transparent',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-active': tokens?.item?.activeBackground ?? '#E2E5E9',
    '--item-disabled': tokens?.item?.disabledOpacity ?? '0.4',
    '--item-icon-size': tokens?.item?.iconSize ?? '13px', //
    '--item-icon-color': tokens?.item?.iconColor ?? 'inherit', //
    '--dropdown-shadow': tokens?.shadow ?? '0 4px 12px rgba(0,0,0,.08)',
  } as React.CSSProperties;

  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      style={styles}
      className={cn(
        `
        min-w-[8rem] p-2
        bg-[var(--item-bg)]
        text-[color:var(--item-text)]
        text-[length:var(--item-text-font-size)]
        font-[var(--item-text-font-weight)]
        border-[var(--item-disabled)]
        rounded-[var(--item-radius)]
        shadow-[0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A]
        `,
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
