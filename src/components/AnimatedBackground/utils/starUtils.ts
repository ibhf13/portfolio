import { StarConfig } from "../types/animatedBackground.types"

export const createStarShape = (size: number): string => {
    const innerRadius = size / 2
    const outerRadius = size
    const points = 5
    let path = `M ${outerRadius} 0 `

    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        const angle = (i * Math.PI) / points
        const x = radius * Math.sin(angle)
        const y = -radius * Math.cos(angle)
        path += `L ${x} ${y} `
    }

    path += 'Z'
    return path
}

export const generateStars = (count: number, brightness: number = 1): StarConfig[] => {
    return Array.from({ length: count }, () => ({
        size: Math.random() * 2 + 1,
        color: `rgba(255, 255, 255, ${0.5 * brightness + Math.random() * 0.5})`,
        position: { x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` },
    }))
}