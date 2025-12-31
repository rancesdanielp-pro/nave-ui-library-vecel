import { createBaseStyles } from "../utils/createBaseStyles";

export function Button({
  tokens = {},
  children,
  style,
  ...props
}: {
  tokens?: any;
  children?: any;
  style?: any;
  [key: string]: any;
}) {

  const mergedStyles = createBaseStyles(tokens, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: tokens?.button?.justifyContent ?? "center",
    gap: tokens?.button?.gap ?? "8px",
    width: tokens?.button?.width ?? "auto",
    flex: tokens?.button?.flex ?? "initial",

    /* Padding y tamaño */
    padding: tokens?.button?.padding ?? tokens?.spacing?.md ?? "12px",

    /* Tipografía */
    fontFamily: tokens?.typography?.button?.fontFamily ?? "inherit",
    fontSize: tokens?.typography?.button?.fontSize ?? "14px",
    fontWeight: tokens?.typography?.button?.fontWeight ?? 600,
    lineHeight: tokens?.typography?.button?.lineHeight ?? "20px",
    letterSpacing: tokens?.typography?.button?.letterSpacing ?? "0px",

    /* Colores */
    color: tokens?.button?.textColor ?? tokens?.colors?.text ?? "#000",
    backgroundColor: tokens?.button?.backgroundColor ?? tokens?.colors?.primary,

    /* Bordes */
    borderColor: tokens?.button?.borderColor ?? "transparent",
    borderWidth: tokens?.button?.borderWidth ?? "0px",
    borderStyle: tokens?.button?.borderStyle ?? "solid",
    borderRadius: tokens?.button?.borderRadius ?? tokens?.radius?.md ?? "8px",

    /* Sombra */
    boxShadow: tokens?.button?.boxShadow ?? "none",

    /* Transiciones */
    transition: tokens?.button?.transition ?? "all 0.2s ease-in-out",
    transitionDuration: tokens?.button?.transitionDuration ?? "200ms",

    cursor: "pointer",
    ...style,
  });

  return (
    <button style={mergedStyles} {...props}>
      <span className="content">{children}</span>
    </button>
  );
}
