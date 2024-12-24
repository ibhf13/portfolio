import { Theme } from "@mui/material"
import { ParticleConfig, Shape } from "../types/animatedBackground.types"

export const createParticle = (
    size: number,
    getColor: (theme: Theme) => string,
    opacity: number,
    shape: Shape,
    animation: ParticleConfig['animation'],
    blur?: number
): (theme: Theme) => ParticleConfig => (theme: Theme) => ({
    size,
    color: getColor(theme),
    opacity,
    blur,
    shape,
    animation,
})