import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently most visible in the viewport.
 * Returns the id of the active section, or null if none are intersecting.
 */
export const useActiveSection = (sectionIds: readonly string[]): string | null => {
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

        const visible = new Map<string, number>()

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        visible.set(entry.target.id, entry.intersectionRatio)
                    } else {
                        visible.delete(entry.target.id)
                    }
                }

                if (visible.size === 0) return

                let topId: string | null = null
                let topRatio = -Infinity

                for (const [id, ratio] of visible) {
                    if (ratio > topRatio) {
                        topId = id
                        topRatio = ratio
                    }
                }

                setActiveId(topId)
            },
            {
                threshold: [0.25, 0.5, 0.75],
                rootMargin: '-20% 0px -20% 0px',
            }
        )

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [sectionIds])

    return activeId
}
