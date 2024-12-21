import { Theme } from '@mui/material'
import { BackgroundConfig, ParticleConfig, Shape } from '../types/animatedBackground.types'
import { createParticle } from './particleUtils'
import { generateStars } from './starUtils'


const backgroundObjectCreator = (
  gradientColors: string[],
  particleConfigs: ((theme: Theme) => ParticleConfig)[],
  starCount: number,
  starBrightness: number = 1
): (theme: Theme) => BackgroundConfig => (theme: Theme) => ({
  gradientColors,
  particles: particleConfigs.map(config => config(theme)),
  stars: generateStars(starCount, starBrightness),
})

const getShapeColor = (theme: Theme, lightModeColor: string, darkModeColor: string): string =>
  theme.palette.mode === 'light' ? lightModeColor : darkModeColor

const backgroundConfigs: Record<string, (theme: Theme) => BackgroundConfig> = {
  aboutMe: backgroundObjectCreator(
    ['#1A2980', '#26D0CE'],
    [
      createParticle(180, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.6, Shape.CIRCLE, { scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0], duration: 25 }, 2),
      createParticle(120, theme => getShapeColor(theme, '#1A2980', '#26D0CE'), 0.4, Shape.HEXAGON, { scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, -30, 0], rotate: [0, 180, 360], duration: 20 }),
    ],
    150,
    1.2
  ),
  workTimeline: backgroundObjectCreator(
    ['#2C3E50', '#4CA1AF'],
    [
      createParticle(160, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.5, Shape.TRIANGLE, { scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, 15, 0], rotate: [0, 90, 180], duration: 22 }, 1),
      createParticle(100, theme => getShapeColor(theme, '#2C3E50', '#4CA1AF'), 0.4, Shape.CIRCLE, { scale: [1, 1.3, 1], x: [0, -15, 0], y: [0, -25, 0], duration: 28 }),
    ],
    150,
    1
  ),
  techStack: backgroundObjectCreator(
    ['#0F2027', '#203A43', '#2C5364'],
    [
      createParticle(200, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.5, Shape.SQUARE, { scale: [1, 1.05, 1], x: [0, 40, 0], y: [0, 30, 0], rotate: [0, 45, 0], duration: 30 }, 3),
      createParticle(140, theme => getShapeColor(theme, '#0F2027', '#2C5364'), 0.4, Shape.HEXAGON, { scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, -20, 0], duration: 25 }),
    ],
    175,
    0.8
  ),
  projects: backgroundObjectCreator(
    ['#2C3E50', '#4CA1AF'],
    [
      createParticle(180, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.6, Shape.CIRCLE, { scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0], duration: 25 }, 2),
      createParticle(120, theme => getShapeColor(theme, '#1A2980', '#26D0CE'), 0.4, Shape.HEXAGON, { scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, -30, 0], rotate: [0, 180, 360], duration: 20 }),
    ],
    200,
    1.1
  ),
  contact: backgroundObjectCreator(
    ['#0F2027', '#203A43', '#2C5364'],
    [
      createParticle(190, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.5, Shape.SQUARE, { scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 25, 0], rotate: [0, 60, 0], duration: 26 }, 2),
      createParticle(150, theme => getShapeColor(theme, '#0F2027', '#2C5364'), 0.4, Shape.HEXAGON, { scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, -30, 0], duration: 22 }),
    ],
    125,
    0.9
  ),
}

export default backgroundConfigs
