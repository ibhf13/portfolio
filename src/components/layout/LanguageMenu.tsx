import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LANGUAGES } from './types';
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageMenuProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ currentLanguage, onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    handleMenuClose();
  };

  const currentLanguageLabel = currentLanguage ? LANGUAGES[currentLanguage as keyof typeof LANGUAGES] : '';

  return (
    <>
      <Button
        color="inherit"
        onClick={handleMenuOpen}
        startIcon={<LanguageIcon />}
        sx={{
          ml: 1,
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        {currentLanguageLabel || 'Language'}
      </Button>
      <AnimatePresence>
        {Boolean(anchorEl) && (
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
            PaperProps={{
              component: motion.div,
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              sx: {
                backgroundColor: 'background.paper',
                boxShadow: theme.shadows[4],
                borderRadius: 2,
                overflow: 'hidden',
              },
            }}
          >
            {Object.entries(LANGUAGES).map(([langCode, langLabel]) => (
              <MenuItem
                key={langCode}
                onClick={() => handleLanguageChange(langCode)}
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
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageMenu;
