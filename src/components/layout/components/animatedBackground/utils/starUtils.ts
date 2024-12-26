import { StarConfig } from "../types/animatedBackground.types"

export const generateStars = (count: number): StarConfig[] => {
    return Array.from({ length: count }, () => ({
        size: Math.random() * 3 + 1,
        color: 'rgba(255, 255, 255, 0.9)',
        position: { x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` },
    }))
}