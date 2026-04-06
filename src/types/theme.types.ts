import '@mui/material/styles'

export { DEFAULT_THEME_MODE, THEME_STORAGE_KEY, ThemeMode } from './theme.constants'

interface SectionPalette {
    aboutMe: string
    workTimeline: string
    techStack: string
    projects: string
    contact: string
}

declare module '@mui/material/styles' {
    interface PaletteColor {
        gradientLight: string
        gradientDark: string
    }

    interface SimplePaletteColorOptions {
        gradientLight?: string
        gradientDark?: string
    }

    interface TypeBackground {
        gradientLight: string
        gradientDark: string
    }

    interface TypeBackgroundOptions {
        gradientLight?: string
        gradientDark?: string
    }

    interface Palette {
        sections: SectionPalette
    }

    interface PaletteOptions {
        sections: SectionPalette
    }
}
