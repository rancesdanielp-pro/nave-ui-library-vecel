'use client';

import * as React from 'react';
import { useTheme, resolveTokens } from '../../../theme';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../data-display';
import { ChevronDown, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../../utils/cn';

export type Merchant = {
  id: string;
  name: string;
};

export type NavbarUser = {
  name: string;
  role?: string;
  avatarUrl?: string;
  menu: { id: string; label: string; onClick: () => void }[];
};

type NavbarComponent = React.FC<{ children: React.ReactNode }> & {
  Start: React.FC<{ children: React.ReactNode }>;
  End: React.FC<{ children: React.ReactNode }>;
  Slot: React.FC<{ children: React.ReactNode }>;
  Logo: typeof NavbarLogo;
  Merchant: typeof NavbarMerchant;
  User: typeof NavbarUserMenu;
};

const NavbarContext = React.createContext<any>(null);

export const Navbar = (({ children }) => {
  const theme = useTheme();
  const mergedTokens = resolveTokens({ componentName: 'navbar' }, theme) as any;

  const styles = {
    /* Container */
    '--nb-height': mergedTokens?.container?.height ?? '64px',
    '--nb-bg': mergedTokens?.container?.background ?? '#ffffff',
    '--nb-border': mergedTokens?.container?.border ?? '#E2E5E9',
    '--nb-radius': mergedTokens?.container?.radius ?? '0px',
    '--nb-icon-color': mergedTokens?.container?.iconColor ?? '#9DA5B5',

    /* Layout */
    '--nb-max-width': mergedTokens?.content?.maxWidth ?? '1440px',
    '--nb-padding-x': mergedTokens?.content?.paddingX ?? '24px',

    /* Motion */
    '--nb-motion': mergedTokens?.motion?.duration ?? '150ms',
  } as React.CSSProperties;

  return (
    <NavbarContext.Provider value={mergedTokens}>
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
        <div className="mx-auto h-full flex items-center justify-between px-6">
          {children}
        </div>
      </header>
    </NavbarContext.Provider>
  );
}) as NavbarComponent;

/* Layout */
Navbar.Start = ({ children }) => (
  <div className="flex items-center gap-6">{children}</div>
);

Navbar.End = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4">{children}</div>
);

Navbar.Slot = ({ children }) => (
  <div className="flex items-center">{children}</div>
);

Navbar.Logo = NavbarLogo;
Navbar.Merchant = NavbarMerchant;
Navbar.User = NavbarUserMenu;

export function NavbarLogo() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarFallback>EM</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function NavbarMerchant({
  merchants = [],
  currentId,
  onChange,
}: {
  merchants?: Merchant[];
  currentId?: string;
  onChange?: (id: string) => void;
}) {
  const tokens = (React.useContext(NavbarContext) as any) ?? {};

  const styles = {
    /* Merchant */
    '--nb-merchant-color': tokens?.merchant?.color ?? '#111827',
    '--nb-merchant-font-size': tokens?.merchant?.fontSize ?? '14px',
    '--nb-merchant-font-weight': tokens?.merchant?.fontWeight ?? 550,
    '--nb-icon-color': tokens?.container?.iconColor ?? '#9DA5B5',
  } as React.CSSProperties;

  if (!merchants.length) return null;

  const current = merchants.find((m) => m.id === currentId);

  if (merchants.length === 1) {
    return <span>{current?.name}</span>;
  }

  return (
    <div style={styles}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 outline-none text-[color:var(--nb-merchant-color)] text-[length:var(--nb-merchant-font-size)] font-[var(--nb-merchant-font-weight)]">
          {current?.name}
          <ChevronsUpDown className="h-4 w-4 text-[color:var(--nb-icon-color)]" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          {merchants.map((m) => (
            <DropdownMenuItem key={m.id} onClick={() => onChange?.(m.id)}>
              {m.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export function NavbarUserMenu({ user }: { user: NavbarUser }) {
  const tokens = (React.useContext(NavbarContext) as any) ?? {};

  const styles = {
    /* User */
    '--nb-user-name': tokens?.user?.nameColor ?? '#111827',
    '--nb-user-role': tokens?.user?.roleColor ?? '#6B7280',
    '--nb-user-name-font-size': tokens?.user?.nameFontSize ?? '12px',
    '--nb-user-role-font-size': tokens?.user?.roleFontSize ?? '12px',
    '--nb-user-name-font-weight': tokens?.user?.nameFontWeight ?? 550,
    '--nb-user-role-font-weight': tokens?.user?.roleFontWeight ?? 400,
    '--nb-icon-color': tokens?.container?.iconColor ?? '#9DA5B5',
  } as React.CSSProperties;

  return (
    <div style={styles}>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="
          flex items-start gap-3
          px-3 py-2
          rounded-xl
          outline-none
          transition-colors
          hover:bg-[var(--nb-trigger-hover)]
          focus-visible:ring-2 focus-visible:ring-[var(--nb-focus)]
          "
        >
          {/* Avatar */}
          <Avatar size="md">
            {user.avatarUrl ? (
              <AvatarImage src={user.avatarUrl} />
            ) : (
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            )}
          </Avatar>

          {/* Name + role */}
          <div className="flex flex-col text-left">
            <span className="text-[color:var(--nb-user-name)] text-[length:var(--nb-user-name-font-size)] font-[var(--nb-user-name-font-weight)] leading-none">
              {user.name}
            </span>

            {user.role && (
              <span className="mt-0.5 text-[length:var(--nb-user-role-font-size)] leading-none text-[color:var(--nb-user-role)] font-[var(--nb-user-role-font-weight)]">
                {user.role}
              </span>
            )}
          </div>

          {/* Chevron */}
          <ChevronDown
            className="
                    ml-1
                    h-4 w-4
                    text-[color:var(--nb-icon-color)]
                    translate-y-[0px]
                     "
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {user.menu.map((item) => (
            <DropdownMenuItem key={item.id} onClick={item.onClick}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
