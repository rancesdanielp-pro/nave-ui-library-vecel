import { ReactNode, CSSProperties } from "react";
import { createBaseStyles } from "../utils/createBaseStyles";

export function Text({ tokens, children, style, ...props }: { tokens?: any; children?: ReactNode; style?: CSSProperties; [key: string]: any }) {
  const mergedStyles = createBaseStyles(tokens, {
    fontSize: tokens?.font?.size ?? 14,
    color: tokens?.colors?.text ?? "#000",
    ...style,
  });

  return (
    <span style={mergedStyles} {...props}>
      {children}
    </span>
  );
}
