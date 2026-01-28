'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '../../../../utils/cn';
import { resolveTokens, useTheme } from '../../../../theme';

type ThemedProps = {
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
};

const DropdownStylesContext = React.createContext<any | null>(null);

/* ---------------------------------- Root ---------------------------------- */

function DropdownMenu(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Root> & {
    tokens?: Record<string, any>;
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

/* --------------------------------- Content -------------------------------- */

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> & ThemedProps) {
  const tokens = React.useContext(DropdownStylesContext);

  const styles = {
    '--dropdown-bg': tokens?.background ?? '#fff',
    '--dropdown-text': tokens?.color ?? '#000',
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
          bg-[--dropdown-bg]
          text-[--dropdown-text]
          border border-[--dropdown-border]
          rounded-[--dropdown-radius]
          shadow-[--dropdown-shadow]
          `,
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

/* -------------------------------- Subparts -------------------------------- */

function DropdownMenuGroup(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Group>
) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  const tokens = React.useContext(DropdownStylesContext);

  const styles = {
    '--item-text': tokens?.item?.textColor ?? 'inherit',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-hover-text': tokens?.item?.hoverTextColor ?? 'inherit',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-disabled': tokens?.item?.disabledOpacity ?? '0.4',
  } as React.CSSProperties;
  return (
    <DropdownMenuPrimitive.Item
      style={styles}
      className={cn(
        `
        flex items-center gap-2 px-2 py-1.5 text-sm
        text-[--item-text]
        rounded-[--item-radius]
        outline-none select-none
        focus:bg-[--item-hover-bg]
        focus:text-[--item-hover-text]
        data-[disabled]:opacity-[--item-disabled]
        `,
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      checked={checked}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm',
        'outline-none select-none focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
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
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm',
        'outline-none select-none focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
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
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className="bg-border bg-white -mx-1 my-1 h-px"
      {...props}
    />
  );
}

function DropdownMenuShortcut(props: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className="ml-auto text-xs tracking-widest text-muted-foreground"
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
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm',
        'outline-none select-none',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        'data-[inset]:pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  const tokens = React.useContext(DropdownStylesContext);

  const styles = {
    '--item-text': tokens?.item?.textColor ?? 'inherit',
    '--item-hover-bg': tokens?.item?.hoverBackground ?? '#F1F5F9',
    '--item-hover-text': tokens?.item?.hoverTextColor ?? 'inherit',
    '--item-radius': tokens?.item?.borderRadius ?? '6px',
    '--item-disabled': tokens?.item?.disabledOpacity ?? '0.4',
  } as React.CSSProperties;
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      style={styles}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden  border border-[--dropdown-border]  rounded-[--dropdown-radius] p-1 shadow-[--dropdown-shadow]',
        'bg-[--dropdown-bg] text-[--dropdown-text]',
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
