import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LANGUAGES } from './types';

interface LanguageMenuProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ currentLanguage, onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

  return (
    <>
      <Button
        color="inherit"
        onClick={handleMenuOpen}
        sx={{ ml: 1, minWidth: 40 }}
      >
        {LANGUAGES[currentLanguage as keyof typeof LANGUAGES]}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {Object.entries(LANGUAGES).map(([langCode, langLabel]) => (
          <MenuItem
            key={langCode}
            onClick={() => handleLanguageChange(langCode)}
            selected={currentLanguage === langCode}
          >
            {langLabel}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;
