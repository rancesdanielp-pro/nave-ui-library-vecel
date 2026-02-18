import { error } from 'console';
import { on } from 'events';
import { icons } from 'lucide-react';
import { defaultConfig } from 'next/dist/server/config-shared';
import { text } from 'stream/consumers';

export const tokenVariants = [
  {
    name: 'nave',
    schema: 'ui.theme.v1',
    version: '4.0.0',
    tokens: {
      meta: {
        theme: 'default',
      },
      foundations: {
        colors: {
          brand: {
            primary: '#652BDF',
            hover: '#3C168E',
          },
          semantic: {
            success: '#16A34A',
            warning: '#F59E0B',
            danger: '#DC2626',
            info: '#2563EB',
          },
          neutral: {
            '0': '#FFFFFF',
            '100': '#F9FAFB',
            '200': '#E5E7EB',
            '300': '#D1D5DB',
            '400': '#9CA3AF',
            '500': '#6B7280',
            '700': '#374151',
            '900': '#111827',
          },
        },
        typography: {
          fontFamily: 'inherit',
          sizes: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '18px',
          },
          weights: {
            regular: 400,
            medium: 500,
            semibold: 700,
            bold: 700,
          },
          lineHeights: {
            tight: '1.2',
            normal: '1.4',
            relaxed: '1.6',
          },
        },
        radius: {
          sm: '4px',
          md: '8px',
          lg: '12px',
          full: '9999px',
        },
        spacing: {
          xs: '4px',
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '24px',
        },
        motion: {
          duration: {
            fast: '150ms',
            normal: '250ms',
          },
          easing: {
            standard: 'ease',
            out: 'ease-out',
          },
        },
        shadow: {
          sm: '0 1px 2px rgba(0,0,0,0.05)',
          md: '0 4px 12px rgba(0,0,0,0.1)',
        },
        focus: {
          ring: '0 0 0 2px {semanticTokens.border.focus}',
        },
        interaction: {
          focusRing: '0 0 0 2px {semanticTokens.border.focus}',
        },
        state: {
          disabled: {
            background: '{semanticTokens.surface.disabled}',
            text: '{semanticTokens.text.disabled}',
          },
        },
        surface: {
          transparent: 'transparent',
        },
      },
      semanticTokens: {
        text: {
          primary: '{foundations.colors.neutral.900}',
          secondary: '{foundations.colors.neutral.700}',
          muted: '{foundations.colors.neutral.500}',
          inverse: '{foundations.colors.neutral.0}',
        },
        surface: {
          default: '{foundations.colors.neutral.0}',
          muted: '{foundations.colors.neutral.100}',
          hover: '{foundations.colors.neutral.200}',
        },
        border: {
          default: '{foundations.colors.neutral.300}',
          focus: '{foundations.colors.brand.primary}',
        },
        action: {
          primary: '{foundations.colors.brand.primary}',
          secondary: '{foundations.colors.brand.secondary}',
          primaryHover: '{foundations.colors.brand.hover}',
          disabled: '{foundations.colors.neutral.300}',
        },
      },
      components: {
        button: {
          base: {
            radius: '{foundations.radius.md}',
            fontWeight: '{foundations.typography.weights.regular}',
            transition: '{foundations.motion.duration.fast}',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '{foundations.spacing.xs}',
            outline: 'none',
          },
          sizes: {
            small: {
              height: 36,
              paddingX: 10,
              fontSize: '14px',
              fontWeight: 550,
            },
            medium: {
              height: 40,
              paddingX: 12,
              fontSize: '14px',
              fontWeight: 550,
            },
            large: {
              height: 44,
              paddingX: 16,
              fontSize: '16px',
              fontWeight: 550,
            },
          },
          variants: {
            primary: {
              background: '#652BDF',
              color: '#FFFFFF',
              hover: {
                background: '#3C168E',
              },
              focus: {
                boxShadow: '0px 0px 0px 4px #652BDF',
              },
              disabled: {
                background: '#E2E5E9',
                color: '#A3AAB8',
              },
            },
            secondary: {
              background: '#FFFFFF',
              color: '#652BDF',

              hover: {
                background: '#E6DCFA',
                color: '#3C168E',
              },

              focus: {
                boxShadow: '0px 0px 0px 4px #652BDF',
              },

              disabled: {
                background: 'transparent',
                color: '#A3AAB8',
                border: '#E2E5E9',
              },
            },
            tertiary: {
              background: 'transparent',
              color: '#652BDF',
              hover: {
                background: 'transparent',
                color: '#3C168E',
              },
              focus: {
                boxShadow: '0px 0px 0px 4px #652BDF',
                color: '#652BDF',
              },
              disabled: {
                color: '#A3AAB8',
                background: 'transparent',
              },
            },
          },
        },
        label: {
          fontSize: '{foundations.typography.sizes.sm}',
          color: '{semanticTokens.text.primary}',
          padding: '{foundations.spacing.xs} {foundations.spacing.sm}',
          fontWeight: '{foundations.typography.weights.medium}',
        },
        input: {
          base: {
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px 0px rgba(18, 18, 23, 0.05)',
            color: '#020303',
            border: '1px solid #E2E5E9',
            radius: '8px',
            hover: {
              color: '#020303',
              background: '#FFFFFF',
              border: '1px solid #C3C7D1',
            },
            focus: {
              border: '1px solid #652BDF',
              boxShadow: '0px 0px 0px 2px #E6DCFA',
              color: '#020303',
            },
            filled: {
              color: '#020303',
              background: '#F9F9FA',
              boxShadow: '0px 1px 2px 0px #1212170D',
            },
            disabled: {
              background: '#E2E5E9',
              color: '#9DA5B5',
              border: '1px solid #C3C7D1',
              boxShadow: '0px 1px 2px 0px #1212170D',
            },
            error: {
              background: '#FFFFFF',
              border: '1px solid #FB3131',
              color: '#FB3131',
              boxShadow: '0px 1px 2px 0px #1212170D',
              filled: {
                border: '1px solid #FB3131',
                color: '#020303',
                boxShadow: '0px 1px 2px 0px #1212170D',
              },
              focus: {
                border: '1px solid #FB3131',
                boxShadow: '0px 0px 0px 2px #FECFCD',
                color: '#020303',
              },
              hover: {
                border: '1px solid #C2040C',
                boxShadow: '0px 0px 0px 2px #FECFCD',
                color: '#020303',
              },
            },
          },
          sizes: {
            medium: {
              height: '44px',
              padding: '12px',
              labelFontSize: '14px',
              inputFontSize: '16px',
              helperFontSize: '14px',
              labelFontWeight: 550,
              inputFontWeight: 400,
              helperFontWeight: 400,
              labelColor: '#020303',
              helperColor: '#6E7991',
              iconSize: '16px',
            },
            small: {
              height: '32px',
              padding: '12px 10px',
              labelFontSize: '14px',
              inputFontSize: '14px',
              helperFontSize: '14px',
              labelFontWeight: 550,
              inputFontWeight: 400,
              helperFontWeight: 400,
              labelColor: '#020303',
              helperColor: '#6E7991',
              iconSize: '16px',
            },
          },
        },
        emptyState: {
          base: {
            container: {
              background: 'transparent',
              padding: '24px',
            },
            icon: {
              size: {
                small: '24px',
                medium: '20px',
              },
              color: '#6E7991',
              containerRadius: '4px',
            },
            title: {
              color: '#020303',
              fontWeight: 550,
              size: {
                small: '16px',
                medium: '18px',
              },
            },
            description: {
              color: '#6E7991',
              fontWeight: 400,
              size: {
                small: '12px',
                medium: '14px',
              },
            },
            actions: {
              gap: '8px',
            },
          },
        },
        fileUpload: {
          base: {
            container: {
              background: 'transparent',
              padding: '24px',
            },
            dropzone: {
              radius: 'radius-xl',
              borderStyle: 'dashed',
              borderWidth: 'border-1',
              borderColor: 'border-default',
              paddingX: 'spacing-10',
              paddingY: 'spacing-14',
              gap: 'spacing-4',
            },
            icon: {
              size: '30px',
              color: '#6E7991',
              wrapperSize: '48px',
              wrapperRadius: '24px',
              wrapperBg: '#F0F0F0',
            },
            title: {
              color: '#020303',
              fontSize: '16px',
              fontWeight: 550,
            },
            description: {
              color: '#6E7991',
              fontSize: '14px',
              fontWeight: 400,
            },
            actions: {
              gap: '8px',
            },
          },
        },
        select: {
          base: {
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px 0px rgba(18, 18, 23, 0.05)',
            color: '#020303',
            border: '1px solid #E2E5E9',
            radius: '8px',
            hover: {
              color: '#020303',
              background: '#FFFFFF',
              border: '1px solid #C3C7D1',
            },
            focus: {
              border: '1px solid #652BDF',
              boxShadow: '0px 0px 0px 2px #E6DCFA',
              color: '#020303',
            },
            filled: {
              color: '#020303',
              background: '#F9F9FA',
              boxShadow: '0px 1px 2px 0px #1212170D',
            },
            disabled: {
              background: '#E2E5E9',
              color: '#9DA5B5',
              border: '1px solid #C3C7D1',
              boxShadow: '0px 1px 2px 0px #1212170D',
            },
            error: {
              background: '#FFFFFF',
              border: '1px solid #FB3131',
              color: '#FB3131',
              boxShadow: '0px 1px 2px 0px #1212170D',
              filled: {
                border: '1px solid #FB3131',
                color: '#020303',
                boxShadow: '0px 1px 2px 0px #1212170D',
              },
              focus: {
                border: '1px solid #FB3131',
                boxShadow: '0px 0px 0px 2px #FECFCD',
                color: '#020303',
              },
              hover: {
                border: '1px solid #C2040C',
                boxShadow: '0px 0px 0px 2px #FECFCD',
                color: '#020303',
              },
            },
          },
          sizes: {
            medium: {
              height: '44px',
              padding: '12px',
              labelFontSize: '14px',
              inputFontSize: '16px',
              helperFontSize: '14px',
              labelFontWeight: 550,
              inputFontWeight: 400,
              helperFontWeight: 400,
              labelColor: '#020303',
              helperColor: '#6E7991',
              iconSize: '16px',
            },
            small: {
              height: '32px',
              padding: '12px 10px',
              labelFontSize: '14px',
              inputFontSize: '14px',
              helperFontSize: '14px',
              labelFontWeight: 550,
              inputFontWeight: 400,
              helperFontWeight: 400,
              labelColor: '#020303',
              helperColor: '#6E7991',
              iconSize: '16px',
            },
          },
        },
        tooltip: {
          background: '#020303',
          color: '#FFFFFF',
          radius: '{foundations.radius.sm}',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '130%',
          letterSpacing: '-0.04em',
          textAlign: 'center',
          caretColor: '#020303',
        },
        accordion: {
          base: {
            radius: '{foundations.radius.sm}',
            borderWidth: '1px',
            borderColor: '#E2E5E9',
            background: '#FFFFFF',
            transition: '{foundations.motion.duration.fast}',
            text: {
              title: '#020303',
              content: '#3A3F4B',
              icon: '#6E7991',
            },
            states: {
              default: {
                background: '#FFFFFF',
                borderColor: 'transparent',
                text: '#020303',
              },
              hover: {
                text: '#652BDF',
                icon: '#652BDF',
              },
              focus: {
                borderColor: '#652BDF',
                ring: '0px 0px 0px 4px #652BDF',
              },
            },
          },
          sizes: {
            small: {
              trigger: {
                paddingY: '{foundations.spacing.sm}',
                fontSize: '14px',
              },
              content: {
                fontSize: '14px',
                paddingTop: '{foundations.spacing.xs}',
                paddingBottom: '{foundations.spacing.sm}',
              },
              icon: {
                size: 14,
              },
            },
            medium: {
              trigger: {
                paddingY: '{foundations.spacing.md}',
                fontSize: '16px',
              },
              content: {
                fontSize: '16px',
                paddingTop: '{foundations.spacing.sm}',
                paddingBottom: '{foundations.spacing.md}',
              },
              icon: {
                size: 16,
              },
            },
          },
        },
        checkbox: {
          base: {
            fontWeight: 400,
            lineHeight: '1.3',
            gap: '{foundations.spacing.sm}',
            track: {
              radius: '{foundations.radius.sm}',
              background: '{semanticTokens.surface.muted}',
              border: '{semanticTokens.border.default}',
              focusBorder: '{semanticTokens.border.focus}',
            },
            checked: {
              background: '#652BDF',
              backgroundHover: '#3C168E',
            },
            disabled: {
              background: '#E2E5E9',
              border: '#E2E5E9',
              text: '#A3AAB8',
            },
            thumb: {
              color: '{semanticTokens.surface.default}',
            },
            motion: {
              duration: '{foundations.motion.duration.fast}',
            },
          },
          sizes: {
            regular: {
              control: '20px',
              labelFontSize: '16px',
              descriptionFontSize: '14px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
              icon: '16px',
            },
            small: {
              control: '16px',
              labelFontSize: '14px',
              descriptionFontSize: '12px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
              icon: '14px',
            },
            extraSmall: {
              control: '14px',
              labelFontSize: '12px',
              descriptionFontSize: '12px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
              icon: '12px',
            },
          },
        },
        badge: {
          base: {
            fontWeight: '550',
            lineHeight: '1.3',
          },
          sizes: {
            small: {
              fontSize: '12px',
              padding: '2px 8px',
            },
            medium: {
              fontSize: '14px',
              padding: '4px 10px',
            },
            large: {
              fontSize: '16px',
              padding: '6px 12px',
            },
          },
          shapes: {
            rounded: {
              radius: '{foundations.radius.full}',
            },
            square: {
              radius: '{foundations.radius.md}',
            },
          },
          tones: {
            success: {
              background: '#F2FDF8',
              color: '#128751',
            },
            warning: {
              background: '#FEFAF0',
              color: '#C26E04',
            },
            error: {
              background: '#FEEEEB',
              color: '#C2040C',
            },
            info: {
              background: '#F0F5FE',
              color: '#0465C2',
            },
            neutral: {
              background: '#F9F9FA',
              color: '#3A3F4B',
              border: '#E2E5E9',
            },
            brand: {
              background: '#F6F2FD',
              color: '#652BDF',
            },
          },
        },
        banner: {
          base: {
            radius: '{foundations.radius.lg}',
            paddingX: '16px',
            paddingY: '16px',
          },
          sizes: {
            full: {
              maxWidth: '1184px',
            },
            compact: {
              maxWidth: '360px',
            },
          },
          tones: {
            success: {
              background: '#F2FDF8',
              border: '#128751',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.feedback.success.iconBg}',
              iconColor: '#128751',
              action: '{semanticTokens.feedback.success.action}',
            },
            warning: {
              background: '#FEFAF0',
              border: '#C26E04',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C26E04',
              action: '{semanticTokens.text.primary}',
            },
            error: {
              background: '#FEEEEB',
              border: '#C2040C',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C2040C',
              action: '{semanticTokens.text.primary}',
            },
            info: {
              background: '#F0F5FE',
              border: '#0465C2',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#0465C2',
              action: '{semanticTokens.text.primary}',
            },
            neutral: {
              background: '#F9F9FA',
              border: '#E2E5E9',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#3A3F4B',
              action: '{semanticTokens.text.primary}',
            },
            brand: {
              background: '#F6F2FD',
              color: '#652BDF',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#652BDF',
              action: '{semanticTokens.text.primary}',
            },
          },
        },
        promoBanner: {
          primary: {
            background: '{semanticTokens.action.primary}',
            color: '{semanticTokens.text.inverse}',
            linkColor: '{semanticTokens.text.inverse}',
            linkUnderline: true,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: 'lightgray',
          },
          secondary: {
            background: '{foundations.colors.brand.secondary}',
            color: '{semanticTokens.text.primary}',
            linkColor: '{foundations.colors.brand.primary}',
            linkUnderline: false,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: '#E5E7EB',
          },
          tertiary: {
            background: '{foundations.colors.feedback.warning}',
            color: '{semanticTokens.text.primary}',
            linkColor: '{foundations.colors.feedback.warning}',
            linkUnderline: true,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: '#FEF3C7',
          },
        },
        alert: {
          base: {
            radius: '{foundations.radius.lg}',
            paddingX: '16px',
            paddingY: '12px',
            gap: '12px',
            labelColor: '#020303',
            labelFontSize: '14px',
            labelFontWeight: '600',
            descriptionColor: '#3A3F4B',
            descriptionFontSize: '12px',
            descriptionFontWeight: '400',
            linkFontSize: '12px',
            linkFontWeight: '600',
            iconContainerSize: '32px',
            iconContainerRadius: '8px',
          },
          sizes: {
            inline: { width: '343px' },
            'full-width': { width: '1184px' },
            stacked: { width: '343px', flexDirection: 'column' },
          },
          tones: {
            success: {
              background: '#F2FDF8',
              border: '#1AC776',
              iconColor: '#1AC776',
              linkColor: '#1AC776', // Mismo color que el tono
              iconContainerBackground: '#D2F9E7',
            },
            warning: {
              background: '#FEFAF0',
              border: '#FBAA31',
              iconColor: '#FBAA31',
              linkColor: '#FBAA31',
              iconContainerBackground: '#FEECCD',
            },
            error: {
              background: '#FEEEEB',
              border: '#FB3131',
              iconColor: '#FB3131',
              linkColor: '#FB3131',
              iconContainerBackground: '#FECFCD',
            },
            info: {
              background: '#F0F5FE',
              border: '#057AF4',
              iconColor: '#057AF4',
              linkColor: '#057AF4',
              iconContainerBackground: '#CDE2FE',
            },
            neutral: {
              background: '#F9F9FA',
              border: '#E2E5E9',
              iconColor: '#3A3F4B',
              linkColor: '#3A3F4B',
              iconContainerBackground: '#D2F9E7',
            },
            destructive: {
              background: '#FEF2F2',
              border: '#DC2626',
              iconColor: '#DC2626',
              linkColor: '#DC2626',
              iconContainerBackground: '#D2F9E7',
            },
          },
        },
        avatar: {
          sizes: {
            sm: {
              size: '32px',
              fontSize: '12px',
            },
            md: {
              size: '36px',
              fontSize: '14px',
            },
            lg: {
              size: '44px',
              fontSize: '14px',
            },
          },
          base: {
            fallback: {
              background: '#F9F9FA',
              color: '#020303',
              fontWeight: 550,
            },
          },
          shapes: {
            radius: '{foundations.radius.full}',
          },
        },
        radio: {
          base: {
            fontWeight: 400,
            lineHeight: '1.3',
            gap: '{foundations.spacing.sm}',
            outer: {
              radius: '9999px',
              background: '#FFFFFF',
              border: '#E2E5E9',
              hoverBorder: '#C3C7D1',
              focusBorder: '{semanticTokens.border.focus}',
            },
            checked: {
              background: '#652BDF',
              backgroundHover: '#3C168E',
            },
            disabled: {
              background: '#E2E5E9',
              border: '#C3C7D1',
              dot: '#A3AAB8',
            },
            motion: {
              duration: '{foundations.motion.duration.fast}',
            },
          },
          sizes: {
            regular: {
              outer: {
                size: '20px',
              },
              dot: {
                size: '12px',
              },
              labelFontSize: '16px',
              descriptionFontSize: '14px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },

            small: {
              outer: {
                size: '16px',
              },
              dot: {
                size: '8px',
              },
              labelFontSize: '14px',
              descriptionFontSize: '12px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },

            extraSmall: {
              outer: {
                size: '16px',
              },
              dot: {
                size: '8px',
              },
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelFontSize: '14px',
              descriptionFontSize: '12px',
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
          },
        },
        switch: {
          base: {
            fontWeight: 400,
            lineHeight: '1.3',
            gap: '{foundations.spacing.sm}',
            background: '#C3C7D1',
            track: {
              offBackground: '#E2E5E9',
              offBackgroundHover: '#A3AAB8',
              onBackground: '#652BDF',
              onBackgroundHover: '#3C168E',
            },
            disabled: {
              track: '#A3AAB8',
              handle: '#E2E5E9',
              background: '#E2E5E9',
            },
            motion: {
              duration: '{foundations.motion.duration.fast}',
            },
          },
          sizes: {
            regular: {
              track: {
                width: '34px',
                height: '20px',
              },
              handle: {
                size: '16px',
                translate: '7px',
              },
              labelFontSize: '16px',
              descriptionFontSize: '14px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
            small: {
              track: {
                width: '26px',
                height: '16px',
              },
              handle: {
                size: '12px',
                translate: '5px',
              },
              labelFontSize: '12px',
              descriptionFontSize: '12px',
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
            extraSmall: {
              track: {
                width: '26px',
                height: '16px',
              },
              handle: {
                size: '12px',
                translate: '5px',
              },
              labelFontWeight: 400,
              descriptionFontWeight: 400,
              labelFontSize: '12px',
              descriptionFontSize: '12px',
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
          },
        },
        dropdown: {
          background: '#FFFFFF',
          color: '#020303',
          border: '1px solid #E2E5E9',
          radius: '8px',
          shadow: '0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A',
          paddingX: '8px',
          paddingY: '4px',
          minWidth: '12rem',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '1.3',
          animation: {
            duration: '120ms',
            easing: 'ease-out',
          },
          item: {
            height: '36px',
            gap: '4px',
            color: '#020303',
            background: '#FFFFFF',
            hoverBackground: '#F9F9FA',
            activeBackground: '#E2E5E9',
            disabledOpacity: '0.4',
            borderRadius: '8px',
            iconSize: '13px',
            iconColor: '#652BDF',
            fontSize: '14px',
            fontWeight: '400',
          },
          section: {
            labelColor: '#6E7991',
            separatorColor: '#E2E5E9',
          },
        },
        separator: {
          base: {
            orientation: {
              vertical: {
                width: '1px',
                height: '18px',
              },
              horizontal: {
                width: 'auto',
                height: '1px',
              },
            },
            color: '#E2E5E9',
            opacity: '0.8',
          },
        },
        alertDialog: {
          base: {
            overlay: {
              background: 'rgba(0,0,0,0.5)',
            },
            content: {
              background: '#FFFFFF',
              radius: '18px',
              borderColor: '#E2E5E9',
            },
            title: {
              color: '#020303',
              fontSize: '18px',
            },
            description: {
              color: '#6E7991',
              fontSize: '16px',
            },
          },
        },
        card: {
          backgroundColor: '{semanticTokens.surface.default}',
          borderColor: '{semanticTokens.border.default}',
          color: '#111827',
          borderRadius: '{foundations.radius.lg}',
          padding: '16px',
          title: {
            fontSize: '18px',
            fontWeight: 550,
            lineHeight: '130%',
            letterSpacing: '-0.04em',
          },
          variants: {
            primary: {
              backgroundColor: '{foundations.colors.neutral}',
              borderColor: '#E5E7EB',
            },
            secondary: {
              backgroundColor: '#F9FAFB',
              borderColor: 'transparent',
            },
            tertiary: {
              backgroundColor: '{foundations.colors.neutral}',
              borderColor: '#652BDF',
            },
          },
        },
        integrationCard: {
          backgroundColor: '#F9F9FA',
          borderColor: '#E5E7EB',
          borderRadius: '16px',
          title: {
            color: '#111827',
            fontSize: '16px',
            fontWeight: 550,
          },
          description: {
            color: '#6B7280',
            fontSize: '14px',
          },
          link: {
            color: '#652BDF',
            fontSize: '14px',
            fontWeight: 550,
          },
          variants: {
            default: {
              borderColor: '#E5E7EB',
            },
            subtle: {
              borderColor: '#EEF2F7',
            },
            none: {
              borderColor: 'transparent',
            },
          },
        },
        dragslider: {
          gap: '16px',
          cursorGrab: 'grab',
          cursorGrabbing: 'grabbing',
          scrollBehavior: 'smooth',
        },
        calendar: {
          base: {
            background: '{semanticTokens.surface.default}',
            radius: '{foundations.radius.md}',
            text: '{semanticTokens.text.primary}',
            muted: '{semanticTokens.text.muted}',
            border: '{semanticTokens.border.default}',
            item: {
              size: '32px',
              radius: '{foundations.radius.sm}',
              default: {
                color: '{semanticTokens.text.primary}',
                background: 'transparent',
              },
              hover: {
                background: '#E2E5E9',
                color: '{semanticTokens.text.primary}',
              },
              current: {
                background: '#E2E5E9',
                color: '{semanticTokens.text.primary}',
              },
              active: {
                background: '#652BDF',
                color: '{semanticTokens.text.inverse}',
              },
            },
          },
        },
        popover: {
          background: '#FFFFFF',
          color: '#020303',
          border: '#E2E5E9',
          radius: '12px',
          shadow: '0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A',
          padding: '12px',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '1.3',
          header: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#020303',
          },
          description: {
            fontSize: '14px',
            fontWeight: 400,
            color: '#6E7991',
          },
          divider: {
            color: '#E2E5E9',
          },

          motion: {
            duration: '200ms',
            easing: 'ease-out',
          },

          zIndex: '1000',
        },
        pagination: {
          base: {
            // Contenedor y General
            radius: '{foundations.radius.md}',
            gap: '{foundations.spacing.sm}', // Espacio entre botones
            // Botón de número de página (PageNumber - Required)
            pageNumber: {
              fontSize: '{foundations.typography.sizes.sm}',
              fontWeight: '{foundations.typography.weights.medium}',
              color: '{semanticTokens.text.primary}',
            },
            // Iconos (Previous/Next/Ellipsis Icons - Required)
            icon: {
              size: '16px',
              color: '{foundations.colors.neutral.500}',
            },
            // Estados de los items (Links)
            item: {
              default: {
                background: '{semanticTokens.surface.default}',
                border: '{semanticTokens.border.default}',
                color: '{semanticTokens.text.primary}',
              },
              hover: {
                background: '#E6DCFA',
                border: '{semanticTokens.border.default}',
              },
              active: {
                // Current Page - Required
                background: '#F4F0FF',
                text: '{semanticTokens.action.primary}',
                border: 'transparent',
              },
              focus: {
                // Active Focus - Required
                border: '{semanticTokens.border.focus}',
              },
              disabled: {
                // Disabled state - Required
                background: '#FFFFFF',
                text: '{foundations.colors.neutral.400}',
                opacity: '0.5',
              },
            },
          },
        },
        tabs: {
          base: {
            tabsList: {
              background: '#E2E5E9',
              color: '#3A3F4B',
              radius: '6px',
            },
            tabsTrigger: {
              color: '#3A3F4B',
              hover: {
                background: '#F9F9FA',
                color: '#020303',
              },
              active: {
                background: '#FFFFFF',
                color: '#020303',
              },
              disabled: {
                background: '#FFFFFF',
                color: '#9DA5B5',
                opacity: 0.5,
              },
            },
            tabsFocusRing: {
              innerColor: '#FFFFFF',
              outerColor: '#652BDF',
              innerSize: '2px',
              outerSize: '4px',
            },
          },
          sizes: {
            medium: {
              fontSize: '14px',
              fontWeight: 500,
            },
            small: {
              fontSize: '12px',
              fontWeight: 500,
            },
          },
        },
        table: {
          background: '{semanticTokens.surface.default}',
          color: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          hoverBackground: '{semanticTokens.surface.hover}',
          selectedBackground: '#F4F0FF',
          shadow: '{foundations.shadow.md}',
        },
        breadcrumb: {
          base: {
            gap: '12px',
            link: {
              default: {
                color: '#652BDF',
                fontWeight: 600,
              },
              hover: {
                color: '#3C168E',
              },
            },
            page: {
              color: '#6E7991',
              fontWeight: 550,
            },
            separator: {
              color: '#9CA3AF',
              size: '14px',
            },
          },
          sizes: {
            medium: { fontSize: '14px', gap: '12px' },
            small: { fontSize: '12px', gap: '8px' },
          },
        },
        loader: {
          sizes: {
            small: {
              size: 16,
              labelFontWeight: 550,
              descriptionFontWeight: 400,
              labelFontSize: '16px',
              descriptionFontSize: '12px',
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
            medium: {
              size: 20,
              labelFontWeight: 550,
              descriptionFontWeight: 400,
              labelFontSize: '18px',
              descriptionFontSize: '14px',
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
            large: {
              size: 24,
              labelFontWeight: 550,
              descriptionFontWeight: 400,
              labelFontSize: '18px',
              descriptionFontSize: '14px',
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
            extraLarge: {
              size: 32,
              labelFontWeight: 550,
              descriptionFontWeight: 400,
              labelFontSize: '18px',
              descriptionFontSize: '14px',
              labelColor: '#020303',
              descriptionColor: '#6E7991',
            },
          },
          variants: {
            default: {
              color: '#652BDF',
            },
            primary: {
              color: '#652BDF',
            },
          },
        },
        progress: {
          base: {
            // Título y Porcentaje (Arriba)
            labelColor: '{semanticTokens.text.primary}',
            labelFontSize: '14px',
            labelFontWeight: '550', // Semi Bold según Figma

            // Descripción / Tiempo (Abajo)
            descriptionColor: '{semanticTokens.text.muted}',
            descriptionFontSize: '12px',
            descriptionFontWeight: '400',

            // Espaciado entre la barra y los textos
            gap: '6px',
          },
          track: {
            height: '6px', // Grosor de la barra según Figma
            radius: '{foundations.radius.full}',
            background: '{semanticTokens.surface.muted}', // Color del Track (fondo)
          },
          indicator: {
            background: '{semanticTokens.action.primary}', // Color del Filled Track (relleno)
          },
          motion: {
            duration: '{foundations.motion.duration.normal}',
            easing: '{foundations.motion.easing.standard}',
          },
        },
        sidebar: {
          base: {
            container: {
              background: '{semanticTokens.surface.default}',
              border: '{semanticTokens.border.default}',
              width: '240px',
              collapsedWidth: '64px',
              padding: '8px',
            },
            header: {
              minHeight: '56px',
              titleColor: '{semanticTokens.text.muted}',
              titleFontSize: '14px',
              titleFontWeight: '500',
            },
            item: {
              radius: '{foundations.radius.md}',
              height: '36px',
              paddingX: '8px',
              gap: '12px',
              fontSize: '14px',
              fontWeight: '500',
              color: '{semanticTokens.text.muted}',
              hover: {
                background: '{semanticTokens.surface.hover}',
                color: '{semanticTokens.text.primary}',
              },
              active: {
                background: '#F4F0FF',
                color: '{semanticTokens.action.primary}',
              },
            },
            section: {
              titleColor: '{foundations.colors.neutral.400}',
              titleFontSize: '10px',
              gap: '16px',
            },
            toggle: {
              color: '{foundations.colors.neutral.400}',
              hoverColor: '{foundations.colors.neutral.500}',
            },
            motion: {
              duration: '{foundations.motion.duration.normal}',
            },
          },
        },
        navbar: {
          container: {
            height: '64px',
            background: '#FFFFFF',
            border: '#E2E5E9',
            radius: '{foundations.radius.md}',
            iconColor: '#9DA5B5',
          },
          content: {
            maxWidth: '1440px',
            paddingX: '{foundations.spacing.lg}',
          },
          merchant: {
            color: '#020303',
            fontSize: '14px',
            fontWeight: 550,
          },
          action: {
            gap: '{foundations.spacing.sm}',
          },
          user: {
            nameColor: '#020303',
            roleColor: '#6E7991',
            roleFontSize: '12px',
            nameFontSize: '12px',
            nameFontWeight: 550,
            roleFontWeight: 400,
          },
          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },
        drawer: {
          base: {
            overlay: {
              background: 'rgba(0,0,0,0.5)',
              opacity: 0.4,
              backdropBlur: '4px',
            },
            content: {
              background: '#FFFFFF',
              radius: '2px',
              borderColor: '#E2E5E9',
              color: '{semanticTokens.text.primary}',
              borderWidth: '1px',
              shadow:
                '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 6px 12px -4px rgba(0, 0, 0, 0.1)',
              padding: '24px',
              maxHeight: '80vh',
            },
            header: {
              gap: '8px',
            },
            footer: {
              paddingTop: '16px',
              gap: '8px',
              align: 'end',
            },
            title: {
              color: '#020303',
              fontSize: '24px',
            },
            description: {
              color: '#6E7991',
              fontSize: '16px',
            },
            close: {
              size: '12px',
              color: '#020303',
            },
          },
        },
        icon: {
          base: {
            color: '{semanticTokens.action.primary}',
          },
          sizes: {
            xs: 12,
            sm: 16,
            md: 20,
            lg: 24,
            xl: 32,
          },
          variants: {
            default: {
              color: '{semanticTokens.action.primary}',
            },
            muted: {
              color: '{semanticTokens.text.muted}',
            },
            danger: {
              color: '{foundations.colors.semantic.danger}',
            },
            success: {
              color: '{foundations.colors.semantic.success}',
            },
          },
        },
      },
    },
  },
  {
    name: 'galicia',
    tokens: {
      /* =========================================================
       * META
       * ======================================================= */
      meta: {
        version: '2.0.0',
        theme: 'light',
        radiusScale: 'md',
      },

      /* =========================================================
       * FOUNDATIONS (valores puros)
       * ======================================================= */
      foundations: {
        colors: {
          brand: {
            primary: '#e07904ff',
            hover: '#db9340ff',
            secondary: '#F67E07',
          },
          semantic: {
            success: '#16A34A',
            warning: '#F59E0B',
            danger: '#DC2626',
            info: '#2563EB',
          },
          neutral: {
            0: '#FFFFFF',
            100: '#F9FAFB',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            700: '#374151',
            900: '#111827',
          },
        },

        typography: {
          fontFamily: 'inherit',
          sizes: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '18px',
          },
          weights: {
            regular: 400,
            medium: 500,
            semibold: 700,
            bold: 700,
          },
          lineHeights: {
            tight: '1.2',
            normal: '1.4',
            relaxed: '1.6',
          },
        },

        radius: {
          sm: '4px',
          md: '8px',
          lg: '12px',
          full: '9999px',
        },

        spacing: {
          xs: '4px',
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '24px',
        },

        motion: {
          duration: {
            fast: '150ms',
            normal: '250ms',
          },
          easing: {
            standard: 'ease',
            out: 'ease-out',
          },
        },

        shadow: {
          sm: '0 1px 2px rgba(0,0,0,0.05)',
          md: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },

      /* =========================================================
       * SEMANTIC TOKENS (significado)
       * ======================================================= */
      semanticTokens: {
        text: {
          primary: '{foundations.colors.neutral.900}',
          secondary: '{foundations.colors.neutral.700}',
          muted: '{foundations.colors.neutral.500}',
          inverse: '{foundations.colors.neutral.0}',
        },

        surface: {
          default: '{foundations.colors.neutral.0}',
          muted: '{foundations.colors.neutral.100}',
          hover: '{foundations.colors.neutral.200}',
        },

        border: {
          default: '{foundations.colors.neutral.300}',
          focus: '{foundations.colors.brand.primary}',
        },

        action: {
          primary: '{foundations.colors.brand.primary}',
          secondary: '{foundations.colors.brand.secondary}',
          primaryHover: '{foundations.colors.brand.hover}',
          disabled: '{foundations.colors.neutral.300}',
        },
      },

      /* =========================================================
       * COMPONENT TOKENS (contratos)
       * ======================================================= */
      components: {
        button: {
          base: {
            radius: '{foundations.radius.md}',
            fontWeight: '{foundations.typography.weights.regular}',
            transition: '{foundations.motion.duration.fast}',
          },
          variants: {
            primary: {
              background: '{semanticTokens.action.primary}',
              backgroundHover: '{semanticTokens.action.primaryHover}',
              color: '{semanticTokens.text.inverse}',
            },
            secondary: {
              background: '{semanticTokens.surface.muted}',
              color: '{semanticTokens.text.primary}',
            },
          },
        },
        label: {
          fontSize: '{foundations.typography.sizes.sm}',
          color: '{semanticTokens.text.primary}',
          padding: '{foundations.spacing.xs} {foundations.spacing.sm}',
          fontWeight: '{foundations.typography.weights.medium}',
        },

        input: {
          background: '{semanticTokens.surface.default}',
          color: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          focusBorder: '{semanticTokens.border.focus}',
          radius: '{foundations.radius.md}',
        },

        /* select | combobox */
        select: {
          background: '{semanticTokens.surface.default}',
          color: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          focusBorder: '{semanticTokens.border.focus}',
          radius: '{foundations.radius.md}',
        },

        tooltip: {
          background: '{foundations.colors.neutral.700}',
          color: '{semanticTokens.text.inverse}',
          radius: '{foundations.radius.sm}',
        },

        accordion: {
          text: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.sm}',
          focusBorder: '{semanticTokens.border.focus}',
        },

        checkbox: {
          track: {
            width: '36px',
            height: '20px',
            radius: '{foundations.radius.md}',
            background: '{semanticTokens.surface.muted}',
            border: '{semanticTokens.border.default}',
            focusBorder: '{semanticTokens.border.focus}',
          },

          checked: {
            background: '{semanticTokens.action.primary}',
            backgroundHover: '{semanticTokens.action.primaryHover}',
          },

          disabled: {
            background: '{semanticTokens.surface.muted}',
            thumb: '{semanticTokens.surface.default}',
          },

          thumb: {
            size: '16px',
            color: '{semanticTokens.surface.default}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        badge: {
          base: {
            fontWeight: '550',
            lineHeight: '1.3',
          },

          sizes: {
            small: {
              fontSize: '12px',
              padding: '2px 8px',
            },
            medium: {
              fontSize: '14px',
              padding: '4px 10px',
            },
            large: {
              fontSize: '16px',
              padding: '6px 12px',
            },
          },

          shapes: {
            rounded: {
              radius: '{foundations.radius.full}',
            },
            square: {
              radius: '{foundations.radius.md}',
            },
          },

          tones: {
            success: {
              background: '#F2FDF8',
              color: '#128751',
            },
            warning: {
              background: '#FEFAF0',
              color: '#C26E04',
            },
            error: {
              background: '#FEEEEB',
              color: '#C2040C',
            },
            info: {
              background: '#F0F5FE',
              color: '#e07904ff',
            },
            neutral: {
              background: '#F9F9FA',
              color: '#3A3F4B',
              border: '#E2E5E9',
            },
            brand: {
              background: '#F6F2FD',
              color: '#e07904ff',
            },
          },
        },

        banner: {
          base: {
            radius: '{foundations.radius.lg}',
            paddingX: '16px',
            paddingY: '16px',
          },

          sizes: {
            full: {
              maxWidth: '1184px',
            },
            compact: {
              maxWidth: '360px',
            },
          },

          tones: {
            success: {
              background: '#F2FDF8',
              border: '#128751',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.feedback.success.iconBg}',
              iconColor: '#128751',
              action: '{semanticTokens.feedback.success.action}',
            },
            warning: {
              background: '#FEFAF0',
              border: '#C26E04',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C26E04',
              action: '{semanticTokens.text.primary}',
            },
            error: {
              background: '#FEEEEB',
              border: '#C2040C',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C2040C',
              action: '{semanticTokens.text.primary}',
            },
            info: {
              background: '#F0F5FE',
              border: '#0465C2',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#0465C2',
              action: '{semanticTokens.text.primary}',
            },
            neutral: {
              background: '#F9F9FA',
              border: '#E2E5E9',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#3A3F4B',
              action: '{semanticTokens.text.primary}',
            },
            brand: {
              background: '#F6F2FD',
              color: '#652BDF',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#652BDF',
              action: '{semanticTokens.text.primary}',
            },
          },
        },
        promoBanner: {
          primary: {
            background: '{semanticTokens.action.primary}',
            color: '{semanticTokens.text.inverse}',
            linkColor: '{semanticTokens.text.inverse}',
            linkUnderline: true,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: 'lightgray',
          },
          secondary: {
            background: '{foundations.colors.brand.secondary}',
            color: '{semanticTokens.text.primary}',
            linkColor: '{foundations.colors.brand.primary}',
            linkUnderline: false,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: '#E5E7EB',
          },
          tertiary: {
            background: '{foundations.colors.feedback.warning}',
            color: '{semanticTokens.text.primary}',
            linkColor: '{foundations.colors.feedback.warning}',
            linkUnderline: true,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: '#FEF3C7',
          },
        },

        alert: {
          base: {
            radius: '{foundations.radius.lg}',
            paddingX: '16px',
            paddingY: '12px',
          },

          tones: {
            success: {
              background: '#F2FDF8',
              border: '#128751',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.feedback.success.iconBg}',
              iconColor: '#128751',
              action: '{semanticTokens.feedback.success.action}',
            },
            warning: {
              background: '#FEFAF0',
              border: '#C26E04',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C26E04',
              action: '{semanticTokens.text.primary}',
            },
            error: {
              background: '#FEEEEB',
              border: '#C2040C',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C2040C',
              action: '{semanticTokens.text.primary}',
            },
            info: {
              background: '#F0F5FE',
              border: '#C2040C',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C26E04',
              action: '{semanticTokens.text.primary}',
            },
            neutral: {
              background: '#F9F9FA',
              border: '#E2E5E9',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#3A3F4B',
              action: '{semanticTokens.text.primary}',
            },
            destructive: {
              background: '#FEF2F2',
              border: '#DC2626',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#DC2626',
              action: '{semanticTokens.text.primary}',
            },
          },
        },
        avatar: {
          sizes: {
            sm: {
              size: '32px',
              fontSize: '12px',
            },
            md: {
              size: '36px',
              fontSize: '14px',
            },
            lg: {
              size: '44px',
              fontSize: '14px',
            },
          },

          shape: {
            radius: '{foundations.radius.full}',
          },

          fallback: {
            background: '{semanticTokens.surface.muted}',
            color: '{semanticTokens.text.primary}',
            fontWeight: '{foundations.typography.weights.medium}',
          },
        },
        radio: {
          outer: {
            size: '16px',
            radius: '50%',
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            focusBorder: '{semanticTokens.border.focus}',
          },

          checked: {
            background: '{semanticTokens.action.primary}',
            backgroundHover: '{semanticTokens.action.primaryHover}',
          },

          dot: {
            size: '8px',
            color: '{semanticTokens.surface.default}',
          },

          disabled: {
            background: '{semanticTokens.surface.muted}',
            border: '{semanticTokens.border.default}',
            dot: '{semanticTokens.surface.default}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        switch: {
          track: {
            width: '36px',
            height: '20px',
            radius: '{foundations.radius.full}',
            offBackground: '{foundations.colors.neutral.300}',
            onBackground: '{semanticTokens.action.primary}',
            focusBorder: '{semanticTokens.border.focus}',
          },

          handle: {
            size: '12px',
            color: '{semanticTokens.text.inverse}',
          },

          disabled: {
            track: '{semanticTokens.surface.muted}',
            handle: '{semanticTokens.surface.default}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        dropdown: {
          background: '{semanticTokens.surface.default}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          shadow: '{foundations.shadow.md}',
        },

        alertDialog: {
          overlay: {
            background: 'rgba(0,0,0,0.5)',
          },
          content: {
            background: '{semanticTokens.surface.default}',
            radius: '{foundations.radius.lg}',
            border: '{semanticTokens.border.default}',
          },
          title: {
            color: '{semanticTokens.text.primary}',
            fontWeight: '{foundations.typography.weights.semibold}',
          },
          description: {
            color: '{semanticTokens.text.secondary}',
          },
        },
        separator: {
          orientation: {
            vertical: {
              width: '1px',
              height: '18px',
            },
            horizontal: {
              width: '1px',
              height: '1px',
            },
          },
          color: 'black',
          opacity: '0.8',
        },
        card: {
          backgroundColor: '{semanticTokens.surface.default}',
          borderColor: '{semanticTokens.border.default}',
          color: '#111827', // Color del título
          borderRadius: '{foundations.radius.lg}',
          padding: '16px',
          title: {
            fontSize: '18px',
            fontWeight: 550,
            lineHeight: '130%',
            letterSpacing: '-0.04em',
          },
          variants: {
            primary: {
              backgroundColor: '{foundations.colors.neutral}',
              borderColor: '#E5E7EB',
            },
            secondary: {
              backgroundColor: '#F9FAFB',
              borderColor: 'transparent',
            },
            tertiary: {
              backgroundColor: '{foundations.colors.neutral}',
              borderColor: '#C26E04', // Borde de marca
            },
          },
        },

        integrationCard: {
          backgroundColor: '#F9F9FA',
          borderColor: '#E5E7EB',
          borderRadius: '16px',
          title: {
            color: '#111827',
            fontSize: '16px',
            fontWeight: 550,
          },
          description: {
            color: '#6B7280',
            fontSize: '14px',
          },
          link: {
            color: '#C26E04',
            fontSize: '14px',
            fontWeight: 550,
          },
          variants: {
            default: { borderColor: '#E5E7EB' },
            subtle: { borderColor: '#EEF2F7' },
            none: { borderColor: 'transparent' },
          },
        },

        dragslider: {
          gap: '16px',
          cursorGrab: 'grab',
          cursorGrabbing: 'grabbing',
          scrollBehavior: 'smooth',
        },

        calendar: {
          background: '{semanticTokens.surface.default}',
          text: '{semanticTokens.text.primary}',
          mutedText: '{semanticTokens.text.muted}',
          accent: '#F6F2FD',
          accentForeground: '{semanticTokens.text.inverse}',
          radius: '{foundations.radius.md}',
        },

        popover: {
          background: '{semanticTokens.surface.default}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          shadow: '{foundations.shadow.md}',
        },

        pagination: {
          background: '{semanticTokens.surface.default}',
          activeBackground: '#ff0040ff',
          activeText: '{semanticTokens.action.primary}',
          hoverBackground: '{semanticTokens.surface.hover}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          focusBorder: '#652BDF',
          disabledBackground: '#8d0000ff',
          disabledBorder: '{semanticTokens.border.disabled}',
        },

        tabs: {
          tabsList: {
            background: '{semanticTokens.surface.muted}',
            color: '{semanticTokens.text.primary}',
            border: 'none',
            radius: '6px',
          },
          tabsTrigger: {
            color: '{semanticTokens.text.primary}',
            active: {
              background: '{semanticTokens.action.primary}',
              border: '{semanticTokens.border.default}',
              color: '{semanticTokens.text.inverse}',
            },
            disabled: {
              opacity: 0.5,
            },
          },
          tabsFocusRing: {
            innerColor: '{semanticTokens.surface.default}',
            outerColor: '{semanticTokens.border.focus}',
            innerSize: '2px',
            outerSize: '4px',
          },
        },
        table: {
          base: {
            // Estilos del contenedor
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            radius: '{foundations.radius.md}',
            shadow: '{foundations.shadow.md}',

            // Header (Cabeceras)
            headerBackground: '#F9F9FA',
            headerTextColor: '#6E7991',
            headerFontSize: '12px',
            headerFontWeight: '600',

            // Filas y Celdas
            rowHoverBackground: '{semanticTokens.surface.hover}',
            rowSelectedBackground: '#F4F0FF',
            cellTextColor: '{semanticTokens.text.primary}',
            cellFontSize: '14px',

            // Subtítulo de celda (Cell Description)
            descriptionColor: '#6E7991',
            descriptionFontSize: '12px',
            descriptionFontWeight: '400',
          },
        },
        breadcrumb: {
          link: {
            color: '{semanticTokens.action.primary}',
            fontWeight: '{foundations.typography.weights.semibold}',
            hoverBackground: '{semanticTokens.surface.hover}',
          },
          page: {
            color: '{semanticTokens.text.muted}',
          },
          separator: {
            color: '{foundations.colors.neutral.400}',
          },
        },
        loader: {
          sizes: {
            sm: 16,
            md: 24,
            lg: 32,
          },

          base: {
            color: '{semanticTokens.text.muted}',
          },

          variants: {
            default: {
              color: '{semanticTokens.text.muted}',
            },
            primary: {
              color: '{semanticTokens.action.primary}',
            },
            secondary: {
              color: '{foundations.colors.brand.secondary}',
            },
          },
        },

        progress: {
          track: {
            height: '4px',
            radius: '{foundations.radius.md}',
            background: '{semanticTokens.surface.muted}',
          },

          indicator: {
            background: '{semanticTokens.action.primary}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
            easing: '{foundations.motion.easing.out}',
          },
        },

        sidebar: {
          container: {
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            width: '240px',
            collapsedWidth: '64px',
          },

          header: {
            titleColor: '{semanticTokens.text.muted}',
          },

          item: {
            color: '{semanticTokens.text.muted}',
            hover: {
              background: '{semanticTokens.surface.hover}',
              color: '{semanticTokens.text.primary}',
            },
            active: {
              background: '#F4F0FF',
              color: '{semanticTokens.action.primary}',
            },
          },

          toggle: {
            color: '{foundations.colors.neutral.400}',
            hoverColor: '{foundations.colors.neutral.500}',
          },

          motion: {
            duration: '{foundations.motion.duration.normal}',
          },
        },

        navbar: {
          container: {
            height: '64px',
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            radius: '{foundations.radius.md}',
          },

          content: {
            maxWidth: '1440px',
            paddingX: '{foundations.spacing.lg}',
          },

          merchant: {
            color: '{semanticTokens.text.primary}',
            chevronColor: '{semanticTokens.text.muted}',
          },

          action: {
            gap: '{foundations.spacing.sm}',
          },

          user: {
            nameColor: '{semanticTokens.text.primary}',
            roleColor: '{semanticTokens.text.muted}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        drawer: {
          container: {
            background: '{semanticTokens.surface.default}',
            color: '{semanticTokens.text.primary}',
            radius: '{foundations.radius.sm}',
            borderWidth: '{foundations.borderWidths.sm}',
            borderColor: '{semanticTokens.border.default}',
            shadow: '{foundations.shadow.md}',
            padding: '24px',
            maxHeight: '80vh',
          },

          overlay: {
            background: '{semanticTokens.overlay.background}',
            opacity: '{semanticTokens.overlay.opacity}',
            backdropBlur: '{semanticTokens.overlay.backdropBlur}',
          },

          title: {
            fontSize: '{foundations.fontSizes.xl}',
            fontWeight: '{foundations.typography.weights.semibold}',
            lineHeight: '{foundations.lineHeights.relaxed}',
            color: '{semanticTokens.text.primary}',
          },

          description: {
            fontSize: '{foundations.fontSizes.md}',
            lineHeight: '{foundations.lineHeights.normal}',
            color: '{semanticTokens.text.secondary}',
          },

          close: {
            size: '{foundations.spacing.lg}',
            radius: '{foundations.radius.md}',
            color: '{semanticTokens.text.secondary}',
            hoverBackground: '{foundations.colors.neutral.100}',
            focusRing: '{foundations.colors.neutral.200}',
          },
        },

        icon: {
          base: {
            color: '{semanticTokens.action.primary}',
          },

          sizes: {
            xs: 12,
            sm: 16,
            md: 20,
            lg: 24,
            xl: 32,
          },

          variants: {
            default: {
              color: '{semanticTokens.action.primary}',
            },
            muted: {
              color: '{semanticTokens.text.muted}',
            },
            danger: {
              color: '{foundations.colors.semantic.danger}',
            },
            success: {
              color: '{foundations.colors.semantic.success}',
            },
          },
        },
      },
    },
  },
  {
    name: 'musimundo',
    tokens: {
      /* =========================================================
       * META
       * ======================================================= */
      meta: {
        version: '2.0.0',
        theme: 'light',
        radiusScale: 'md',
      },

      /* =========================================================
       * FOUNDATIONS (valores puros)
       * ======================================================= */
      foundations: {
        colors: {
          brand: {
            primary: '#E30613' /* Rojo Musimundo */,
            hover: '#C20510' /* Rojo Oscurecido */,
            secondary: '#002B5C' /* Azul Marino Musimundo */,
            accent: '#0056B3' /* Azul de enlaces/interacción */,
          },
          semantic: {
            success: '#28A745',
            warning: '#FFC107',
            danger: '#DC3545',
            info: '#17A2B8',
          },
          neutral: {
            0: '#FFFFFF',
            100: '#F8F9FA',
            200: '#E9ECEF',
            300: '#DEE2E6',
            400: '#CED4DA',
            500: '#ADB5BD',
            700: '#495057',
            900: '#212529',
          },
        },

        typography: {
          fontFamily: 'inherit',
          sizes: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '18px',
          },
          weights: {
            regular: 400,
            medium: 500,
            semibold: 700,
            bold: 700,
          },
          lineHeights: {
            tight: '1.2',
            normal: '1.4',
            relaxed: '1.6',
          },
        },

        radius: {
          sm: '4px',
          md: '8px',
          lg: '12px',
          full: '9999px',
        },

        spacing: {
          xs: '4px',
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '24px',
        },

        motion: {
          duration: {
            fast: '150ms',
            normal: '250ms',
          },
          easing: {
            standard: 'ease',
            out: 'ease-out',
          },
        },

        shadow: {
          sm: '0 1px 2px rgba(0,0,0,0.05)',
          md: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },

      /* =========================================================
       * SEMANTIC TOKENS (significado)
       * ======================================================= */
      semanticTokens: {
        text: {
          primary: '{foundations.colors.neutral.900}',
          secondary: '{foundations.colors.neutral.700}',
          muted: '{foundations.colors.neutral.500}',
          inverse: '{foundations.colors.neutral.0}',
        },

        surface: {
          default: '{foundations.colors.neutral.0}',
          muted: '{foundations.colors.neutral.100}',
          hover: '{foundations.colors.neutral.200}',
        },

        border: {
          default: '{foundations.colors.neutral.300}',
          focus: '{foundations.colors.brand.primary}',
        },

        action: {
          primary: '{foundations.colors.brand.primary}',
          secondary: '{foundations.colors.brand.secondary}',
          primaryHover: '{foundations.colors.brand.hover}',
          disabled: '{foundations.colors.neutral.300}',
        },
      },

      /* =========================================================
       * COMPONENT TOKENS (contratos)
       * ======================================================= */
      components: {
        button: {
          base: {
            radius: '{foundations.radius.md}',
            fontWeight: '{foundations.typography.weights.regular}',
            transition: '{foundations.motion.duration.fast}',
          },
          variants: {
            primary: {
              background: '{semanticTokens.action.primary}',
              backgroundHover: '{semanticTokens.action.primaryHover}',
              color: '{semanticTokens.text.inverse}',
            },
            secondary: {
              background: '{semanticTokens.surface.muted}',
              color: '{semanticTokens.text.primary}',
            },
          },
        },
        label: {
          fontSize: '{foundations.typography.sizes.sm}',
          color: '{semanticTokens.text.primary}',
          padding: '{foundations.spacing.xs} {foundations.spacing.sm}',
          fontWeight: '{foundations.typography.weights.medium}',
        },

        input: {
          background: '{semanticTokens.surface.default}',
          color: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          focusBorder: '{semanticTokens.border.focus}',
          radius: '{foundations.radius.md}',
        },

        /* select | combobox */
        select: {
          background: '{semanticTokens.surface.default}',
          color: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          focusBorder: '{semanticTokens.border.focus}',
          radius: '{foundations.radius.md}',
        },

        tooltip: {
          background: '{foundations.colors.neutral.700}',
          color: '{semanticTokens.text.inverse}',
          radius: '{foundations.radius.sm}',
        },

        accordion: {
          text: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.sm}',
          focusBorder: '{semanticTokens.border.focus}',
        },

        checkbox: {
          track: {
            width: '36px',
            height: '20px',
            radius: '{foundations.radius.md}',
            background: '{semanticTokens.surface.muted}',
            border: '{semanticTokens.border.default}',
            focusBorder: '{semanticTokens.border.focus}',
          },

          checked: {
            background: '{semanticTokens.action.primary}',
            backgroundHover: '{semanticTokens.action.primaryHover}',
          },

          disabled: {
            background: '{semanticTokens.surface.muted}',
            thumb: '{semanticTokens.surface.default}',
          },

          thumb: {
            size: '16px',
            color: '{semanticTokens.surface.default}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        badge: {
          base: {
            fontWeight: '550',
            lineHeight: '1.3',
          },

          sizes: {
            small: {
              fontSize: '12px',
              padding: '2px 8px',
            },
            medium: {
              fontSize: '14px',
              padding: '4px 10px',
            },
            large: {
              fontSize: '16px',
              padding: '6px 12px',
            },
          },

          shapes: {
            rounded: {
              radius: '{foundations.radius.full}',
            },
            square: {
              radius: '{foundations.radius.md}',
            },
          },

          tones: {
            success: {
              background: '#F2FDF8',
              color: '#128751',
            },
            warning: {
              background: '#FEFAF0',
              color: '#C26E04',
            },
            error: {
              background: '#FEEEEB',
              color: '#C2040C',
            },
            info: {
              background: '#F0F5FE',
              color: '#0465C2',
            },
            neutral: {
              background: '#F9F9FA',
              color: '#3A3F4B',
              border: '#E2E5E9',
            },
            brand: {
              background: '#F6F2FD',
              color: '#000000',
            },
          },
        },

        banner: {
          base: {
            radius: '{foundations.radius.lg}',
            paddingX: '16px',
            paddingY: '16px',
          },

          sizes: {
            full: {
              maxWidth: '1184px',
            },
            compact: {
              maxWidth: '360px',
            },
          },

          tones: {
            success: {
              background: '#F2FDF8',
              border: '#128751',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.feedback.success.iconBg}',
              iconColor: '#128751',
              action: '{semanticTokens.feedback.success.action}',
            },
            warning: {
              background: '#FEFAF0',
              border: '#C26E04',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C26E04',
              action: '{semanticTokens.text.primary}',
            },
            error: {
              background: '#FEEEEB',
              border: '#C2040C',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C2040C',
              action: '{semanticTokens.text.primary}',
            },
            info: {
              background: '#F0F5FE',
              border: '#000000',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#000000',
              action: '{semanticTokens.text.primary}',
            },
            neutral: {
              background: '#F9F9FA',
              border: '#E2E5E9',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#3A3F4B',
              action: '{semanticTokens.text.primary}',
            },
            brand: {
              background: '#F6F2FD',
              color: '#000000',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#000000',
              action: '{semanticTokens.text.primary}',
            },
          },
        },
        promoBanner: {
          primary: {
            background: '{semanticTokens.action.primary}', // fondo principal
            color: '{semanticTokens.text.inverse}', // texto principal
            linkColor: '{semanticTokens.text.inverse}', // color de links
            linkUnderline: true, // si el link debe subrayarse
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: 'lightgray', // fondo de la imagen si falla
          },
          secondary: {
            background: '{foundations.colors.brand.secondary}',
            color: '{semanticTokens.text.primary}',
            linkColor: '{foundations.colors.brand.primary}',
            linkUnderline: false,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: '#E5E7EB',
          },
          tertiary: {
            background: '{foundations.colors.feedback.warning}',
            color: '{semanticTokens.text.primary}',
            linkColor: '{foundations.colors.feedback.warning}',
            linkUnderline: true,
            borderRadius: '16px',
            padding: '12px 16px',
            imageBg: '#FEF3C7',
          },
        },

        alert: {
          base: {
            radius: '{foundations.radius.lg}',
            paddingX: '16px',
            paddingY: '12px',
          },

          tones: {
            success: {
              background: '#F2FDF8',
              border: '#128751',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.feedback.success.iconBg}',
              iconColor: '#128751',
              action: '{semanticTokens.feedback.success.action}',
            },
            warning: {
              background: '#FEFAF0',
              border: '#C26E04',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C26E04',
              action: '{semanticTokens.text.primary}',
            },
            error: {
              background: '#FEEEEB',
              border: '#C2040C',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#C2040C',
              action: '{semanticTokens.text.primary}',
            },
            info: {
              background: '#F0F5FE',
              border: '#0465C2',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#0465C2',
              action: '{semanticTokens.text.primary}',
            },
            neutral: {
              background: '#F9F9FA',
              border: '#E2E5E9',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#3A3F4B',
              action: '{semanticTokens.text.primary}',
            },
            destructive: {
              background: '#FEF2F2',
              border: '#DC2626',
              text: '{semanticTokens.text.primary}',
              iconBg: '{semanticTokens.surface.muted}',
              iconColor: '#DC2626',
              action: '{semanticTokens.text.primary}',
            },
          },
        },
        avatar: {
          sizes: {
            sm: {
              size: '32px',
              fontSize: '12px',
            },
            md: {
              size: '40px',
              fontSize: '14px',
            },
            lg: {
              size: '56px',
              fontSize: '18px',
            },
          },

          shape: {
            radius: '{foundations.radius.full}',
          },

          fallback: {
            background: '{semanticTokens.surface.muted}',
            color: '{semanticTokens.text.primary}',
            fontWeight: '{foundations.typography.weights.medium}',
          },
        },

        radio: {
          outer: {
            size: '16px',
            radius: '50%',
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            focusBorder: '{semanticTokens.border.focus}',
          },

          checked: {
            background: '{semanticTokens.action.primary}',
            backgroundHover: '{semanticTokens.action.primaryHover}',
          },

          dot: {
            size: '8px',
            color: '{semanticTokens.surface.default}',
          },

          disabled: {
            background: '{semanticTokens.surface.muted}',
            border: '{semanticTokens.border.default}',
            dot: '{semanticTokens.surface.default}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        switch: {
          track: {
            width: '36px',
            height: '20px',
            radius: '{foundations.radius.full}',
            offBackground: '{foundations.colors.neutral.300}',
            onBackground: '{semanticTokens.action.primary}',
            focusBorder: '{semanticTokens.border.focus}',
          },

          handle: {
            size: '12px',
            color: '{semanticTokens.text.inverse}',
          },

          disabled: {
            track: '{semanticTokens.surface.muted}',
            handle: '{semanticTokens.surface.default}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        dropdown: {
          background: '{semanticTokens.surface.default}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          shadow: '{foundations.shadow.md}',
        },

        alertDialog: {
          overlay: {
            background: 'rgba(0,0,0,0.5)',
          },
          content: {
            background: '{semanticTokens.surface.default}',
            radius: '{foundations.radius.lg}',
            border: '{semanticTokens.border.default}',
          },
          title: {
            color: '{semanticTokens.text.primary}',
            fontWeight: '{foundations.typography.weights.semibold}',
          },
          description: {
            color: '{semanticTokens.text.secondary}',
          },
        },
        card: {
          backgroundColor: '{semanticTokens.surface.default}',
          borderColor: '{semanticTokens.border.default}',
          color: '#111827', // Color del título
          borderRadius: '{foundations.radius.lg}',
          padding: '16px',
          title: {
            fontSize: '18px',
            fontWeight: 550,
            lineHeight: '130%',
            letterSpacing: '-0.04em',
          },
          variants: {
            primary: {
              backgroundColor: '{foundations.colors.neutral}',
              borderColor: '#E5E7EB',
            },
            secondary: {
              backgroundColor: '#F9FAFB',
              borderColor: 'transparent',
            },
            tertiary: {
              backgroundColor: '{foundations.colors.neutral}',
              borderColor: '#652BDF', // Borde de marca
            },
          },
        },

        integrationCard: {
          backgroundColor: '#F9F9FA',
          borderColor: '#E5E7EB',
          borderRadius: '16px',
          title: {
            color: '#111827',
            fontSize: '16px',
            fontWeight: 550,
          },
          description: {
            color: '#6B7280',
            fontSize: '14px',
          },
          link: {
            color: '#652BDF',
            fontSize: '14px',
            fontWeight: 550,
          },
          variants: {
            default: { borderColor: '#E5E7EB' },
            subtle: { borderColor: '#EEF2F7' },
            none: { borderColor: 'transparent' },
          },
        },

        dragslider: {
          gap: '16px',
          cursorGrab: 'grab',
          cursorGrabbing: 'grabbing',
          scrollBehavior: 'smooth',
        },

        calendar: {
          background: '{semanticTokens.surface.default}',
          text: '{semanticTokens.text.primary}',
          mutedText: '{semanticTokens.text.muted}',
          accent: '#F6F2FD',
          accentForeground: '{semanticTokens.text.inverse}',
          radius: '{foundations.radius.md}',
        },

        popover: {
          background: '{semanticTokens.surface.default}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          shadow: '{foundations.shadow.md}',
        },

        pagination: {
          background: '{semanticTokens.surface.default}',
          activeBackground: '#F4F0FF',
          activeText: '{semanticTokens.action.primary}',
          hoverBackground: '{semanticTokens.surface.hover}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
        },

        tabs: {
          tabsList: {
            background: '{semanticTokens.surface.muted}',
            color: '{semanticTokens.text.primary}',
            border: '{foundations.radius.md}',
          },
          tabsTrigger: {
            color: '{semanticTokens.text.primary}',
            active: {
              background: '{semanticTokens.action.primary}',
              border: '{semanticTokens.border.default}',
              color: '{semanticTokens.text.inverse}',
            },
            disabled: {
              opacity: 0.5,
            },
          },
          tabsFocusRing: {
            innerColor: '{semanticTokens.surface.default}',
            outerColor: '{semanticTokens.border.focus}',
            innerSize: '2px',
            outerSize: '4px',
          },
        },

        table: {
          background: '{semanticTokens.surface.default}',
          color: '{semanticTokens.text.primary}',
          border: '{semanticTokens.border.default}',
          radius: '{foundations.radius.md}',
          hoverBackground: '{semanticTokens.surface.hover}',
          selectedBackground: '#F4F0FF',
          shadow: '{foundations.shadow.md}',
        },

        breadcrumb: {
          link: {
            color: '{semanticTokens.action.primary}',
            fontWeight: '{foundations.typography.weights.semibold}',
            hoverBackground: '{semanticTokens.surface.hover}',
          },
          page: {
            color: '{semanticTokens.text.muted}',
          },
          separator: {
            color: '{foundations.colors.neutral.400}',
          },
        },
        loader: {
          sizes: {
            sm: 16,
            md: 24,
            lg: 32,
          },

          base: {
            color: '{semanticTokens.text.muted}',
          },

          variants: {
            default: {
              color: '{semanticTokens.text.muted}',
            },
            primary: {
              color: '{semanticTokens.action.primary}',
            },
            secondary: {
              color: '{foundations.colors.brand.secondary}',
            },
          },
        },

        progress: {
          track: {
            height: '4px',
            radius: '{foundations.radius.md}',
            background: '{semanticTokens.surface.muted}',
          },

          indicator: {
            background: '{semanticTokens.action.primary}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
            easing: '{foundations.motion.easing.out}',
          },
        },

        sidebar: {
          container: {
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            width: '240px',
            collapsedWidth: '64px',
          },

          header: {
            titleColor: '{semanticTokens.text.muted}',
          },

          item: {
            color: '{semanticTokens.text.muted}',
            hover: {
              background: '{semanticTokens.surface.hover}',
              color: '{semanticTokens.text.primary}',
            },
            active: {
              background: '#F4F0FF',
              color: '{semanticTokens.action.primary}',
            },
          },

          toggle: {
            color: '{foundations.colors.neutral.400}',
            hoverColor: '{foundations.colors.neutral.500}',
          },

          motion: {
            duration: '{foundations.motion.duration.normal}',
          },
        },

        navbar: {
          container: {
            height: '64px',
            background: '{semanticTokens.surface.default}',
            border: '{semanticTokens.border.default}',
            radius: '{foundations.radius.md}',
          },

          content: {
            maxWidth: '1440px',
            paddingX: '{foundations.spacing.lg}',
          },

          merchant: {
            color: '{semanticTokens.text.primary}',
            chevronColor: '{semanticTokens.text.muted}',
          },

          action: {
            gap: '{foundations.spacing.sm}',
          },

          user: {
            nameColor: '{semanticTokens.text.primary}',
            roleColor: '{semanticTokens.text.muted}',
          },

          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },

        drawer: {
          container: {
            background: '{semanticTokens.surface.default}',
            color: '{semanticTokens.text.primary}',
            radius: '{foundations.radius.sm}',
            borderWidth: '{foundations.borderWidths.sm}',
            borderColor: '{semanticTokens.border.default}',
            shadow: '{foundations.shadow.md}',
            padding: '24px',
            maxHeight: '80vh',
          },

          overlay: {
            background: '{semanticTokens.overlay.background}',
            opacity: '{semanticTokens.overlay.opacity}',
            backdropBlur: '{semanticTokens.overlay.backdropBlur}',
          },

          title: {
            fontSize: '{foundations.fontSizes.xl}',
            fontWeight: '{foundations.typography.weights.semibold}',
            lineHeight: '{foundations.lineHeights.relaxed}',
            color: '{semanticTokens.text.primary}',
          },

          description: {
            fontSize: '{foundations.fontSizes.md}',
            lineHeight: '{foundations.lineHeights.normal}',
            color: '{semanticTokens.text.secondary}',
          },

          close: {
            size: '{foundations.spacing.lg}',
            radius: '{foundations.radius.md}',
            color: '{semanticTokens.text.secondary}',
            hoverBackground: '{foundations.colors.neutral.100}',
            focusRing: '{foundations.colors.neutral.200}',
          },
        },

        icon: {
          base: {
            color: '{semanticTokens.action.primary}',
          },

          sizes: {
            xs: 12,
            sm: 16,
            md: 20,
            lg: 24,
            xl: 32,
          },

          variants: {
            default: {
              color: '{semanticTokens.action.primary}',
            },
            muted: {
              color: '{semanticTokens.text.muted}',
            },
            danger: {
              color: '{foundations.colors.semantic.danger}',
            },
            success: {
              color: '{foundations.colors.semantic.success}',
            },
          },
        },
      },
    },
  },
];

export const CHANNEL_BY_BRAND: Record<string, string> = {
  nave: 'nave',
  galicia: 'galicia',
  musimundo: 'musimundo',
};

export async function getThemeMock() {
  return Promise.resolve(tokenVariants);
}
