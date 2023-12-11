import { ReactNode } from 'react'
import { Route } from 'react-router-dom'
import { RouteType } from './config'
import Content from '~/layout/Content'
import appRoutes from './appRoutes'

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route index path={route.path} element={<Content>{route.element}</Content>} key={index} />
  ))
}

export const routes: ReactNode = generateRoute(appRoutes)
