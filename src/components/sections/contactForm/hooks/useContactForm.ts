import emailjs from '@emailjs/browser'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useTranslation } from '../../../../hooks/useCustomTranslation'
import { EMAILJS_PUBLIC_KEY, INITIAL_DIALOG_STATE, INITIAL_FORM_STATE } from '../constants/contactForm.constants'
import { ContactFormData, DialogState } from '../types/contactForm.types'

interface UseContactFormProps {
    emailjsTemplateId: string
    emailjsServiceId: string
}


export const useContactForm = ({ emailjsTemplateId, emailjsServiceId }: UseContactFormProps) => {
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE)
    const [dialogState, setDialogState] = useState<DialogState>(INITIAL_DIALOG_STATE)
    const { t } = useTranslation()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
        handleChange,
        handleSubmit,
        handleCloseDialog
    }
}
