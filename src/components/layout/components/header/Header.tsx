import { ThemeMode } from '@/types/theme.types'
import { AppBar, Box, Toolbar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import HeaderContent from './components/HeaderContent'
import MobileHeader from './components/MobileHeader'
import { HEADER_HEIGHT } from './constants/header.constants'
import { HeaderProps } from './types/header.types'

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useTheme()

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
            : theme.palette.primary.gradientDark,
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'contents' } }}>
          <HeaderContent toggleTheme={toggleTheme} />
        </Box>
        <Box sx={{ display: { xs: 'contents', md: 'none' } }}>
          <MobileHeader toggleTheme={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
