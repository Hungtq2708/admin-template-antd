import type { FC } from 'react'
import type { RouteProps } from 'react-router'

import { Button, Result } from 'antd'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { storage } from 'libs/web-storage'
import { AUTH_SESSION_KEY } from 'constants/constants'

export const PrivateRoute: FC<RouteProps> = props => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const onLoginPage = () => {
    storage.clear(AUTH_SESSION_KEY)
    navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })
  }

  return isAuth ? (
    (props.element as React.ReactElement)
  ) : (
    <Result
      status="403"
      title="403"
      subTitle={'Sorry, you are not authorized to access this page.'}
      extra={
        <Button type="primary" onClick={onLoginPage}>
          Go To Login
        </Button>
      }
    />
  )
}
