import { useEffect, useState } from 'react'
import { getInitialTheme, getSystemTheme, saveTheme, setThemeAttribute } from '../utils/theme'

export function useTheme() {
  const [theme, setTheme] = useState(() => getInitialTheme())
  useEffect(() => {
    setThemeAttribute(theme)
    saveTheme(theme)
  }, [theme])
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = () => {
      if (!localStorage.getItem('theme')) {
        setTheme(getSystemTheme())
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])
  return {
    theme,
    setTheme,
  }
}
