import { useLanguage } from '@/contexts/LanguageContext'
import { isLocalEnvironment } from '@/utils/environmentUtils'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import LanguageMenu from './LanguageMenu'
import Logo from './Logo'
import NavItems from './NavItems'
import TranslationKeyDisplay from './TranslationKeyDisplay'

interface HeaderContentProps {
  toggleTheme: () => void
}

const HeaderContent: React.FC<HeaderContentProps> = ({ toggleTheme }) => {
  const theme = useTheme()
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <Logo />
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
        <NavItems />
        <LanguageMenu
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        {isLocalEnvironment() && <TranslationKeyDisplay />}
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          aria-label={theme.palette.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          sx={{ ml: 1 }}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </>
  )
}
export default HeaderContent
