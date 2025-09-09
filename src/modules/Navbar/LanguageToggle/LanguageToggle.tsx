import { useTranslation } from 'react-i18next'
import Button from '@/modules/shared/Button/Button.tsx'

function LanguageToggle() {
  const { t, i18n } = useTranslation('common')
  const languageToShowOrSwitch = i18n.language === 'ru' ? 'en' : 'ru'
  const handleChangeLanguage = () => {
    i18n.changeLanguage(
      languageToShowOrSwitch,
    )
  }

  return (
    <Button onClick={handleChangeLanguage}>
      {t(languageToShowOrSwitch)}
    </Button>
  )
}

export default LanguageToggle
