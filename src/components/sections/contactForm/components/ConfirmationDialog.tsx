import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { ConfirmationDialogProps } from '../types/contactForm.types'

const ConfirmationDialog = ({ state, onClose }: ConfirmationDialogProps) => {
    const { t } = useTranslation()
    const { containerVariants } = useAnimatedSection({ type: AnimationType.ScaleInCenter })

    return (
        <AnimatePresence>
            {state.open && (
                <Dialog
                    open={state.open}
                    onClose={onClose}
                    PaperProps={{
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        exit: "hidden"
                    }}
                >
                    <DialogContent>
                        <Box
                            sx={{
                                minWidth: 300,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            {state.isLoading ? (
                                <>
                                    <CircularProgress />
                                    <Typography variant="body1">
                                        {t('contact.sending')}
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <Typography
                                        variant="h6"
                                        color={state.severity === 'success' ? 'success.main' : 'error.main'}
                                    >
                                        {state.severity === 'success'
                                            ? t('contact.confirmationDialog.successTitle')
                                            : t('contact.confirmationDialog.errorTitle', { error: state.message })
                                        }
                                    </Typography>
                                    <Typography variant="body1">{state.message}</Typography>
                                </>
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
            )}
        </AnimatePresence>
    )
}

export default ConfirmationDialog