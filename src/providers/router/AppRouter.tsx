import { Route, Routes } from 'react-router'
import { routeConfig } from './config'

function AppRouter() {
  return (

    <Routes>
      {
        routeConfig.map(({ path, element }) => <Route key={path} path={path} element={element} />)
      }
    </Routes>

  )
}

export default AppRouter
