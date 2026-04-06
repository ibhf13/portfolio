export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
}

export const THEME_STORAGE_KEY = 'theme' as const
export const DEFAULT_THEME_MODE: ThemeMode = ThemeMode.DARK
