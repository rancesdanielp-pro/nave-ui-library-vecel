'use client';

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
    return <span className="text-sm font-medium">{current?.name}</span>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium">
        <span>{current?.name}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
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
            <><AvatarImage src={user.avatarUrl} /><AvatarFallback>RP</AvatarFallback></>
          ) : (
            <AvatarFallback>RP</AvatarFallback>
          )}
        </Avatar>

        <div className="text-left leading-tight">
          <p className="text-sm font-medium">{user.name}</p>
          {user.role && (
            <p className="text-xs text-muted-foreground">{user.role}</p>
          )}
        </div>

        <ChevronDown className="h-4 w-4 text-muted-foreground" />
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
  return (
    <header
      className="
        w-full
        h-16
        bg-white
        border-b
        border-[#E2E5E9]
        rounded-md
    "
    >
      <div
        className="
         mx-auto
          max-w-[1440px]
          h-full
          px-6
          flex
          items-center
          justify-between
      "
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
