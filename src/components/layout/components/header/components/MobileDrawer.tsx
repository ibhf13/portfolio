import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { useNavigation } from '@/hooks/useNavigation'
import CloseIcon from '@mui/icons-material/Close'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Drawer, IconButton, List, ListItem, ListItemText, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { NAV_ITEMS } from '../constants/header.constants'
import LanguageMenu from './LanguageMenu'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  toggleTheme: () => void
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, toggleTheme }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { language, setLanguage } = useLanguage()
  const { navigateToSection } = useNavigation()

  const handleNavigation = (sectionId: string) => {
    onClose()

    setTimeout(() => {
      navigateToSection(sectionId)
    }, 300)
  }

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 250,
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {NAV_ITEMS.map((item, index) => (
          <ListItem
            key={item.key}
            onClick={() => handleNavigation(item.key)}
            component={motion.li}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItemText primary={t(item.label)} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LanguageMenu
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        <IconButton onClick={toggleTheme} color="inherit">
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </Drawer>
  )
}

export default MobileDrawer
