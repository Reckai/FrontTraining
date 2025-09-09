import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import PageLoader from '@/modules/PageLoader/PageLoader.tsx'
import { routeConfig } from './config'

function AppRouter() {
  return (
    <Routes>
      {routeConfig.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="w-full h-full">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  )
}
export default AppRouter
