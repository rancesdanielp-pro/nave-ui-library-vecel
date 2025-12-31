import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../theme';

const breadcrumbSizes = {
  md: 'text-sm gap-2.5',
  sm: 'text-xs gap-2',
};

/* -----------------------------------------------------------------------------
 * Breadcrumb (wrapper)
 * ---------------------------------------------------------------------------*/

function Breadcrumb(props: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

/* -----------------------------------------------------------------------------
 * BreadcrumbList
 * ---------------------------------------------------------------------------*/

function BreadcrumbList({
  className,
  size = 'md',
  ...props
}: React.ComponentProps<'ol'> & { size?: 'sm' | 'md' }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex flex-wrap items-center',
        breadcrumbSizes[size],
        className
      )}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * BreadcrumbItem
 * ---------------------------------------------------------------------------*/

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * BreadcrumbLink (THEMED)
 * ---------------------------------------------------------------------------*/

type BreadcrumbLinkProps = React.ComponentProps<'a'> & {
  asChild?: boolean;
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
};

function BreadcrumbLink({
  asChild,
  className,
  style,
  variant = 'default',
  tokens,
  platform = 'web',
  ...props
}: BreadcrumbLinkProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'breadcrumbLink', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      //style={platform === 'web' ? resolvedStyles : undefined}
      className={cn('font-medium text-[#652BDF] hover:underline', className)}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * BreadcrumbPage (THEMED)
 * ---------------------------------------------------------------------------*/

type BreadcrumbPageProps = React.ComponentProps<'span'> & {
  variant?: string;
  tokens?: any;
  platform?: 'web' | 'native';
};

function BreadcrumbPage({
  className,
  style,
  variant = 'current',
  tokens,
  platform = 'web',
  ...props
}: BreadcrumbPageProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'breadcrumbPage', variant, tokens },
    theme
  );

  const resolvedStyles =
    platform === 'web'
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens);

  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      //style={platform === 'web' ? resolvedStyles : undefined}
      className={cn('text-[#6E7991] text-sm font-medium cursor-default', className)}
      {...props}
    />
  );
}

/* -----------------------------------------------------------------------------
 * BreadcrumbSeparator (opcionalmente themed)
 * ---------------------------------------------------------------------------*/

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex items-center text-muted-foreground [&>svg]:size-3.5',
        className
      )}
      {...props}
    >
      {children ?? <ChevronRight className='text-[#A3AAB8]' />}
    </li>
  );
}

/* -----------------------------------------------------------------------------
 * BreadcrumbEllipsis
 * ---------------------------------------------------------------------------*/

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4 text-[#6E7991]" />
      <span className="sr-only">More</span>
    </span>
  );
}

/* -----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
