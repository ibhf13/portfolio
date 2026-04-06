import { useTranslation } from '@/hooks/useCustomTranslation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useNavigation } from '@/hooks/useNavigation'
import { Box, Button } from '@mui/material'
import React, { useMemo } from 'react'
import { NAV_ITEMS } from '../constants/header.constants'

const NavItems: React.FC = () => {
  const { t } = useTranslation()
  const { navigateToSection, isHomePage } = useNavigation()
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.key), [])
  const activeId = useActiveSection(isHomePage ? sectionIds : [])

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.key

        return (
          <Button
            key={item.key}
            color="inherit"
            onClick={() => navigateToSection(item.key)}
            aria-current={isActive ? 'page' : undefined}
            sx={{
              mx: 1,
              position: 'relative',
              fontWeight: isActive ? 'bold' : 'normal',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: isActive ? '100%' : '0%',
                height: '2px',
                bottom: 0,
                left: isActive ? '0%' : '50%',
                backgroundColor: 'primary.main',
                transition: 'all 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
                left: '0%',
              },
            }}
          >
            {t(item.label)}
          </Button>
        )
      })}
    </Box>
  )
}

export default NavItems
