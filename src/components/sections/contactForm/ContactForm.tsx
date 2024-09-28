import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../../hooks/useCustomTranslation';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSnackbar({ open: true, message: t('contact.successMessage') });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t('contact.unexpectedError');
      setSnackbar({ open: true, message: t('contact.errorMessage', { error: errorMessage }) });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box component="section" id="contact" py={isMobile ? 4 : isTablet ? 6 : 8}>
      <Typography variant="h2" textAlign="center" mb={4} component={motion.h2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {t('contact.title')}
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box component="form" onSubmit={handleSubmit} maxWidth={isMobile ? "xs" : "sm"} margin="auto">
          <motion.div variants={itemVariants}>
            <TextField
              fullWidth
              margin="normal"
              label={t('contact.nameLabel')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TextField
              fullWidth
              margin="normal"
              label={t('contact.emailLabel')}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TextField
              fullWidth
              margin="normal"
              label={t('contact.messageLabel')}
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              {t('contact.submitButton')}
            </Button>
          </motion.div>
        </Box>
      </motion.div>
      <AnimatePresence>
        {snackbar.open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message={snackbar.message}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ContactForm;
