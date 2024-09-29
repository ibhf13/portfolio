import { TechStackData } from './types';
import ReactIcon from '../../../resources/icons/react.svg';
import TypeScriptIcon from '../../../resources/icons/typescript.svg';
import JavaScriptIcon from '../../../resources/icons/javascript.svg';
import HTMLIcon from '../../../resources/icons/html.svg';
import CSSIcon from '../../../resources/icons/css.svg';
import NodeJSIcon from '../../../resources/icons/nodejs.svg';
import ExpressIcon from '../../../resources/icons/express.svg';
import MongoDBIcon from '../../../resources/icons/mongodb.svg';
import MaterialUIIcon from '../../../resources/icons/material-ui.svg';
import GitIcon from '../../../resources/icons/git.svg';
import JestIcon from '../../../resources/icons/jest.svg';
import BrowserStackIcon from '../../../resources/icons/browserstack.svg';
import MySQLIcon from '../../../resources/icons/mysql.svg';
import PlaywrightIcon from '../../../resources/icons/playwright.svg';

export const techStackData: TechStackData = {
  frontend: [
    {
      name: 'React',
      icon: ReactIcon,
      color: '#61DAFB',
      translationKey: 'React'
    },
    {
      name: 'TypeScript',
      icon: TypeScriptIcon,
      color: '#3178C6',
      translationKey: 'TypeScript'
    },
    {
      name: 'JavaScript',
      icon: JavaScriptIcon,
      color: '#F7DF1E',
      translationKey: 'JavaScript'
    },
    {
      name: 'HTML',
      icon: HTMLIcon,
      color: '#E34F26',
      translationKey: 'HTML'
    },
    {
      name: 'CSS',
      icon: CSSIcon,
      color: '#1572B6',
      translationKey: 'CSS'
    },
    {
      name: 'Material-UI',
      icon: MaterialUIIcon,
      color: '#0081CB',
      translationKey: 'MaterialUI'
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: NodeJSIcon,
      color: '#339933',
      translationKey: 'NodeJS'
    },
    {
      name: 'Express',
      icon: ExpressIcon,
      color: '#FFFFFF',
      backgroundColor: '#339933',
      translationKey: 'Express'
    },
    {
      name: 'MongoDB',
      icon: MongoDBIcon,
      color: '#47A248',
      backgroundColor: '#FFFFFF',
      translationKey: 'MongoDB'
    },
    {
      name: 'MySQL',
      icon: MySQLIcon,
      color: '#4479A1',
      translationKey: 'MySQL'
    },
  ],
  testing: [
    {
      name: 'Jest',
      icon: JestIcon,
      color: '#C21325',
      translationKey: 'Jest'
    },
    {
      name: 'Playwright',
      icon: PlaywrightIcon,
      color: '#2EAD33',
      translationKey: 'Playwright'
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: GitIcon,
      color: '#F05032',
      translationKey: 'Git'
    },
    {
      name: 'BrowserStack',
      icon: BrowserStackIcon,
      color: '#F15B2A',
      translationKey: 'BrowserStack'
    },
  ],
};

export type TechStackSection = keyof typeof techStackData;
