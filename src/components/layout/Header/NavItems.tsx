import React from 'react';
import { Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import { NAV_ITEMS } from './HeaderTypes';

const NavItems: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: 'primary.main',
                transition: 'all 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
                left: '0%',
              },
            }}
          >
            {t(item.label)}
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};

export default NavItems;
