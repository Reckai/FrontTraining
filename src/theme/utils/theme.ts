export const availableThemes = [
  { value: 'light', label: '☀️ Светлая', description: 'Классическая светлая тема' },
  { value: 'dark', label: '🌙 Темная', description: 'Темная тема для работы в темноте' },
  { value: 'green', label: '🌿 Зеленая', description: 'Природная зеленая тема' },
  { value: 'pink', label: '🌸 Розовая', description: 'Нежная розовая тема' },
] as const

export type Theme = (typeof availableThemes)[number]['value']

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
