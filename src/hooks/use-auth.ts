import { AUTH_SESSION_KEY } from 'constants/constants'
import { storage } from 'libs/web-storage'
import { TSession } from 'services/auth.type'

export const useAuth = () => {
  const session = storage.load<TSession>(AUTH_SESSION_KEY)

  const isAuth = !!(session && session.accessToken)

  return {
    isAuth,
  }
}
