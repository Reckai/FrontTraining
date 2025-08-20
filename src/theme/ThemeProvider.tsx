import React from 'react'
import { useTheme } from './hooks/useTheme'
import { ThemeContext } from './themeContext'

function ThemeProvider({ children }: { children: React.ReactElement }) {
  const themeState = useTheme()
  const props = React.useMemo(
    () => ({
      theme: themeState.theme,
      setTheme: themeState.setTheme,
    }),
    [themeState.theme],
  )
  return (
    <ThemeContext.Provider
      value={props}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
