import type { Theme } from './utils/theme'
import { createContext } from 'react'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
  themeToggle?: () => void
}
export const ThemeContext = createContext<ThemeContextProps>({})
