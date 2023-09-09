import { notification } from 'antd'
import { AxiosError } from 'axios'
import { AUTH_SESSION_KEY } from 'constants/constants'
import { storage } from 'libs/web-storage'
import { ENotification, EResponseCode, TErrorResponse } from 'models/enums'
import { ReactNode } from 'react'

export function formatSearch(se: string) {
  se = decodeURIComponent(se)
  se = se.substr(1)
  const arr = se.split('&')
  const obj: Record<string, string> = {}
  let newArr = []

  arr.forEach((v, i) => {
    newArr = v.split('=')

    if (typeof obj[newArr[0]] === 'undefined') {
      obj[newArr[0]] = newArr[1]
    }
  })

  return obj
}

export const alertMessage = (message: string, type: ENotification = ENotification.SUCCESS, description?: ReactNode) => {
  // @ts-ignore
  return notification[type]({
    placement: 'topRight',
    duration: 2,
    message: (
      <div
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    ),
    description,
  })
}

export const handleError = (error: AxiosError) => {
  if (error.response) {
    const {
      data: { statusCode },
    } = error.response as TErrorResponse

    switch (statusCode) {
      case EResponseCode.UNAUTHORIZED:
        const pathname = window.location.pathname
        alertMessage('Session expired! Please login again!')
        setTimeout(() => {
          storage.clear(AUTH_SESSION_KEY)
          window.location.href = `/login${'?from=' + encodeURIComponent(pathname)}`
        }, 1500)
        break

      case EResponseCode.FORBIDDEN:
        alertMessage('Forbidden')
        break

      case EResponseCode.INTERNAL_SERVER_ERROR:
        alertMessage('Internal server error')
        break

      default:
        break
    }
  } else {
    alertMessage('Something went wrong. Please try again!')
  }
}
