
interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  tokens?: any;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  name?: string;
  [key: string]: any;
}

export function Radio({
 checked = false,
  disabled = false,
  onChange,
  tokens = {},
  children,
  style,
  name,
  ...props
}: RadioProps) {
  const t = {
    size: tokens.radio?.size ?? 28,
    borderWidth: tokens.radio?.borderWidth ?? 2,
    borderColor: tokens.radio?.borderColor ?? tokens.colors?.border ?? "#999",
    backgroundColor:
      tokens.radio?.backgroundColor ??
      tokens.radio?.checkedColor ??
      tokens.colors?.primary ??
      "#6200ee",
    gap: tokens.radio?.gap ?? 8,
    transitionDuration: tokens.radio?.transitionDuration ?? "150ms",
  };

  const innerSize = t.size * 0.5;

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: t.gap,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {/* Input radio real */}
      <input
        type="radio"
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

      {/* Outer circle */}
      <span
        style={{
          width: t.size,
          height: t.size,
          borderRadius: "50%",
          borderWidth: t.borderWidth,
          borderStyle: "solid",
          borderColor: t.borderColor,
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          position: "relative",
          transition: `border-color ${t.transitionDuration}`,
        }}
      >
        {/* Inner dot */}
        <span
          style={{
            width: innerSize,
            height: innerSize,
            borderRadius: "50%",
            backgroundColor: t.backgroundColor,
            opacity: checked ? 1 : 0,
            transition: `opacity ${t.transitionDuration}`,
          }}
        />
      </span>

      {/* Label text */}
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