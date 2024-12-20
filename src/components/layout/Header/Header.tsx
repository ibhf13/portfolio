import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderContent from './HeaderContent';
import MobileHeader from './MobileHeader';
import '../../../styles/theme.types';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Toolbar sx={{
        background: theme.palette.mode === 'light'
          ? theme.palette.primary.gradientLight
          : theme.palette.primary.gradientDark
      }}>
        {isMobile ? (
          <MobileHeader toggleTheme={toggleTheme} />
        ) : (
          <HeaderContent toggleTheme={toggleTheme} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
