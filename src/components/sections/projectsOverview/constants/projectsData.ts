import flexJourney_1 from '@/resources/images/FlexJourney/flexJourney_1.png'
import flexJourney_10 from '@/resources/images/FlexJourney/flexJourney_10.png'
import flexJourney_11 from '@/resources/images/FlexJourney/flexJourney_11.png'
import flexJourney_12 from '@/resources/images/FlexJourney/flexJourney_12.png'
import flexJourney_2 from '@/resources/images/FlexJourney/flexJourney_2.png'
import flexJourney_3 from '@/resources/images/FlexJourney/flexJourney_3.png'
import flexJourney_4 from '@/resources/images/FlexJourney/flexJourney_4.png'
import flexJourney_5 from '@/resources/images/FlexJourney/flexJourney_5.png'
import flexJourney_6 from '@/resources/images/FlexJourney/flexJourney_6.png'
import flexJourney_7 from '@/resources/images/FlexJourney/flexJourney_7.png'
import flexJourney_8 from '@/resources/images/FlexJourney/flexJourney_8.png'
import flexJourney_9 from '@/resources/images/FlexJourney/flexJourney_9.png'
import flexJourney_Change_Plan from '@/resources/images/FlexJourney/flexJourney_Change_Plan.gif'
import flexJourney_Create_Plan from '@/resources/images/FlexJourney/flexJourney_Create_Plan.gif'
import flexJourneyLogo from '@/resources/images/FlexJourney/logo.png'
import portfolioLogo from '@/resources/images/logo.png'
import portfolioDark from '@/resources/images/portfolio/portfolio_dark.gif'
import portfolioDark1 from '@/resources/images/portfolio/portfolio_dark1.png'
import portfolioDark2 from '@/resources/images/portfolio/portfolio_dark2.png'
import portfolioDarkMobile from '@/resources/images/portfolio/portfolio_dark_mobile.png'
import portfolioLight from '@/resources/images/portfolio/portfolio_light.gif'
import portfolioLight1 from '@/resources/images/portfolio/portfolio_light1.png'
import portfolioLight2 from '@/resources/images/portfolio/portfolio_light2.png'
import portfolioLightMobile from '@/resources/images/portfolio/portfolio_light_mobile.png'
import { Project } from '../types/project.types'

const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'projects.items.portfolio.title',
    image: portfolioLogo,
    logo: portfolioLogo,
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
    demoUrl: 'https://ibrahim-klusmann.web.app/',
    githubUrl: 'https://github.com/ibhf13/portfolio',
    screenshots: [
      portfolioDark,
      portfolioLight,
      portfolioDark1,
      portfolioDark2,
      portfolioDarkMobile,
      portfolioLight1,
      portfolioLight2,
      portfolioLightMobile,
    ],
    isAvailable: true
  },
  {
    id: 'FlexJourney',
    title: 'projects.items.FlexJourney.title',
    image: flexJourneyLogo,
    logo: flexJourneyLogo,
    description: 'projects.items.FlexJourney.description',
    problem: 'projects.items.FlexJourney.problem',
    solution: 'projects.items.FlexJourney.solution',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'Firebase',
      'Firestore',
    ],
    demoUrl: 'https://flexjourney.web.app/',
    githubUrl: 'https://github.com/ibhf13/flexjourney',
    screenshots: [
      flexJourney_1,
      flexJourney_2,
      flexJourney_9,
      flexJourney_10,
      flexJourney_11,
      flexJourney_12,
      flexJourney_3,
      flexJourney_4,
      flexJourney_5,
      flexJourney_6,
      flexJourney_7,
      flexJourney_8,
      flexJourney_Create_Plan,
      flexJourney_Change_Plan,
    ],
    isAvailable: true
  },
  {
    id: '3',
    title: 'QRBites',
    image: '/images/QRBites-preview.png',
    logo: '/images/QRBites-logo.png',
    description: 'coming soon',
    problem: 'coming soon',
    solution: 'coming soon',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
      'Rsbuild'
    ],

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
