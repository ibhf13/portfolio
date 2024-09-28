import { useState } from 'react';
import { useTranslation } from './useCustomTranslation';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error';
}

export const useContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_6r2730s',
        'template_roz6cgr',
        formData,
        'EGkNg-Cf8-ThTtsFd'
      );

      if (result.text === 'OK') {
        setSnackbar({ open: true, message: t('contact.successMessage'), severity: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t('contact.unexpectedError');
      setSnackbar({ open: true, message: t('contact.errorMessage', { error: errorMessage }), severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return { formData, snackbar, handleChange, handleSubmit, handleCloseSnackbar };
};
