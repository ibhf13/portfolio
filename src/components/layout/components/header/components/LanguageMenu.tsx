import { Language } from '@/contexts/LanguageContext'
import LanguageIcon from '@mui/icons-material/Language'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import React from 'react'

interface LanguageMenuProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ currentLanguage, onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const theme = useTheme()

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (lang: Language) => {
    onLanguageChange(lang)
    handleMenuClose()
  }

  return (
    <>
      <Button
        color="inherit"
        onClick={handleMenuOpen}
        startIcon={<LanguageIcon />}
        aria-haspopup="menu"
        aria-expanded={Boolean(anchorEl)}
        sx={{
          ml: 1,
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        {currentLanguage}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'background.paper',
              boxShadow: theme.shadows[4],
              borderRadius: 2,
              overflow: 'hidden',
            },
          },
        }}
      >
        {Object.entries(Language).map(([langCode, langLabel]) => (
          <MenuItem
            key={langCode}
            onClick={() => handleLanguageChange(langCode as Language)}
            selected={currentLanguage === langCode}
            sx={{
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              '&.Mui-selected': {
                backgroundColor: 'action.selected',
              },
            }}
          >
            {langLabel}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LanguageMenu
