import { CSSProperties, ReactNode, useState } from 'react';

export function Tooltip({
  content,
  tokens,
  children,
  style,
  ...props
}: {
  content?: any;
  tokens?: any;
  children?: ReactNode;
  style?: CSSProperties;
  [key: string]: any;
}) {
  const [open, setOpen] = useState(false);

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: tokens?.colors?.tooltipBg ?? '#333',
    color: '#fff',
    padding: '4px 8px',
    fontSize: 12,
    borderRadius: 4,
    whiteSpace: 'nowrap',
    top: '-32px',
    opacity: open ? 1 : 0,
    transition: 'opacity 0.15s ease',
    pointerEvents: 'none',
    ...style,
  };

  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
      <span style={tooltipStyle}>{content}</span>
    </span>
  );
}
