'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../../utils/cn';
import {
  resolveNativeStyles,
  resolveTokens,
  resolveWebStyles,
  useTheme,
} from '../../../../theme';

export type PromoBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  title: React.ReactNode;

  imageSrc: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';

  tokens?: any;
  variant?: 'primary' | 'secondary' | 'tertiary';
  platform?: 'web' | 'native';
};

const promoBannerBaseClasses = cva(
  [
    'flex',
    'items-center',
    'gap-4',
    'rounded-[16px]',
    'transition-all',
    'overflow-hidden',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

function PromoBanner({
  className,
  title,
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  tokens,
  variant = 'primary',
  platform = 'web',
  style,
  ...props
}: PromoBannerProps) {
  const theme = useTheme();

  const mergedTokens = resolveTokens(
    { componentName: 'promoBanner', variant, size: 'default', tokens },
    theme
  );

  const tokenStyles =
    platform === 'web'
      ? resolveWebStyles(mergedTokens)
      : resolveNativeStyles(mergedTokens);

  const Image = (
    <div
      className="shrink-0"
      style={{
        width: '88px',
        height: '56px',
        borderRadius: '8px',
        backgroundImage: `url(${imageSrc})`,
        backgroundColor: 'lightgray',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label={imageAlt}
    />
  );

  return (
    <div
      className={cn(promoBannerBaseClasses({ variant }), className)}
      style={
        {
          width: '286px',
          height: '72px',
          padding: '12px 16px',
          backgroundColor: '#F9F9FA',
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* IMAGE LEFT */}
      {imagePosition === 'left' && Image}

      {/* TEXT */}
      <div
        className="flex-1 min-w-0"
        style={{
          color: tokenStyles?.color ?? '#652BDF',
          fontFeatureSettings: `'ss03' on, 'ss06' on`,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 550,
          lineHeight: '130%',
          letterSpacing: '-0.56px',

          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {title}
      </div>

      {/* IMAGE RIGHT */}
      {imagePosition === 'right' && Image}
    </div>
  );
}

export { PromoBanner, promoBannerBaseClasses };
