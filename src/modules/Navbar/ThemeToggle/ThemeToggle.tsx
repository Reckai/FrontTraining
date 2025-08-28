import { useContext } from 'react'
import { ThemeContext } from '@/theme/themeContext.tsx'

function ThemeToggle() {
  const themeContext = useContext(ThemeContext)

  const currentTheme = themeContext.theme

  return (
    <div className="w-fit flex items-center text-primary position-relative">
      <div onClick={() => themeContext.themeToggle!()} className="flex items-center border-border border-2 rounded-md p-sm">
        {currentTheme}
      </div>

    </div>
  )
}

export default ThemeToggle
