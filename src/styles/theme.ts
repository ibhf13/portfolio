import { ThemeMode } from '@/types/theme.types'
import { alpha, createTheme, responsiveFontSizes, Theme } from '@mui/material/styles'

const COLORS = {
  light: {
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF8E8E',
      dark: '#FF4949',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  dark: {
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#4ECDC4',
      light: '#7EEEE7',
      dark: '#45B7AA',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
} as const

const GRADIENTS = {
  light: {
    primary: 'linear-gradient(45deg, #b95c5c 30%, #83b1c7 60%, #71cb66 90%)',
    secondary: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 60%, #FFB6B6 90%)',
    background: 'linear-gradient(180deg, #ffffff 30%, #f5f5f5 60%, #eeeeee 90%)',
  },
  dark: {
    primary: 'linear-gradient(45deg, #002984 30%, #42a5f5 60%, #6b1007 90%)',
    secondary: 'linear-gradient(45deg, #4ECDC4 30%, #45B7AA 60%, #7EEEE7 90%)',
    background: 'linear-gradient(180deg, #121212 30%, #1e1e1e 60%, #2b2b2b 90%)',
  },
} as const

const TYPOGRAPHY = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
} as const

const createAppTheme = (mode: ThemeMode): Theme => {
  const colors = mode === ThemeMode.LIGHT ? COLORS.light : COLORS.dark
  const gradients = mode === ThemeMode.LIGHT ? GRADIENTS.light : GRADIENTS.dark

  const palette = {
    mode,
    primary: {
      ...colors.primary,
      contrastText: '#FFFFFF',
      gradientLight: gradients.primary,
      gradientDark: gradients.primary,
    },
    secondary: {
      ...colors.secondary,
      contrastText: '#FFFFFF',
      gradientLight: gradients.secondary,
      gradientDark: gradients.secondary,
    },
    background: {
      ...colors.background,
      gradientLight: gradients.background,
      gradientDark: gradients.background,
    },
    text: colors.text,
    error: {
      main: mode === ThemeMode.LIGHT ? '#f44336' : '#ef5350',
    },
    warning: {
      main: mode === ThemeMode.LIGHT ? '#ff9800' : '#ffb74d',
    },
    info: {
      main: mode === ThemeMode.LIGHT ? '#2196f3' : '#4fc3f7',
    },
    success: {
      main: mode === ThemeMode.LIGHT ? '#4caf50' : '#81c784',
    },
    divider: mode === ThemeMode.LIGHT ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
  }

  const baseTheme = createTheme({
    palette,
    typography: {
      fontFamily: TYPOGRAPHY.fontFamily,
      h1: { fontWeight: TYPOGRAPHY.fontWeights.bold, letterSpacing: '-0.01562em' },
      h2: { fontWeight: TYPOGRAPHY.fontWeights.semiBold, letterSpacing: '-0.00833em' },
      h3: { fontWeight: TYPOGRAPHY.fontWeights.semiBold, letterSpacing: '0em' },
      h4: { fontWeight: TYPOGRAPHY.fontWeights.semiBold, letterSpacing: '0.00735em' },
      h5: { fontWeight: TYPOGRAPHY.fontWeights.semiBold, letterSpacing: '0em' },
      h6: { fontWeight: TYPOGRAPHY.fontWeights.semiBold, letterSpacing: '0.0075em' },
      subtitle1: { letterSpacing: '0.00938em' },
      subtitle2: { letterSpacing: '0.00714em' },
      body1: { letterSpacing: '0.00938em' },
      body2: { letterSpacing: '0.01071em' },
      button: { letterSpacing: '0.02857em', textTransform: 'none' },
      caption: { letterSpacing: '0.03333em' },
      overline: { letterSpacing: '0.08333em', textTransform: 'uppercase' },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: mode === ThemeMode.LIGHT ? "#CFD8DC #ECEFF1" : "#37474F #263238",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: mode === ThemeMode.LIGHT ? "#ECEFF1" : "#263238",
              width: 8,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: mode === ThemeMode.LIGHT ? "#CFD8DC" : "#37474F",
              minHeight: 24,
              border: `2px solid ${mode === ThemeMode.LIGHT ? "#ECEFF1" : "#263238"}`,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: mode === ThemeMode.LIGHT ? "#B0BEC5" : "#455A64",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: TYPOGRAPHY.fontWeights.semiBold,
            padding: '8px 16px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 8px ${alpha(palette.primary.main, 0.25)}`,
            },
          },
          contained: {
            background: `linear-gradient(45deg, ${palette.primary.main} 30%, ${palette.primary.light} 90%)`,
            color: palette.primary.contrastText,
            boxShadow: `0 2px 4px ${alpha(palette.primary.main, 0.25)}`,
            '&:hover': {
              background: `linear-gradient(45deg, ${palette.primary.dark} 30%, ${palette.primary.main} 90%)`,
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              background: alpha(palette.primary.main, 0.08),
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === ThemeMode.LIGHT
              ? '0 4px 20px rgba(0, 0, 0, 0.1)'
              : '0 4px 20px rgba(255, 255, 255, 0.1)',
            background: mode === ThemeMode.LIGHT
              ? 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)'
              : 'linear-gradient(135deg, #1E1E1E 0%, #2D3748 100%)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === ThemeMode.LIGHT
                ? '0 12px 30px rgba(0, 0, 0, 0.15)'
                : '0 12px 30px rgba(255, 255, 255, 0.15)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: `linear-gradient(90deg, ${palette.primary.main} 0%, ${palette.primary.dark} 100%)`,
            boxShadow: mode === ThemeMode.LIGHT
              ? '0 2px 10px rgba(0, 0, 0, 0.1)'
              : '0 2px 10px rgba(255, 255, 255, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            // backgroundImage: 'none',
          },
          elevation1: {
            boxShadow: mode === ThemeMode.LIGHT
              ? '0 2px 8px rgba(0, 0, 0, 0.1)'
              : '0 2px 8px rgba(255, 255, 255, 0.1)',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: palette.primary.main,
            textDecoration: 'none',
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
              color: palette.primary.dark,
              textDecoration: 'underline',
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: 8,
          },
          switchBase: {
            padding: 1,
            '&.Mui-checked, &.Mui-checked.Mui-colorPrimary, &.Mui-checked.Mui-colorSecondary': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                border: 'none',
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
          },
          track: {
            borderRadius: 13,
            border: '1px solid #bdbdbd',
            backgroundColor: '#fafafa',
            opacity: 1,
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
        },
      },
    },
  })

  return responsiveFontSizes(baseTheme)
}

export default createAppTheme
