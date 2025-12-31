import { createBaseStyles } from "../utils/createBaseStyles";
import { CSSProperties } from "react";

export function Label({
  tokens,
  children,
  htmlFor,
  style,
  ...props
}: {
  tokens?: any;
  children?: React.ReactNode;
  htmlFor?: string;
  style?: CSSProperties;
  [key: string]: any;
}) {
  const defaultColor = "#111"; // fallback seguro

  const mergedStyles = createBaseStyles(tokens, {
    display: "inline-block",
    marginBottom: tokens?.spacing?.xs ?? 4,
    fontWeight: 500,

    // Solo pasar color explícito cuando sea válido
    color: tokens?.colors?.text ?? defaultColor,

    ...style,
  });

  return (
    <label htmlFor={htmlFor} style={mergedStyles} {...props}>
      {children}
    </label>
  );
}
