interface Position {
    x: string;
    y: string;
}

interface Animation {
    scale?: [number, number, number];
    x?: [number, number, number];
    y?: [number, number, number];
    rotate?: [number, number, number];
    duration: number;
}

export interface StarConfig {
    size: number;
    color: string;
    position: Position;
}

export interface ParticleConfig {
    size: number;
    color: string;
    opacity: number;
    blur?: number;
    shape: 'circle' | 'square' | 'triangle' | 'hexagon';
    animation: Animation;
}

export interface BackgroundConfig {
    gradientColors: string[];
    particles: ParticleConfig[];
    stars: StarConfig[];
} 