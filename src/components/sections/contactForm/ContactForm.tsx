import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Button, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import ConfirmationDialog from './components/ConfirmationDialog'
import SocialLinks from './components/SocialLinks'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from './constants/contactForm.constants'
import { useContactForm } from './hooks/useContactForm'
import { FormContainer, StyledFormSection } from './styles/contactForm.styles'

const ContactForm = () => {
  const { t } = useTranslation()
  const {
    formData,
    dialogState,
    errors,
    handleChange,
    handleSubmit,
    handleCloseDialog,
  } = useContactForm({
    emailjsTemplateId: EMAILJS_TEMPLATE_ID,
    emailjsServiceId: EMAILJS_SERVICE_ID,
  })
  const { itemVariants } = useAnimatedSection({
    type: AnimationType.FadeInUp,
    staggerChildren: 0.1,
  })

  const isSubmitting = dialogState.isLoading

  return (
    <StyledFormSection as="section" id="contact" aria-labelledby="contactTitle">
      <Typography
        id="contactTitle"
        variant="h2"
        textAlign="center"
        mb={4}
        component={motion.h2}
        variants={itemVariants}
      >
        {t('contact.title')}
      </Typography>

      <FormContainer
        as="form"
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby="contactTitle"
      >
        <TextField
          fullWidth
          label={t('contact.nameLabel')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          error={Boolean(errors.name)}
          helperText={errors.name}
          required
        />
        <TextField
          fullWidth
          label={t('contact.emailLabel')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          error={Boolean(errors.email)}
          helperText={errors.email}
          required
        />
        <TextField
          fullWidth
          label={t('contact.messageLabel')}
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          error={Boolean(errors.message)}
          helperText={errors.message}
          inputProps={{ maxLength: 2000 }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {t('contact.submitButton')}
        </Button>
      </FormContainer>

      <SocialLinks />

      <ConfirmationDialog state={dialogState} onClose={handleCloseDialog} />
    </StyledFormSection>
  )
}

export default ContactForm
