import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from "../../../../resources/icons/github.svg"
import XingIcon from "../../../../resources/icons/xing.svg"
import { DialogState, SocialLink } from '../types/contactForm.types'

export const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    message: ''
}

export const INITIAL_DIALOG_STATE: DialogState = {
    open: false,
    isLoading: false,
    message: '',
    severity: 'success'
}

export const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY || ''
export const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID || ''
export const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID || ''

export const DIALOG_AUTO_HIDE_DURATION = 5000

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'LinkedIn',
        icon: LinkedInIcon,
        url: 'https://www.linkedin.com/in/ibrahimklusmann/'
    },
    {
        name: 'GitHub',
        icon: GitHubIcon,
        url: 'https://github.com/ibhf13'
    },
    {
        name: 'Xing',
        icon: XingIcon,
        url: ''
    }
] 