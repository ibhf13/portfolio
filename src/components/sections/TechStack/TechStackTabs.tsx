import React, { useRef, useLayoutEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import { TechStackSection } from './types';
import { styled } from '@mui/material/styles';

interface TechStackTabsProps {
  activeSection: TechStackSection | 'all';
  onChangeSection: (section: TechStackSection | 'all') => void;
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiTab-root': {
    minWidth: 'auto',
    padding: theme.spacing(1, 2),
    textTransform: 'none',
    fontSize: theme.typography.body1.fontSize,
  },
}));

const TechStackTabs: React.FC<TechStackTabsProps> = ({ activeSection, onChangeSection }) => {
  const { t } = useTranslation();
  const [tabIndicatorStyle, setTabIndicatorStyle] = useState({});
  const tabsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateTabIndicator = () => {
      if (tabsRef.current) {
        const activeTab = tabsRef.current.querySelector('[aria-selected="true"]') as HTMLElement;
        if (activeTab) {
          setTabIndicatorStyle({
            left: `${activeTab.offsetLeft}px`,
            width: `${activeTab.offsetWidth}px`,
          });
        }
      }
    };

    updateTabIndicator();
    window.addEventListener('resize', updateTabIndicator);
    return () => window.removeEventListener('resize', updateTabIndicator);
  }, [activeSection]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: TechStackSection | 'all') => {
    onChangeSection(newValue);
  };

  return (
    <StyledTabs
      ref={tabsRef}
      value={activeSection}
      onChange={handleTabChange}
      centered
      aria-label="tech stack sections"
      TabIndicatorProps={{
        style: {
          ...tabIndicatorStyle,
          transition: 'left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      }}
    >
      <Tab label={t('techStack.all')} value="all" />
      <Tab label={t('techStack.frontend')} value="frontend" />
      <Tab label={t('techStack.backend')} value="backend" />
      <Tab label={t('techStack.testing')} value="testing" />
      <Tab label={t('techStack.tools')} value="tools" />
    </StyledTabs>
  );
};

export default TechStackTabs;
