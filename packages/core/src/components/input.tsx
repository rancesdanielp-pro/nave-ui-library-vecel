import { createBaseStyles } from '../utils/createBaseStyles';
import { CSSProperties, ReactNode } from 'react';

export function Input({
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
  const mergedStyles = createBaseStyles(tokens, {
    width: '100%',
    padding: tokens?.input?.padding,
    backgroundColor: tokens?.input?.backgroundColor,
    color: tokens?.input?.textColor,

    fontFamily: tokens?.input?.fontFamily,
    fontSize: tokens?.input?.fontSize,
    fontWeight: tokens?.input?.fontWeight,
    lineHeight: tokens?.input?.lineHeight,
    letterSpacing: tokens?.input?.letterSpacing,

    borderWidth: tokens?.input?.borderWidth,
    borderColor: tokens?.input?.borderColor,
    borderStyle: tokens?.input?.borderStyle,
    borderRadius: tokens?.input?.borderRadius,

    boxShadow: tokens?.input?.boxShadow,
    transition: `${tokens?.input?.transition} ${tokens?.input?.transitionDuration}`,
    opacity: tokens?.input?.opacity,

    ...style,
  });

  return (
    <input
      style={mergedStyles}
      {...props}
      onFocus={(e) => {
        e.target.style.borderColor = tokens?.input?.focusBorderColor;
        e.target.style.borderWidth = tokens?.input?.focusBorderWidth;
      }}
      onBlur={(e) => {
        e.target.style.borderColor = tokens?.input?.borderColor;
        e.target.style.borderWidth = tokens?.input?.borderWidth;
      }}
    />
  );
}
