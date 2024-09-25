export interface NavItem {
    key: string;
    label: string;
  }

  export interface HeaderProps {
    toggleTheme: () => void;
  }

  export const NAV_ITEMS: NavItem[] = [
    { key: 'aboutMe', label: 'header.navItems.aboutMe' },
    { key: 'techStack', label: 'header.navItems.techStack' },
    { key: 'workTimeline', label: 'header.navItems.workTimeline' },
    { key: 'projects', label: 'header.navItems.projects' },
    { key: 'contact', label: 'header.navItems.contact' }
  ];

  export const LANGUAGES = {
    en: 'EN',
    de: 'DE'
  } as const;
