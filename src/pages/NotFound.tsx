import { useTranslation } from 'react-i18next'

function NotFoundPage() {
  const { t } = useTranslation('common')
  return <div className="w-full h-full flex items-center justify-center">{t('pageNotFound')}</div>
}

export default NotFoundPage
