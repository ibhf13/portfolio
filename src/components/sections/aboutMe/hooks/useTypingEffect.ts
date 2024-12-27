import { useEffect, useState } from 'react'

interface UseTypingEffectProps {
    texts: string[]
    typingDelay?: number
    deletingDelay?: number
}

interface UseTypingEffectReturn {
    displayText: string
    isDone: boolean
}

export const useTypingEffect = ({
    texts,
    typingDelay = 50,
    deletingDelay = 2000,
}: UseTypingEffectProps): UseTypingEffectReturn => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        if (isDone || !texts.length) return

        const currentText = texts[currentIndex]

        if (!currentText) {
            setIsDone(true)

            return
        }

        if (!isDeleting && displayText === currentText) {
            if (currentIndex === texts.length - 1) {
                setIsDone(true)

                return
            }

            setTimeout(() => setIsDeleting(true), deletingDelay)

            return
        }

        if (isDeleting && displayText === '') {
            setIsDeleting(false)
            if (currentIndex < texts.length - 1) {
                setCurrentIndex((prev) => prev + 1)
            } else {
                setIsDone(true)
            }

            return
        }

        const timeout = setTimeout(() => {
            setDisplayText(prev => {
                if (isDeleting) {
                    return prev.slice(0, -1)
                }

                return currentText.slice(0, prev.length + 1)
            })
        }, typingDelay)

        return () => clearTimeout(timeout)
    }, [currentIndex, displayText, isDeleting, isDone, texts, deletingDelay, typingDelay])

    return { displayText, isDone }
} 