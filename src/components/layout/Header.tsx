import React from 'react';
import { useTranslation } from '../../hooks/useCustomTranslation';
import { useLanguage } from '../../contexts/LanguageContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TranslationKeyDisplay from './TranslationKeyDisplay';
import MobileDrawer from './MobileDrawer';
import LanguageMenu from './LanguageMenu';
import { HeaderProps, NAV_ITEMS } from './types';
import { isLocalEnvironment } from '../../utils/environmentUtils';

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { t, showKeys, toggleShowKeys } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (mobileOpen) {
        handleDrawerToggle();
      }
    }
  };

  const renderNavItems = () => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {NAV_ITEMS.map((item, index) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Button
            color="inherit"
            onClick={() => scrollToSection(item.key)}
            sx={{
              mx: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            {t(item.label)}
          </Button>
        </motion.div>
      ))}
    </Box>
  );

  const isLocal = isLocalEnvironment();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('header.title')}
          </motion.span>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <MobileDrawer
              isOpen={mobileOpen}
              onClose={handleDrawerToggle}
              navItems={NAV_ITEMS.map(item => ({ ...item, label: t(item.label) }))}
              onItemClick={scrollToSection}
            />
          </>
        ) : renderNavItems()}
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          sx={{ ml: 1 }}
          aria-label={theme.palette.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {isLocal && (
          <TranslationKeyDisplay showKeys={showKeys} toggleShowKeys={toggleShowKeys} />
        )}
        <LanguageMenu
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
