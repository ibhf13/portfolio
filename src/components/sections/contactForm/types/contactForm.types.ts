import { AlertColor } from '@mui/material'

export interface ContactFormData {
    [key: string]: string
    name: string
    email: string
    message: string
}

export interface DialogState {
    open: boolean
    isLoading: boolean
    message: string
    severity: AlertColor
}

export interface SocialLink {
    name: string
    icon: string | React.ComponentType
    url: string
}

export interface ContactFormProps {
    emailjsPublicKey: string
    emailjsTemplateId: string
    emailjsServiceId: string
}

export interface ConfirmationDialogProps {
    state: DialogState
    onClose: () => void
}