export const BACKGROUND_Z_INDEX = 0
export const PARTICLE_BASE_DURATION = 20
export const STAR_BASE_DURATION = 5
export const DEFAULT_BLUR_AMOUNT = 2
export const ANIMATION_EASE = 'linear'

export const GRADIENT_OPACITY = {
    LIGHT: '4D', // 30% opacity
    DARK: '33'   // 20% opacity
}

export const PERFORMANCE_SETTINGS = {
    LOW: {
        particleCount: 25,
        starCount: 50,
        disableBlur: true
    },
    MEDIUM: {
        particleCount: 50,
        starCount: 100,
        disableBlur: false
    },
    HIGH: {
        particleCount: 75,
        starCount: 150,
        disableBlur: false
    }
} 