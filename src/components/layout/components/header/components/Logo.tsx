import { useNavigation } from '@/hooks/useNavigation'
import logo from '@/resources/images/logo.png'
import { Box, IconButton } from '@mui/material'
import React from 'react'
import { HEADER_HEIGHT, NAV_ITEMS } from '../constants/header.constants'

const Logo: React.FC = () => {
  const { navigateToSection, isHomePage } = useNavigation()

  const handleClick = () => {
    const firstSectionId = NAV_ITEMS[0].key

    if (!isHomePage) {
      navigateToSection(firstSectionId)

      return
    }

    document.getElementById(firstSectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <IconButton
      onClick={handleClick}
      aria-label="Go to top"
      disableRipple
      sx={{ p: 0, borderRadius: 0 }}
    >
      <Box
        component="img"
        src={logo}
        alt=""
        sx={{
          height: `${HEADER_HEIGHT}px`,
          objectFit: 'contain',
        }}
      />
    </IconButton>
  )
}

export default Logo
