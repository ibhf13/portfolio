import PortfolioLogo from '@/resources/images/logo.png'
import PortfolioImage1 from '@/resources/images/portfolio/image.png'
import PortfolioImage3 from '@/resources/images/portfolio/portfolio.gif'
import PortfolioImage2 from '@/resources/images/portfolio/projects.png'

import FlexJourneyLogo from '@/resources/images/FlexJourney/logo.png'




export interface Project {
  id: string
  title: string
  image: string
  description: string
  logo?: string
  techStack: string[]
  problem: string
  solution: string
  demoUrl?: string
  githubUrl?: string
  screenshots: string[]
  isAvailable: boolean
}


const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'projects.items.portfolio.title',
    image: PortfolioLogo,
    logo: PortfolioLogo,
    description: 'projects.items.portfolio.description',
    problem: 'projects.items.portfolio.problem',
    solution: 'projects.items.portfolio.solution',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
    ],
    demoUrl: 'https://ibrahimklusmann.com',
    githubUrl: 'https://github.com/ibhf13/portfolio',
    screenshots: [
      PortfolioImage1,
      PortfolioImage2,
      PortfolioImage3
    ],
    isAvailable: true
  },
  {
    id: 'FlexJourney',
    title: 'projects.items.FlexJourney.title',
    image: FlexJourneyLogo,
    logo: FlexJourneyLogo,
    description: 'projects.items.FlexJourney.description',
    problem: 'projects.items.FlexJourney.problem',
    solution: 'projects.items.FlexJourney.solution',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
      'Rsbuild'
    ],
    demoUrl: 'https://flexjourney.web.app/',
    githubUrl: 'https://github.com/ibhf13/flexjourney',
    screenshots: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png'
    ],
    isAvailable: true
  },
  {
    id: '3',
    title: 'QRBites',
    image: '/images/QRBites-preview.png',
    logo: '/images/QRBites-logo.png',
    description: 'projects.items.portfolio.description',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
      'Rsbuild'
    ],
    problem: 'coming soon',
    solution: 'coming soon',
    demoUrl: 'https://ibrahimklusmann.com',
    githubUrl: 'https://github.com/ibhf13/portfolio',
    screenshots: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png'
    ],
    isAvailable: false
  },

]

export default projects
