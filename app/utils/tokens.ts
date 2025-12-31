export const tokenVariants = [
  // -------------------------------------------
  // 🔵 NAVE (SIN CAMBIOS)
  // -------------------------------------------
  {
    name: 'Nave',
    tokens: {
      colors: {
        primary: '#652BDF',
        text: '#000000',
      },
      typography: {
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '1%',
      },
      button: {
        backgroundColor: '#652BDF',
        backgroundColorHover: '#C3C7D1',
        backgroundColorDisabled: '#E2E5E9',
        color: '#FFFFFF',
        colorDisabled: '#9CA3AF',
        focusRing: '#F67E07',
        borderRadius: '8px',
      },

      input: {
        color: '#000000',
        backgroundColor: '#FFFFFF',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#E2E5E9',
        borderStyle: 'solid',
        focusBorderColor: '#652BDF',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      select: {
        color: '#000000',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        focusBorderColor: '#652BDF',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      checkbox: {
        color: '#000000',
        backgroundColor: '#652BDF',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        focusBorderColor: '#652BDF',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
        checkColor: '#FFFFFF',
      },

      radio: {
        backgroundColor: '#FFFFFF',
        borderRadius: '50px',
        borderWidth: '1px',
        borderColor: '#652BDF',
        borderStyle: 'solid',
        focusBorderColor: '#652BDF',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
        checkColor: '#652BDF',
      },

      switch: {
        trackWidth: 38,
        trackHeight: 20,
        backgroundColor: '#CCCCCC',
        activeBackgroundColor: '#652BDF',
        thumbSize: 18,
        thumbColor: '#FFFFFF',
        transitionDuration: '150ms',
      },

      badge: {},

      label: {
        fontSize: '14px',
        textColor: '#000000',
        padding: '0px',
        fontWeight: 500,
      },

      tooltip: {
        backgroundColor: '#666666',
        color: '#FFFFFF',
      },

      textarea: {
        borderColor: '#652BDF',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        placeholderColor: '#666666',
      },

      table: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderColor: 'transparent',
        hoverBackgroundColor: '#652BDF',
        selectedBackgroundColor: '#E0E0E0',
      },

      dropdown: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        hoverBackgroundColor: '#E0E0E0',
      },

      loader: {
        color: '#652BDF',
        textColor: '#652BDF',
      },

      progress: {
        track: {
          backgroundColor: '#E2E5E9',
          height: '8px',
          borderRadius: '9999px',
        },
        indicator: {
          backgroundColor: '#652BDF',
        },
      },

      alert: {
        padding: '0',
        color: '#000000',
        backgroundColor: '#E0E0E0',
        borderRadius: '8px',
      },

      alertDialogOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // overlay típico
        animation: 'fadeIn 150ms ease-out',
      },

      alertDialogContent: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
      },

      alertDialogTitle: {
        color: '#000000',
        fontWeight: '600',
      },

      alertDialogDescription: {
        color: '#000000',
      },

      alertDialogCancel: {
        backgroundColor: '#000000',
        color: '#ffffff',
      },

      alertDialogAction: {
        backgroundColor: '#ffffff',
        color: '#000000',
      },

      tabsList: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
      },

      tabsTrigger: {
        color: '#000000',
        active: {
          backgroundColor: '#652BDF',
          borderColor: '#ffffff',
          color: '#ffffff',
        },
        disabled: {
          opacity: 0.5,
        },
      },
      banner: {},
      card: {
        backgroundColor: '#ffffff',
        borderColor: '#E5E7EB',
        color: '#111827',
      },
      calendar: {
        backgroundColor: '#ffffff',
        color: '#000000',
        textColor: '#000000',
        mutedTextColor: '#666666',
        accentColor: '#652BDF',
        accentForeground: '#ffffff',
        hoverBackground: '#EDE3FF',
        borderRadius: '8px',
      },
      popover: {
        backgroundColor: '#ffffff',
        color: '#000000',
        borderColor: 'transparent',
        shadow: '4px 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '8px',
      },
      icon: {
        color: '#652BDF',
        base: {
          color: '#652BDF',
        },
        variants: {
          primary: {
            color: '#652BDF',
          },
          muted: {
            color: '#6B7280',
          },
          danger: {
            color: '#DC2626',
          },
          success: {
            color: '#16A34A',
          },
        },
        sizes: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {},
        },
      },
    },
  },
  // -------------------------------------------
  // 🟠 GALICIA — COMPLETADO
  // -------------------------------------------
  {
    name: 'Galicia',
    tokens: {
      colors: {
        primary: '#c85000',
        text: '#000000',
      },

      typography: {
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '1%',
      },

      button: {
        backgroundColor: '#c85000',
        color: '#FFFFFF',
        borderRadius: '50px',
        borderWidth: '1px',
        borderColor: 'transparent',
        borderStyle: 'solid',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      input: {
        color: '#000000',
        backgroundColor: '#FFFFFF',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#c85000',
        borderStyle: 'solid',
        focusBorderColor: '#c85000',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      select: {
        color: '#000000',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        focusBorderColor: '#c85000',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      checkbox: {
        color: '#000000',
        backgroundColor: '#c85000',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        focusBorderColor: '#c85000',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
        checkColor: '#FFFFFF',
      },

      radio: {
        backgroundColor: '#FFFFFF',
        borderRadius: '50px',
        borderWidth: '1px',
        borderColor: '#c85000',
        borderStyle: 'solid',
        focusBorderColor: '#c85000',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
        checkColor: '#c85000',
      },

      switch: {
        trackWidth: 38,
        trackHeight: 20,
        backgroundColor: '#CCCCCC',
        activeBackgroundColor: '#c85000',
        thumbSize: 18,
        thumbColor: '#FFFFFF',
        transitionDuration: '150ms',
      },

      badge: {
        padding: '8px',
        gap: '4px',
        borderRadius: '50px',
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '#c85000',
        color: '#FFFFFF',
        shadow: 'none',
        transitionDuration: '150ms',
      },

      label: {
        fontSize: '14px',
        textColor: '#000000',
        padding: '0px',
        fontWeight: 500,
      },

      tooltip: {
        backgroundColor: '#333333',
        color: '#FFFFFF',
      },
      textarea: {
        borderColor: '#c85000',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        placeholderColor: '#666666',
      },

      table: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderColor: 'transparent',
        hoverBackgroundColor: '#c85000',
        selectedBackgroundColor: '#E0E0E0',
      },

      dropdown: {
        backgroundColor: '#E0E0E0',
        color: '#000000',
        hoverBackgroundColor: '#E0E0E0',
      },

      loader: {
        color: '#c85000',
        textColor: '#c85000',
      },

      progress: {
        track: {
          backgroundColor: '#E0E0E0',
          height: '8px',
          borderRadius: '9999px',
        },
        indicator: {
          backgroundColor: '#c85000',
        },
      },

      alert: {
        padding: '0',
        color: '#000000',
        backgroundColor: '#E0E0E0',
        borderRadius: '8px',
      },

      alertDialogOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        animation: 'fadeIn 150ms ease-out',
      },

      alertDialogContent: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
      },

      alertDialogTitle: {
        color: '#000000',
        fontWeight: '600',
      },

      alertDialogDescription: {
        color: '#000000',
      },

      alertDialogCancel: {
        backgroundColor: '#000000',
        color: '#ffffff',
      },

      alertDialogAction: {
        backgroundColor: '#ffffff',
        color: '#000000',
      },

      tabsList: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
      },

      tabsTrigger: {
        color: '#000000',
        active: {
          backgroundColor: '#c85000',
          borderColor: '#ffffff',
          color: '#ffffff',
        },
        disabled: {
          opacity: 0.5,
        },
      },
      banner: {},
      card: {
        backgroundColor: '#ffffff',
        borderColor: '#E5E7EB',
        color: '#111827',
      },
      icon: {
        color: '#c85000',
        base: {
          color: '#c85000',
        },
        variants: {
          primary: {
            color: '#c85000',
          },
          muted: {
            color: '#6B7280',
          },
          danger: {
            color: '#DC2626',
          },
          success: {
            color: '#16A34A',
          },
        },
        sizes: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {},
        },
      },
    },
  },
  // -------------------------------------------
  // 🟣 EQUIS — COMPLETADO
  // -------------------------------------------
  {
    name: 'Equis',
    tokens: {
      colors: {
        primary: '#50007f',
        text: '#000000',
      },

      typography: {
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '1%',
      },

      button: {
        backgroundColor: '#50007f',
        color: '#FFFFFF',
        borderRadius: '16px',
        borderWidth: '1px',
        borderColor: 'transparent',
        borderStyle: 'solid',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      input: {
        color: '#000000',
        backgroundColor: '#FFFFFF',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#50007f',
        borderStyle: 'solid',
        focusBorderColor: '#50007f',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      select: {
        color: '#000000',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        focusBorderColor: '#50007f',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
      },

      checkbox: {
        color: '#000000',
        backgroundColor: '#50007f',
        placeholderColor: '#666666',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        focusBorderColor: '#50007f',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
        checkColor: '#FFFFFF',
      },

      radio: {
        backgroundColor: '#FFFFFF',
        borderRadius: '50px',
        borderWidth: '1px',
        borderColor: '#50007f',
        borderStyle: 'solid',
        focusBorderColor: '#50007f',
        focusBorderWidth: '1px',
        boxShadow: 'none',
        transition: 'all ease',
        transitionDuration: '150ms',
        opacity: 1,
        checkColor: '#50007f',
      },

      switch: {
        trackWidth: 38,
        trackHeight: 20,
        backgroundColor: '#CCCCCC',
        activeBackgroundColor: '#50007f',
        thumbSize: 18,
        thumbColor: '#FFFFFF',
        transitionDuration: '150ms',
      },

      badge: {
        padding: '8px',
        gap: '4px',
        borderRadius: '50px',
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '#50007f',
        color: '#FFFFFF',
        shadow: 'none',
        transitionDuration: '150ms',
      },

      label: {
        fontSize: '14px',
        textColor: '#000000',
        padding: '0px',
        fontWeight: 500,
      },

      tooltip: {
        backgroundColor: '#50007f',
        color: '#FFFFFF',
      },

      textarea: {
        borderColor: '#50007f',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        placeholderColor: '#666666',
      },

      table: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderColor: 'transparent',
        hoverBackgroundColor: '#50007f',
        selectedBackgroundColor: '#E0E0E0',
      },

      dropdown: {
        backgroundColor: '#E0E0E0',
        color: '#000000',
        hoverBackgroundColor: '#E0E0E0',
      },

      loader: {
        color: '#50007f',
        textColor: '#50007f',
      },

      progress: {
        track: {
          backgroundColor: '#E0E0E0',
          height: '8px',
          borderRadius: '9999px',
        },
        indicator: {
          backgroundColor: '#50007f',
        },
      },

      alert: {
        padding: '0',
        color: '#000000',
        backgroundColor: '#E0E0E0',
        borderRadius: '8px',
      },

      alertDialogOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        animation: 'fadeIn 150ms ease-out',
      },

      alertDialogContent: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
      },

      alertDialogTitle: {
        color: '#000000',
        fontWeight: '600',
      },

      alertDialogDescription: {
        color: '#000000',
      },

      alertDialogCancel: {
        backgroundColor: '#000000',
        color: '#ffffff',
      },

      alertDialogAction: {
        backgroundColor: '#ffffff',
        color: '#000000',
      },

      tabsList: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
      },

      tabsTrigger: {
        color: '#000000',
        active: {
          backgroundColor: '#50007f',
          borderColor: '#ffffff',
          color: '#ffffff',
        },
        disabled: {
          opacity: 0.5,
        },
      },
      banner: {},
      card: {
        backgroundColor: '#ffffff',
        borderColor: '#E5E7EB',
        color: '#111827',
      },
      icon: {
        color: '#020303',
        base: {
          color: '#020303',
        },
        variants: {
          primary: {
            color: '#020303',
          },
          muted: {
            color: '#6B7280',
          },
          danger: {
            color: '#DC2626',
          },
          success: {
            color: '#16A34A',
          },
        },
        sizes: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {},
        },
      },
    },
  },
];
