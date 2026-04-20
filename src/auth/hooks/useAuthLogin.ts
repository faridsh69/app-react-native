import {
  useCrudAuthLogin,
  useCrudAuthProfile,
  useCrudAuthRefreshToken,
} from '@/apis/useCruds/authCruds'
import { setLsAuthUser, setLsBearerToken, setLsRefreshToken } from '@/core/helpers/ls.helpers'
import { toastError } from '@/ui'
import { useAtom } from 'jotai'

import { authAtom } from '../atoms/authAtom'
import { authModalAtom, DEFAULT_AUTH_MODAL_ATOM } from '../atoms/authModalAtom'

export const useAuthLogin = (email: string, password: string) => {
  const { createMutation: loginMutation } = useCrudAuthLogin()
  const { createMutation: fetchProfileMutation } = useCrudAuthProfile()
  const { createMutation: refreshTokenMutation } = useCrudAuthRefreshToken()
  const [, setAuthModal] = useAtom(authModalAtom)
  const [, setAuth] = useAtom(authAtom)

  const handleLogin = () => {
    loginMutation.mutate({
      data: {
        username: email,
        password,
      },
      onSuccess: response => {
        setAuth({
          bearerToken: response.data.access_token,
          isLoggedIn: true,
          user: null,
          refreshToken: '',
        })
        setAuthModal(DEFAULT_AUTH_MODAL_ATOM)
        setLsBearerToken(response.data.access_token)

        fetchProfileMutation.mutate({
          data: {},
          onSuccess: response => {
            setAuth(p => ({
              ...p,
              user: response.data,
            }))
            setLsAuthUser(response.data)
          },
        })

        refreshTokenMutation.mutate({
          data: {},
          onSuccess: response => {
            setAuth(p => ({
              ...p,
              refreshToken: response.data.token,
            }))
            setLsRefreshToken(response.data.token)
          },
        })
      },
      onError: () => {
        toastError({
          description: 'Login failed. Please check your credentials.',
        })
      },
    })
  }

  return { handleLogin, isLoading: loginMutation.isPending }
}
