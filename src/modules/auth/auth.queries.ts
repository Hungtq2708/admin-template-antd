import { useMutation } from 'react-query'
import { onLogin } from 'services/auth.service'
import { TLoginSchema } from 'services/auth.type'

export const useLogin = () => {
  return useMutation((data: TLoginSchema) => onLogin(data))
}
