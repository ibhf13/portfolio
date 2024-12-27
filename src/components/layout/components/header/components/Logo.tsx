import { useNavigation } from '@/hooks/useNavigation'
import logo from '@/resources/images/logo.png'
import { Box } from '@mui/material'
import React from 'react'
import { NAV_ITEMS } from '../constants/header.constants'

const Logo: React.FC = () => {
  const { navigateToSection, isHomePage } = useNavigation()

  const handleClick = () => {
    const firstSectionId = NAV_ITEMS[0].key

    if (!isHomePage) {
      navigateToSection(firstSectionId)
    } else {
      setTimeout(() => {
        const firstSection = document.getElementById(firstSectionId)
        if (firstSection) {
          firstSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300)
    }
  }

  return (
    <Box
      component="img"
      src={logo}
      alt="Logo"
      sx={{
        height: '64px',
        cursor: 'pointer',
        objectFit: 'contain',
      }}
      onClick={handleClick}
    />
  )
}

export default Logo
