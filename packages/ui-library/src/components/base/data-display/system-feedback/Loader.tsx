"use client"

import * as React from "react"
import { Loader2Icon } from "lucide-react"

import { cn } from "../../../../utils/cn"
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from "../../../../theme"

type ThemedProps = {
  variant?: string
  tokens?: any
  platform?: "web" | "native"
}

function Loader({
  className,
  style,
  variant = "default",
  tokens,
  platform = "web",
  ...props
}: React.ComponentProps<"svg"> & ThemedProps) {
  const theme = useTheme()

  const mergedTokens = resolveTokens(
    { componentName: "loader", variant, tokens },
    theme
  )

  const resolvedStyles =
    platform === "web"
      ? { ...resolveWebStyles(mergedTokens), ...style }
      : resolveNativeStyles(mergedTokens)

  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      style={platform === "web" ? resolvedStyles : undefined}
      className={cn("animate-spin", className)}
      {...props}
    />
  )
}

export { Loader }
