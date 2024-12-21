import { Theme } from "@mui/material"
import '@mui/material/styles'

export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface CustomPaletteColor {
    main: string
    light: string
    dark: string
    contrastText: string
    gradientLight: string
    gradientDark: string
}

export interface CustomBackground {
    default: string
    paper: string
    gradientLight: string
    gradientDark: string
}


export interface ThemeContextValue {
    mode: ThemeMode
    theme: Theme
    key: number
    toggleTheme: () => void
}

export const THEME_STORAGE_KEY = 'theme' as const
export const DEFAULT_THEME_MODE: ThemeMode = ThemeMode.DARK


declare module '@mui/material/styles' {
    interface PaletteColor {
        gradientLight?: string
        gradientDark?: string
    }

    interface TypeBackground {
        gradientLight?: string
        gradientDark?: string
    }
}

declare module '@mui/material' {
    interface Color {
        gradientLight?: string
        gradientDark?: string
    }
} 