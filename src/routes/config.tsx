import type { FC, ReactElement } from 'react'
import type { RouteProps } from 'react-router'
import { PrivateRoute } from './private-route'

type WrapperRouteProps = {
  /** document title locale id */
  titleId: string
  /** authorization？ */
  isAuth?: boolean
} & RouteProps

export const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, isAuth, ...props }) => {
  if (titleId) {
    document.title = titleId
  }

  return isAuth ? <PrivateRoute {...props} /> : (props.element as ReactElement)
}