export const availableThemes = [
  { value: 'light', key: 'lightTheme' },
  { value: 'dark', key: 'darkTheme' },
  { value: 'green', key: 'greenTheme' },
] as const

export type Theme = (typeof availableThemes)[number]['value']
export const themes = availableThemes.map(theme => theme.value)
export function getStoredTheme(): Theme | null {
  const storedTheme = localStorage.getItem('theme')

  return isTheme(storedTheme) ? storedTheme : null
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function setThemeAttribute(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function saveTheme(theme: Theme) {
  localStorage.setItem('theme', theme)
}

export function getInitialTheme(): Theme {
  return getStoredTheme() || getSystemTheme()
}

function isTheme(theme: string | null): theme is Theme {
  return availableThemes.some(t => t.value === theme)
}
