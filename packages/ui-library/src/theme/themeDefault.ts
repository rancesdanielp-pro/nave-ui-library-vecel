export const themeDefault = {
  name: 'mockup-default',
  schema: 'ui.theme.v1',
  version: '1.0.0',
  tokens: {
    meta: {
      theme: 'default',
    },
    foundations: {
      colors: {
        brand: {
          primary: '#4B5563',
          hover: '#374151',
          secondary: '#6B7280',
        },
        semantic: {
          success: '#16A34A',
          warning: '#D97706',
          danger: '#DC2626',
          info: '#2563EB',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          700: '#3F3F46',
          900: '#18181B',
        },
      },
      radius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px',
      },
      spacing: {
        xxs: '2px',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        inline: {
          sm: '8px 12px',
          md: '12px 16px',
        },
      },
      borderWidths: {
        sm: '1px',
        md: '2px',
      },
      typography: {
        sizes: {
          xs: '12px',
          sm: '14px',
          md: '16px',
          lg: '18px',
          xl: '20px',
        },
        weights: {
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
        lineHeights: {
          tight: '1.2',
          normal: '1.4',
          relaxed: '1.6',
        },
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
        focus: '{foundations.colors.neutral.500}',
      },
      action: {
        primary: '{foundations.colors.neutral.700}',
        primaryHover: '{foundations.colors.neutral.900}',
        secondary: '{foundations.colors.neutral.500}',
        disabled: '{foundations.colors.neutral.300}',
      },
      overlay: {
        background: 'rgba(0,0,0,0.5)',
        opacity: '0.5',
        backdropBlur: '4px',
      },
    },
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
        typography: {
          fontWeight: '{foundations.typography.weights.semibold}',
          fontSize: '{foundations.typography.sizes.sm}',
          lineHeight: '{foundations.typography.lineHeights.tight}',
        },

        sizes: {
          small: {
            fontSize: '{foundations.typography.sizes.xs}',
            padding: '{foundations.spacing.xxs} {foundations.spacing.sm}',
          },
          medium: {
            fontSize: '{foundations.typography.sizes.sm}',
            padding: '{foundations.spacing.xs} {foundations.spacing.md}',
          },
          large: {
            fontSize: '{foundations.typography.sizes.md}',
            padding: '{foundations.spacing.sm} {foundations.spacing.lg}',
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
            background: '{foundations.colors.semantic.success}',
            color: '{semanticTokens.text.inverse}',
          },
          warning: {
            background: '{foundations.colors.semantic.warning}',
            color: '{semanticTokens.text.inverse}',
          },
          error: {
            background: '{foundations.colors.semantic.danger}',
            color: '{semanticTokens.text.inverse}',
          },
          info: {
            background: '{foundations.colors.semantic.info}',
            color: '{semanticTokens.text.inverse}',
          },
          neutral: {
            background: '{semanticTokens.surface.muted}',
            color: '{semanticTokens.text.primary}',
            border: '{semanticTokens.border.default}',
          },
          brand: {
            background: '{foundations.colors.brand.primary}',
            color: '{semanticTokens.text.inverse}',
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
            background: '{foundations.colors.semantic.success}',
            border: '#128751',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '#128751',
            action: '{semanticTokens.text.primary}',
          },
          warning: {
            background: '{foundations.colors.semantic.warning}',
            border: '#C26E04',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '#C26E04',
            action: '{semanticTokens.text.primary}',
          },
          error: {
            background: '{foundations.colors.semantic.danger}',
            border: '#C2040C',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '#C2040C',
            action: '{semanticTokens.text.primary}',
          },
          info: {
            background: '{foundations.colors.semantic.info}',
            border: '#0465C2',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '#0465C2',
            action: '{semanticTokens.text.primary}',
          },
          neutral: {
            background: '{semanticTokens.surface.muted}',
            border: '#E2E5E9',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{semanticTokens.text.muted}',
            action: '{semanticTokens.text.primary}',
          },
          brand: {
            background: '{foundations.colors.brand.primary}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.brand.primary}',
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
          padding: '{foundations.spacing.inline.md}',
          imageBg: 'lightgray',
        },
        secondary: {
          background: '{foundations.colors.brand.secondary}',
          color: '{semanticTokens.text.primary}',
          linkColor: '{foundations.colors.brand.primary}',
          linkUnderline: false,
          borderRadius: '{foundations.radius.lg}',
          padding: '{foundations.spacing.inline.md}',
          imageBg: '{foundations.colors.neutral.200}',
        },
        tertiary: {
          background: '{foundations.colors.semantic.warning}',
          color: '{semanticTokens.text.primary}',
          linkColor: '{foundations.colors.semantic.warning}',
          linkUnderline: true,
          borderRadius: '{foundations.radius.lg}',
          padding: '{foundations.spacing.inline.md}',
          imageBg: '{foundations.colors.neutral.200}',
        },
      },
      alert: {
        base: {
          radius: '{foundations.radius.lg}',
          paddingX: '16px',
          paddingY: '12px',
        },
        tones: {
          neutral: {
            background: '{semanticTokens.surface.muted}',
            border: '{semanticTokens.border.default}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.default}',
            iconColor: '{semanticTokens.text.muted}',
            action: '{semanticTokens.text.primary}',
          },
        },
      },
      avatar: {
        sizes: {
          sm: {
            size: '{foundations.spacing.lg}',
            fontSize: '{foundations.typography.sizes.xs}',
          },
          md: {
            size: '{foundations.spacing.xl}',
            fontSize: '{foundations.typography.sizes.md}',
          },
          lg: {
            size: '{foundations.spacing["2xl"]}',
            fontSize: '{foundations.typography.sizes.lg}',
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
        color: '{semanticTokens.text.primary}',
        borderRadius: '{foundations.radius.lg}',
        padding: '16px',
        title: {
          fontSize: '{foundations.typography.sizes.lg}',
          fontWeight: '{foundations.typography.weights.semibold}',
          lineHeight: '130%',
          letterSpacing: '-0.04em',
        },
        variants: {
          primary: {
            backgroundColor: '{foundations.colors.neutral.0}',
            borderColor: '{foundations.colors.neutral.200}',
          },
          secondary: {
            backgroundColor: '{foundations.colors.neutral.100}',
            borderColor: 'transparent',
          },
          tertiary: {
            backgroundColor: '{foundations.colors.neutral.0}',
            borderColor: 'transparent',
          },
        },
      },
      integrationCard: {
        backgroundColor: '{foundations.colors.neutral.0}',
        borderColor: '{foundations.colors.neutral.200}',
        borderRadius: '{foundations.radius.lg}',
        title: {
          color: '{semanticTokens.text.primary}',
          fontSize: '{foundations.typography.sizes.lg}',
          fontWeight: '{foundations.typography.weights.semibold}',
        },
        description: {
          color: '{foundations.colors.neutral.500}',
          fontSize: '{foundations.typography.sizes.md}',
        },
        link: {
          color: '{foundations.colors.brand.primary}',
          fontSize: '{foundations.typography.sizes.md}',
          fontWeight: '{foundations.typography.weights.semibold}',
        },
        variants: {
          default: { borderColor: '{foundations.colors.neutral.200}' },
          subtle: { borderColor: '{foundations.colors.neutral.100}' },
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
        accent: '{semanticTokens.action.primary}',
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
        activeBackground: '{foundations.colors.neutral.100}',
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
        selectedBackground: '{foundations.colors.neutral.100}',
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
            background: '{foundations.colors.neutral.100}',
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
          fontSize: '{foundations.typography.sizes.xl}',
          fontWeight: '{foundations.typography.weights.semibold}',
          lineHeight: '{foundations.typography.lineHeights.relaxed}',
          color: '{semanticTokens.text.primary}',
        },
        description: {
          fontSize: '{foundations.typography.sizes.md}',
          lineHeight: '{foundations.typography.lineHeights.normal}',
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
          color: '{semanticTokens.text.muted}',
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
            color: '{semanticTokens.text.muted}',
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
          primary: {
            color: '{semanticTokens.action.primary}',
          },
        },
      },
    },
  },
};
