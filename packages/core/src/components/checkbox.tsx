interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  tokens?: any;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  name?: string;
  [key: string]: any;
}

export function Checkbox({
  checked = false,
  disabled = false,
  onChange,
  tokens = {},
  children,
  style,
  name,
  ...props
}: CheckboxProps) {
  const t = {
    size: tokens.checkbox?.size ?? 25,
    borderRadius: tokens.checkbox?.borderRadius ?? 4,
    borderWidth: tokens.checkbox?.borderWidth ?? 1,
    borderColor: tokens.checkbox?.borderColor ?? tokens.colors?.border ?? "#999",
    backgroundColor:
      tokens.checkbox?.backgroundColor ??
      tokens.colors?.surface ??
      "#fff",
    checkColor: tokens.checkbox?.checkColor ?? tokens.colors?.primary ?? "#000",
    gap: tokens.checkbox?.gap ?? 8,
    transitionDuration: tokens.checkbox?.transitionDuration ?? "150ms",
  };

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: t.gap,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {/* Input checkbox real */}
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          opacity: 0,
          width: 0,
          height: 0,
          position: "absolute",
        }}
        {...props}
      />

      {/* Caja */}
      <span
        style={{
          width: t.size,
          height: t.size,
          borderRadius: t.borderRadius,
          borderWidth: t.borderWidth,
          borderStyle: "solid",
          borderColor: t.borderColor,
          backgroundColor: t.backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          transition: `
            background-color ${t.transitionDuration},
            border-color ${t.transitionDuration}
          `,
          position: "relative",
        }}
      >
        {/* Icon (SVG) → visible solo si checked === true */}
        <svg
          width={t.size - 6}
          height={t.size - 6}
          viewBox="0 0 24 24"
          style={{
            opacity: checked ? 1 : 0,
            transition: `opacity ${t.transitionDuration}`,
          }}
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke={t.checkColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Texto */}
      {children ? (
        <span
          style={{
            fontFamily: tokens.typography?.body?.fontFamily ?? "inherit",
            fontSize: tokens.typography?.body?.fontSize ?? 14,
          }}
        >
          {children}
        </span>
      ) : null}
    </label>
  );
}
