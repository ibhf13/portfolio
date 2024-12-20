import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        gradientLight?: string;
        gradientDark?: string;
    }

    interface TypeBackground {
        gradientLight?: string;
        gradientDark?: string;
    }
}

// Extend palette to ensure theme typing works everywhere
declare module '@mui/material' {
    interface Color {
        gradientLight?: string;
        gradientDark?: string;
    }
} 