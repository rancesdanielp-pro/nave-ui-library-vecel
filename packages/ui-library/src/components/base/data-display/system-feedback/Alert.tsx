"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../../utils/cn"
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from "../../../../theme"
/* -------------------------------------------------------------------------- */
/*                                   CVA                                      */
/* -------------------------------------------------------------------------- */

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid items-start gap-y-0.5",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/* -------------------------------------------------------------------------- */
/*                                   Alert                                    */
/* -------------------------------------------------------------------------- */

type ThemedProps = {
  tokens?: any
  platform?: "web" | "native"
}

function Alert({
  className,
  style,
  variant = "default",
  tokens,
  platform = "web",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> &
  ThemedProps) {
  const theme = useTheme()

  const mergedTokens = resolveTokens(
    { componentName: "alert", variant, tokens },
    theme
  )

  const resolvedStyles =
    platform === "web"
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens)

  return (
    <div
      data-slot="alert"
      role="alert"
      style={platform === "web" ? resolvedStyles : undefined}
      className={cn(
        alertVariants({ variant }),
        "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr]",
        "has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                Alert Title                                 */
/* -------------------------------------------------------------------------- */

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                             Alert Description                               */
/* -------------------------------------------------------------------------- */

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
