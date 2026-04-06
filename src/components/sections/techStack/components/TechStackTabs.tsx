import { useTranslation } from '@/hooks/useCustomTranslation'
import { Box, Tab, Tabs } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { ActiveTechSection, TechStackTabsProps } from '../types/techStack.types'

const ScrollableBox = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  marginBottom: theme.spacing(4),
}))

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    justifyContent: 'flex-start',
  },
  '& .MuiTab-root': {
    minWidth: 'auto',
    padding: theme.spacing(1, 2),
    textTransform: 'none',
    fontSize: theme.typography.body1.fontSize,
    whiteSpace: 'nowrap',
  },
}))

const TechStackTabs: React.FC<TechStackTabsProps> = ({ activeSection, onChangeSection }) => {
  const { t } = useTranslation()

  const handleTabChange = (_event: React.SyntheticEvent, newValue: ActiveTechSection) => {
    onChangeSection(newValue)
  }

  const tabs: Array<{ value: ActiveTechSection; label: string }> = [
    { value: 'all', label: t('techStack.all') },
    { value: 'frontend', label: t('techStack.frontend') },
    { value: 'backend', label: t('techStack.backend') },
    { value: 'testing', label: t('techStack.testing') },
    { value: 'tools', label: t('techStack.tools') },
  ]

  return (
    <ScrollableBox>
      <StyledTabs
        value={activeSection}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tech stack sections"
      >
        {tabs.map(({ value, label }) => (
          <Tab
            key={value}
            label={label}
            value={value}
            id={`techstack-tab-${value}`}
            aria-controls={`techstack-panel-${value}`}
          />
        ))}
      </StyledTabs>
    </ScrollableBox>
  )
}

export default TechStackTabs
