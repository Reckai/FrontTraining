import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { routeConfig } from './config'

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          routeConfig.map(({ path, element }) => <Route key={path} path={path} element={element} />)
        }
      </Routes>
    </Suspense>
  )
}

export default AppRouter
