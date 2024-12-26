interface Position {
    x: string
    y: string
}

interface Animation {
    scale?: [number, number, number]
    x?: [number, number, number]
    y?: [number, number, number]
    rotate?: [number, number, number]
    duration: number
}
export enum Shape {
    CIRCLE = 'circle',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    HEXAGON = 'hexagon',
}

export interface StarConfig {
    size: number
    color: string
    position: Position
}

export interface ParticleConfig {
    size: number
    color: string
    opacity: number
    blur?: number
    shape: Shape
    animation: Animation
}

export interface BackgroundConfig {
    gradientColors?: string[]
    backgroundColor?: string
    particles?: ParticleConfig[]
    stars: StarConfig[]
} 