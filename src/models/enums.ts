export enum EResponseCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  GATEWAY_TIMEOUT = 504,
}

export enum ENotification {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

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
