import { ThemeMode } from '@/types/theme.types'
import { alpha, createTheme, responsiveFontSizes, Theme } from '@mui/material/styles'

const COLORS = {
  light: {
    primary: {
      main: '#3d6fb7',
      light: '#5c85b9',
      dark: '#3d6fb7',
    },
    secondary: {
      main: '#293d59',
      light: '#83b1c7',
      dark: '#62969b',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#000000',
    },
    sections: {
      aboutMe: 'linear-gradient(135deg, #083f8f 30%, #3d6fb7 80%)',
      workTimeline: 'linear-gradient(135deg, #3d6fb7 30%, #0e366b 80%)',
      techStack: 'linear-gradient(135deg, #0e366b 30%, #6B96BE 80%)',
      projects: 'linear-gradient(135deg, #6B96BE 30%, #0e366b 80%)',
      contact: 'linear-gradient(135deg, #0e366b 30%, #6B96BE 80%)',
    },
  },
  dark: {
    primary: {
      main: '#58bb9c',
      light: '#62969b',
      dark: '#095748',
    },
    secondary: {
      main: '#4ECDC4',
      light: '#2c5d71',
      dark: '#095748',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
    sections: {
      aboutMe: 'linear-gradient(135deg, #010e0c 30%, #011612 80%)',
      workTimeline: 'linear-gradient(135deg, #061512 30%, #09332B 80%)',
      techStack: 'linear-gradient(135deg, #0C2924 30%, #1b3d3d 80%)',
      projects: 'linear-gradient(135deg, #1b3d3d 30%, #0d3c3f 80%)',
      contact: 'linear-gradient(135deg, #0d3c3f 30%, #294a4d 80%)',
    },
  },
} as const

const GRADIENTS = {
  light: {
    primary: 'linear-gradient(45deg, #5c85b9 30%, #83b1c7 60%, #58bb9c 90%)',
    secondary: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 60%, #FFB6B6 90%)',
    background: 'linear-gradient(180deg, #ffffff 30%, #f5f5f5 60%, #eeeeee 90%)',
  },
  dark: {
    primary: 'linear-gradient(60deg, #095748 30%, #62969b 70%, #2c5d71 90%)',
    secondary: 'linear-gradient(45deg, #4ECDC4 30%, #45B7AA 60%, #7EEEE7 90%)',
    background: 'linear-gradient(180deg, #121212 30%, #1e1e1e 60%, #2b2b2b 90%)',
  },
} as const

const TYPOGRAPHY = {
  bodyFontFamily: '"Manrope Variable", "Manrope", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  displayFontFamily: '"Bricolage Grotesque Variable", "Bricolage Grotesque", "Manrope Variable", "Helvetica Neue", "Helvetica", sans-serif',
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
    sections: {
      aboutMe: colors.sections.aboutMe,
      workTimeline: colors.sections.workTimeline,
      techStack: colors.sections.techStack,
      projects: colors.sections.projects,
      contact: colors.sections.contact,
    },
  }

  const baseTheme = createTheme({
    palette,
    typography: {
      fontFamily: TYPOGRAPHY.bodyFontFamily,
      h1: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.bold,
        letterSpacing: '-0.025em',
        lineHeight: 1.05,
      },
      h2: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.bold,
        letterSpacing: '-0.022em',
        lineHeight: 1.1,
      },
      h3: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.semiBold,
        letterSpacing: '-0.018em',
        lineHeight: 1.15,
      },
      h4: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.semiBold,
        letterSpacing: '-0.012em',
        lineHeight: 1.2,
      },
      h5: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.semiBold,
        letterSpacing: '-0.008em',
        lineHeight: 1.25,
      },
      h6: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.semiBold,
        letterSpacing: '-0.004em',
        lineHeight: 1.3,
      },
      subtitle1: { letterSpacing: '0.005em', lineHeight: 1.55 },
      subtitle2: { letterSpacing: '0.003em', lineHeight: 1.55 },
      body1: { letterSpacing: '0.002em', lineHeight: 1.65 },
      body2: { letterSpacing: '0.003em', lineHeight: 1.6 },
      button: {
        fontFamily: TYPOGRAPHY.displayFontFamily,
        fontWeight: TYPOGRAPHY.fontWeights.semiBold,
        letterSpacing: '0.005em',
        textTransform: 'none',
      },
      caption: { letterSpacing: '0.02em' },
      overline: { letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: TYPOGRAPHY.fontWeights.semiBold },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@keyframes twinkle': {
            '0%': { opacity: 0.3 },
            '100%': { opacity: 1 },
          },
          'section[id]': {
            scrollMarginTop: '64px',
          },
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
              ? palette.background.paper
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
          elevation1: {
            boxShadow: mode === ThemeMode.LIGHT
              ? '0 2px 8px rgba(12, 12, 12, 0.1)'
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
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
        },
      },
    },
  })

  return responsiveFontSizes(baseTheme)
}

export default createAppTheme
