import React from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "../../../resources/icons/github.svg";
import XingIcon from "../../../resources/icons/xing.svg";
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledIcon = styled('img')<{ $isGitHub?: boolean }>(({ theme, $isGitHub }) => ({
  width: '32px',
  height: '32px',
  transition: 'all 0.3s ease',
  ...$isGitHub && {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0.2)',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '50%',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&:hover': {
    backgroundColor: "#3f465d",
    transform: 'translateY(-8px) scale(1.1)',
    boxShadow: `0 12px 20px -5px ${theme.palette.primary.main}40`,
    '& .MuiSvgIcon-root, & img': {
      filter: 'saturate(1.5) brightness(1)',
    },
  },
}));

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/yourusername' },
  { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/yourusername' },
  { name: 'Xing', icon: XingIcon, url: 'https://www.xing.com/profile/yourusername' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

const SocialLinks: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      mt={6}
    >
      <Box
        display="flex"
        justifyContent="center"
        gap={4}
      >
        {socialLinks.map((link) => (
          <motion.div
            key={link.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Tooltip title={link.name} arrow placement="top">
              <StyledIconButton
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.name === 'LinkedIn' ? (
                  <LinkedInIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                ) : (
                  <StyledIcon
                    src={link.icon}
                    alt={`${link.name} icon`}
                    $isGitHub={link.name === 'GitHub'}
                  />
                )}
              </StyledIconButton>
            </Tooltip>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default SocialLinks;
