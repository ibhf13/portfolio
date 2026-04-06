import { type FC } from 'react'

interface SeoProps {
    title: string
    description: string
    /** Absolute URL of the canonical page (e.g. https://ibrahim-klusmann.web.app/project/portfolio) */
    canonical?: string
    /** Absolute URL of the social-share image (Open Graph + Twitter card) */
    image?: string
    /** "website" for the homepage, "article" for project detail pages */
    type?: 'website' | 'article'
}

/**
 * Renders <title> and SEO meta tags into <head>.
 *
 * Relies on React 19's native head-tags hoisting — any <title> / <meta> /
 * <link> rendered from a component is automatically lifted into <head>.
 * No react-helmet-async needed.
 */
const Seo: FC<SeoProps> = ({ title, description, canonical, image, type = 'website' }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            {canonical && <meta property="og:url" content={canonical} />}
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </>
    )
}

export default Seo
