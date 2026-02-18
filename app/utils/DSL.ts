const ds_last = {
  name: 'nave',
  schema: 'ui.theme.v1',
  version: '4.0.1',
  tokens: {
    meta: {
      theme: 'default-v-4.0.1',
    },
    foundations: {
      colors: {
        brand: {
          50: '#F6F2FD',
          100: '#E6DCFA',
          200: '#F4F0FF', // Agregado: Para active states
          300: '#A78BFA',
          500: '#652BDF', // primary
          700: '#3C168E', // hover
          900: '#1E0A52',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F9FAFB',
          100: '#F3F4F6',
          125: '#F0F0F0', // Agregado: Para icon wrappers
          150: '#E2E5E9',
          200: '#E5E7EB',
          225: '#EEF2F7', // Agregado: Para subtle borders
          300: '#D1D5DB',
          350: '#C3C7D1',
          400: '#9CA3AF',
          450: '#A3AAB8',
          500: '#6B7280',
          550: '#9DA5B5',
          600: '#4B5563',
          650: '#6E7991',
          700: '#374151',
          750: '#3A3F4B',
          800: '#1F2937',
          850: '#020303',
          900: '#111827',
          950: '#F9F9FA',
        },
        feedback: {
          success: {
            50: '#F2FDF8',
            500: '#16A34A',
            700: '#128751',
          },
          warning: {
            50: '#FEFAF0',
            100: '#FEF3C7', // Agregado: Para promo banner
            500: '#F59E0B',
            700: '#C26E04',
          },
          error: {
            50: '#FEEEEB',
            100: '#FEF2F2', // Agregado: Para destructive alerts
            500: '#DC2626',
            600: '#FB3131',
            700: '#C2040C',
            800: '#FECFCD',
          },
          info: {
            50: '#F0F5FE',
            500: '#2563EB',
            700: '#0465C2',
          },
        },
      },
      typography: {
        fontFamily: {
          base: 'inherit',
        },
        size: {
          10: '10px',
          12: '12px',
          13: '13px', // Agregado: Para dropdown icons
          14: '14px',
          16: '16px',
          18: '18px',
          20: '20px',
          24: '24px',
          30: '30px', // Agregado: Para file upload icons
          32: '32px', // Agregado: Para cifras destacadas (overview)
        },
        weight: {
          400: 400,
          500: 500,
          550: 550,
          600: 600,
          700: 700,
        },
        lineHeight: {
          tight: '1.2',
          normal: '1.4',
          relaxed: '1.6',
        },
        letterSpacing: {
          normal: '0',
          tight: '-0.02em',
          tighter: '-0.04em',
        },
      },
      spacing: {
        0: '0px',
        0.5: '2px', // Agregado: Para padding compacto
        1: '4px',
        1.25: '5px', // Agregado: Para micro desplazamientos
        1.5: '6px', // Agregado: Para gaps compactos
        1.75: '7px', // Agregado: Para offsets pequeños
        2: '8px',
        2.5: '10px',
        3: '12px',
        4: '16px',
        4.5: '18px', // Agregado: Para separator vertical
        5: '20px',
        6: '24px',
        6.5: '26px', // Agregado: Para switch small
        7: '28px',
        8: '32px',
        8.5: '34px', // Agregado: Para switch regular
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px', // Agregado: Para file upload padding
        16: '64px', // Agregado: Para navbar height y sidebar collapsed
        60: '240px', // Agregado: Para sidebar width
      },
      maxWidth: {
        compact: '360px', // Agregado: Para banner compact
        full: '1184px', // Agregado: Para banner full
        container: '1440px', // Agregado: Para navbar container
        dashboardMain: '767px', // Agregado: Para cards principales
        dashboardRight: '337px', // Agregado: Para columna derecha
        dashboardAccred: '347px', // Agregado: Para acreditaciones (columna)
        sidebar: '240px', // Agregado: Para sidebar
        dropdown: '12rem', // Agregado: Para dropdown minWidth
      },
      radius: {
        none: '0px',
        xs: '2px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '18px',
        full: '9999px',
      },
      shadow: {
        none: 'none',
        xs: '0 1px 2px rgba(0,0,0,0.04)',
        sm: '0 1px 3px rgba(0,0,0,0.08)',
        md: '0 4px 12px rgba(0,0,0,0.1)',
        lg: '0 8px 24px rgba(0,0,0,0.12)',
        focus: '0px 0px 0px 4px',
        focusSm: '0px 0px 0px 2px',
        dropdown:
          '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 6px -1px rgba(0,0,0,0.1)',
        drawer:
          '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 6px 12px -4px rgba(0, 0, 0, 0.1)',
      },
      border: {
        width: {
          0: '0',
          1: '1px',
          2: '2px',
          4: '4px',
        },
      },
      motion: {
        duration: {
          fast: '120ms',
          normal: '200ms',
          slow: '300ms',
        },
        easing: {
          in: 'ease-in',
          out: 'ease-out',
          inOut: 'ease-in-out',
          standard: 'cubic-bezier(0.2, 0, 0, 1)',
        },
      },
      opacity: {
        disabled: 0.4,
        muted: 0.7,
        overlay: 0.5,
      },
      zIndex: {
        base: 1,
        dropdown: 1000,
        modal: 1100,
        overlay: 1200,
        toast: 1300,
        tooltip: 1400,
      },
      other: {
        backdropBlur: '4px', // Agregado: Para drawer overlay
        cursor: {
          grab: 'grab',
          grabbing: 'grabbing',
        },
        borderStyle: {
          dashed: 'dashed',
        },
        scrollBehavior: 'smooth',
        maxHeight: '80vh', // Agregado: Para drawer content
        transparent: 'transparent',
        auto: 'auto',
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
        muted: '{foundations.colors.neutral.50}',
        hover: '{foundations.colors.neutral.100}',
        selected: '{foundations.colors.brand.50}',
      },
      border: {
        default: '{foundations.colors.neutral.200}',
        focus: '{foundations.colors.brand.500}',
        subtle: '{foundations.colors.neutral.100}',
      },
      action: {
        primary: '{foundations.colors.brand.500}',
        primaryHover: '{foundations.colors.brand.700}',
        secondary: '{foundations.colors.neutral.100}',
        disabled: '{foundations.colors.neutral.300}',
      },
      feedback: {
        success: {
          bg: '{foundations.colors.feedback.success.50}',
          text: '{foundations.colors.feedback.success.700}',
          border: '{foundations.colors.feedback.success.500}',
          iconBg: '{semanticTokens.surface.muted}',
          action: '{semanticTokens.text.primary}',
        },
        error: {
          bg: '{foundations.colors.feedback.error.50}',
          text: '{foundations.colors.feedback.error.700}',
          border: '{foundations.colors.feedback.error.500}',
        },
        warning: {
          bg: '{foundations.colors.feedback.warning.50}',
          text: '{foundations.colors.feedback.warning.700}',
          border: '{foundations.colors.feedback.warning.500}',
        },
        info: {
          bg: '{foundations.colors.feedback.info.50}',
          text: '{foundations.colors.feedback.info.700}',
          border: '{foundations.colors.feedback.info.500}',
        },
      },
      state: {
        disabled: {
          bg: '{foundations.colors.neutral.200}',
          text: '{foundations.colors.neutral.400}',
          border: '{foundations.colors.neutral.300}',
        },
      },
    },
    components: {
      button: {
        base: {
          radius: '{foundations.radius.md}',
          fontWeight: '{foundations.typography.weight.400}',
          transition: '{foundations.motion.duration.fast}',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '{foundations.spacing.2}',
          outline: 'none',
        },
        sizes: {
          small: {
            height: '{foundations.spacing.9}',
            paddingX: '{foundations.spacing.["2.5"]}',
            fontSize: '{foundations.typography.size.14}',
            fontWeight: '{foundations.typography.weight.550}',
          },
          medium: {
            height: '{foundations.spacing.10}',
            paddingX: '{foundations.spacing.3}',
            fontSize: '{foundations.typography.size.14}',
            fontWeight: '{foundations.typography.weight.550}',
          },
          large: {
            height: '{foundations.spacing.11}',
            paddingX: '{foundations.spacing.4}',
            fontSize: '{foundations.typography.size.16}',
            fontWeight: '{foundations.typography.weight.550}',
          },
        },
        variants: {
          primary: {
            background: '{foundations.colors.brand.500}',
            color: '{foundations.colors.neutral.0}',
            hover: {
              background: '{foundations.colors.brand.700}',
            },
            focus: {
              boxShadow:
                '{foundations.shadow.focus} {foundations.colors.brand.500}',
            },
            disabled: {
              background: '{foundations.colors.neutral.150}',
              color: '{foundations.colors.neutral.450}',
            },
          },
          secondary: {
            background: '{foundations.colors.neutral.0}',
            color: '{foundations.colors.brand.500}',
            hover: {
              background: '{foundations.colors.brand.100}',
              color: '{foundations.colors.brand.700}',
            },
            focus: {
              boxShadow:
                '{foundations.shadow.focus} {foundations.colors.brand.500}',
            },
            disabled: {
              background: '{foundations.other.transparent}',
              color: '{foundations.colors.neutral.450}',
              border: '{foundations.colors.neutral.150}',
            },
          },
          tertiary: {
            background: '{foundations.other.transparent}',
            color: '{foundations.colors.brand.500}',
            hover: {
              background: '{foundations.other.transparent}',
              color: '{foundations.colors.brand.700}',
            },
            focus: {
              boxShadow:
                '{foundations.shadow.focus} {foundations.colors.brand.500}',
              color: '{foundations.colors.brand.500}',
            },
            disabled: {
              color: '{foundations.colors.neutral.450}',
              background: '{foundations.other.transparent}',
            },
          },
        },
      },
      label: {
        fontSize: '{foundations.typography.size.14}',
        color: '{semanticTokens.text.primary}',
        padding: '{foundations.spacing.2} {foundations.spacing.3}',
        fontWeight: '{foundations.typography.weight.500}',
      },
      input: {
        base: {
          background: '{foundations.colors.neutral.0}',
          boxShadow: '{foundations.shadow.xs}',
          color: '{foundations.colors.neutral.850}',
          border:
            '{foundations.border.width.1} solid {foundations.colors.neutral.150}',
          radius: '{foundations.radius.md}',
          hover: {
            color: '{foundations.colors.neutral.850}',
            background: '{foundations.colors.neutral.0}',
            border:
              '{foundations.border.width.1} solid {foundations.colors.neutral.350}',
          },
          focus: {
            border:
              '{foundations.border.width.1} solid {foundations.colors.brand.500}',
            boxShadow:
              '{foundations.shadow.focusSm} {foundations.colors.brand.100}',
            color: '{foundations.colors.neutral.850}',
          },
          filled: {
            color: '{foundations.colors.neutral.850}',
            background: '{foundations.colors.neutral.950}',
            boxShadow: '{foundations.shadow.xs}',
          },
          disabled: {
            background: '{foundations.colors.neutral.150}',
            color: '{foundations.colors.neutral.550}',
            border:
              '{foundations.border.width.1} solid {foundations.colors.neutral.350}',
            boxShadow: '{foundations.shadow.xs}',
          },
          error: {
            background: '{foundations.colors.neutral.0}',
            border:
              '{foundations.border.width.1} solid {foundations.colors.feedback.error.600}',
            color: '{foundations.colors.feedback.error.600}',
            boxShadow: '{foundations.shadow.xs}',
            filled: {
              border:
                '{foundations.border.width.1} solid {foundations.colors.feedback.error.600}',
              color: '{foundations.colors.neutral.850}',
              boxShadow: '{foundations.shadow.xs}',
            },
            focus: {
              border:
                '{foundations.border.width.1} solid {foundations.colors.feedback.error.600}',
              boxShadow:
                '{foundations.shadow.focusSm} {foundations.colors.feedback.error.800}',
              color: '{foundations.colors.neutral.850}',
            },
            hover: {
              border:
                '{foundations.border.width.1} solid {foundations.colors.feedback.error.700}',
              boxShadow:
                '{foundations.shadow.focusSm} {foundations.colors.feedback.error.800}',
              color: '{foundations.colors.neutral.850}',
            },
          },
        },
        sizes: {
          medium: {
            height: '{foundations.spacing.11}',
            padding: '{foundations.spacing.3}',
            labelFontSize: '{foundations.typography.size.14}',
            inputFontSize: '{foundations.typography.size.16}',
            helperFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.550}',
            inputFontWeight: '{foundations.typography.weight.400}',
            helperFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            helperColor: '{foundations.colors.neutral.650}',
            iconSize: '{foundations.typography.size.16}',
          },
          small: {
            height: '{foundations.spacing.8}',
            padding: '{foundations.spacing.3} {foundations.spacing.["2.5"]}',
            labelFontSize: '{foundations.typography.size.14}',
            inputFontSize: '{foundations.typography.size.14}',
            helperFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.550}',
            inputFontWeight: '{foundations.typography.weight.400}',
            helperFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            helperColor: '{foundations.colors.neutral.650}',
            iconSize: '{foundations.typography.size.16}',
          },
        },
      },
      emptyState: {
        base: {
          container: {
            background: '{foundations.other.transparent}',
            padding: '{foundations.spacing.6}',
          },
          icon: {
            size: {
              small: '{foundations.spacing.5}',
              medium: '{foundations.spacing.6}',
            },
            color: '{foundations.colors.neutral.650}',
            containerRadius: '{foundations.radius.xs}',
          },
          title: {
            color: '{foundations.colors.neutral.850}',
            fontWeight: '{foundations.typography.weight.550}',
            size: {
              small: '{foundations.typography.size.16}',
              medium: '{foundations.typography.size.18}',
            },
          },
          description: {
            color: '{foundations.colors.neutral.650}',
            fontWeight: '{foundations.typography.weight.400}',
            size: {
              small: '{foundations.typography.size.12}',
              medium: '{foundations.typography.size.14}',
            },
          },
          actions: {
            gap: '{foundations.spacing.2}',
          },
        },
      },
      fileUpload: {
        base: {
          container: {
            background: '{foundations.other.transparent}',
            padding: '{foundations.spacing.6}',
          },
          dropzone: {
            radius: '{foundations.radius.xl}',
            borderStyle: '{foundations.other.borderStyle.dashed}',
            borderWidth: '{foundations.border.width.1}',
            borderColor: '{semanticTokens.border.default}',
            paddingX: '{foundations.spacing.10}',
            paddingY: '{foundations.spacing.14}',
            gap: '{foundations.spacing.4}',
          },
          icon: {
            size: '{foundations.typography.size.30}',
            color: '{foundations.colors.neutral.650}',
            wrapperSize: '{foundations.spacing.12}',
            wrapperRadius: '{foundations.spacing.6}',
            wrapperBg: '{foundations.colors.neutral.125}',
          },
          title: {
            color: '{foundations.colors.neutral.850}',
            fontSize: '{foundations.typography.size.16}',
            fontWeight: '{foundations.typography.weight.550}',
          },
          description: {
            color: '{foundations.colors.neutral.650}',
            fontSize: '{foundations.typography.size.14}',
            fontWeight: '{foundations.typography.weight.400}',
          },
          actions: {
            gap: '{foundations.spacing.2}',
          },
        },
      },
      select: {
        base: {
          background: '{foundations.colors.neutral.0}',
          boxShadow: '{foundations.shadow.xs}',
          color: '{foundations.colors.neutral.850}',
          border:
            '{foundations.border.width.1} solid {foundations.colors.neutral.150}',
          radius: '{foundations.radius.md}',
          hover: {
            color: '{foundations.colors.neutral.850}',
            background: '{foundations.colors.neutral.0}',
            border:
              '{foundations.border.width.1} solid {foundations.colors.neutral.350}',
          },
          focus: {
            border:
              '{foundations.border.width.1} solid {foundations.colors.brand.500}',
            boxShadow:
              '{foundations.shadow.focusSm} {foundations.colors.brand.100}',
            color: '{foundations.colors.neutral.850}',
          },
          filled: {
            color: '{foundations.colors.neutral.850}',
            background: '{foundations.colors.neutral.950}',
            boxShadow: '{foundations.shadow.xs}',
          },
          disabled: {
            background: '{foundations.colors.neutral.150}',
            color: '{foundations.colors.neutral.550}',
            border:
              '{foundations.border.width.1} solid {foundations.colors.neutral.350}',
            boxShadow: '{foundations.shadow.xs}',
          },
          error: {
            background: '{foundations.colors.neutral.0}',
            border:
              '{foundations.border.width.1} solid {foundations.colors.feedback.error.600}',
            color: '{foundations.colors.feedback.error.600}',
            boxShadow: '{foundations.shadow.xs}',
            filled: {
              border:
                '{foundations.border.width.1} solid {foundations.colors.feedback.error.600}',
              color: '{foundations.colors.neutral.850}',
              boxShadow: '{foundations.shadow.xs}',
            },
            focus: {
              border:
                '{foundations.border.width.1} solid {foundations.colors.feedback.error.600}',
              boxShadow:
                '{foundations.shadow.focusSm} {foundations.colors.feedback.error.800}',
              color: '{foundations.colors.neutral.850}',
            },
            hover: {
              border:
                '{foundations.border.width.1} solid {foundations.colors.feedback.error.700}',
              boxShadow:
                '{foundations.shadow.focusSm} {foundations.colors.feedback.error.800}',
              color: '{foundations.colors.neutral.850}',
            },
          },
        },
        sizes: {
          medium: {
            height: '{foundations.spacing.11}',
            padding: '{foundations.spacing.3}',
            labelFontSize: '{foundations.typography.size.14}',
            inputFontSize: '{foundations.typography.size.16}',
            helperFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.550}',
            inputFontWeight: '{foundations.typography.weight.400}',
            helperFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            helperColor: '{foundations.colors.neutral.650}',
            iconSize: '{foundations.typography.size.16}',
          },
          small: {
            height: '{foundations.spacing.8}',
            padding: '{foundations.spacing.3} {foundations.spacing.["2.5"]}',
            labelFontSize: '{foundations.typography.size.14}',
            inputFontSize: '{foundations.typography.size.14}',
            helperFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.550}',
            inputFontWeight: '{foundations.typography.weight.400}',
            helperFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            helperColor: '{foundations.colors.neutral.650}',
            iconSize: '{foundations.typography.size.16}',
          },
        },
      },
      tooltip: {
        background: '{foundations.colors.neutral.850}',
        color: '{foundations.colors.neutral.0}',
        radius: '{foundations.radius.sm}',
        fontSize: '{foundations.typography.size.14}',
        fontWeight: '{foundations.typography.weight.400}',
        lineHeight: '{foundations.typography.lineHeight.tight}',
        letterSpacing: '{foundations.typography.letterSpacing.tighter}',
        textAlign: 'center',
        caretColor: '{foundations.colors.neutral.850}',
      },
      accordion: {
        base: {
          radius: '{foundations.radius.sm}',
          borderWidth: '{foundations.border.width.1}',
          borderColor: '{foundations.colors.neutral.150}',
          background: '{foundations.colors.neutral.0}',
          transition: '{foundations.motion.duration.fast}',
          text: {
            title: '{foundations.colors.neutral.850}',
            content: '{foundations.colors.neutral.750}',
            icon: '{foundations.colors.neutral.650}',
          },
          states: {
            default: {
              background: '{foundations.colors.neutral.0}',
              borderColor: '{foundations.other.transparent}',
              text: '{foundations.colors.neutral.850}',
            },
            hover: {
              text: '{foundations.colors.brand.500}',
              icon: '{foundations.colors.brand.500}',
            },
            focus: {
              borderColor: '{foundations.colors.brand.500}',
              ring: '{foundations.shadow.focus} {foundations.colors.brand.500}',
            },
          },
        },
        sizes: {
          small: {
            trigger: {
              paddingY: '{foundations.spacing.3}',
              fontSize: '{foundations.typography.size.14}',
            },
            content: {
              fontSize: '{foundations.typography.size.14}',
              paddingTop: '{foundations.spacing.2}',
              paddingBottom: '{foundations.spacing.3}',
            },
            icon: {
              size: '{foundations.typography.size.14}',
            },
          },
          medium: {
            trigger: {
              paddingY: '{foundations.spacing.4}',
              fontSize: '{foundations.typography.size.16}',
            },
            content: {
              fontSize: '{foundations.typography.size.16}',
              paddingTop: '{foundations.spacing.3}',
              paddingBottom: '{foundations.spacing.4}',
            },
            icon: {
              size: '{foundations.typography.size.16}',
            },
          },
        },
      },
      checkbox: {
        base: {
          fontWeight: '{foundations.typography.weight.400}',
          lineHeight: '{foundations.typography.lineHeight.normal}',
          gap: '{foundations.spacing.3}',
          track: {
            radius: '{foundations.radius.sm}',
            background: '{semanticTokens.surface.muted}',
            border: '{semanticTokens.border.default}',
            focusBorder: '{semanticTokens.border.focus}',
          },
          checked: {
            background: '{foundations.colors.brand.500}',
            backgroundHover: '{foundations.colors.brand.700}',
          },
          disabled: {
            background: '{foundations.colors.neutral.150}',
            border: '{foundations.colors.neutral.150}',
            text: '{foundations.colors.neutral.450}',
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
            control: '{foundations.spacing.5}',
            labelFontSize: '{foundations.typography.size.16}',
            descriptionFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
            icon: '{foundations.typography.size.16}',
          },
          small: {
            control: '{foundations.spacing.4}',
            labelFontSize: '{foundations.typography.size.14}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
            icon: '{foundations.typography.size.14}',
          },
          extraSmall: {
            control: '{foundations.typography.size.14}',
            labelFontSize: '{foundations.typography.size.12}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
            icon: '{foundations.typography.size.12}',
          },
        },
      },
      badge: {
        base: {
          fontWeight: '{foundations.typography.weight.550}',
          lineHeight: '{foundations.typography.lineHeight.normal}',
        },
        sizes: {
          small: {
            fontSize: '{foundations.typography.size.12}',
            padding: '{foundations.spacing.["0.5"]} {foundations.spacing.2}',
          },
          medium: {
            fontSize: '{foundations.typography.size.14}',
            padding: '{foundations.spacing.1} {foundations.spacing.["2.5"]}',
          },
          large: {
            fontSize: '{foundations.typography.size.16}',
            padding: '{foundations.spacing.["1.5"]} {foundations.spacing.3}',
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
            background: '{foundations.colors.feedback.success.50}',
            color: '{foundations.colors.feedback.success.700}',
          },
          warning: {
            background: '{foundations.colors.feedback.warning.50}',
            color: '{foundations.colors.feedback.warning.700}',
          },
          error: {
            background: '{foundations.colors.feedback.error.50}',
            color: '{foundations.colors.feedback.error.700}',
          },
          info: {
            background: '{foundations.colors.feedback.info.50}',
            color: '{foundations.colors.feedback.info.700}',
          },
          neutral: {
            background: '{foundations.colors.neutral.950}',
            color: '{foundations.colors.neutral.750}',
            border: '{foundations.colors.neutral.150}',
          },
          brand: {
            background: '{foundations.colors.brand.50}',
            color: '{foundations.colors.brand.500}',
          },
        },
      },
      banner: {
        base: {
          radius: '{foundations.radius.lg}',
          paddingX: '{foundations.spacing.4}',
          paddingY: '{foundations.spacing.4}',
        },
        sizes: {
          full: {
            maxWidth: '{foundations.maxWidth.full}',
          },
          compact: {
            maxWidth: '{foundations.maxWidth.compact}',
          },
        },
        tones: {
          success: {
            background: '{foundations.colors.feedback.success.50}',
            border: '{foundations.colors.feedback.success.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.feedback.success.iconBg}',
            iconColor: '{foundations.colors.feedback.success.700}',
            action: '{semanticTokens.feedback.success.action}',
          },
          warning: {
            background: '{foundations.colors.feedback.warning.50}',
            border: '{foundations.colors.feedback.warning.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.warning.700}',
            action: '{semanticTokens.text.primary}',
          },
          error: {
            background: '{foundations.colors.feedback.error.50}',
            border: '{foundations.colors.feedback.error.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.error.700}',
            action: '{semanticTokens.text.primary}',
          },
          info: {
            background: '{foundations.colors.feedback.info.50}',
            border: '{foundations.colors.feedback.info.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.info.700}',
            action: '{semanticTokens.text.primary}',
          },
          neutral: {
            background: '{foundations.colors.neutral.950}',
            border: '{foundations.colors.neutral.150}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.neutral.750}',
            action: '{semanticTokens.text.primary}',
          },
          brand: {
            background: '{foundations.colors.brand.50}',
            color: '{foundations.colors.brand.500}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.brand.500}',
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
          borderRadius: '{foundations.radius.xl}',
          padding: '{foundations.spacing.3} {foundations.spacing.4}',
          imageBg: '{foundations.colors.neutral.200}',
        },
        secondary: {
          background: '{foundations.colors.brand.100}',
          color: '{semanticTokens.text.primary}',
          linkColor: '{foundations.colors.brand.500}',
          linkUnderline: false,
          borderRadius: '{foundations.radius.xl}',
          padding: '{foundations.spacing.3} {foundations.spacing.4}',
          imageBg: '{foundations.colors.neutral.200}',
        },
        tertiary: {
          background: '{foundations.colors.feedback.warning.50}',
          color: '{semanticTokens.text.primary}',
          linkColor: '{foundations.colors.feedback.warning.500}',
          linkUnderline: true,
          borderRadius: '{foundations.radius.xl}',
          padding: '{foundations.spacing.3} {foundations.spacing.4}',
          imageBg: '{foundations.colors.feedback.warning.100}',
        },
      },
      alert: {
        base: {
          radius: '{foundations.radius.lg}',
          paddingX: '{foundations.spacing.4}',
          paddingY: '{foundations.spacing.3}',
        },

        tones: {
          success: {
            background: '{foundations.colors.feedback.success.50}',
            border: '{foundations.colors.feedback.success.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.feedback.success.iconBg}',
            iconColor: '{foundations.colors.feedback.success.700}',
            action: '{semanticTokens.feedback.success.action}',
          },
          warning: {
            background: '{foundations.colors.feedback.warning.50}',
            border: '{foundations.colors.feedback.warning.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.warning.700}',
            action: '{semanticTokens.text.primary}',
          },
          error: {
            background: '{foundations.colors.feedback.error.50}',
            border: '{foundations.colors.feedback.error.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.error.700}',
            action: '{semanticTokens.text.primary}',
          },
          info: {
            background: '{foundations.colors.feedback.info.50}',
            border: '{foundations.colors.feedback.info.700}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.info.700}',
            action: '{semanticTokens.text.primary}',
          },
          neutral: {
            background: '{foundations.colors.neutral.950}',
            border: '{foundations.colors.neutral.150}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.neutral.750}',
            action: '{semanticTokens.text.primary}',
          },
          destructive: {
            background: '{foundations.colors.feedback.error.100}',
            border: '{foundations.colors.feedback.error.500}',
            text: '{semanticTokens.text.primary}',
            iconBg: '{semanticTokens.surface.muted}',
            iconColor: '{foundations.colors.feedback.error.500}',
            action: '{semanticTokens.text.primary}',
          },
        },
      },
      avatar: {
        sizes: {
          sm: {
            size: '{foundations.spacing.8}',
            fontSize: '{foundations.typography.size.12}',
          },
          md: {
            size: '{foundations.spacing.9}',
            fontSize: '{foundations.typography.size.14}',
          },
          lg: {
            size: '{foundations.spacing.11}',
            fontSize: '{foundations.typography.size.14}',
          },
        },
        base: {
          fallback: {
            background: '{foundations.colors.neutral.950}',
            color: '{foundations.colors.neutral.850}',
            fontWeight: '{foundations.typography.weight.550}',
          },
        },
        shapes: {
          radius: '{foundations.radius.full}',
        },
      },
      radio: {
        base: {
          fontWeight: '{foundations.typography.weight.400}',
          lineHeight: '{foundations.typography.lineHeight.normal}',
          gap: '{foundations.spacing.3}',
          outer: {
            radius: '{foundations.radius.full}',
            background: '{foundations.colors.neutral.0}',
            border: '{foundations.colors.neutral.150}',
            hoverBorder: '{foundations.colors.neutral.350}',
            focusBorder: '{semanticTokens.border.focus}',
          },
          checked: {
            background: '{foundations.colors.brand.500}',
            backgroundHover: '{foundations.colors.brand.700}',
          },
          disabled: {
            background: '{foundations.colors.neutral.150}',
            border: '{foundations.colors.neutral.350}',
            dot: '{foundations.colors.neutral.450}',
          },
          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },
        sizes: {
          regular: {
            outer: {
              size: '{foundations.spacing.5}',
            },
            dot: {
              size: '{foundations.spacing.3}',
            },
            labelFontSize: '{foundations.typography.size.16}',
            descriptionFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          small: {
            outer: {
              size: '{foundations.spacing.4}',
            },
            dot: {
              size: '{foundations.spacing.2}',
            },
            labelFontSize: '{foundations.typography.size.14}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          extraSmall: {
            outer: {
              size: '{foundations.spacing.4}',
            },
            dot: {
              size: '{foundations.spacing.2}',
            },
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelFontSize: '{foundations.typography.size.14}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
        },
      },
      switch: {
        base: {
          fontWeight: '{foundations.typography.weight.400}',
          lineHeight: '{foundations.typography.lineHeight.normal}',
          gap: '{foundations.spacing.3}',
          background: '{foundations.colors.neutral.350}',
          track: {
            offBackground: '{foundations.colors.neutral.150}',
            offBackgroundHover: '{foundations.colors.neutral.450}',
            onBackground: '{foundations.colors.brand.500}',
            onBackgroundHover: '{foundations.colors.brand.700}',
          },
          disabled: {
            track: '{foundations.colors.neutral.450}',
            handle: '{foundations.colors.neutral.150}',
            background: '{foundations.colors.neutral.150}',
          },
          motion: {
            duration: '{foundations.motion.duration.fast}',
          },
        },
        sizes: {
          regular: {
            track: {
              width: '{foundations.spacing.["8.5"]}',
              height: '{foundations.spacing.5}',
            },
            handle: {
              size: '{foundations.spacing.4}',
              translate: '{foundations.spacing.["1.75"]}',
            },
            labelFontSize: '{foundations.typography.size.16}',
            descriptionFontSize: '{foundations.typography.size.14}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          small: {
            track: {
              width: '{foundations.spacing.["6.5"]}',
              height: '{foundations.spacing.4}',
            },
            handle: {
              size: '{foundations.spacing.3}',
              translate: '{foundations.spacing.["1.25"]}',
            },
            labelFontSize: '{foundations.typography.size.12}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          extraSmall: {
            track: {
              width: '{foundations.spacing.["6.5"]}',
              height: '{foundations.spacing.4}',
            },
            handle: {
              size: '{foundations.spacing.3}',
              translate: '{foundations.spacing.["1.25"]}',
            },
            labelFontWeight: '{foundations.typography.weight.400}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelFontSize: '{foundations.typography.size.12}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
        },
      },
      dropdown: {
        background: '{foundations.colors.neutral.0}',
        color: '{foundations.colors.neutral.850}',
        border:
          '{foundations.border.width.1} solid {foundations.colors.neutral.150}',
        radius: '{foundations.radius.md}',
        shadow: '{foundations.shadow.dropdown}',
        paddingX: '{foundations.spacing.2}',
        paddingY: '{foundations.spacing.1}',
        minWidth: '{foundations.maxWidth.dropdown}',
        fontSize: '{foundations.typography.size.14}',
        fontWeight: '{foundations.typography.weight.400}',
        lineHeight: '{foundations.typography.lineHeight.normal}',
        animation: {
          duration: '{foundations.motion.duration.fast}',
          easing: '{foundations.motion.easing.out}',
        },
        item: {
          height: '{foundations.spacing.9}',
          gap: '{foundations.spacing.1}',
          color: '{foundations.colors.neutral.850}',
          background: '{foundations.colors.neutral.0}',
          hoverBackground: '{foundations.colors.neutral.950}',
          activeBackground: '{foundations.colors.neutral.150}',
          disabledOpacity: '{foundations.opacity.disabled}',
          borderRadius: '{foundations.radius.md}',
          iconSize: '{foundations.typography.size.13}',
          iconColor: '{foundations.colors.brand.500}',
          fontSize: '{foundations.typography.size.14}',
          fontWeight: '{foundations.typography.weight.400}',
        },
        section: {
          labelColor: '{foundations.colors.neutral.650}',
          separatorColor: '{foundations.colors.neutral.150}',
        },
      },
      separator: {
        base: {
          orientation: {
            vertical: {
              width: '{foundations.border.width.1}',
              height: '{foundations.spacing.["4.5"]}',
            },
            horizontal: {
              width: '{foundations.other.auto}',
              height: '{foundations.border.width.1}',
            },
          },
          color: '{foundations.colors.neutral.150}',
          opacity: '{foundations.opacity.muted}',
        },
      },
      alertDialog: {
        base: {
          overlay: {
            background: 'rgba(0,0,0,{foundations.opacity.overlay})',
          },
          content: {
            background: '{foundations.colors.neutral.0}',
            radius: '{foundations.radius.2xl}',
            borderColor: '{foundations.colors.neutral.150}',
          },
          title: {
            color: '{foundations.colors.neutral.850}',
            fontSize: '{foundations.typography.size.18}',
          },
          description: {
            color: '{foundations.colors.neutral.650}',
            fontSize: '{foundations.typography.size.16}',
          },
        },
      },
      card: {
        backgroundColor: '{semanticTokens.surface.default}',
        borderColor: '{semanticTokens.border.default}',
        color: '{foundations.colors.neutral.900}',
        borderRadius: '{foundations.radius.lg}',
        padding: '{foundations.spacing.4}',
        title: {
          fontSize: '{foundations.typography.size.18}',
          fontWeight: '{foundations.typography.weight.550}',
          lineHeight: '{foundations.typography.lineHeight.tight}',
          letterSpacing: '{foundations.typography.letterSpacing.tighter}',
        },
        variants: {
          primary: {
            backgroundColor: '{foundations.colors.neutral.0}',
            borderColor: '{foundations.colors.neutral.200}',
          },
          secondary: {
            backgroundColor: '{foundations.colors.neutral.50}',
            borderColor: '{foundations.other.transparent}',
          },
          tertiary: {
            backgroundColor: '{foundations.colors.neutral.0}',
            borderColor: '{foundations.colors.brand.500}',
          },
        },
      },
      integrationCard: {
        backgroundColor: '{foundations.colors.neutral.950}',
        borderColor: '{foundations.colors.neutral.200}',
        borderRadius: '{foundations.radius.xl}',
        title: {
          color: '{foundations.colors.neutral.900}',
          fontSize: '{foundations.typography.size.16}',
          fontWeight: '{foundations.typography.weight.550}',
        },
        description: {
          color: '{foundations.colors.neutral.500}',
          fontSize: '{foundations.typography.size.14}',
        },
        link: {
          color: '{foundations.colors.brand.500}',
          fontSize: '{foundations.typography.size.14}',
          fontWeight: '{foundations.typography.weight.550}',
        },
        variants: {
          default: {
            borderColor: '{foundations.colors.neutral.200}',
          },
          subtle: {
            borderColor: '{foundations.colors.neutral.225}',
          },
          none: {
            borderColor: '{foundations.other.transparent}',
          },
        },
      },
      dragslider: {
        gap: '{foundations.spacing.4}',
        cursorGrab: '{foundations.other.cursor.grab}',
        cursorGrabbing: '{foundations.other.cursor.grabbing}',
        scrollBehavior: '{foundations.other.scrollBehavior}',
      },
      calendar: {
        base: {
          background: '{semanticTokens.surface.default}',
          radius: '{foundations.radius.md}',
          text: '{semanticTokens.text.primary}',
          muted: '{semanticTokens.text.muted}',
          border: '{semanticTokens.border.default}',
          item: {
            size: '{foundations.spacing.8}',
            radius: '{foundations.radius.sm}',
            default: {
              color: '{semanticTokens.text.primary}',
              background: '{foundations.other.transparent}',
            },
            hover: {
              background: '{foundations.colors.neutral.150}',
              color: '{semanticTokens.text.primary}',
            },
            current: {
              background: '{foundations.colors.neutral.150}',
              color: '{semanticTokens.text.primary}',
            },
            active: {
              background: '{foundations.colors.brand.500}',
              color: '{semanticTokens.text.inverse}',
            },
          },
        },
      },
      popover: {
        background: '{foundations.colors.neutral.0}',
        color: '{foundations.colors.neutral.850}',
        border: '{foundations.colors.neutral.150}',
        radius: '{foundations.radius.lg}',
        shadow: '{foundations.shadow.dropdown}',
        padding: '{foundations.spacing.3}',
        fontSize: '{foundations.typography.size.16}',
        fontWeight: '{foundations.typography.weight.400}',
        lineHeight: '{foundations.typography.lineHeight.normal}',
        header: {
          fontSize: '{foundations.typography.size.16}',
          fontWeight: '{foundations.typography.weight.400}',
          color: '{foundations.colors.neutral.850}',
        },
        description: {
          fontSize: '{foundations.typography.size.14}',
          fontWeight: '{foundations.typography.weight.400}',
          color: '{foundations.colors.neutral.650}',
        },
        divider: {
          color: '{foundations.colors.neutral.150}',
        },
        motion: {
          duration: '{foundations.motion.duration.normal}',
          easing: '{foundations.motion.easing.out}',
        },
        zIndex: '{foundations.zIndex.dropdown}',
      },
      pagination: {
        base: {
          // Contenedor y General
          radius: '{foundations.radius.md}',
          gap: '{foundations.spacing.2}', // Espacio entre botones
          // Botón de número de página (PageNumber - Required)
          pageNumber: {
            fontSize: '{foundations.typography.size.14}',
            fontWeight: '{foundations.typography.weight.500}',
            color: '{semanticTokens.text.primary}',
          },
          // Iconos (Previous/Next/Ellipsis Icons - Required)
          icon: {
            size: '{foundations.typography.size.16}',
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
              background: '{foundations.colors.brand.100}',
              border: '{semanticTokens.border.default}',
            },
            active: {
              // Current Page - Required
              background: '{foundations.colors.brand.200}',
              text: '{semanticTokens.action.primary}',
              border: '{foundations.other.transparent}',
            },
            focus: {
              // Active Focus - Required
              border: '{semanticTokens.border.focus}',
            },
            disabled: {
              // Disabled state - Required
              background: '{foundations.colors.neutral.0}',
              text: '{foundations.colors.neutral.400}',
              opacity: '{foundations.opacity.overlay}',
            },
          },
        },
      },
      tabs: {
        base: {
          tabsList: {
            background: '{foundations.colors.neutral.150}',
            color: '{foundations.colors.neutral.750}',
            radius: '{foundations.radius.sm}',
          },
          tabsTrigger: {
            color: '{foundations.colors.neutral.750}',
            hover: {
              background: '{foundations.colors.neutral.950}',
              color: '{foundations.colors.neutral.850}',
            },
            active: {
              background: '{foundations.colors.neutral.0}',
              color: '{foundations.colors.neutral.850}',
            },
            disabled: {
              background: '{foundations.colors.neutral.0}',
              color: '{foundations.colors.neutral.550}',
              opacity: '{foundations.opacity.overlay}',
            },
          },
          tabsFocusRing: {
            innerColor: '{foundations.colors.neutral.0}',
            outerColor: '{foundations.colors.brand.500}',
            innerSize: '{foundations.border.width.2}',
            outerSize: '{foundations.border.width.4}',
          },
        },
        sizes: {
          medium: {
            fontSize: '{foundations.typography.size.14}',
            fontWeight: '{foundations.typography.weight.500}',
          },
          small: {
            fontSize: '{foundations.typography.size.12}',
            fontWeight: '{foundations.typography.weight.500}',
          },
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
          headerBackground: '{foundations.colors.neutral.950}',
          headerTextColor: '{foundations.colors.neutral.650}',
          headerFontSize: '{foundations.typography.size.12}',
          headerFontWeight: '{foundations.typography.weight.600}',
          // Filas y Celdas
          rowHoverBackground: '{semanticTokens.surface.hover}',
          rowSelectedBackground: '{foundations.colors.brand.200}',
          cellTextColor: '{semanticTokens.text.primary}',
          cellFontSize: '{foundations.typography.size.14}',
          // Subtítulo de celda (Cell Description)
          descriptionColor: '{foundations.colors.neutral.650}',
          descriptionFontSize: '{foundations.typography.size.12}',
          descriptionFontWeight: '{foundations.typography.weight.400}',
        },
      },
      breadcrumb: {
        base: {
          gap: '{foundations.spacing.3}',
          link: {
            default: {
              color: '{foundations.colors.brand.500}',
              fontWeight: '{foundations.typography.weight.600}',
            },
            hover: {
              color: '{foundations.colors.brand.700}',
            },
          },
          page: {
            color: '{foundations.colors.neutral.650}',
            fontWeight: '{foundations.typography.weight.550}',
          },
          separator: {
            color: '{foundations.colors.neutral.400}',
            size: '{foundations.typography.size.14}',
          },
        },
        sizes: {
          medium: {
            fontSize: '{foundations.typography.size.14}',
            gap: '{foundations.spacing.3}',
          },
          small: {
            fontSize: '{foundations.typography.size.12}',
            gap: '{foundations.spacing.2}',
          },
        },
      },
      loader: {
        sizes: {
          small: {
            size: '{foundations.typography.size.16}',
            labelFontWeight: '{foundations.typography.weight.550}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelFontSize: '{foundations.typography.size.16}',
            descriptionFontSize: '{foundations.typography.size.12}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          medium: {
            size: '{foundations.typography.size.20}',
            labelFontWeight: '{foundations.typography.weight.550}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelFontSize: '{foundations.typography.size.18}',
            descriptionFontSize: '{foundations.typography.size.14}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          large: {
            size: '{foundations.typography.size.24}',
            labelFontWeight: '{foundations.typography.weight.550}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelFontSize: '{foundations.typography.size.18}',
            descriptionFontSize: '{foundations.typography.size.14}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
          extraLarge: {
            size: '{foundations.typography.size.32}',
            labelFontWeight: '{foundations.typography.weight.550}',
            descriptionFontWeight: '{foundations.typography.weight.400}',
            labelFontSize: '{foundations.typography.size.18}',
            descriptionFontSize: '{foundations.typography.size.14}',
            labelColor: '{foundations.colors.neutral.850}',
            descriptionColor: '{foundations.colors.neutral.650}',
          },
        },
        variants: {
          default: {
            color: '{foundations.colors.brand.500}',
          },
          primary: {
            color: '{foundations.colors.brand.500}',
          },
        },
      },
      progress: {
        base: {
          // Título y Porcentaje (Arriba)
          labelColor: '{semanticTokens.text.primary}',
          labelFontSize: '{foundations.typography.size.14}',
          labelFontWeight: '{foundations.typography.weight.550}', // Semi Bold según Figma
          // Descripción / Tiempo (Abajo)
          descriptionColor: '{semanticTokens.text.muted}',
          descriptionFontSize: '{foundations.typography.size.12}',
          descriptionFontWeight: '{foundations.typography.weight.400}',
          // Espaciado entre la barra y los textos
          gap: '{foundations.spacing.["1.5"]}',
        },
        track: {
          height: '{foundations.spacing.["1.5"]}', // Grosor de la barra según Figma
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
            width: '{foundations.maxWidth.sidebar}',
            collapsedWidth: '{foundations.spacing.16}',
            padding: '{foundations.spacing.2}',
          },
          header: {
            minHeight: '{foundations.spacing.14}',
            titleColor: '{semanticTokens.text.muted}',
            titleFontSize: '{foundations.typography.size.14}',
            titleFontWeight: '{foundations.typography.weight.500}',
          },
          item: {
            radius: '{foundations.radius.md}',
            height: '{foundations.spacing.9}',
            paddingX: '{foundations.spacing.2}',
            gap: '{foundations.spacing.3}',
            fontSize: '{foundations.typography.size.14}',
            fontWeight: '{foundations.typography.weight.500}',
            color: '{semanticTokens.text.muted}',
            hover: {
              background: '{semanticTokens.surface.hover}',
              color: '{semanticTokens.text.primary}',
            },
            active: {
              background: '{foundations.colors.brand.200}',
              color: '{semanticTokens.action.primary}',
            },
          },
          section: {
            titleColor: '{foundations.colors.neutral.400}',
            titleFontSize: '{foundations.typography.size.10}',
            gap: '{foundations.spacing.4}',
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
          height: '{foundations.spacing.16}',
          background: '{foundations.colors.neutral.0}',
          border: '{foundations.colors.neutral.150}',
          radius: '{foundations.radius.md}',
          iconColor: '{foundations.colors.neutral.550}',
        },
        content: {
          maxWidth: '{foundations.maxWidth.container}',
          paddingX: '{foundations.spacing.6}',
        },
        merchant: {
          color: '{foundations.colors.neutral.850}',
          fontSize: '{foundations.typography.size.14}',
          fontWeight: '{foundations.typography.weight.550}',
        },
        action: {
          gap: '{foundations.spacing.3}',
        },
        user: {
          nameColor: '{foundations.colors.neutral.850}',
          roleColor: '{foundations.colors.neutral.650}',
          roleFontSize: '{foundations.typography.size.12}',
          nameFontSize: '{foundations.typography.size.12}',
          nameFontWeight: '{foundations.typography.weight.550}',
          roleFontWeight: '{foundations.typography.weight.400}',
        },
        motion: {
          duration: '{foundations.motion.duration.fast}',
        },
      },
      drawer: {
        base: {
          overlay: {
            background: 'rgba(0,0,0,{foundations.opacity.overlay})',
            opacity: '{foundations.opacity.disabled}',
            backdropBlur: '{foundations.other.backdropBlur}',
          },
          content: {
            background: '{foundations.colors.neutral.0}',
            radius: '{foundations.radius.xs}',
            borderColor: '{foundations.colors.neutral.150}',
            color: '{semanticTokens.text.primary}',
            borderWidth: '{foundations.border.width.1}',
            shadow: '{foundations.shadow.drawer}',
            padding: '{foundations.spacing.6}',
            maxHeight: '{foundations.other.maxHeight}',
          },
          header: {
            gap: '{foundations.spacing.2}',
          },
          footer: {
            paddingTop: '{foundations.spacing.4}',
            gap: '{foundations.spacing.2}',
            align: 'end',
          },
          title: {
            color: '{foundations.colors.neutral.850}',
            fontSize: '{foundations.typography.size.24}',
          },
          description: {
            color: '{foundations.colors.neutral.650}',
            fontSize: '{foundations.typography.size.16}',
          },
          close: {
            size: '{foundations.typography.size.12}',
            color: '{foundations.colors.neutral.850}',
          },
        },
      },
      icon: {
        base: {
          color: '{semanticTokens.action.primary}',
        },
        sizes: {
          xs: '{foundations.typography.size.12}',
          sm: '{foundations.typography.size.16}',
          md: '{foundations.typography.size.20}',
          lg: '{foundations.typography.size.24}',
          xl: '{foundations.typography.size.32}',
        },
        variants: {
          default: {
            color: '{semanticTokens.action.primary}',
          },
          muted: {
            color: '{semanticTokens.text.muted}',
          },
          danger: {
            color: '{foundations.colors.feedback.error.500}',
          },
          success: {
            color: '{foundations.colors.feedback.success.500}',
          },
        },
      },
    },
  },
};

export default ds_last;
