export interface Technology {
  name: string;
  icon: string;
  color: string;
  backgroundColor?: string;
  translationKey: string;
}

export interface TechStackData {
  frontend: Technology[];
  backend: Technology[];
  testing: Technology[];
  tools: Technology[];
}

export type TechStackSection = keyof TechStackData | 'all';

export interface TechCardProps {
  tech: Technology;
  index: number;
  isMobile: boolean;
  language: string;
}

export interface VirtualizedCellProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}
