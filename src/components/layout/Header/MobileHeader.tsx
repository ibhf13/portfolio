import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { HeaderProps } from '../types/layout.types'
import Logo from './Logo'
import MobileDrawer from './MobileDrawer'

const MobileHeader: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <Logo />
      <Box sx={{ ml: 'auto' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        toggleTheme={toggleTheme}
      />
    </>
  )
}

export default MobileHeader
