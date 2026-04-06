import emailjs from '@emailjs/browser'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useTranslation } from '../../../../hooks/useCustomTranslation'
import { EMAILJS_PUBLIC_KEY, INITIAL_DIALOG_STATE, INITIAL_FORM_STATE } from '../constants/contactForm.constants'
import { ContactFormData, DialogState } from '../types/contactForm.types'

interface UseContactFormProps {
    emailjsTemplateId: string
    emailjsServiceId: string
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = (data: ContactFormData): FormErrors => {
    const errors: FormErrors = {}

    if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters'
    if (!EMAIL_REGEX.test(data.email.trim())) errors.email = 'Please enter a valid email address'
    if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'

    return errors
}

export const useContactForm = ({ emailjsTemplateId, emailjsServiceId }: UseContactFormProps) => {
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE)
    const [dialogState, setDialogState] = useState<DialogState>(INITIAL_DIALOG_STATE)
    const [errors, setErrors] = useState<FormErrors>({})
    const { t } = useTranslation()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validate(formData)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)

            return
        }

        setErrors({})
        setDialogState({
            open: true,
            isLoading: true,
            message: '',
            severity: 'success'
        })

        try {
            await emailjs.send(
                emailjsServiceId,
                emailjsTemplateId,
                formData,
                EMAILJS_PUBLIC_KEY
            )
            setDialogState({
                open: true,
                isLoading: false,
                message: t('contact.successMessage'),
                severity: 'success'
            })
            setFormData(INITIAL_FORM_STATE)
        } catch (error) {
            setDialogState({
                open: true,
                isLoading: false,
                message: t('contact.errorMessage', { error: error as string }),
                severity: 'error'
            })
        }
    }

    const handleCloseDialog = () => {
        setDialogState(INITIAL_DIALOG_STATE)
    }

    return {
        formData,
        dialogState,
        errors,
        handleChange,
        handleSubmit,
        handleCloseDialog,
    }
}
