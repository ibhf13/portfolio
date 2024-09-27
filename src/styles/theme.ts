import { createTheme, responsiveFontSizes, Theme, alpha, PaletteMode } from '@mui/material/styles';

const createAppTheme = (mode: PaletteMode): Theme => {
  const getColor = (lightColor: string, darkColor: string) => mode === 'light' ? lightColor : darkColor;

  const palette = {
    mode,
    primary: {
      main: getColor('#3f51b5', '#90caf9'),
      light: getColor('#757de8', '#e3f2fd'),
      dark: getColor('#002984', '#42a5f5'),
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: getColor('#f50057', '#f48fb1'),
      light: getColor('#ff5983', '#fce4ec'),
      dark: getColor('#c51162', '#f06292'),
      contrastText: '#FFFFFF',
    },
    background: {
      default: getColor('#f5f5f5', '#121212'),
      paper: getColor('#ffffff', '#1e1e1e'),
    },
    text: {
      primary: getColor('#212121', '#ffffff'),
      secondary: getColor('#757575', '#b0bec5'),
    },
    error: {
      main: getColor('#f44336', '#ef5350'),
    },
    warning: {
      main: getColor('#ff9800', '#ffb74d'),
    },
    info: {
      main: getColor('#2196f3', '#4fc3f7'),
    },
    success: {
      main: getColor('#4caf50', '#81c784'),
    },
    divider: getColor('rgba(0, 0, 0, 0.12)', 'rgba(255, 255, 255, 0.12)'),
  };

  const baseTheme = createTheme({
    palette,
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700, letterSpacing: '-0.01562em' },
      h2: { fontWeight: 600, letterSpacing: '-0.00833em' },
      h3: { fontWeight: 600, letterSpacing: '0em' },
      h4: { fontWeight: 600, letterSpacing: '0.00735em' },
      h5: { fontWeight: 600, letterSpacing: '0em' },
      h6: { fontWeight: 600, letterSpacing: '0.0075em' },
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
            scrollbarColor: getColor("#CFD8DC #ECEFF1", "#37474F #263238"),
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: getColor("#ECEFF1", "#263238"),
              width: 8,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: getColor("#CFD8DC", "#37474F"),
              minHeight: 24,
              border: `2px solid ${getColor("#ECEFF1", "#263238")}`,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: getColor("#B0BEC5", "#455A64"),
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
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
            boxShadow: mode === 'light'
              ? '0 4px 20px rgba(0, 0, 0, 0.1)'
              : '0 4px 20px rgba(255, 255, 255, 0.1)',
            background: mode === 'light'
              ? 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)'
              : 'linear-gradient(135deg, #1E1E1E 0%, #2D3748 100%)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === 'light'
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
            boxShadow: mode === 'light'
              ? '0 2px 10px rgba(0, 0, 0, 0.1)'
              : '0 2px 10px rgba(255, 255, 255, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
          elevation1: {
            boxShadow: mode === 'light'
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
  });

  return responsiveFontSizes(baseTheme);
};

export default createAppTheme;
