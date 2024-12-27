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

- Responsive design with Material-UI
- Dark/Light mode theme toggle
- Internationalization (English and German)
- Smooth animations using Framer Motion
- Sections for:
  - About Me with experience highlights
  - Interactive Tech Stack showcase
  - Work Timeline
  - Projects Portfolio
  - Contact Form with EmailJS integration

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI) v6
- Firebase (Auth, Hosting, Firestore)
- Framer Motion for animations
- i18next for internationalization
- Rsbuild for building and development
- ESLint & Prettier for code quality
- EmailJS for contact form

## Project Structure

```
src/
├── components/
│   ├── layout/              # Layout components
│   │   ├── components/
│   │   ├── context/
│   │   ├── styles/
│   │   └── types/
│   └── sections/            # Feature-based sections
│       ├── aboutMe/
│       ├── contactForm/
│       │   ├── components/
│       │   ├── constants/
│       │   ├── context/
│       │   ├── styles/
│       │   ├── types/
│       │   └── index.ts
│       ├── notFound/
│       ├── projectsOverview/
│       ├── techStack/
│       └── workTimeline/
├── config/                  # App configuration
├── contexts/               # React contexts
├── hooks/                  # Custom hooks
├── locales/               # i18n translations
├── resources/             # Static resources
│   ├── icons/
│   └── images/
├── styles/                # Global styles
│   ├── animations.ts
│   └── theme.ts
├── types/                 # Global TypeScript types
├── utils/                 # Utility functions
└── App.tsx               # Root component
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project
   - Enable Authentication and Firestore
   - Add your Firebase config to the project

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint issues
- `npm run format`: Format with Prettier
- `npm run deploy`: Build and deploy to Firebase

## Deployment

This project is configured for deployment on Firebase Hosting.

1. Install Firebase CLI if not already installed:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (first time only):
   ```bash
   firebase init
   ```

4. Deploy to Firebase:
   ```bash
   npm run deploy
   ```

## Internationalization

The project supports English and German languages. Language files are located in `src/locales/`.

To add or modify translations, edit:
- `English.json`
- `Deutsch.json`

The `useTranslation` hook from `src/hooks/useCustomTranslation.ts` is used to access translations throughout the application.

## Code Quality

- ESLint configuration for TypeScript and React
- Prettier for consistent code formatting
- Strict TypeScript configuration
- Git hooks for pre-commit checks
