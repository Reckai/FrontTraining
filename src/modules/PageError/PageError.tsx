import { useTranslation } from 'react-i18next'

import Button from '../shared/Button/Button'

function PageError() {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div>
      <p>{t('pageError')}</p>
      <Button onClick={reloadPage}>

        {t('reloadPage')}
      </Button>
    </div>
  )
}
export default PageError
