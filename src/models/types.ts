import { ReactNode } from 'react'
import { EResponseCode } from './enums'

export type TMenuItem = {
  icon: ReactNode
  path: string
  label: string
  title?: string
  children?: TMenuItem[]
  accessWith: boolean
}

export type TMenuChild = Omit<TMenuItem, 'children'>

export type TMenuList = TMenuItem[]

export type TResponseList<T> = {
  docs: T[]
  // metadata: TMetadata[]
  totalDocs: number
  limit: number
  hasPrevPage: true
  hasNextPage: true
  page: number
  totalPages: number
  offset: number
  prevPage: number
  nextPage: number
  pagingCounter: number
}

export type TErrorResponse = {
  data: {
    code: string
    httpStatus: EResponseCode
    message: string
    statusCode: EResponseCode
  }
  statusText: string
  status: EResponseCode
}

export type TParamsList = {
  page: number
  limit: number
}

