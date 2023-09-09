import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { AUTH_SESSION_KEY } from 'constants/constants'
import { handleError } from 'libs/utils'
import { storage } from 'libs/web-storage'
import { TSession } from 'services/auth.type'

const controller = new AbortController()

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  timeout: 10000,
})

apiClient.interceptors.response.use(
  (response: AxiosRequestConfig) => response.data,
  (error: AxiosError) => {
    if (error) {
      controller.abort()
      handleError(error)
      return Promise.reject(error)
    }
  },
)

apiClient.interceptors.request.use(request => {
  const storedTSession = storage.load<TSession>(AUTH_SESSION_KEY) as TSession | undefined

  applyAccessToken(request, storedTSession)
  return request
})

const applyAccessToken = (requestConfig: AxiosRequestConfig, TSession?: TSession) => {
  if (!requestConfig.headers) {
    requestConfig.headers = {}
  }

  if (TSession?.accessToken) {
    requestConfig.headers = {
      ...requestConfig.headers,
      Authorization: `Bearer ${TSession.accessToken}`,
    }
  }

  return {
    ...requestConfig,
    signal: controller.signal,
  }
}

export default apiClient
