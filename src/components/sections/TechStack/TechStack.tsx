import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import TechCard from './TechCard';
import { containerVariants, titleVariants, tabContentVariants } from './TechStackAnimations';
import { techStackData, TechStackSection } from './TechStackData';
import TechStackTabs from './TechStackTabs';
import { styled } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<TechStackSection | 'all'>('all');

  const technologies = activeSection === 'all'
    ? Object.values(techStackData).flat()
    : techStackData[activeSection];

  return (
    <StyledSection component="section" id="techStack" aria-labelledby="techStackTitle">
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <Typography id="techStackTitle" variant="h2" textAlign="center" mb={4} fontWeight="bold">
          {t('techStack.title')}
        </Typography>
      </motion.div>

      <TechStackTabs activeSection={activeSection} onChangeSection={setActiveSection} />

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <AnimatePresence mode="wait">
          <motion.div key={activeSection} variants={tabContentVariants} initial="hidden" animate="visible" exit="exit">
            <Grid container spacing={2} justifyContent="center">
              {technologies.map((tech, index) => (
                <Grid item xs={6} sm={4} md={3} key={tech.name}>
                  <TechCard tech={tech} index={index} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </StyledSection>
  );
};

export default TechStack;
