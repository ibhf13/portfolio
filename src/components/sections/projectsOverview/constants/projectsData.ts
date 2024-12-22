import PortfolioLogo from '@/resources/images/logo.png'
import PortfolioImage1 from '@/resources/images/portfolio/image.png'
import PortfolioImage3 from '@/resources/images/portfolio/portfolio.gif'
import PortfolioImage2 from '@/resources/images/portfolio/projects.png'



export interface Project {
  id: string
  title: string
  image: string
  description: string
  logo?: string
  techStack: string[]
  problemSolution: string
  demoUrl?: string
  githubUrl?: string
  screenshots: string[]
}


const projects: Project[] = [
  {
    id: '1',
    title: 'projects.items.portfolio.title',
    image: '/images/portfolio-preview.png',
    logo: PortfolioLogo,
    description: 'projects.items.portfolio.description',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
      'Rsbuild'
    ],
    problemSolution: 'projects.items.portfolio.problemSolution',
    demoUrl: 'https://ibrahimklusmann.com',
    githubUrl: 'https://github.com/ibhf13/portfolio',
    screenshots: [
      PortfolioImage1,
      PortfolioImage2,
      PortfolioImage3
    ]
  },
  {
    id: '2',
    title: 'projects.items.portfolio.title',
    image: '/images/portfolio-preview.png',
    logo: PortfolioLogo,
    description: 'projects.items.portfolio.description',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
      'Rsbuild'
    ],
    problemSolution: 'projects.items.portfolio.problemSolution',
    demoUrl: 'https://ibrahimklusmann.com',
    githubUrl: 'https://github.com/ibhf13/portfolio',
    screenshots: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png'
    ]
  },
  {
    id: '3',
    title: 'projects.items.portfolio.title',
    image: '/images/portfolio-preview.png',
    logo: '/images/portfolio-logo.png',
    description: 'projects.items.portfolio.description',
    techStack: [
      'React',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'i18next',
      'Rsbuild'
    ],
    problemSolution: 'projects.items.portfolio.problemSolution',
    demoUrl: 'https://ibrahimklusmann.com',
    githubUrl: 'https://github.com/ibhf13/portfolio',
    screenshots: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png'
    ]
  },

]

export default projects
