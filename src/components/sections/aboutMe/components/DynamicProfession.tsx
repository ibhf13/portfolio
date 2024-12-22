import { useTranslation } from '@/hooks/useCustomTranslation'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { ProfessionKeys } from '../types/aboutMe.types'

const professions = [ProfessionKeys.SOFTWARE, ProfessionKeys.FRONTEND]

const DynamicProfession = () => {
    const { t } = useTranslation()
    const translatedTexts = professions.map(profession => t(profession))
    const { displayText, isDone } = useTypingEffect({ texts: translatedTexts })

    return (
        <>
            <Typography variant="h5" color="primary" sx={{ position: 'relative' }}>
                {displayText}
                <motion.span
                    animate={{ opacity: isDone ? 0 : [1, 0] }}
                    transition={{
                        duration: 0.5,
                        repeat: 2,
                        repeatType: 'reverse',
                    }}
                    style={{
                        position: 'absolute',
                        display: 'inline-block',
                        width: '2px',
                        backgroundColor: 'currentColor',
                        marginLeft: '2px',
                    }}
                />
            </Typography>
        </>
    )
}

export default DynamicProfession 