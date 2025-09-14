import { useCallback, useEffect } from 'react'
import { useToggle } from '@/modules/shared/hooks/useToggle/useToggle.tsx'
import { getInitialTheme, getSystemTheme, saveTheme, setThemeAttribute, themes } from '../utils/theme'

const getInitialState = () => {
  const initialTheme = getInitialTheme()
  const index = themes.indexOf(initialTheme)
  return [initialTheme, ...themes.slice(0, index), ...themes.slice(index + 1)]
}

export function useTheme() {
  const initialState = getInitialState()
  const [theme, toggle, nextTheme] = useToggle(initialState)

  const themeToggle = useCallback(() => {
    toggle()
    saveTheme(nextTheme)
  }, [theme])
  useEffect(() => {
    setThemeAttribute(theme)
    saveTheme(theme)
  }, [theme])
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = () => {
      if (!localStorage.getItem('theme')) {
        toggle(getSystemTheme())
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])
  return {
    theme,
    toggle,
    themeToggle,
  }
}
