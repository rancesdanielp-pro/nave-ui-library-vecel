import { ReactNode, CSSProperties } from "react";
import { createBaseStyles } from "../utils/createBaseStyles";

export function Badge({ tokens, children, style, ...props }: { tokens?: any; children?: ReactNode; style?: CSSProperties; [key: string]: any }) {
  const mergedStyles = createBaseStyles(tokens, {
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 8px",
    borderRadius: tokens?.radius?.sm ?? 6,
    backgroundColor: tokens?.colors?.badgeBg ?? "#eee",
    fontSize: tokens?.font?.xs ?? 12,
    fontWeight: 500,
    ...style,
  });

  return (
    <span style={mergedStyles} {...props}>
      {children}
    </span>
  );
}
