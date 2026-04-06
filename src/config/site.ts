/**
 * Canonical site URL — used for SEO meta (og:url, canonical link, sitemap).
 * Override at build time via SITE_URL env var if you ever switch domains.
 */
export const SITE_URL: string =
    (import.meta.env.SITE_URL as string | undefined) ?? 'https://ibrahim-klusmann.web.app'

export const SITE_AUTHOR = 'Ibrahim Klusmann'
