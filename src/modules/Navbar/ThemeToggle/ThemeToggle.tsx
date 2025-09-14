import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@/modules/shared/Button/Button.tsx'
import { ThemeContext } from '@/theme/themeContext.tsx'
import { availableThemes } from '@/theme/utils/theme.ts'

function ThemeToggle() {
  const themeContext = useContext(ThemeContext)
  const { t } = useTranslation('common')
  const currentTheme = themeContext.theme

  return (

    <Button onClick={() => themeContext.themeToggle!()} variant="outlined">
      {t(availableThemes.find(theme => theme.value === currentTheme)!.key)}
    </Button>

  )
}

export default ThemeToggle
