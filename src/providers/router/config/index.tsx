import type { RouteProps } from 'react-router'
import { AboutPageLazy } from '@/pages/AboutPage'

import { MainPageLazy } from '@/pages/MainPage'
import NotFoundPage from '@/pages/NotFound.tsx'

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  NOTFOUND: 'not-found',
} as const
type TAppRoutes = typeof AppRoutes

export const RoutesPaths: Record<keyof TAppRoutes, string> = {
  MAIN: '/',
  ABOUT: '/about',
  NOTFOUND: '/*',
}

export const routeConfig: Array<RouteProps> = [

  { path: RoutesPaths.MAIN, element: <MainPageLazy /> },
  {
    path: RoutesPaths.ABOUT,
    element: <AboutPageLazy />,
  },
  {
    path: RoutesPaths.NOTFOUND,
    element: <NotFoundPage />,
  },
]
