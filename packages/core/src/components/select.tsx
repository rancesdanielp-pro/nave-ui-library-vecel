import { createBaseStyles } from '../utils/createBaseStyles';
import { ReactNode, CSSProperties, SelectHTMLAttributes } from 'react';

export function Select({
  tokens,
  children,
  style,
  icon = '▼',
  iconSize = 12,
  ...props
}: {
  tokens?: any;
  children?: ReactNode;
  style?: CSSProperties;
  icon?: ReactNode;
  iconSize?: number;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const mergedStyles = createBaseStyles(tokens, {
    width: '100%',
    padding: tokens?.select?.padding,
    backgroundColor: tokens?.select?.backgroundColor,
    color: tokens?.select?.textColor,

    fontFamily: tokens?.select?.fontFamily,
    fontSize: tokens?.select?.fontSize,
    fontWeight: tokens?.select?.fontWeight,
    lineHeight: tokens?.select?.lineHeight,
    letterSpacing: tokens?.select?.letterSpacing,

    borderWidth: tokens?.select?.borderWidth,
    borderColor: tokens?.select?.borderColor,
    borderStyle: tokens?.select?.borderStyle,
    borderRadius: tokens?.select?.borderRadius,

    boxShadow: tokens?.select?.boxShadow,
    transition: `${tokens?.select?.transition} ${tokens?.select?.transitionDuration}`,
    opacity: tokens?.select?.opacity,
  });

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', width: '100%' }}
    >
      <select style={{ ...mergedStyles, width: '100%' }} {...props}>
        {children}
      </select>

      {/* Ícono del select */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        stroke={tokens?.select?.textColor ?? '#000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      >
        <polyline points="5 7 10 12 15 7" />
      </svg>
    </div>
  );
}

function Option({
  tokens,
  children,
  style,
  value,
  ...props
}: {
  tokens?: any;
  children?: ReactNode;
  style?: CSSProperties;
  value?: string | number;
} & SelectHTMLAttributes<HTMLOptionElement>) {
  const optionStyles = {
    padding: tokens?.spacing?.xs ?? 4,
    backgroundColor: tokens?.colors?.optionBg ?? '#fff',
    color: tokens?.select?.textColor ?? '#000',
    ...style,
  };

  return (
    <option value={value} style={optionStyles} {...props}>
      {children}
    </option>
  );
}

Select.Option = Option;
