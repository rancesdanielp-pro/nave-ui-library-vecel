import { ReactNode, CSSProperties } from "react";

export function Icon({
  tokens = {},
  children,
  style,
  ...props
}: {
  tokens?: any;
  children?: ReactNode;
  style?: CSSProperties;
  [key: string]: any;
}) {
  const mergedStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    width: tokens?.size ?? 20,
    height: tokens?.size ?? 20,

    color: tokens?.color ?? "currentColor",

    // permite overrides externos
    ...style,
  };

  return (
    <span style={mergedStyles} {...props}>
      {children}
    </span>
  );
}
