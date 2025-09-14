import type { Theme } from './utils/theme'
import { createContext } from 'react'

export interface ThemeContextProps {
  theme?: Theme
  themeToggle?: () => void
}
export const ThemeContext = createContext<ThemeContextProps>({})
