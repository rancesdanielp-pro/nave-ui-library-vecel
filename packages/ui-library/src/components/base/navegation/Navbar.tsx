'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '../buttons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../data-display';

import { cn } from '../../../utils/cn';
import { useTheme, resolveTokens } from '../../../theme';

export type Merchant = {
  id: string;
  name: string;
};

export type NavbarAction = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

export type NavbarUser = {
  name: string;
  role?: string;
  avatarUrl?: string;
  menu: {
    id: string;
    label: string;
    onClick: () => void;
  }[];
};

type HeaderMerchantSelectProps = {
  merchants?: Merchant[];
  currentMerchantId?: string;
  onSelect?: (id: string) => void;
};

function HeaderMerchantSelect({
  merchants = [],
  currentMerchantId,
  onSelect,
}: HeaderMerchantSelectProps) {
  if (merchants.length === 0) return null;

  const current = merchants.find((m) => m.id === currentMerchantId);

  if (merchants.length === 1) {
    return (
      <span className="text-sm font-medium text-[var(--nb-merchant-color)]">
        {current?.name}
      </span>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
          flex items-center gap-2 text-sm font-medium
          text-[var(--nb-merchant-color)]
          outline-none
        "
      >
        <span>{current?.name}</span>
        <ChevronDown className="h-4 w-4 text-[var(--nb-chevron-color)]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {merchants.map((merchant) => (
          <DropdownMenuItem
            key={merchant.id}
            onClick={() => onSelect?.(merchant.id)}
          >
            {merchant.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HeaderActions({ actions }: { actions: NavbarAction[] }) {
  return (
    <div className="flex items-center gap-2">
      {actions.map((action) => (
        <Button
          key={action.id}
          size="sm"
          variant="secondary"
          className="gap-2"
          onClick={action.onClick}
        >
          {action.icon}
          {action.label}
        </Button>
      ))}
    </div>
  );
}

function HeaderUserMenu({ user }: { user: NavbarUser }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
        <Avatar className="h-8 w-8">
          {user.avatarUrl ? (
            <>
              <AvatarImage src={user.avatarUrl} />
              <AvatarFallback>RP</AvatarFallback>
            </>
          ) : (
            <AvatarFallback>RP</AvatarFallback>
          )}
        </Avatar>

        <div className="text-left leading-tight">
          <p className="text-sm font-medium text-[var(--nb-user-name)]">
            {user.name}
          </p>
          {user.role && (
            <p className="text-xs text-[var(--nb-user-role)]">{user.role}</p>
          )}
        </div>

        <ChevronDown className="h-4 w-4 text-[var(--nb-chevron-color)]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {user.menu.map((item) => (
          <DropdownMenuItem key={item.id} onClick={item.onClick}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarFallback>EM</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Navbar({
  merchants,
  currentMerchantId,
  onMerchantChange,
  actions,
  user,
}: {
  merchants: Merchant[];
  currentMerchantId?: string;
  onMerchantChange?: (id: string) => void;
  actions: NavbarAction[];
  user: NavbarUser;
}) {
  const theme = useTheme();

  const mergedTokens = resolveTokens({ componentName: 'navbar' }, theme) as any ?? {};

  /* ---------------------------------------------
   * CSS VARIABLES + FALLBACKS
   * --------------------------------------------*/

  const styles = {
    /* Container */
    '--nb-height': mergedTokens?.container?.height ?? '64px',
    '--nb-bg': mergedTokens?.container?.background ?? '#ffffff',
    '--nb-border': mergedTokens?.container?.border ?? '#E2E5E9',
    '--nb-radius': mergedTokens?.container?.radius ?? '0px',

    /* Layout */
    '--nb-max-width': mergedTokens?.content?.maxWidth ?? '1440px',
    '--nb-padding-x': mergedTokens?.content?.paddingX ?? '24px',

    /* Merchant */
    '--nb-merchant-color': mergedTokens?.merchant?.color ?? '#111827',
    '--nb-chevron-color': mergedTokens?.merchant?.chevronColor ?? '#6B7280',

    /* User */
    '--nb-user-name': mergedTokens?.user?.nameColor ?? '#111827',
    '--nb-user-role': mergedTokens?.user?.roleColor ?? '#6B7280',

    /* Motion */
    '--nb-motion': mergedTokens?.motion?.duration ?? '150ms',
  } as React.CSSProperties;

  return (
    <header
      style={styles}
      className={cn(
        'w-full border-b',
        'h-[var(--nb-height)]',
        'bg-[var(--nb-bg)] border-[var(--nb-border)]',
        'rounded-[var(--nb-radius)]',
        'transition-colors duration-[var(--nb-motion)]'
      )}
    >
      <div
        className={cn(
          'mx-auto h-full flex items-center justify-between',
          'max-w-[var(--nb-max-width)]',
          'px-[var(--nb-padding-x)]'
        )}
      >
        {/* Left */}
        <div className="flex items-center gap-6">
          <Logo />
          <HeaderMerchantSelect
            merchants={merchants}
            currentMerchantId={currentMerchantId}
            onSelect={onMerchantChange}
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <HeaderActions actions={actions} />
          <HeaderUserMenu user={user} />
        </div>
      </div>
    </header>
  );
}
