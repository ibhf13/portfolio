import { Theme } from '@mui/material'
import { BackgroundConfig } from '../types/animatedBackground.types'
import { generateStars } from './starUtils'


const backgroundObjectCreator = (
  gradientColors: string[],
  starCount: number,
): (theme: Theme) => BackgroundConfig => () => ({
  gradientColors,
  stars: generateStars(starCount),
})

const backgroundConfigs: Record<string, (theme: Theme) => BackgroundConfig> = {
  aboutMe: backgroundObjectCreator(
    ['#1A2980', '#26D0CE'],
    150,
  ),
  workTimeline: backgroundObjectCreator(
    ['#2C3E50', '#4CA1AF'],
    150,
  ),
  techStack: backgroundObjectCreator(
    ['#0F2027', '#203A43', '#2C5364'],
    175,
  ),
  projects: backgroundObjectCreator(
    ['#2C3E50', '#4CA1AF'],
    200,
  ),
  contact: backgroundObjectCreator(
    ['#0F2027', '#203A43', '#2C5364'],
    125,
  ),
}

export default backgroundConfigs
