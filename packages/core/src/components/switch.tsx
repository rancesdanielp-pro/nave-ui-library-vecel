export function Switch({
  checked = false,
  disabled = false,
  onChange,
  tokens,
  style,
  ...props
}: {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  tokens?: any;
  style?: any;
  [key: string]: any;
}) {
  const t = {
    trackWidth: tokens.switch?.width ?? 36,
    trackHeight: tokens.switch?.height ?? 20,
    backgroundColor: tokens.switch?.backgroundColor ?? '#CCCCCC',
    activeBackgroundColor: tokens.switch?.activeBackgroundColor ?? '#652BDF',
    thumbSize: tokens.switch?.fontSize ? parseInt(tokens.switch.fontSize) : 16,
    thumbColor: tokens.switch?.textColor ?? '#FFFFFF',
    transitionDuration: tokens.switch?.transitionDuration ?? '150ms',
  };

  return (
    <label
      style={{
        position: 'relative',
        display: 'inline-block',
        width: t.trackWidth,
        height: t.trackHeight,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          opacity: 0,
          width: 0,
          height: 0,
        }}
        {...props}
      />

      {/* Track */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: checked
            ? t.activeBackgroundColor
            : t.backgroundColor,
          borderRadius: t.trackHeight / 2,
          transition: `background-color ${t.transitionDuration}`,
        }}
      />

      {/* Thumb */}
      <span
        style={{
          position: 'absolute',
          height: t.thumbSize,
          width: t.thumbSize,
          backgroundColor: t.thumbColor,
          borderRadius: '50%',
          top: (t.trackHeight - t.thumbSize) / 2,
          left: checked ? t.trackWidth - t.thumbSize - 2 : 2,
          transition: `left ${t.transitionDuration}`,
        }}
      />
    </label>
  );
}
