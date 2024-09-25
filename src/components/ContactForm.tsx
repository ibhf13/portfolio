import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useCustomTranslation';


const ContactForm: React.FC = () => {
  const { t } = useTranslation();
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
      // Implement your form submission logic here
      // For example: await submitForm(formData);
      setSnackbar({ open: true, message: t('contact.successMessage') });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : t('contact.unexpectedError');
      setSnackbar({ open: true, message: t('contact.errorMessage', { error: errorMessage }) });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box component="section" id="contact" py={8}>
      <Typography variant="h2" textAlign="center" mb={4}>
        {t('contact.title')}
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box component="form" onSubmit={handleSubmit} maxWidth="sm" margin="auto">
          <TextField
            fullWidth
            margin="normal"
            label={t('contact.nameLabel')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
        </Box>
      </motion.div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
      />
    </Box>
  );
};

export default ContactForm;
