import apiClient from 'config/api-client'
import { TLoginSchema, TSession } from './auth.type'
import { ENDPOINTS } from 'constants/endpoints'

const { post } = apiClient

export const onLogin = (data: TLoginSchema) => {
  return post<unknown, TSession>(ENDPOINTS.AUTH.LOGIN, data)
}
