import type { FC } from 'react'
import type { RouteObject } from 'react-router'

import { lazy } from 'react'
import { Navigate } from 'react-router'
import { useRoutes } from 'react-router-dom'

import { WrapperRouteComponent } from './config'
import { LayoutPage } from 'components/layout'
import { DashboardPage } from 'pages/dashboard'
import { LoginPage } from 'pages/login'

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ 'pages/404'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="login" />,
  },
  {
    path: '/login',
    element: <WrapperRouteComponent element={<LoginPage />} titleId="Login" />,
  },

  {
    path: '/admin',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId=""  />, //isAuth

    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<DashboardPage />} titleId="Dashboard" />,
      },
    ],
  },
  {
    path: '*',
    element: <WrapperRouteComponent element={<NotFound />} titleId="Page not found" />,
  },
]

export const RenderRouter: FC = () => {
  const element = useRoutes(routes)

  return element
}
