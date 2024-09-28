import React, { useEffect } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import { useContactForm } from '../../../hooks/useContactForm';
import SocialLinks from './SocialLinks';
import { formContainerVariants, formItemVariants, submitButtonVariants, snackbarVariants } from './ContactFormAnimations';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { formData, snackbar, handleChange, handleSubmit, handleCloseSnackbar } = useContactForm();

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  return (
    <Box component="section" id="contact" py={isMobile ? 4 : 8}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formContainerVariants}
      >
        <Typography variant="h2" textAlign="center" mb={4} component={motion.h2} variants={formItemVariants}>
          {t('contact.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} maxWidth="sm" margin="auto">
          <motion.div variants={formItemVariants}>
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
          <motion.div variants={formItemVariants}>
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
          <motion.div variants={formItemVariants}>
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
          <motion.div variants={formItemVariants}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
              component={motion.button}
              variants={submitButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {t('contact.submitButton')}
            </Button>
          </motion.div>
        </Box>
        <SocialLinks />
      </motion.div>
      <AnimatePresence>
        {snackbar.open && (
          <motion.div
            variants={snackbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled">
                {snackbar.message}
              </Alert>
            </Snackbar>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ContactForm;
