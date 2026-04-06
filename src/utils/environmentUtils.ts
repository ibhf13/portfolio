export const isLocalEnvironment = (): boolean => {
  if (typeof window === 'undefined') return false

  const { hostname } = window.location

  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '[::1]' ||
    hostname.startsWith('192.168.') ||
    hostname.endsWith('.local')
  )
}
