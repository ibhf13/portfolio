import React from 'react';
import { Box, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
import Logo from './Logo';
import NavItems from './NavItems';
import LanguageMenu from './LanguageMenu';
import TranslationKeyDisplay from './TranslationKeyDisplay';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeaderContentProps {
  toggleTheme: () => void;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <Logo />
      <NavItems />
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
        <LanguageMenu
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        <TranslationKeyDisplay />
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
  );
};

export default HeaderContent;
