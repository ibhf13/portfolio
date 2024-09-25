import { createTheme, responsiveFontSizes, Theme, alpha } from '@mui/material/styles';

const createAppTheme = (mode: 'light' | 'dark'): Theme => {
  const primaryMain = mode === 'light' ? '#2E7D32' : '#81C784';
  const secondaryMain = mode === 'light' ? '#E65100' : '#FFB74D'; // Orange
  // const secondaryMain = mode === 'light' ? '#795548' : '#A1887F'; // Uncomment for Brown

  const baseTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: primaryMain,
        light: mode === 'light' ? '#4CAF50' : '#A5D6A7',
        dark: mode === 'light' ? '#1B5E20' : '#66BB6A',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: secondaryMain,
        light: mode === 'light' ? '#FF9800' : '#FFCC80', // Orange
        dark: mode === 'light' ? '#BF360C' : '#F57C00', // Orange
        // light: mode === 'light' ? '#8D6E63' : '#BCAAA4', // Uncomment for Brown
        // dark: mode === 'light' ? '#5D4037' : '#6D4C41', // Uncomment for Brown
        contrastText: '#FFFFFF',
      },
      background: {
        default: mode === 'light' ? '#F1F8E9' : '#121212',
        paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
      },
      text: {
        primary: mode === 'light' ? '#1B5E20' : '#E0E0E0',
        secondary: mode === 'light' ? '#33691E' : '#B0BEC5',
      },
      error: {
        main: mode === 'light' ? '#D32F2F' : '#EF5350',
      },
      warning: {
        main: mode === 'light' ? '#FFA000' : '#FFB74D',
      },
      info: {
        main: mode === 'light' ? '#0288D1' : '#4FC3F7',
      },
      success: {
        main: mode === 'light' ? '#388E3C' : '#66BB6A',
      },
      divider: mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.12)',
    },
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
            scrollbarColor: mode === 'light' ? "#A5D6A7 #F1F8E9" : "#4A5568 #2D3748",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: mode === 'light' ? "#F1F8E9" : "#2D3748",
              width: 8,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: mode === 'light' ? "#A5D6A7" : "#4A5568",
              minHeight: 24,
              border: `2px solid ${mode === 'light' ? "#F1F8E9" : "#2D3748"}`,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: mode === 'light' ? "#66BB6A" : "#718096",
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
              boxShadow: `0 4px 8px ${alpha(mode === 'light' ? '#000000' : '#FFFFFF', 0.15)}`,
            },
          },
          contained: {
            background: mode === 'light'
              ?'#28892c'
              // ? 'linear-gradient(45deg, #2E7D32 30%, #795548 90%)' // Uncomment for Green to Brown
              : 'linear-gradient(45deg, #8E24AA 30%, #00BCD4 90%)',
          color: 'white',
            color: '#FFFFFF',
            boxShadow: `0 2px 4px ${alpha(mode === 'light' ? '#000000' : '#FFFFFF', 0.2)}`,
            '&:hover': {
              background: mode === 'light'
                ? '#236d26'
                // ? 'linear-gradient(45deg, #1B5E20 30%, #5D4037 90%)' // Uncomment for Darker Green to Darker Brown
                : 'linear-gradient(45deg, #6A0080 30%, #008BA3 90%)'
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              background: mode === 'light'
                ? 'linear-gradient(45deg, rgba(46, 125, 50, 0.1) 30%, rgba(230, 81, 0, 0.1) 90%)' // Green to Orange
                // ? 'linear-gradient(45deg, rgba(46, 125, 50, 0.1) 30%, rgba(121, 85, 72, 0.1) 90%)' // Uncomment for Green to Brown
                : 'rgba(142, 36, 170, 0.08)',
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
              ? 'linear-gradient(135deg, #FFFFFF 0%, #E8F5E9 100%)'
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
            background: mode === 'light'
              ? 'linear-gradient(90deg, #2E7D32 0%, #E65100 100%)' // Green to Orange
              // ? 'linear-gradient(90deg, #2E7D32 0%, #795548 100%)' // Uncomment for Green to Brown
              : 'linear-gradient(90deg, #0A0E17 0%, #141B2D 100%)',
            boxShadow: mode === 'light'
              ? '0 2px 10px rgba(0, 0, 0, 0.1)'
              : '0 2px 10px rgba(255, 255, 255, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: mode === 'light'
              ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
              : 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))',
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
            color: mode === 'light' ? '#2E7D32' : '#81C784',
            textDecoration: 'none',
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
              color: mode === 'light' ? '#E65100' : '#FFB74D', // Green to Orange
              // color: mode === 'light' ? '#795548' : '#A1887F', // Uncomment for Green to Brown
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
            '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + $track': {
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
