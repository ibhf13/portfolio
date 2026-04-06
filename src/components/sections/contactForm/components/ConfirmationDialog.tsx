import { useTranslation } from '@/hooks/useCustomTranslation'
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material'
import { ConfirmationDialogProps } from '../types/contactForm.types'

const ConfirmationDialog = ({ state, onClose }: ConfirmationDialogProps) => {
    const { t } = useTranslation()

    if (!state.open) return null

    const titleId = 'confirmation-dialog-title'
    const isError = state.severity !== 'success'
    const titleText = state.isLoading
        ? t('contact.confirmationDialog.sending')
        : isError
            ? t('contact.confirmationDialog.errorTitle', { error: '' })
            : t('contact.confirmationDialog.successTitle')

    return (
        <Dialog
            open={state.open}
            onClose={state.isLoading ? undefined : onClose}
            disableEscapeKeyDown={state.isLoading}
            aria-labelledby={titleId}
        >
            <DialogTitle
                id={titleId}
                color={isError && !state.isLoading ? 'error.main' : undefined}
            >
                {titleText}
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        minWidth: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    {state.isLoading ? (
                        <CircularProgress aria-label={t('common.loading')} />
                    ) : (
                        <Typography variant="body1">{state.message}</Typography>
                    )}
                </Box>
            </DialogContent>
            {!state.isLoading && (
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        {t('contact.confirmationDialog.closeButton')}
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    )
}

export default ConfirmationDialog
