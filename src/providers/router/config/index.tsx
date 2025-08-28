import type { RouteProps } from 'react-router'
import { AboutPageLazy } from '../../../pages/AboutPage'

import { MainPageLazy } from '../../../pages/MainPage'

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
} as const
type TAppRoutes = typeof AppRoutes

export const RoutesPaths: Record<keyof TAppRoutes, string> = {
  MAIN: '/',
  ABOUT: '/about',
}

export const routeConfig: Array<RouteProps> = [

  { path: RoutesPaths.MAIN, element: <MainPageLazy /> },
  {
    path: RoutesPaths.ABOUT,
    element: <AboutPageLazy />,
  },
]
