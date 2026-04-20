import { useCrudAuthLogout } from '@/apis/useCruds/authCruds'
import { PAGES } from '@/core/constants/navigation.constants'
import {
  removeLsAuthUser,
  removeLsBearerToken,
  removeLsRefreshToken,
} from '@/core/helpers/ls.helpers'
import { router } from 'expo-router'
import { useAtom } from 'jotai'

import { authAtom, EMPTY_AUTH_ATOM } from '../atoms/authAtom'

export const useAuthLogout = () => {
  const { createMutation: logoutMutation } = useCrudAuthLogout()
  const [, setAuth] = useAtom(authAtom)

  const logout = () => {
    setAuth(EMPTY_AUTH_ATOM)
    removeLsAuthUser()
    removeLsBearerToken()
    removeLsRefreshToken()

    router.dismissTo(PAGES.home.path as any)
  }

  const handleLogout = () => {
    logoutMutation.mutate({
      data: {},
      onSuccess: logout,
      onError: logout,
    })
  }

  return { handleLogout, isLoading: logoutMutation.isPending }
}
