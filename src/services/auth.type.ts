export type TSession = {
  accessToken: string
  refreshToken: string
  expiresIn: number
  refreshExpiresIn: number
}

export type TLoginSchema = {
  email: string
  password: string
}
