import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import emailjs from '@emailjs/browser'
import { Button, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConfirmationDialog from './components/ConfirmationDialog'
import SocialLinks from './components/SocialLinks'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from './constants/contactForm.constants'
import { useContactForm } from './hooks/useContactForm'
import { FormContainer, StyledFormSection } from './styles/contactForm.styles'

const ContactForm = () => {
  const { t } = useTranslation()
  const { formData, dialogState, handleChange, handleSubmit, handleCloseDialog } = useContactForm({
    emailjsTemplateId: EMAILJS_TEMPLATE_ID,
    emailjsServiceId: EMAILJS_SERVICE_ID
  })
  const { containerVariants, itemVariants } = useAnimatedSection({
    type: AnimationType.FadeInUp,
    staggerChildren: 0.1
  })

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  return (
    <StyledFormSection as="section" id="contact">
      <Typography
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
      >
        <TextField
          fullWidth
          label={t('contact.nameLabel')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label={t('contact.emailLabel')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
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
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          {t('contact.submitButton')}
        </Button>
      </FormContainer>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SocialLinks />
      </motion.div>

      <ConfirmationDialog state={dialogState} onClose={handleCloseDialog} />
    </StyledFormSection >
  )
}

export default ContactForm
