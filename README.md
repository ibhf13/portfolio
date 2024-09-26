# Portfolio Project

This is a personal portfolio website built with React, TypeScript, and Material-UI. It showcases the developer's skills, work experience, and projects.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Internationalization](#internationalization)

## Features

- Responsive design
- Dark/Light mode toggle
- Internationalization (English and German)
- Animated components using Framer Motion
- Sections for About Me, Tech Stack, Work Timeline, Projects, and Contact Form

## Tech Stack

- React
- TypeScript
- Material-UI (MUI)
- Framer Motion for animations
- i18next for internationalization
- Rsbuild for building and development

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   └── ...
│   │   ├── about-me/
│   │   │   ├── AboutMe.tsx
│   │   │   ├── ProfileImage.tsx
│   │   │   └── ...
│   │   ├── TechStack.tsx
│   │   ├── WorkTimeline.tsx
│   │   ├── ProjectsOverview.tsx
│   │   └── ContactForm.tsx
│   ├── contexts/
│   │   ├── LanguageContext.tsx
│   │   └── TranslationKeyContext.tsx
│   ├── hooks/
│   │   ├── useCustomTranslation.ts
│   │   └── useTheme.ts
│   ├── locales/
│   │   ├── English.json
│   │   └── Deutsch.json
│   ├── resources/
│   │   ├── icons/
│   │   ├── company-logos/
│   │   └── ...
│   ├── styles/
│   │   └── theme.ts
│   ├── utils/
│   │   └── dateUtils.ts
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
├── tsconfig.json
├── rsbuild.config.ts
└── vercel.json
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Development

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

To deploy:

1. Install the Vercel CLI:
   ```
   npm i -g vercel
   ```

2. Run the deployment command:
   ```
   npm run deploy
   ```

## Internationalization

The project supports English and German languages. Language files are located in `src/locales/`.

To add or modify translations, edit the corresponding JSON files:
- `English.json`
- `Deutsch.json`

The `useTranslation` hook from `src/hooks/useCustomTranslation.ts` is used to access translations throughout the application.
