import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '@/modules/Navbar/Navbar.tsx'
import Sidebar from '@/modules/Sidebar/Sidebar.tsx'
import AppRouter from './providers/router/AppRouter'

function MyComponent() {
  const { t, i18n } = useTranslation('common')

  return (
    <h1>
      {t('s ')}
      <button onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}>
        change localization
      </button>
    </h1>
  )
}
function App() {
  return (
    <div className="text-primary h-screen flex-col flex ">
      <Suspense>
        <Navbar />
        <div className="flex grow">
          <Sidebar />
          <div className="flex grow p-sm">
            <AppRouter />
            <MyComponent />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
