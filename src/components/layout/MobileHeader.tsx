import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import MobileDrawer from './MobileDrawer';

interface MobileHeaderProps {
  toggleTheme: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
  );
};

export default MobileHeader;
