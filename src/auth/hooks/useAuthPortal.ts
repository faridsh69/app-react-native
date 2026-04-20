import { useEffect } from 'react'
import { getLsAuthUser, getLsBearerToken, getLsRefreshToken } from '@/core/helpers/ls.helpers'
import { useAtom } from '@/core/lib/jotai'

import { authAtom } from '../atoms/authAtom'

export const useAuthPortal = () => {
  const [, setAuthAtom] = useAtom(authAtom)

  useEffect(() => {
    getLsBearerToken().then(bearerToken => {
      setAuthAtom(p => ({ ...p, bearerToken, isLoggedIn: !!bearerToken }))
    })
    getLsRefreshToken().then(refreshToken => {
      setAuthAtom(p => ({ ...p, refreshToken }))
    })
    getLsAuthUser().then(user => {
      setAuthAtom(p => ({ ...p, user }))
    })
    getLsAuthUser().then(user => {
      setAuthAtom(p => ({ ...p, user }))
    })
  }, [])
}
