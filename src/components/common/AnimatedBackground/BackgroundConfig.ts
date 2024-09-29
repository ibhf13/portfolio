import { Theme } from '@mui/material';
import { BackgroundConfig, ParticleConfig, StarConfig } from './types';

const generateStars = (count: number, brightness: number = 1): StarConfig[] => {
  return Array.from({ length: count }, () => ({
    size: Math.random() * 2 + 1,
    color: `rgba(255, 255, 255, ${0.5 * brightness + Math.random() * 0.5})`,
    position: { x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` },
  }));
};

const createParticle = (
  size: number,
  getColor: (theme: Theme) => string,
  opacity: number,
  shape: 'circle' | 'square' | 'triangle' | 'hexagon',
  animation: ParticleConfig['animation'],
  blur?: number
): (theme: Theme) => ParticleConfig => (theme: Theme) => ({
  size,
  color: getColor(theme),
  opacity,
  blur,
  shape,
  animation,
});

const createBackgroundConfig = (
  gradientColors: string[],
  particleConfigs: ((theme: Theme) => ParticleConfig)[],
  starCount: number,
  starBrightness: number = 1
): (theme: Theme) => BackgroundConfig => (theme: Theme) => ({
  gradientColors,
  particles: particleConfigs.map(config => config(theme)),
  stars: generateStars(starCount, starBrightness),
});

const getShapeColor = (theme: Theme, lightModeColor: string, darkModeColor: string): string =>
  theme.palette.mode === 'light' ? lightModeColor : darkModeColor;

export const backgroundConfigs: Record<string, (theme: Theme) => BackgroundConfig> = {
  aboutMe: createBackgroundConfig(
    ['#1A2980', '#26D0CE'],
    [
      createParticle(180, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.6, 'circle', { scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0], duration: 25 }, 2),
      createParticle(120, theme => getShapeColor(theme, '#1A2980', '#26D0CE'), 0.4, 'hexagon', { scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, -30, 0], rotate: [0, 180, 360], duration: 20 }),
    ],
    150,
    1.2
  ),
  workTimeline: createBackgroundConfig(
    ['#2C3E50', '#4CA1AF'],
    [
      createParticle(160, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.5, 'triangle', { scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, 15, 0], rotate: [0, 90, 180], duration: 22 }, 1),
      createParticle(100, theme => getShapeColor(theme, '#2C3E50', '#4CA1AF'), 0.4, 'circle', { scale: [1, 1.3, 1], x: [0, -15, 0], y: [0, -25, 0], duration: 28 }),
    ],
    150,
    1
  ),
  techStack: createBackgroundConfig(
    ['#0F2027', '#203A43', '#2C5364'],
    [
      createParticle(200, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.5, 'square', { scale: [1, 1.05, 1], x: [0, 40, 0], y: [0, 30, 0], rotate: [0, 45, 0], duration: 30 }, 3),
      createParticle(140, theme => getShapeColor(theme, '#0F2027', '#2C5364'), 0.4, 'hexagon', { scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, -20, 0], duration: 25 }),
    ],
    175,
    0.8
  ),
  projects: createBackgroundConfig(
    ['#2C3E50', '#4CA1AF'],
    [
      createParticle(180, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.6, 'circle', { scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0], duration: 25 }, 2),
      createParticle(120, theme => getShapeColor(theme, '#1A2980', '#26D0CE'), 0.4, 'hexagon', { scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, -30, 0], rotate: [0, 180, 360], duration: 20 }),
    ],
    200,
    1.1
  ),
  contact: createBackgroundConfig(
    ['#0F2027', '#203A43', '#2C5364'],
    [
      createParticle(190, theme => getShapeColor(theme, 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'), 0.5, 'square', { scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 25, 0], rotate: [0, 60, 0], duration: 26 }, 2),
      createParticle(150, theme => getShapeColor(theme, '#0F2027', '#2C5364'), 0.4, 'hexagon', { scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, -30, 0], duration: 22 }),
    ],
    125,
    0.9
  ),
};
