import { ThemeMode } from '@/types/theme.types'
import { AppBar, Toolbar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import HeaderContent from './components/HeaderContent'
import MobileHeader from './components/MobileHeader'
import { HEADER_HEIGHT } from './constants'
import { HeaderProps } from './types/header.types'

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ height: HEADER_HEIGHT }}
    >
      <Toolbar
        sx={{
          height: '100%',
          background: theme.palette.mode === ThemeMode.LIGHT
            ? theme.palette.primary.gradientLight
            : theme.palette.primary.gradientDark
        }}
      >
        {isMobile ? (
          <MobileHeader toggleTheme={toggleTheme} />
        ) : (
          <HeaderContent toggleTheme={toggleTheme} />
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
