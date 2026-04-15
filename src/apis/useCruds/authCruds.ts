import { TypeUser } from '@/core/types/core.types'

import { QUERY_KEYS } from '../reactQuery/reactQuery.constants'
import { useCrud } from '../reactQuery/useCrud'

export const useCrudAuthUserEmailAvailability = () =>
  useCrud<{ email: string; is_available: boolean }>({
    queryKey: QUERY_KEYS.auth.userEmailAvailability,
  })

export const useCrudAuthLogin = () =>
  useCrud<{ username: string; password: string }>({
    queryKey: QUERY_KEYS.auth.login,
  })

export const useCrudAuthProfile = () =>
  useCrud<TypeUser>({
    queryKey: QUERY_KEYS.auth.profile,
  })

export const useCrudAuthLogout = () =>
  useCrud({
    queryKey: QUERY_KEYS.auth.logout,
  })

export const useCrudAuthRefreshToken = () =>
  useCrud({
    queryKey: QUERY_KEYS.auth.refreshToken,
  })
