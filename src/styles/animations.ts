import { Variants } from 'framer-motion'

export enum AnimationType {
    Fade = 'fade',
    Slide = 'slide',
    Zoom = 'zoom',
    Rotate = 'rotate',
    Flip = 'flip',
    Bounce = 'bounce',
    Scale = 'scale',
    SlideRotate = 'slideRotate',
    ExpandContract = 'expandContract',
    Swirl = 'swirl',
    Elastic = 'elastic',
    Jello = 'jello',
    Pulse = 'pulse',
    Wiggle = 'wiggle',
    Tilt = 'tilt',
    Glitch = 'glitch',
    FadeInUp = 'fadeInUp',
    FadeInDown = 'fadeInDown',
    SlideInLeft = 'slideInLeft',
    SlideInRight = 'slideInRight',
    RotateIn = 'rotateIn',
    ScaleInCenter = 'scaleInCenter'
}

const baseVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
}

export const animationVariants: Record<AnimationType, Variants> = {
    [AnimationType.Fade]: baseVariants,

    [AnimationType.Slide]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, y: 50 },
        visible: { ...baseVariants.visible, y: 0 },
    },

    [AnimationType.Zoom]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, scale: 0.95 },
        visible: { ...baseVariants.visible, scale: 1 },
    },

    [AnimationType.Rotate]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, rotateY: 90 },
        visible: { ...baseVariants.visible, rotateY: 0 },
    },

    [AnimationType.Flip]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, rotateX: 90 },
        visible: { ...baseVariants.visible, rotateX: 0 },
    },

    [AnimationType.Bounce]: {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            y: [0, -20, 0],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                },
            },
        },
    },

    [AnimationType.Scale]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, scale: 0 },
        visible: { ...baseVariants.visible, scale: 1 },
    },

    [AnimationType.SlideRotate]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, x: -100, rotate: -180 },
        visible: { ...baseVariants.visible, x: 0, rotate: 0 },
    },

    [AnimationType.ExpandContract]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, scale: 1.2 },
        visible: { ...baseVariants.visible, scale: 1 },
    },

    [AnimationType.Swirl]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, rotate: 180, scale: 0 },
        visible: { ...baseVariants.visible, rotate: 0, scale: 1 },
    },

    [AnimationType.Elastic]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, scaleX: 0 },
        visible: {
            ...baseVariants.visible,
            scaleX: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        },
    },

    [AnimationType.Jello]: {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            skew: [0, -12.5, 6.25, -3.125, 1.5625, -0.78125, 0.390625, -0.1953125, 0],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    },

    [AnimationType.Pulse]: {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            scale: [1, 1.05, 1],
            transition: {
                scale: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                },
            },
        },
    },

    [AnimationType.Wiggle]: {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            x: [0, -10, 10, -10, 10, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    duration: 0.5,
                    ease: "easeInOut",
                },
            },
        },
    },

    [AnimationType.Tilt]: {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, rotateX: 20, rotateY: 20 },
        visible: {
            ...baseVariants.visible,
            rotateX: 0,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    },

    [AnimationType.Glitch]: {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            x: [0, -5, 5, -5, 5, 0],
            y: [0, 5, -5, 5, -5, 0],
            transition: {
                x: { repeat: Infinity, repeatType: "mirror", duration: 0.5 },
                y: { repeat: Infinity, repeatType: "mirror", duration: 0.5, delay: 0.25 },
            },
        },
    },

    [AnimationType.FadeInUp]: {
        ...baseVariants,
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    },

    [AnimationType.FadeInDown]: {
        ...baseVariants,
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    },

    [AnimationType.SlideInLeft]: {
        ...baseVariants,
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    },

    [AnimationType.SlideInRight]: {
        ...baseVariants,
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    },

    [AnimationType.RotateIn]: {
        ...baseVariants,
        hidden: { opacity: 0, rotate: -180 },
        visible: {
            opacity: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    },

    [AnimationType.ScaleInCenter]: {
        ...baseVariants,
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    }
}

export const getAnimationVariant = (type: AnimationType): Variants => {
    return animationVariants[type] || baseVariants
} 